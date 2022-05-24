<template>
  <div class="admin-layout">
    <header class="header">
      <div class="container">
        <nuxt-link class="logo" to="/">
          <img src="~/assets/images/logo.svg" alt="" />
        </nuxt-link>
      </div>
    </header>
    <aside class="aside">
      <Sidebar class="sidebar" :visible="true" :modal="false" :showCloseIcon="false" :autoZIndex="false">
        <div class="sidebar__inner">
          <Menu class="sidebar__menu" ref="menu" :model="items" />
        </div>
      </Sidebar>
    </aside>
    <div class="admin-page container">
      <NuxtChild />
    </div>
  </div>
</template>

<script setup>
import Sidebar from 'primevue/sidebar'
import Menu from 'primevue/menu'

const items = [
  {
    label: 'Статистика',
    icon: 'pi pi-chart-line',
    to: '/admin'
  },
  {
    label: 'Заказы',
    icon: 'pi pi-money-bill',
  },
  {
    label: 'Бренды',
    icon: 'pi pi-briefcase',
  },
  {
    label: 'Категории',
    icon: 'pi pi-tags',
    url: "https://vuejs.org/",
  },
  {
    label: 'Товары',
    icon: 'pi pi-shopping-cart',
    to: "/fileupload",
  },
];
</script>

<style lang="scss" scoped>
@import "~/assets/styles/variables";

.header {
  background-color: $dark-gray;
  width: 100%;
  display: inline-block;
  padding: 15px 0;
  position: fixed;
  z-index: 1000;
}
.sidebar {
  &__inner {
    padding-top: 50px;
  }
}
.admin-page {
  padding-top: 80px;
  padding-left: 300px;
}
</style>