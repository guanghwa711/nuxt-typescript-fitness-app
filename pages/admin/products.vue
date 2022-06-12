<template>
	<div class="products">
		<h2 class="products__title title">Тренажеры</h2>
		<AdminToolbar @add="addProductPopup" @update:searchField="searchField = $event" />
		<v-table class="brands__table table">
			<thead class="table__header">
				<tr class="text-left">
					<th>
						Товар
					</th>
					<th>
						Наличие
					</th>
					<th>
						Цена
					</th>
					<th>
						Действия
					</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="product in paginatedProducts" :key="product.id" class="product">
					<td>
						<div class="table__item">
							<img class="product__img" :src="`${config.API_URL}${product.attributes.gallery.data[0].attributes.url}`"
								alt="">
							{{ product.attributes.title }}
						</div>
					</td>
					<td>
						<div class="table__item">
							{{ product.attributes.stock }}
						</div>
					</td>
					<td>
						<div class="table__item">
							{{ product.attributes.price }} грн.
						</div>
					</td>

					<td>
						<div class="table__item">
							<v-btn class="icon" icon color="green" @click="editProductPopup(product.id)">
								<v-icon color="white">mdi-pencil</v-icon>
							</v-btn>
							<v-btn class="icon" icon color="red" @click="deleteProductPopup(product.id)">
								<v-icon color="white">mdi-delete</v-icon>
							</v-btn>
						</div>
					</td>
				</tr>
			</tbody>
		</v-table>
		<div v-if="paginatedProducts.length < 1" class="not-found">Не найдено</div>
		<div v-if="totalPages > 1" class="pagination">
			<v-container>
				<v-row justify="center">
					<v-col cols="8">
						<v-container class="max-width">
							<v-pagination v-model="currentPage" class="my-4" :length="totalPages"></v-pagination>
						</v-container>
					</v-col>
				</v-row>
			</v-container>
		</div>
		<v-dialog class="edit" v-model="editPopup">

			<v-card>
				<v-card-title class="text-h5 grey lighten-2">
					{{ isEditing ? 'Изменить' : 'Добавить' }} тренажер
				</v-card-title>

				<v-divider></v-divider>
				<v-form class="admin-form" @submit.prevent="addProduct">
					<div v-if="form.files.length > 0" class="edit__gallery gallery">
						<h4 class="edit__title">Галерея</h4>
						<v-row>
							<v-col v-for="(image, index) in form.files" :key="image.id" class="gallery__item d-flex child-flex" cols="4">
								<v-icon v-if="form.files.length > 1" class="gallery__delete" large color="red darken-2" @click="deleteGalleryItem(index)">
									mdi-delete
								</v-icon>
								<v-img :src="`${config.API_URL}${image.attributes.url}`" aspect-ratio="1" cover
									class="bg-grey-lighten-2">
									<template v-slot:placeholder>
										<v-row class="fill-height ma-0" align="center" justify="center">
											<v-progress-circular indeterminate color="grey-lighten-5"></v-progress-circular>
										</v-row>
									</template>
								</v-img>
							</v-col>
						</v-row>
					</div>
					<v-file-input class="edit__input" accept="image/*" label="Добавить изображения" multiple name="gallery"
						@change="onFilePicked" />
					<v-text-field class="edit__input" v-model="form.title" name="title" label="Название">
					</v-text-field>
					<v-text-field class="edit__input" v-model="form.price" name="price" type="number" label="Цена">
					</v-text-field>
					<v-text-field class="edit__input" v-model="form.stock" name="strock" type="number" label="В наличии">
					</v-text-field>
					<v-divider></v-divider>
					<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn color="red" text @click="editPopup = false">
							Назад
						</v-btn>
						<v-btn color="green" type="submit">
							{{ isEditing ? 'Изменить' : 'Добавить' }}
						</v-btn>
					</v-card-actions>
				</v-form>

			</v-card>
		</v-dialog>

		<v-dialog v-model="deletePopup">
			<v-card>

				<v-card-text>
					Вы действительно хотите удалить тренажер?
				</v-card-text>
				<v-divider></v-divider>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="green" text @click="deletePopup = false">
						Назад
					</v-btn>
					<v-btn color="red" text @click="deleteProduct">
						Удалить
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</div>
</template>

