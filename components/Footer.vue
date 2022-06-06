<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer-menu menu">
          <div class="menu__item">
            <div class="menu__title">Каталог</div>
            <ul class="menu__list">
              <li class="list__item">
                <nuxt-link class="list__link" to="/">Для дома</nuxt-link>
              </li>
              <li class="list__item">
                <nuxt-link class="list__link" to="/">Для фитнес клубов</nuxt-link>
              </li>
              <li class="list__item">
                <nuxt-link class="list__link" to="/">Акции</nuxt-link>
              </li>
              <li class="list__item">
                <nuxt-link class="list__link" to="/">Идеи и подборки</nuxt-link>
              </li>
              <li class="list__item">
                <nuxt-link class="list__link" to="/">Новинки</nuxt-link>
              </li>
            </ul>
          </div>
          <div class="menu__item">
            <div class="menu__title">Поддержка</div>
            <ul class="menu__list">
              <li class="list__item">
                <nuxt-link class="list__link" to="/">Доставка и оплата</nuxt-link>
              </li>
              <li class="list__item">
                <nuxt-link class="list__link" to="/">Условия возврата</nuxt-link>
              </li>
              <li class="list__item">
                <nuxt-link class="list__link" to="/">Сервисная заявка</nuxt-link>
              </li>
              <li class="list__item">
                <nuxt-link class="list__link" to="/">Обслуживание фитнес клубов</nuxt-link>
              </li>
              <li class="list__item">
                <nuxt-link class="list__link" to="/">FAQ</nuxt-link>
              </li>
              <li class="list__item">
                <nuxt-link class="list__link" to="/">Инструкции</nuxt-link>
              </li>
              <li class="list__item">
                <nuxt-link class="list__link" to="/">Гарантия</nuxt-link>
              </li>
            </ul>
          </div>
          <div class="menu__item">
            <div class="menu__title">Услуги</div>
            <ul class="menu__list">
              <li class="list__item">
                <nuxt-link class="list__link" to="/">3D проект</nuxt-link>
              </li>
              <li class="list__item">
                <nuxt-link class="list__link" to="/">Консалтинг</nuxt-link>
              </li>
              <li class="list__item">
                <nuxt-link class="list__link" to="/">Бизнес планирование</nuxt-link>
              </li>
              <li class="list__item">
                <nuxt-link class="list__link" to="/">Лизинг</nuxt-link>
              </li>
              <li class="list__item">
                <nuxt-link class="list__link" to="/">Trade-IN</nuxt-link>
              </li>
              <li class="list__item">
                <nuxt-link class="list__link" to="/">В рассрочку</nuxt-link>
              </li>
            </ul>
          </div>
          <div class="menu__item">
            <div class="menu__title">О компании</div>
            <ul class="menu__list">
              <li class="list__item">
                <nuxt-link class="list__link" to="/">О нас</nuxt-link>
              </li>
              <li class="list__item">
                <nuxt-link class="list__link" to="/">Наша миссия</nuxt-link>
              </li>
              <li class="list__item">
                <nuxt-link class="list__link" to="/">Наша команда</nuxt-link>
              </li>
              <li class="list__item">
                <nuxt-link class="list__link" to="/">Наши проекты</nuxt-link>
              </li>
              <li class="list__item">
                <nuxt-link class="list__link" to="/">Новости</nuxt-link>
              </li>
              <li class="list__item">
                <nuxt-link class="list__link" to="/">Блог</nuxt-link>
              </li>
              <li class="list__item">
                <nuxt-link class="list__link" to="/">Где купить</nuxt-link>
              </li>
              <li class="list__item">
                <nuxt-link class="list__link" to="/">Контакты</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer__form form">
          <div class="phone contact">
            <a class="phone__number" href="tel:380971799663">+38 (097) 179-96-63</a>
            <div class="phone__callback feedback">Заказать звонок</div>
          </div>
          <div class="email contact">
            <a class="email__address" href="mailto:wellfitness@gmail.com">wellfitness@gmail.com</a>
            <a class="email__write feedback" href="mailto:wellfitness@gmail.com">Написать</a>
          </div>
          <div class="links">
            <nuxt-link class="links__item" to="/">Политика конфиденциальности</nuxt-link>
            <nuxt-link class="links__item" to="/">Публичная офферта</nuxt-link>
          </div>
          <ul class="sm sm-mobile">
            <li class="sm__item">
              <a class="sm__link" href="https://instagram.com">
                <svg class="sm__icon" width="22" height="22" viewBox="0 0 22 22" fill="#909CB5"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.9972 7.33177C8.97738 7.33177 7.32902 8.98014 7.32902 11C7.32902 13.0199 8.97738 14.6682 10.9972 14.6682C13.0171 14.6682 14.6655 13.0199 14.6655 11C14.6655 8.98014 13.0171 7.33177 10.9972 7.33177ZM21.9992 11C21.9992 9.48097 22.0129 7.97571 21.9276 6.45943C21.8423 4.69824 21.4406 3.13519 20.1527 1.84732C18.8621 0.556694 17.3018 0.157674 15.5406 0.0723668C14.0215 -0.0129408 12.5163 0.000818524 11 0.000818524C9.48097 0.000818524 7.97571 -0.0129408 6.45943 0.0723668C4.69824 0.157674 3.13519 0.559446 1.84732 1.84732C0.556694 3.13794 0.157674 4.69824 0.0723668 6.45943C-0.0129408 7.97846 0.000818524 9.48373 0.000818524 11C0.000818524 12.5163 -0.0129408 14.0243 0.0723668 15.5406C0.157674 17.3018 0.559446 18.8648 1.84732 20.1527C3.13794 21.4433 4.69824 21.8423 6.45943 21.9276C7.97846 22.0129 9.48372 21.9992 11 21.9992C12.519 21.9992 14.0243 22.0129 15.5406 21.9276C17.3018 21.8423 18.8648 21.4406 20.1527 20.1527C21.4433 18.8621 21.8423 17.3018 21.9276 15.5406C22.0157 14.0243 21.9992 12.519 21.9992 11V11ZM10.9972 16.6441C7.87389 16.6441 5.35318 14.1234 5.35318 11C5.35318 7.87664 7.87389 5.35594 10.9972 5.35594C14.1206 5.35594 16.6413 7.87664 16.6413 11C16.6413 14.1234 14.1206 16.6441 10.9972 16.6441ZM16.8725 6.44292C16.1432 6.44292 15.5543 5.85402 15.5543 5.12478C15.5543 4.39554 16.1432 3.80664 16.8725 3.80664C17.6017 3.80664 18.1906 4.39554 18.1906 5.12478C18.1908 5.29794 18.1569 5.46945 18.0907 5.62947C18.0245 5.78949 17.9275 5.93489 17.805 6.05733C17.6826 6.17978 17.5372 6.27686 17.3772 6.34303C17.2171 6.40919 17.0456 6.44314 16.8725 6.44292V6.44292Z" />
                </svg>
              </a>
            </li>
            <li class="sm__item">
              <a class="sm__link" href="https://facebook.com">
                <svg class="sm__icon" width="24" height="24" viewBox="0 0 24 24" fill="#909CB5"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M0 12.067C0 18.033 4.333 22.994 10 24V15.333H7V12H10V9.333C10 6.333 11.933 4.667 14.667 4.667C15.533 4.667 16.467 4.8 17.333 4.933V8H15.8C14.333 8 14 8.733 14 9.667V12H17.2L16.667 15.333H14V24C19.667 22.994 24 18.034 24 12.067C24 5.43 18.6 0 12 0C5.4 0 0 5.43 0 12.067Z" />
                </svg>
              </a>
            </li>
            <li class="sm__item">
              <a class="sm__link" href="https://youtube.com">
                <svg class="sm__icon" width="24" height="24" viewBox="0 0 24 24" fill="#909CB5"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M14.0038 11.7913L11.1963 10.4813C10.9513 10.3675 10.75 10.495 10.75 10.7662V13.2338C10.75 13.505 10.9513 13.6325 11.1963 13.5188L14.0025 12.2088C14.2488 12.0938 14.2488 11.9063 14.0038 11.7913ZM12 0C5.3725 0 0 5.3725 0 12C0 18.6275 5.3725 24 12 24C18.6275 24 24 18.6275 24 12C24 5.3725 18.6275 0 12 0ZM12 16.875C5.8575 16.875 5.75 16.3213 5.75 12C5.75 7.67875 5.8575 7.125 12 7.125C18.1425 7.125 18.25 7.67875 18.25 12C18.25 16.3213 18.1425 16.875 12 16.875Z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer__bottom">
        <div class="footer__logo">
          <img src="~/assets/images/logo.svg" alt="" />
          <p class="footer__copyright">
            © WellFitness. 2007 Все права защищены
          </p>
        </div>
        <ul class="sm">
          <li class="sm__item">
            <a class="sm__link" href="https://instagram.com">
              <svg class="sm__icon" width="22" height="22" viewBox="0 0 22 22" fill="#909CB5"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.9972 7.33177C8.97738 7.33177 7.32902 8.98014 7.32902 11C7.32902 13.0199 8.97738 14.6682 10.9972 14.6682C13.0171 14.6682 14.6655 13.0199 14.6655 11C14.6655 8.98014 13.0171 7.33177 10.9972 7.33177ZM21.9992 11C21.9992 9.48097 22.0129 7.97571 21.9276 6.45943C21.8423 4.69824 21.4406 3.13519 20.1527 1.84732C18.8621 0.556694 17.3018 0.157674 15.5406 0.0723668C14.0215 -0.0129408 12.5163 0.000818524 11 0.000818524C9.48097 0.000818524 7.97571 -0.0129408 6.45943 0.0723668C4.69824 0.157674 3.13519 0.559446 1.84732 1.84732C0.556694 3.13794 0.157674 4.69824 0.0723668 6.45943C-0.0129408 7.97846 0.000818524 9.48373 0.000818524 11C0.000818524 12.5163 -0.0129408 14.0243 0.0723668 15.5406C0.157674 17.3018 0.559446 18.8648 1.84732 20.1527C3.13794 21.4433 4.69824 21.8423 6.45943 21.9276C7.97846 22.0129 9.48372 21.9992 11 21.9992C12.519 21.9992 14.0243 22.0129 15.5406 21.9276C17.3018 21.8423 18.8648 21.4406 20.1527 20.1527C21.4433 18.8621 21.8423 17.3018 21.9276 15.5406C22.0157 14.0243 21.9992 12.519 21.9992 11V11ZM10.9972 16.6441C7.87389 16.6441 5.35318 14.1234 5.35318 11C5.35318 7.87664 7.87389 5.35594 10.9972 5.35594C14.1206 5.35594 16.6413 7.87664 16.6413 11C16.6413 14.1234 14.1206 16.6441 10.9972 16.6441ZM16.8725 6.44292C16.1432 6.44292 15.5543 5.85402 15.5543 5.12478C15.5543 4.39554 16.1432 3.80664 16.8725 3.80664C17.6017 3.80664 18.1906 4.39554 18.1906 5.12478C18.1908 5.29794 18.1569 5.46945 18.0907 5.62947C18.0245 5.78949 17.9275 5.93489 17.805 6.05733C17.6826 6.17978 17.5372 6.27686 17.3772 6.34303C17.2171 6.40919 17.0456 6.44314 16.8725 6.44292V6.44292Z" />
              </svg>
            </a>
          </li>
          <li class="sm__item">
            <a class="sm__link" href="https://facebook.com">
              <svg class="sm__icon" width="24" height="24" viewBox="0 0 24 24" fill="#909CB5"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M0 12.067C0 18.033 4.333 22.994 10 24V15.333H7V12H10V9.333C10 6.333 11.933 4.667 14.667 4.667C15.533 4.667 16.467 4.8 17.333 4.933V8H15.8C14.333 8 14 8.733 14 9.667V12H17.2L16.667 15.333H14V24C19.667 22.994 24 18.034 24 12.067C24 5.43 18.6 0 12 0C5.4 0 0 5.43 0 12.067Z" />
              </svg>
            </a>
          </li>
          <li class="sm__item">
            <a class="sm__link" href="https://youtube.com">
              <svg class="sm__icon" width="24" height="24" viewBox="0 0 24 24" fill="#909CB5"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.0038 11.7913L11.1963 10.4813C10.9513 10.3675 10.75 10.495 10.75 10.7662V13.2338C10.75 13.505 10.9513 13.6325 11.1963 13.5188L14.0025 12.2088C14.2488 12.0938 14.2488 11.9063 14.0038 11.7913ZM12 0C5.3725 0 0 5.3725 0 12C0 18.6275 5.3725 24 12 24C18.6275 24 24 18.6275 24 12C24 5.3725 18.6275 0 12 0ZM12 16.875C5.8575 16.875 5.75 16.3213 5.75 12C5.75 7.67875 5.8575 7.125 12 7.125C18.1425 7.125 18.25 7.67875 18.25 12C18.25 16.3213 18.1425 16.875 12 16.875Z" />
              </svg>
            </a>
          </li>
        </ul>
        <ul class="pay">
          <img class="pay__img" src="~/assets/images/icons/visa.svg" alt="" />
          <img class="pay__img" src="~/assets/images/icons/mastercard.svg" alt="" />
          <img class="pay__img" src="~/assets/images/icons/webmoney.svg" alt="" />
          <img class="pay__img" src="~/assets/images/icons/paypal.svg" alt="" />
        </ul>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>

