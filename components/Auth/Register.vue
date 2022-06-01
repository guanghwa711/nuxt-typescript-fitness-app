<template>
	<my-popup v-if="show" @close="$emit('close')">
		<form class="register" @submit.prevent="handlerRegister">
			<h2 class="register__title">Регистрация</h2>
			<div class="register__field">
				<my-input name="name" placeholder="Ваш никнейм" @update:field="field => name = field"
					:error="v$.name.$dirty && v$.name.$error" :success="v$.name.$dirty && !v$.name.$error"
					@blur="v$.name.$touch" />
				<div class="error-text" v-if="v$.name.$dirty && v$.name.$error">Обязательное поле.</div>
			</div>
			<div class="register__field">
				<my-input name="email" placeholder="Ваша почта" @update:field="field => email = field"
					:error="v$.email.$dirty && v$.email.$error" :success="v$.email.$dirty && !v$.email.$error"
					@blur="v$.email.$touch" />
				<div class="error-text" v-if="v$.email.$dirty && v$.email.$error">Неверный эмейл.</div>
			</div>
			<div class="register__field">
				<my-input name="password" type="password" placeholder="Пароль" @update:field="field => password = field"
					:error="v$.password.$dirty && v$.password.$error" :success="v$.password.$dirty && !v$.password.$error"
					@blur="v$.password.$touch" />
				<div class="error-text" v-if="v$.password.$dirty && v$.password.$error">Пароль должен быть больше 6-ти символов.
				</div>
			</div>
			<div class="register__field">
				<my-input name="repeatPassword" type="password" placeholder="Подтвердите пароль"
					@update:field="field => repeatPassword = field" :error="v$.repeatPassword.$dirty && v$.repeatPassword.$error"
					:success="v$.repeatPassword.$dirty && !v$.repeatPassword.$error" @blur="v$.repeatPassword.$touch" />
				<div class="error-text" v-if="v$.repeatPassword.$dirty && v$.repeatPassword.$error">Пароли не совпадают.</div>
			</div>
			<my-button type="submit" :disabled="v$.$invalid">Зарегистрироваться</my-button>
		</form>
	</my-popup>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, email, minLength, sameAs } from '@vuelidate/validators'
export default {
	props: {
		show: {
			type: Boolean,
			default: () => false
		}
	},
	setup(_, { emit }) {
		const { register } = useStrapiAuth()

		const name = ref('')
		const email = ref('')
		const password = ref('')
		const repeatPassword = ref('')
		const handlerRegister = async () => {
			try {
				await register({ username: name.value, email: email.value, password: password.value })
				name.value = ''
				email.value = ''
				password.value = ''
				repeatPassword.value = ''
				emit('close')
			} catch (e) {
				console.log(e);
			}
		}
		return { name, email, password, repeatPassword, v$: useVuelidate(), handlerRegister }
	},
	validations() {
		return {
			name: { required },
			email: { required, email },
			password: { required, minLength: minLength(6) },
			repeatPassword: { required, sameAs: sameAs(this.password) }
		}
	},
}

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