<script setup>
import useUploadFile from '~/use/useUploadFile';

const { find, findOne, create, update, delete: del } = useStrapi4()

const editPopup = ref(false)
const deletePopup = ref(false)

const config = useRuntimeConfig()
const products = ref(await find('products', {
	populate: '*'
}))
console.log('products')
console.log(products)

const searchField = ref('')
const searchedProducts = computed(() => {
	return products.value.data.filter((product) => {
		return product.attributes.title.toLowerCase().includes(searchField.value.toLowerCase())
	})
})

const currentPage = ref(1)
const showOnPage = 7
const totalPages = computed(() => {
	return Math.ceil(searchedProducts.value.length / showOnPage)
})

const paginatedProducts = computed(() => {
	return searchedProducts.value.slice((currentPage.value * showOnPage) - showOnPage, currentPage.value * showOnPage)
})

const form = reactive({
	title: '',
	files: new Blob(),
	newFiles: new Blob(),
	stock: 0,
	price: 0
})

const isEditing = ref<boolean>(false)
let editingID = 0
let fileChanged = false

const onFilePicked = (event) => {
	form.newFiles = event.target.files
	
	if (isEditing.value) {
		fileChanged = true
	}
}

const editProductPopup = async (id) => {
	const product = await findOne('products', id, {
		populate: '*'
	})
	form.title = product.data.attributes.title
	// console.log('product')
	// console.log(product)
	form.files = product.data.attributes.gallery.data
	form.stock = product.data.attributes.stock
	form.price = product.data.attributes.price
	editPopup.value = true
	isEditing.value = true
	editingID = id
	fileChanged = false
}

const deletedGalleryItems = []
const addProductPopup = () => {
	form.title = ''
	form.files = new Blob()
	form.newFiles = new Blob()
	form.stock = 0
	form.price = 0
	editPopup.value = true
	isEditing.value = false
}
const addProduct = async () => {
	// if (isEditing.value) {
	// 	if (fileChanged) {
	// 		try {
	// 			const uploadFileResponse: any = await useUploadFile(file.value, 'product', 'img')
	// 			await update('products', editingID, { img: uploadFileResponse.data[0] })
	// 		} catch (e) {
	// 			console.log(e);
	// 		}
	// 	}
	// 	try {
	// 		await update('products', editingID, {
	// 			title: form.title,
	// 			price: form.price,
	// 			stock: form.stock,
	// 		})
	// 	} catch (e) {
	// 		console.log(e);
	// 	}
	// 	updateProducts()
	// 	editPopup.value = false
	// 	return
	// }
	try {
		const gallery = []
		Array.from(form.newFiles).forEach(async (file) => {
			const response = await useUploadFile(file, 'product', 'gallery')
			gallery.push()
		})
		console.log(gallery);
		// const productData = {
		// 	title: form.title,
		// 	price: form.price,
		// 	stock: form.stock,
		// 	img: uploadFileResponse.data[0]
		// }
		// await create('products', productData)
		// updateProducts()
		// editPopup.value = false
	} catch (e) {
		console.log(e);
	}
}

const deleteGalleryItem = (index) => {
	deletedGalleryItems.push(form.files[index].id)
	form.files.splice(index, 1)
}

let deleteID
const deleteProductPopup = (id) => {
	deletePopup.value = true
	deleteID = id
}
const deleteProduct = async () => {
	if (products.value.data.length - 1 <= showOnPage) {
		currentPage.value = 1
	}
	const product = await findOne('products', deleteID, {
		populate: '*',
	})
	const files = product.data.attributes.gallery.data

	files.forEach(async (item) => {
		await del('upload/files', item.id)
	})

	await del('products', deleteID)
	
	updateProducts()
	deletePopup.value = false
}

const updateProducts = async () => {
	products.value = await find('products', {
		populate: '*'
	})
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles/variables';
.table__item {
	display: flex;
	align-items: center;
	gap: 10px;
}

.product__img {
	max-width: 100px;
	max-height: 150px;
}

.edit {
	&__title {
		margin-bottom: 10px;
	}
	&__gallery {
		margin-bottom: 10px;
	}
}

.gallery {
	&__item {
		position: relative;
	}
	&__delete {
		position: absolute;
		top: 0;
		right: 0;
		z-index: 10;
		cursor: pointer;
	}
}
</style>