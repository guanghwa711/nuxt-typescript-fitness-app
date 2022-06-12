<template>
			<div class="toolbar">
			<v-text-field class="toolbar__field" v-model="field" label="Поиск"></v-text-field>
			<v-btn v-if="!addHidden" class="toolbar__add" color="success" @click="add">добавить
				<v-icon>mdi-plus</v-icon>
			</v-btn>
		</div>
</template>

<script setup>
const emit = defineEmits(['add', 'update:searchField'])

const props = defineProps(['addHidden'])

const field = ref('')
const add = () => {
	emit('add')
}
watch(field, (value) => {
	emit('update:searchField', value)
})
</script>

<style lang="scss" scoped>
.toolbar {
	display: flex;
	justify-content: space-between;
	margin-bottom: 20px;

	&__field {
		max-width: 200px;
	}

	&__add {
		display: flex;
		align-items: center;
		gap: 10px;
	}
}
</style>
