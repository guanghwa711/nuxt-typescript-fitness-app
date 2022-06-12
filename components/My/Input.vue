<template>
	<div class="my-input">
		<input v-model="field" class="input" :class="{ error: error, success: success }" :type="type" :disabled="disabled"
			:placeholder="placeholder" @blur="$emit('blur')" />
	</div>
</template>

<script setup>
const props = defineProps(['value', 'placeholder', 'type', 'disabled', 'success', 'error'])

const emit = defineEmits(['update:field', 'blur'])

const field = ref('')

watch(field, () => {
	emit('update:field', field.value)
})

onMounted(() => {
	if (props.value) {
		field.value = props.value
	}
})
</script>

<style lang="scss" scoped>
@import "~/assets/styles/variables";

.input {
	color: $gray-secondary;
	background-color: $bg;
	font-size: 16px;
	padding: 12px;
	width: 100%;
	outline: $gray-primary;
	border: 1.5px solid $bg;
	border-radius: 6px;
	transition: border-color 0.3s;

	&.error {
		border-color: $red;
	}

	&.success {
		border-color: green;
	}

	&::placeholder {
		color: $gray-primary;
	}

	&:focus {
		border-color: $gray-primary;
	}
}
</style>