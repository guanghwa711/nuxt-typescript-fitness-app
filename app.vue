<template>
	<div id="app">
    <nuxt-layout />
    <ScrollTop class="scroll-top"/>
  </div>
</template>

<script setup>
import ScrollTop from 'primevue/scrolltop';
</script>

<style lang="scss" scoped>
@import '/assets/styles/_variables';
.scroll-top {
  background: rgba($red, .7);
  &:hover {
    background: rgba($red, .8);
  }
}
</style>