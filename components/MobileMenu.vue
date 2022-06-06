<template>
	<div class="mobile-menu" :class="{ show: show }">
		<div class="auth">
			<div v-if="!user" class="auth__item login" @click="$emit('login')">
				<p class="auth__text">Войти</p>
				<img class="auth__icon" src="~/assets/images/icons/user-placeholder.svg" alt="user" />
			</div>
			<div v-if="user" class="auth__item user">
				<p class="auth__text">{{ user.username }}</p>
				<img class="auth__icon" src="~/assets/images/icons/user-placeholder.svg" alt="user" />
				<div class="auth__logout" @click="$emit('logout')">
					<v-icon icon="mdi-exit-to-app" color="red"></v-icon>
				</div>
			</div>
		</div>
		<my-input class="search"></my-input>
		<nuxt-link class="catalog catalog-mobile" to="/catalog">
			<button class="catalog__btn btn">
				<img class="catalog__img" src="~/assets/images/icons/catalog.svg" alt="" />
				<p class="catalog__text">Каталог</p>
			</button>
		</nuxt-link>
		<ul class="menu">
			<li class="menu__item">
				<nuxt-link class="menu__link" to="/">Бренды</nuxt-link>
			</li>
			<li class="menu__item">
				<nuxt-link class="menu__link" to="/">Сервис</nuxt-link>
			</li>
			<li class="menu__item">
				<nuxt-link class="menu__link" to="/">Услуги</nuxt-link>
			</li>
			<li class="menu__item">
				<nuxt-link class="menu__link" to="/">Поддержка</nuxt-link>
			</li>
			<li class="menu__item">
				<nuxt-link class="menu__link" to="/">О компании</nuxt-link>
			</li>
			<li class="menu__item">
				<nuxt-link class="menu__link" to="/">Блог</nuxt-link>
			</li>
			<li class="menu__item">
				<nuxt-link class="menu__link" to="/">Где купить</nuxt-link>
			</li>
			<li class="menu__item">
				<nuxt-link class="menu__link" to="/">Контакты</nuxt-link>
			</li>
		</ul>
		<div class="phone">
			<a class="phone__num" href="tel:38043">3843342432</a>
			<div class="phone__callback">Заказать звонок</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { User } from '~/types/User';

const props = defineProps<{
	show: Boolean,
	user: User
}>()
</script>

<style lang="scss" scoped>

@import '~/assets/styles/variables';

.mobile-menu {
	transform: translateX(-100%);
	background-color: #2A2C38;
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	z-index: 999;
	padding: 20px 10px;
	min-height: 100vh;
	transition: transform .3s ease;
	&.show {
		display: block;
	}
	body {
		overflow: hidden;
	}
}

.auth {
	margin-bottom: 20px;

	&__item {
		display: flex;
		align-items: center;
		gap: 14px;
		color: #fff;
		cursor: pointer;
	}

	&__icon {
		width: 25px;
		height: 25px;
	}
}

.search {
	max-width: 300px;
	margin-bottom: 20px;
}

.catalog {
	display: inline-block;
	&__btn {
		display: flex;
		align-items: center;
		gap: 6px;
		padding: 10px 20px;
	}
	padding-bottom: 20px;
}

.menu {
	display: flex;
	flex-direction: column;
	gap: 5px;
	padding: 20px 0;
	border-top: 1px solid rgba(#858FA4, .15);
	border-bottom: 1px solid rgba(#858FA4, .15);

	&__link {
		display: inline-block;
		padding: 5px 0;
	}
}

.phone {
	padding: 20px 0;
	display: flex;
	gap: 25px;

	&__num {
		font-size: 14px;
		color: #fff;
		font-weight: 500;
	}

	&__callback {
		color: $red;
		cursor: pointer;
	}
}

@media (max-width: 1250px) {
	.mobile-menu.show {
		transform: translateX(0%);
		overflow: hidden;
	}
}
</style>