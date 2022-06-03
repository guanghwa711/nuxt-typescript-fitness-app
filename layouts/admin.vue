<template>
  <v-layout class="admin">
      <v-navigation-drawer
        id="admin__sidebar"
        expand-on-hover
        rail
      >
        <v-list>
          <v-list-item prepend-icon="mdi-home" title="Главная страница" value="home" to="/"></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-trending-up" title="Статистика" value="stats" to="/admin"></v-list-item>
          <v-list-item prepend-icon="mdi-briefcase" title="Бренды" value="brands" to="/admin/brands"></v-list-item>
          <v-list-item prepend-icon="mdi-account-group" title="Пользователи" value="users" to="/admin/users"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main class="admin__inner">
        <nuxt-child />
      </v-main>
    </v-layout>
</template>

<script>

</script>

<style lang="scss" scoped>
.v-main {
  max-width: 1440px;
	margin: 0 auto;
	padding: 30px 15px 30px 100px !important;
}
</style>