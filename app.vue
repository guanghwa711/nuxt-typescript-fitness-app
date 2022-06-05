<template>
  <div id="app">
    <nuxt-layout />
  </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from '~/store/auth';

const authStore = useAuthStore()

const user = useStrapiUser()
authStore.login(user.value)
</script>