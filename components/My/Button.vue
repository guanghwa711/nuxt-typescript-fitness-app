<template>
	<button class="btn" :class="{ disabled: disabled }" :type="type" :disabled="disabled">
		<slot />
	</button>
</template>

<script setup>
const props = defineProps({
	type: {
		type: String,
		default: () => 'button'
	},
	disabled: {
		type: Boolean,
		default: () => false
	}
})
</script>

<style lang="scss" scoped>
@import '~/assets/styles/variables';
.btn {
	padding: 12px 70px;
	&.disabled {
		cursor: default;
		background-color: $gray-primary;
	}
}
</style>