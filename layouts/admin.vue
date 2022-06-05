<template>
  <v-layout class="admin">
    <v-app-bar-nav-icon class="sidebar-open" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-navigation-drawer v-model="drawer" :expand-on-hover="!mobile" :rail="!mobile" :temporary="mobile">
      <v-list>
        <v-list-item prepend-icon="mdi-home" title="Главная страница" value="home" to="/"></v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-trending-up" title="Статистика" value="stats" to="/admin"></v-list-item>
        <v-list-item prepend-icon="mdi-briefcase" title="Бренды" value="brands" to="/admin/brands"></v-list-item>
        <v-list-item prepend-icon="mdi-account-group" title="Пользователи" value="users" to="/admin/users">
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="admin__inner">
      <nuxt-child />
    </v-main>
  </v-layout>
</template>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      drawer: false,
      mobile: false
    }
  },
  mounted() {
    this.handleResize()
    window.addEventListener('resize', () => this.handleResize)
  },
  methods: {
    handleResize(): void {
      if (window.innerWidth < 1300) {
        this.mobile = true
        this.drawer = false
      } else {
        this.drawer = true
        this.mobile = false
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.v-main {
  max-width: 1440px;
  margin: 0 auto;
  padding: 30px 15px 30px 100px !important;
}

.sidebar-open {
  position: fixed;
  left: 20px;
  top: 20px;
  z-index: 1000;
  display: none;
}

@media (max-width: 1300px) {
  .v-main {
    padding: 30px 15px !important;
  }
  .sidebar-open {
    display: block;
  }
}
</style>