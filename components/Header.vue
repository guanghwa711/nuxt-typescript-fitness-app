<template>
  <header class="header">
    <div class="header-top">
      <div class="container">
        <div class="header-top__inner">
          <nuxt-link class="logo" to="/">
            <img src="~/assets/images/logo.svg" alt="logo" />
          </nuxt-link>
          <div class="city">Сумы</div>
          <div class="phone">
            <a class="phone__num" href="tel:380971799663">+38 (097) 179-96-63</a>
            <div class="phone__callback">Заказать звонок</div>
          </div>
          <div class="search search-mobile">
            <svg class="search__icon" width="24" height="24" viewBox="0 0 20 20" fill="#858FA4" fill-opacity="0.7"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.4471 17.105C9.54939 17.1046 7.70642 16.4694 6.21158 15.3004L1.51173 20L0 18.4883L4.69984 13.7888C3.53023 12.2938 2.89456 10.4505 2.8941 8.55249C2.8941 3.83686 6.73117 0 11.4471 0C16.1629 0 20 3.83686 20 8.55249C20 13.2681 16.1629 17.105 11.4471 17.105ZM11.4471 2.13812C7.90934 2.13812 5.03234 5.01497 5.03234 8.55249C5.03234 12.09 7.90934 14.9669 11.4471 14.9669C14.9848 14.9669 17.8618 12.09 17.8618 8.55249C17.8618 5.01497 14.9848 2.13812 11.4471 2.13812Z" />
            </svg>
          </div>
          <div class="info info-mobile">
            <div class="info__item">
              <svg class="info__icon icon" width="17" height="18" viewBox="0 0 17 18" fill="white" opacity="0.7"
                xmlns="http://www.w3.org/2000/svg">
                <g>
                  <rect y="7.5" width="2" height="10" rx="1" />
                  <rect x="5" y="0.5" width="2" height="17" rx="1" />
                  <rect x="10" y="7.5" width="2" height="10" rx="1" />
                  <rect x="15" y="4.5" width="2" height="13" rx="1" />
                </g>
              </svg>
              <div class="info__num">10</div>
            </div>
            <div class="info__item">
              <svg class="info__icon icon" width="24" height="20" viewBox="0 0 24 20" fill="white" opacity="0.7"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M22.0718 1.96031C19.4616 -0.649176 15.2154 -0.649176 12.6059 1.96031L11.9998 2.56606L11.394 1.96031C8.78455 -0.64953 4.53795 -0.64953 1.92847 1.96031C-0.628032 4.51681 -0.644633 8.56914 1.88997 11.3867C4.2017 13.9555 11.0196 19.5054 11.3089 19.7403C11.5053 19.9 11.7416 19.9777 11.9765 19.9777C11.9842 19.9777 11.992 19.9777 11.9994 19.9773C12.2424 19.9886 12.4872 19.9053 12.6899 19.7403C12.9792 19.5054 19.7979 13.9555 22.1103 11.3863C24.6445 8.56914 24.6279 4.51681 22.0718 1.96031ZM20.535 9.96889C18.7326 11.9712 13.7782 16.1009 11.9994 17.5663C10.2207 16.1013 5.26732 11.9719 3.46527 9.96925C1.69712 8.00401 1.68052 5.20521 3.42677 3.45896C4.31861 2.56747 5.48984 2.12137 6.66107 2.12137C7.8323 2.12137 9.00354 2.56711 9.89538 3.45896L11.2277 4.79125C11.3863 4.94984 11.5862 5.0445 11.796 5.0777C12.1365 5.15081 12.5059 5.0558 12.7708 4.7916L14.1038 3.45896C15.8879 1.67562 18.7898 1.67598 20.5728 3.45896C22.319 5.20521 22.3024 8.00401 20.535 9.96889Z" />
              </svg>
              <div class="info__num">1</div>
            </div>
            <div class="info__item">
              <svg class="info__icon-cart icon-cart" width="21" height="26" viewBox="0 0 21 26" fill="none"
                opacity="0.7" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path
                    d="M0.9 7.73325H20.1V21.4999C20.1 23.212 18.7121 24.5999 17 24.5999H4C2.28792 24.5999 0.9 23.212 0.9 21.4999V7.73325Z"
                    stroke="white" stroke-width="1.8" />
                  <path
                    d="M5.83464 12.6667L5.83464 5.00008C5.83464 2.79095 7.6255 1.00008 9.83464 1.00008H11.168C13.3771 1.00008 15.168 2.79094 15.168 5.00008L15.168 12.6667"
                    stroke="white" stroke-width="1.8" />
                </g>
              </svg>
              <div class="info__num">1</div>
            </div>
          </div>
          <div class="auth">
            <div v-if="!user" class="auth__item login" @click="loginPopup = true">
              <p class="auth__text">Войти</p>
              <img class="auth__icon" src="~/assets/images/icons/user-placeholder.svg" alt="user" />
            </div>
            <div v-if="user" class="auth__item user">
              <p class="auth__text">{{ user.username }}</p>
              <img class="auth__icon" src="~/assets/images/icons/user-placeholder.svg" alt="user" />
              <div class="auth__logout" @click="handleLogout">
                <v-icon icon="mdi-exit-to-app" color="red"></v-icon>
              </div>
            </div>
          </div>
          <div class="burger-button" :class="{ active: isBurgerActive }" @click="isBurgerActive = !isBurgerActive">
            <span class="burger-button__el"></span>
          </div>
          <mobile-menu :show="isBurgerActive" :user="user" @login="loginPopup = true" @logout="handleLogout" />
        </div>
      </div>
    </div>
    <div class="header-menu">
      <div class="container">
        <div class="header-menu__inner">
          <nuxt-link class="catalog" to="/catalog">
            <button class="catalog__btn btn">
              <img class="catalog__img" src="~/assets/images/icons/catalog.svg" alt="" />
              <p class="catalog__text">Каталог</p>
            </button>
          </nuxt-link>
          <div class="search">
            <svg class="search__icon" width="24" height="24" viewBox="0 0 20 20" fill="#858FA4" fill-opacity="0.7"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.4471 17.105C9.54939 17.1046 7.70642 16.4694 6.21158 15.3004L1.51173 20L0 18.4883L4.69984 13.7888C3.53023 12.2938 2.89456 10.4505 2.8941 8.55249C2.8941 3.83686 6.73117 0 11.4471 0C16.1629 0 20 3.83686 20 8.55249C20 13.2681 16.1629 17.105 11.4471 17.105ZM11.4471 2.13812C7.90934 2.13812 5.03234 5.01497 5.03234 8.55249C5.03234 12.09 7.90934 14.9669 11.4471 14.9669C14.9848 14.9669 17.8618 12.09 17.8618 8.55249C17.8618 5.01497 14.9848 2.13812 11.4471 2.13812Z" />
            </svg>
          </div>
          <nav class="menu">
            <ul class="menu__list">
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
          </nav>
          <div class="info">
            <div class="info__item">
              <svg class="info__icon icon" width="17" height="18" viewBox="0 0 17 18" fill="white" opacity="0.7"
                xmlns="http://www.w3.org/2000/svg">
                <g>
                  <rect y="7.5" width="2" height="10" rx="1" />
                  <rect x="5" y="0.5" width="2" height="17" rx="1" />
                  <rect x="10" y="7.5" width="2" height="10" rx="1" />
                  <rect x="15" y="4.5" width="2" height="13" rx="1" />
                </g>
              </svg>
              <div class="info__num">10</div>
            </div>
            <div class="info__item">
              <svg class="info__icon icon" width="24" height="20" viewBox="0 0 24 20" fill="white" opacity="0.7"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M22.0718 1.96031C19.4616 -0.649176 15.2154 -0.649176 12.6059 1.96031L11.9998 2.56606L11.394 1.96031C8.78455 -0.64953 4.53795 -0.64953 1.92847 1.96031C-0.628032 4.51681 -0.644633 8.56914 1.88997 11.3867C4.2017 13.9555 11.0196 19.5054 11.3089 19.7403C11.5053 19.9 11.7416 19.9777 11.9765 19.9777C11.9842 19.9777 11.992 19.9777 11.9994 19.9773C12.2424 19.9886 12.4872 19.9053 12.6899 19.7403C12.9792 19.5054 19.7979 13.9555 22.1103 11.3863C24.6445 8.56914 24.6279 4.51681 22.0718 1.96031ZM20.535 9.96889C18.7326 11.9712 13.7782 16.1009 11.9994 17.5663C10.2207 16.1013 5.26732 11.9719 3.46527 9.96925C1.69712 8.00401 1.68052 5.20521 3.42677 3.45896C4.31861 2.56747 5.48984 2.12137 6.66107 2.12137C7.8323 2.12137 9.00354 2.56711 9.89538 3.45896L11.2277 4.79125C11.3863 4.94984 11.5862 5.0445 11.796 5.0777C12.1365 5.15081 12.5059 5.0558 12.7708 4.7916L14.1038 3.45896C15.8879 1.67562 18.7898 1.67598 20.5728 3.45896C22.319 5.20521 22.3024 8.00401 20.535 9.96889Z" />
              </svg>
              <div class="info__num">1</div>
            </div>
            <div class="info__item">
              <svg class="info__icon-cart icon-cart" width="21" height="26" viewBox="0 0 21 26" fill="none"
                opacity="0.7" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path
                    d="M0.9 7.73325H20.1V21.4999C20.1 23.212 18.7121 24.5999 17 24.5999H4C2.28792 24.5999 0.9 23.212 0.9 21.4999V7.73325Z"
                    stroke="white" stroke-width="1.8" />
                  <path
                    d="M5.83464 12.6667L5.83464 5.00008C5.83464 2.79095 7.6255 1.00008 9.83464 1.00008H11.168C13.3771 1.00008 15.168 2.79094 15.168 5.00008L15.168 12.6667"
                    stroke="white" stroke-width="1.8" />
                </g>
              </svg>
              <div class="info__num">1</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header-for">
      <div class="container">
        <nuxt-link class="header-for__item" to="/admin">Admin</nuxt-link>
      </div>
    </div>
    <auth-login :show="loginPopup" @close="loginPopup = false" @register="showRegisterPopup" />
    <auth-register :show="registerPopup" @close="registerPopup = false" />
  </header>
