<template>
	<my-popup v-if="show" @close="$emit('close')">
		<form class="login" @submit.prevent="handlerLogin">
			<h2 class="login__title">Вход в личный кабинет</h2>
			<my-input class="login__field" name="email" placeholder="Ваша почта" @update:field="field => form.email = field" />
			<my-input class="login__field" name="password" type="password" placeholder="Пароль"
				@update:field="field => form.password = field" />
			<my-button type="submit" :disabled="loading">Войти</my-button>
			<p class="login__register" @click="$emit('register')">Зарегистрироваться</p>
		</form>
	</my-popup>
</template>

<script lang="ts" setup>
import { useAuthStore } from '~/store/auth';
import { useToast } from 'vue-toastification'

const props = defineProps<{
	show: boolean
}>()
const emit = defineEmits(['close', 'register'])

const authStore = useAuthStore()
const { login } = useStrapiAuth()

const toast = useToast()

const form = reactive({
	email: '',
	password: ''
})
const loading = ref<boolean>(false)

const handlerLogin = async () => {
	try {
		loading.value = true
		await login({ identifier: form.email, password: form.password })
		const user = useStrapiUser()
		authStore.login(user.value)
		toast.success('Вы успешно вошли в аккаунт!')
		emit('close')
	} catch (res: any) {
		toast.error(res.error.message)
	}
	loading.value = false
}

watch(() => props.show, () => {
	form.email = ''
	form.password = ''
})
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