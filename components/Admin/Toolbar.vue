<template>
			<div class="toolbar">
			<v-text-field class="toolbar__field" v-model="field" label="Поиск"></v-text-field>
			<v-btn class="toolbar__add" color="success" @click="add">добавить
				<v-icon>mdi-plus</v-icon>
			</v-btn>
		</div>
</template>

<script lang="ts" setup>
const emit = defineEmits(['add', 'update:searchField'])

const field = ref<string>('')
const add = (): void => {
	emit('add')
}
watch(field, (value): void => {
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
