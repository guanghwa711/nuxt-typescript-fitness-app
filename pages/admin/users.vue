<template>
	<div class="users">
		<h2 class="users__title title">Пользователи</h2>
		<AdminToolbar @update:searchField="searchField = $event" :addHidden="true" />
		<v-table class="users__table table">
			<thead class="table__header">
				<tr class="text-left">
					<th>
						ID
					</th>
					<th>
						Пользователь
					</th>
					<th>
						Эмейл
					</th>
					<th>
						Действия
					</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="user in paginatedUsers" :key="user.id" class="user">
					<td>
						<div class="table__item">
							{{ user.id }}
						</div>
					</td>
					<td>
						<div class="table__item">
							<!-- <img class="brand__logo" :src="`${config.API_URL}${brand.attributes.img.data.attributes.url}`" alt="">{{
							brand.attributes.title
							}} -->
							{{ user.username }}
						</div>
					</td>
					<td>
						<div class="table__item">
							{{ user.email }}
						</div>
					</td>
					<td>
						<div class="table__item">
							<v-btn class="icon" icon color="green" @click="editUserPopup(user.id)">
								<v-icon color="white">mdi-pencil</v-icon>
							</v-btn>
							<v-btn class="icon" icon color="red" @click="deleteUserPopup(user.id)">
								<v-icon color="white">mdi-delete</v-icon>
							</v-btn>
						</div>
					</td>
				</tr>
			</tbody>
		</v-table>
		<div v-if="paginatedUsers.length < 1" class="not-found">Не найдено</div>
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
					Изменить данные пользователя
				</v-card-title>

				<v-divider></v-divider>
				<v-form class="edit__form" @submit.prevent="editUser">
					<v-file-input class="edit__input" accept="image/*" :label="filename || 'Аватар'" name="img"
						@change="onFilePicked" />
					<v-text-field class="edit__input" v-model="username" name="username" label="Имя пользователя">
					</v-text-field>
					<v-text-field class="edit__input" v-model="email" name="email" label="Эмейл">
					</v-text-field>
					<v-text-field class="edit__input" v-model="phone" name="phone" type="tel" label="Номер телефона">
					</v-text-field>
					<v-divider></v-divider>
					<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn color="red" text @click="editPopup = false">
							Назад
						</v-btn>
						<v-btn color="green" type="submit">
							Изменить
						</v-btn>
					</v-card-actions>
				</v-form>

			</v-card>
		</v-dialog>
		<v-dialog v-model="deletePopup" width="500">
			<v-card>

				<v-card-text>
					Вы действительно хотите удалить пользователя?
				</v-card-text>
				<v-divider></v-divider>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="green" text @click="deletePopup = false">
						Назад
					</v-btn>
					<v-btn color="red" text @click="deleteUser">
						Удалить
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</div>
</template>

<script setup>
import useUploadFile from '~/use/useUploadFile';

const { find, findOne, update, delete: del } = useStrapi4()

const editPopup = ref(false)
const deletePopup = ref(false)

const config = useRuntimeConfig()
const users = ref(await find('users', {
	populate: '*'
}))

console.log(users.value);

const searchField = ref('')
const searchedUsers = computed(() => {
	return users.value.filter((user) => {
		return user.username.toLowerCase().includes(searchField.value.toLowerCase())
	})
})

const currentPage = ref(1)
const showOnPage = 7
const totalPages = computed(() => {
	return Math.ceil(searchedUsers.value.length / showOnPage)
})

const paginatedUsers = computed(() => {
	return searchedUsers.value.slice((currentPage.value * showOnPage) - showOnPage, currentPage.value * showOnPage)
})

const username = ref()
const email = ref()
const phone = ref()
const file = ref(new Blob())
let editingID = 0
let fileChanged = false

const onFilePicked = (event) => {
	file.value = event.target.files[0]
	fileChanged = true
}

const filename = ref('')
const editUserPopup = async (id) => {
	const user = await findOne('users', id, {
		populate: '*'
	})
	username.value = user.username
	email.value = user.email
	phone.value = user.phone || null
	file.value = user.avatar || new Blob()
	filename.value = user.avatar ? user.avatar.name : ''
	editPopup.value = true
	editingID = id
	fileChanged = false
}

const editUser = async () => {
	if (fileChanged) {
		try {
			const uploadFileResponse = await useUploadFile(file.value, 'user', 'img')
			await update('users', editingID, { img: uploadFileResponse.data[0] })
		} catch (e) {
			console.log(e);
		}
	}
	try {
		
		console.log(await update('users', editingID, { username: username.value, email: email.value, phone: phone.value }));
		

	} catch (e) {
		console.log(e);
	}
	updateUsers()
	editPopup.value = false
}

let deleteID
const deleteUserPopup = (id) => {
	deletePopup.value = true
	deleteID = id
}
const deleteUser = async () => {
	if (users.value.data.length - 1 <= showOnPage) {
		currentPage.value = 1
	}
	if(filename.value) {
		const user = await findOne('users', deleteID, {
			populate: '*',
		})
		const fileID = user.avatar.id
		await del('upload/files', fileID)
	}

	await del('users', deleteID)
	updateUsers()
	deletePopup.value = false
}

const updateUsers = async () => {
	users.value = await find('users', {
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

.edit {
	&__form {
		padding: 10px 30px;
	}

	&__input {
		max-width: 250px;
	}
}
</style>