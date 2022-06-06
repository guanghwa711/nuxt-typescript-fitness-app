<template>
	<my-popup v-if="show" @close="$emit('close')">
		<form class="register" @submit.prevent="handlerRegister">
			<h2 class="register__title">Регистрация</h2>
			<div class="register__field">
				<my-input name="name" placeholder="Ваш никнейм" @update:field="field => form.name = field"
					:error="v$.name.$dirty && v$.name.$error" :success="v$.name.$dirty && !v$.name.$error"
					@blur="v$.name.$touch" />
				<div class="error-text" v-if="v$.name.$dirty && v$.name.$error">Обязательное поле.</div>
			</div>
			<div class="register__field">
				<my-input name="email" placeholder="Ваша почта" @update:field="field => form.email = field"
					:error="v$.email.$dirty && v$.email.$error" :success="v$.email.$dirty && !v$.email.$error"
					@blur="v$.email.$touch" />
				<div class="error-text" v-if="v$.email.$dirty && v$.email.$error">Неверный эмейл.</div>
			</div>
			<div class="register__field">
				<my-input name="password" type="password" placeholder="Пароль"
					@update:field="field => form.password = field" :error="v$.password.$dirty && v$.password.$error"
					:success="v$.password.$dirty && !v$.password.$error" @blur="v$.password.$touch" />
				<div class="error-text" v-if="v$.password.$dirty && v$.password.$error">Пароль должен быть больше 6-ти символов.
				</div>
			</div>
			<div class="register__field">
				<my-input name="repeatPassword" type="password" placeholder="Подтвердите пароль"
					@update:field="field => form.repeatPassword = field" />
			</div>
			<my-button type="submit" :disabled="v$.$invalid || loading">Зарегистрироваться</my-button>
		</form>
	</my-popup>
</template>

<script lang="ts" setup>
import useVuelidate from '@vuelidate/core'
import { required, email, minLength, sameAs } from '@vuelidate/validators'
import { useAuthStore } from '~/store/auth';
import { useToast } from 'vue-toastification'

const props = defineProps<{
	show: boolean
}>()

const emit = defineEmits(['close'])

const { register, login } = useStrapiAuth()
const authStore = useAuthStore()

const toast = useToast()
const loading = ref(false)

const form = reactive({
	name: '',
	email: '',
	password: '',
	repeatPassword: ''
})
const rules = {
	name: { required },
	email: { required, email },
	password: { required, minLength: minLength(6) },
}
const v$ = useVuelidate(rules, form)

const handlerRegister = async () => {
	if(form.password !== form.repeatPassword) {
		return toast.error('Пароли не совпадают')
	}
	try {
		loading.value = true
		await register({ username: form.name, email: form.email, password: form.password })
		toast.success('Вы успешно зарегистрировались!')
		await login({ identifier: form.email, password: form.password })
		const user = useStrapiUser()
		authStore.login(user.value)
		emit('close')
	} catch (res: any) {
		toast.error(res.error.message)
	}
	loading.value = false
}

watch(() => props.show, () => {
	form.name = ''
	form.email = ''
	form.password = ''
	form.repeatPassword = ''
	v$.value.$reset()
})
</script>

<style lang="scss" scoped>
@import "~/assets/styles/variables";

.register {
	max-width: 460px;
	margin: 0 auto;
	text-align: center;

	&__title {
		margin-bottom: 20px;
	}

	&__field {
		margin: 15px 0;
	}
}
</style>