@import "~/assets/styles/variables";

.footer {
  background-color: $dark-gray;
  padding-bottom: 50px;
  padding-top: 80px;
  color: #858fa4;

  &__inner {
    display: flex;
    justify-content: space-between;
    padding-bottom: 25px;
    margin-bottom: 50px;
    border-bottom: 1px solid rgba(#858fa4, 0.15);
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
  }

  &__copyright {
    font-size: 14px;
    line-height: 140%;
    margin-top: 15px;
  }
}

.menu {
  display: flex;
  gap: 50px;

  &__title {
    color: #fff;
    margin-bottom: 30px;
  }
}

.list__link {
  display: inline-block;
  margin-bottom: 12px;
  transition: color 0.3s ease;

  &:hover {
    color: #fff;
  }
}

.contact {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.phone {
  margin-bottom: 20px;
}

.email {
  margin-bottom: 40px;
}

.feedback {
  color: #fff;
}

.links {
  color: #4B7EE8;
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.sm {
  display: flex;
  align-items: center;
  gap: 10px;

  &-mobile {
    display: none;
  }

  &__icon {
    transition: fill 0.3s ease;

    &:hover {
      fill: #fff;
    }
  }
}

.pay {
  display: flex;
  align-items: center;
  gap: 30px;
}

@media (max-width: 1200px) {
  .footer {
    &__inner {
      flex-direction: column;
    }

    &-menu {
      padding-bottom: 40px;
      flex-wrap: wrap;
      border-bottom: 1px solid rgba(#858FA4, .15);
    }

    &__form {
      padding: 60px 0;
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: space-between;
    }
  }
}

@media (max-width: 800px) {
  .sm {
    display: none;

    &-mobile {
      display: flex;
      gap: 20px;
    }
  }
  .footer__form {
    justify-content: center;
    gap: 30px;
  }
}
@media (max-width: 700px) {
  .menu__item {
    max-width: 140px;
  }
  .footer__bottom {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
}
</style>