</template>

<script lang="ts" setup>
import { useAuthStore } from '~/store/auth';
import { User } from '~/types/User';

const { logout } = useStrapiAuth()

const authStore = useAuthStore()

const user = computed((): User => authStore.$state.user)

const loginPopup = ref<boolean>(false)
const registerPopup = ref<boolean>(false)

const isBurgerActive = ref<boolean>(false)

function showRegisterPopup(): void {
  loginPopup.value = false
  registerPopup.value = true
}

const handleLogout = () => {
  logout()
  authStore.logout()
}

</script>

<style lang="scss" scoped>
@import "~/assets/styles/variables";

.header {
  padding-top: 25px;
  background-color: $dark-gray;

  &-top {
    color: $gray-primary;
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(#858fa4, 0.15);

    &__inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  &-menu {
    padding: 15px 0;

    &__inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  &-for {
    padding: 12px 0;
    background-color: #2a2c38;
    color: #fff;
    font-size: 14px;
    font-weight: 700;

    &__item {
      display: inline-block;
      position: relative;
      cursor: pointer;
      margin-right: 20px;

      &:hover {
        color: darken(#fff, 10%);

        &::after {
          border-top-color: darken(#fff, 10%);
        }
      }
    }
  }
}

.logo {
  min-width: 170px;
}

.city {
  margin-left: 50px;
  margin-right: auto;
}

.phone {
  padding: 0 30px;
  display: flex;
  align-items: center;
  gap: 25px;
  position: relative;

  &::after {
    content: "";
    width: 1px;
    height: 30px;
    background-color: rgba(#858fa4, 0.15);
    right: 0;
    top: 0;
  }

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

.auth {
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

.catalog {
  &__btn {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 15px 20px;
  }
}

.search {
  &__icon {
    display: block;
    cursor: pointer;
    margin-left: 50px;
    transition: all 0.3s ease;

    &:hover {
      fill: #fff;
      fill-opacity: 1;
    }
  }
}

.menu {
  margin-left: auto;

  &__list {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &__link {
    padding: 12px;
    padding-bottom: 6px;
    border-bottom: 1px solid transparent;
    transition: border-color 0.3s ease;

    &:hover {
      border-bottom-color: $red;
    }
  }
}

.info {
  display: flex;
  align-items: center;
  gap: 33px;
  margin-left: auto;

  &__item {
    position: relative;
    cursor: pointer;

    &:hover .icon {
      opacity: 1;
    }

    &:hover .icon-cart {
      opacity: 1;
    }
  }

  &__num {
    position: absolute;
    top: -5px;
    right: -8px;
    color: #fff;
    background-color: $red;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.icon {
  transition: all 0.3s ease;

  &.active {
    fill: $red;
    opacity: 1;
  }

  &-cart {
    transition: all 0.3s ease;

    &.active path {
      stroke: $red;
      opacity: 1;
    }
  }
}

.info-mobile,
.search-mobile,
.burger-button {
  display: none;
}

@media (max-width: 1250px) {

  .phone,
  .partners,
  .header-menu,
  .auth {
    display: none;
  }

  .mobile-auth {
    display: block;
  }

  .search-mobile {
    display: flex;
    margin-left: auto;
    padding-right: 30px;
    position: relative;

    &::after {
      content: "";
      width: 1px;
      height: 30px;
      position: absolute;
      background-color: rgba(#858fa4, 0.15);
      right: 0;
      top: 0;
    }
  }

  .info-mobile {
    display: flex;
    margin-right: 40px;
    margin-left: 30px;
    padding-top: 10px;
  }

  .burger-button {
    display: block;
    width: 30px;
    height: 18px;
    position: relative;
    z-index: 1000;
    cursor: pointer;

    &__el,
    &__el::before,
    &__el::after {
      content: '';
      display: block;
      width: 100%;
      height: 2px;
      background-color: #fff;
      position: absolute;
      transition: all .3s ease;
    }

    &__el {
      top: 50%;
      transform: translateY(-50%);
      position: relative;

      &::before {
        top: -6px;
      }

      &::after {
        top: 6px;
      }
    }

    &.active {

      .burger-button__el,
      .burger-button__el::before,
      .burger-button__el::after {
        background-color: #858FA4;
        height: 3px;
      }

      .burger-button__el {
        background-color: transparent;

        &::after {
          transform: rotate(45deg);
          top: 0;
        }

        &::before {
          top: 0;
          transform: rotate(-45deg);
        }
      }
    }
  }
}

@media (max-width: 700px) {

  .city,
  .info__item:not(:last-child),
  .search-mobile {
    display: none;
  }

  .info-mobile {
    padding: 0;
  }
}
</style>