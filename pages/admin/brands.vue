<template>
	<div class="brands">
		<h2 class="brands__title title">Бренды</h2>
		<AdminToolbar @add="addBrandPopup" @update:searchField="searchField = $event" />
		<v-table class="brands__table table">
			<thead class="table__header">
				<tr class="text-left">
					<th>
						Бренд
					</th>
					<th>
						Действия
					</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="brand in paginatedBrands" :key="brand.id" class="brand">
					<td>
						<div class="table__item">
							<img class="brand__logo" :src="`${config.API_URL}${brand.attributes.img.data.attributes.url}`" alt="">{{
									brand.attributes.title
							}}
						</div>
					</td>
					<td>
						<div class="table__item">
							<v-btn class="icon" icon color="green" @click="editBrandPopup(brand.id)">
								<v-icon color="white">mdi-pencil</v-icon>
							</v-btn>
							<v-btn class="icon" icon color="red" @click="deleteBrandPopup(brand.id)">
								<v-icon color="white">mdi-delete</v-icon>
							</v-btn>
						</div>
					</td>
				</tr>
			</tbody>
		</v-table>
		<div v-if="paginatedBrands.length < 1" class="not-found">Не найдено</div>
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
					{{ isEditing ? 'Изменить' : 'Добавить' }} бренд
				</v-card-title>

				<v-divider></v-divider>
				<v-form class="admin-form" @submit.prevent="addBrand">
					<v-file-input class="edit__input" accept="image/*" :label="filename || 'Лого'" name="img"
						@change="onFilePicked" />
					<v-text-field class="edit__input" v-model="form.title" name="title" label="Название">
					</v-text-field>
					<admin-add-content class="edit__content" @change="content => form.content = content" :contentFromServer="form.content"/>
					<v-divider></v-divider>
					<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn color="red" text @click="editPopup = false">
							Назад
						</v-btn>
						<v-btn color="green" :disabled="adding" type="submit">
							{{ isEditing ? 'Изменить' : 'Добавить' }}
						</v-btn>
					</v-card-actions>
				</v-form>

			</v-card>
		</v-dialog>
		<v-dialog v-model="deletePopup">
			<v-card>

				<v-card-text>
					Вы действительно хотите удалить бренд?
				</v-card-text>
				<v-divider></v-divider>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="green" text @click="deletePopup = false">
						Назад
					</v-btn>
					<v-btn color="red" :disabled="deleting" text @click="deleteBrand">
						Удалить
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</div>
</template>

<script lang="ts" setup>
import useUploadFile from '~/use/useUploadFile';
import { useToast } from 'vue-toastification'

const { find, findOne, create, update, delete: del } = useStrapi4()
const toast = useToast()

const editPopup = ref<boolean>(false)
const deletePopup = ref<boolean>(false)

const config = useRuntimeConfig()
const brands = ref<any>(await find('brands', {
	populate: '*'
}))

const searchField = ref<string>('')
const searchedBrands = computed(() => {
	return brands.value.data.filter((brand: any) => {
		return brand.attributes.title.toLowerCase().includes(searchField.value.toLowerCase())
	})
})

const currentPage = ref<number>(1)
const showOnPage: number = 7
const totalPages = computed((): number => {
	return Math.ceil(searchedBrands.value.length / showOnPage)
})

const paginatedBrands = computed(() => {
	return searchedBrands.value.slice((currentPage.value * showOnPage) - showOnPage, currentPage.value * showOnPage)
})

const form = reactive({
	title: '',
	file: new Blob(),
	content: {}
})

const adding = ref<boolean>(false)
const isEditing = ref<boolean>(false)
let editingID: number = 0
let fileChanged: boolean = false

const onFilePicked = (event: any): void => {
	form.file = event.target.files[0]
	if (isEditing.value) {
		fileChanged = true
	}
}

const filename = ref<string>('')
const editBrandPopup = async (id: number): Promise<void> => {
	const brand: any = await findOne('brands', id, {
		populate: '*'
	})
	form.title = brand.data.attributes.title
	form.file = brand.data.attributes.img.data
	form.content = brand.data.attributes.content
	filename.value = brand.data.attributes.img.data.attributes.name
	editPopup.value = true
	isEditing.value = true
	editingID = id
	fileChanged = false
}

const addBrandPopup = (): void => {
	form.title = filename.value = ''
	form.file = new Blob()
	form.content = {}
	editPopup.value = true
	isEditing.value = false
}
const addBrand = async () => {
	adding.value = true
	if (isEditing.value) {
		if (fileChanged) {
			try {
				const uploadFileResponse: any = await useUploadFile(form.file, 'brand', 'img')
				await update('brands', editingID, { img: uploadFileResponse.data[0] })
			} catch (error: any) {
				toast.error(error.message)
			}
		}
		try {
			await update('brands', editingID, { title: form.title, content: form.content })
			toast.success('Вы отредактировали бренд.')
		} catch (error: any) {
			toast.error(error.message)
		}
		updateBrands()
		editPopup.value = false
		return adding.value = false
	}
	if (!form.title || !form.content || form.file.size === 0) {
		adding.value = false
		return toast.error('Заполните все поля!')
	}
	try {
		const uploadFileResponse: any = await useUploadFile(form.file, 'brand', 'img')
		const brandData = {
			title: form.title,
			img: uploadFileResponse.data[0],
			content: form.content
		}
		await create('brands', brandData)
		editPopup.value = false
		toast.success('Вы создали бренд.')
	} catch (res: any) {
		toast.error(res.error.message)
	}
	updateBrands()
	adding.value = false
}

const deleting = ref<boolean>(false)
let deleteID: number
const deleteBrandPopup = (id: number): void => {
	deletePopup.value = true
	deleteID = id
}
const deleteBrand = async (): Promise<void> => {
	deleting.value = true
	if (brands.value.data.length - 1 <= showOnPage) {
		currentPage.value = 1
	}
	const brand: any = await findOne('brands', deleteID, {
		populate: '*',
	})
	const fileID: number = brand.data.attributes.img.data.id

	try {
		await del('brands', deleteID)
		await del('upload/files', fileID)
		toast.success('Вы удалили бренд!')
	} catch (error: any) {
		toast.error(error.message)
	}
	updateBrands()
	deletePopup.value = false
	deleting.value = false
}

const updateBrands = async (): Promise<void> => {
	brands.value = await find('brands', {
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

	&__input {
		width: 250px;
	}
	&__content {
		margin-bottom: 20px;
	}
}
</style>