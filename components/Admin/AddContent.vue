<template>
	<div class="add-content">
		<h2 class="add-content__title">Контент</h2>
		<v-row class="add-content__btns">
			<v-col>
				<v-btn class="add-content__btn" color="green" block @click="content.push({ type: 'paragraph', data: { text: '' } })">paragraph
				</v-btn>
			</v-col>
			<v-col>
				<v-btn class="add-content__btn" color="green" block @click="content.push({ type: 'img-text', data: { img: null, text: '' } })">
					img-text</v-btn>
			</v-col>
			<v-col>
				<v-btn class="add-content__btn" color="green" block @click="content.push({ type: 'text-img', data: { text: '', img: null } })">
					text-img</v-btn>
			</v-col>
			<v-col>
				<v-btn class="add-content__btn" color="green" block @click="content.push({ type: 'list', data: { list: [{ text: '' }] } })">
					list
				</v-btn>
			</v-col>
			<v-col>
				<v-btn class="add-content__btn" color="green" block @click="content.push({ type: 'banner', data: { img: null } })">banner</v-btn>
			</v-col>
		</v-row>

		<div v-for="(item, index) in content" :key="index" class="add-content__items">
			<div v-if="item.type === 'paragraph'" class="add-content__item add-content__paragraph">
				<div class="add-content__title">Параграф</div>
				<v-textarea class="add-content__field" label="Текст" v-model="item.data.text"></v-textarea>
				<v-btn v-if="content.length > 1" class="add-content__delete icon" icon color="red"
					@click="deleteContentItem(index)">
					<v-icon color="white">mdi-delete</v-icon>
				</v-btn>
			</div>
			<div v-if="item.type === 'img-text'" class="add-content__item add-content__img-text">
				<div class="add-content__title">Изображение-Текст</div>
				<v-file-input class="add-content__field" accept="image/*" label="Изображение"
					@change="onFilePicked($event, index)" />
				<v-textarea class="add-content__field" label="Текст" v-model="item.data.text"></v-textarea>
				<v-btn v-if="content.length > 1" class="add-content__delete icon" icon color="red"
					@click="deleteContentItem(index)">
					<v-icon color="white">mdi-delete</v-icon>
				</v-btn>
			</div>
			<div v-if="item.type === 'text-img'" class="add-content__item add-content__text-img">
				<div class="add-content__title">Текст-Изображение</div>
				<v-textarea class="add-content__field" label="Текст" v-model="item.data.text"></v-textarea>
				<v-file-input class="add-content__field" accept="image/*" label="Изображение"
					@change="onFilePicked($event, index)" />
				<v-btn v-if="content.length > 1" class="add-content__delete icon" icon color="red"
					@click="deleteContentItem(index)">
					<v-icon color="white">mdi-delete</v-icon>
				</v-btn>
			</div>
			<div v-if="item.type === 'list'" class="add-content__item add-content__list">
				<div class="add-content__title">Список</div>
				<div class="add-content__field" v-for="(listItem, idx) in item.data.list" :key="idx">
					<v-text-field class="add-content__field_list" label="Текст" v-model="listItem.text">
					</v-text-field>
				</div>
				<v-icon class="add-content__btn" color="green" @click="item.data.list.push({ text: '' })">mdi-plus</v-icon>
				<v-btn v-if="content.length > 1" class="add-content__delete icon" icon color="red"
					@click="deleteContentItem(index)">
					<v-icon color="white">mdi-delete</v-icon>
				</v-btn>
			</div>
			<div v-if="item.type === 'banner'" class="add-content__item add-content__banner">
				<div class="add-content__title">Баннер</div>
				<v-file-input class="add-content__field" accept="image/*" label="Баннер"
					@change="onFilePicked($event, index)" />
				<v-btn v-if="content.length > 1" class="add-content__delete icon" icon color="red"
					@click="deleteContentItem(index)">
					<v-icon color="white">mdi-delete</v-icon>
				</v-btn>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import useUploadFile from '~/use/useUploadFile';

const emit = defineEmits(['change'])
const props = defineProps<{
	contentFromServer?: string
}>()

const config = useRuntimeConfig()
let content: any = reactive([])

watch(content, () => {
	emit('change', JSON.stringify({ ...content }))
})

if(props.contentFromServer) {
	const objContent = JSON.parse(props.contentFromServer)
	Object.keys(objContent).forEach(key => {
		content.push(objContent[key])
	})
}

const onFilePicked = async (event: any, id: number) => {
	const res: any = await useUploadFile(event.target.files[0], 'content', 'img')
	console.log(res);
	content[id].data.img = {
		id: res.data[0].id,
		url: `${config.API_URL}${res.data[0].url}`,
	}
}

const deleteContentItem = (index: number) => {
	content.splice(index, 1)
}
</script>

<style lang="scss" scoped>
.add-content {
	max-width: 350px;
	&__btns {
		margin-bottom: 20px;
	}
	&__btn {
		color: #fff !important;
		position: relative;
		left: 50%;
		transform: translateX(-50%);
		cursor: pointer;
	}

	&__items {
		display: flex;
		flex-direction: column;
	}

	&__item {
		position: relative;
	}

	&__field {
		margin-bottom: 20px;
	}

	&__title {
		margin-bottom: 10px;
		font-weight: 500;
	}

	&__delete {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: -70px;
	}
}
</style>