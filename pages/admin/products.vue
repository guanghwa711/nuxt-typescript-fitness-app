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
							<!-- <img class="product__img" :src="`${config.API_URL}${product.attributes.img.data.attributes.url}`" alt="">{{
							product.attributes.title
							}} -->
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
		<v-dialog class="edit" v-model="editPopup" width="500">

			<v-card>
				<v-card-title class="text-h5 grey lighten-2">
					{{ isEditing ? 'Изменить' : 'Добавить' }} тренажер
				</v-card-title>

				<v-divider></v-divider>
				<v-form class="edit__form" @submit.prevent="addProduct">
					<v-file-input class="edit__input" accept="image/*" :label="filename || 'Галерея'" multiple name="gallery"
						@change="onFilePicked" />
					<v-text-field class="edit__input" v-model="title" name="title" label="Название">
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

<script lang="ts" setup>
import useUploadFile from '~/use/useUploadFile';

const { find, findOne, create, update, delete: del } = useStrapi4()

const editPopup = ref<boolean>(false)
const deletePopup = ref<boolean>(false)

const config = useRuntimeConfig()
const products = ref<any>(await find('products', {
	populate: '*'
}))

const searchField = ref<string>('')
const searchedProducts = computed(() => {
	return products.value.data.filter((product: any) => {
		return product.attributes.title.toLowerCase().includes(searchField.value.toLowerCase())
	})
})

const currentPage = ref<number>(1)
const showOnPage: number = 7
const totalPages = computed((): number => {
	return Math.ceil(searchedProducts.value.length / showOnPage)
})

const paginatedProducts = computed(() => {
	return searchedProducts.value.slice((currentPage.value * showOnPage) - showOnPage, currentPage.value * showOnPage)
})

const title = ref<string>('')
const files = ref<Blob>(new Blob())
const isEditing = ref<boolean>(false)
let editingID: number = 0
let fileChanged: boolean = false

const onFilePicked = (event: any): void => {
	files.value = event.target.files
	console.log(files);
	
	if (isEditing.value) {
		fileChanged = true
	}
}

const filename = ref<string>('')
const editProductPopup = async (id: number): Promise<void> => {
	const product: any = await findOne('products', id, {
		populate: '*'
	})
	title.value = product.data.attributes.title
	// file.value = product.data.attributes.img.data
	// filename.value = brand.data.attributes.img.data.attributes.name
	editPopup.value = true
	isEditing.value = true
	editingID = id
	fileChanged = false
}

const addProductPopup = (): void => {
	title.value = ''
	files.value = new Blob()
	filename.value = ''
	editPopup.value = true
	isEditing.value = false
}
const addProduct = async () => {
	if (isEditing.value) {
		// if (fileChanged) {
		// 	try {
		// 		const uploadFileResponse: any = await useUploadFile(file.value, 'product', 'img')
		// 		await update('products', editingID, { img: uploadFileResponse.data[0] })
		// 	} catch (e) {
		// 		console.log(e);
		// 	}
		// }
		try {
			await update('products', editingID, { title: title.value })
		} catch (e) {
			console.log(e);
		}
		updateProducts()
		editPopup.value = false
		return
	}
	try {
		// const uploadFileResponse: any = await useUploadFile(file.value, 'brand', 'img')
		const productData = {
			title: title.value,
			// img: uploadFileResponse.data[0]
		}
		await create('products', productData)
		updateProducts()
		editPopup.value = false
	} catch (e) {
		console.log(e);
	}
}

let deleteID: number
const deleteProductPopup = (id: number): void => {
	deletePopup.value = true
	deleteID = id
}
const deleteProduct = async (): Promise<void> => {
	if (products.value.data.length - 1 <= showOnPage) {
		currentPage.value = 1
	}
	// const product: any = await findOne('products', deleteID, {
	// 	populate: '*',
	// })
	// const fileID: number = product.data.attributes.img.data.id

	await del('products', deleteID)
	// await del('upload/files', fileID)
	updateProducts()
	deletePopup.value = false
}

const updateProducts = async (): Promise<void> => {
	products.value = await find('products', {
		populate: '*'
	})
}
</script>

<style lang="scss" scoped>
.table__item {
	display: flex;
	align-items: center;
	gap: 10px;
}

.brand__logo {
	max-width: 100px;
}

.edit {
	&__form {
		padding: 10px 30px;
	}

	&__input {
		width: 250px;
	}
}
</style>