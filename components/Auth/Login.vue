<template>
	<my-popup v-if="show" @close="$emit('close')">
		<form class="login" @submit.prevent="handlerLogin">
			<h2 class="login__title">Вход в личный кабинет</h2>
			<my-input class="login__field" name="email" placeholder="Ваша почта" @update:field="field => email = field" />
			<my-input class="login__field" name="password" type="password" placeholder="Пароль"
				@update:field="field => password = field" />
			<my-button type="submit">Войти</my-button>
			<p class="login__register" @click="$emit('register')">Зарегистрироваться</p>
		</form>
	</my-popup>
</template>

<script setup>
import { useAuthStore } from '~/store/auth';

const props = defineProps({
	show: {
		type: Boolean,
		default: () => false
	},
})

const emit = defineEmits(['close'])

const authStore = useAuthStore()
const { login } = useStrapiAuth()

const email = ref('')
const password = ref('')

const handlerLogin = async () => {
	try {
		await login({ identifier: email.value, password: password.value })
		const user = useStrapiUser()
		authStore.login(user.value)
		emit('close')
	} catch (error) {
		console.log(error)
	}
}
</script>

<style lang="scss" scoped>
@import "~/assets/styles/variables";

.login {
	max-width: 460px;
	margin: 0 auto;
	text-align: center;

	&__title {
		margin-bottom: 20px;
	}

	&__field {
		margin: 15px 0;
	}

	&__forgot,
	&__register {
		cursor: pointer;
		font-size: 14px;
		font-weight: 500;
		line-height: 140%;
		margin: 12px 0;
	}

	&__forgot {
		color: $gray-primary;
	}

	&__register {
		color: #4B7EE8;
	}
}
</style>