<template>
  <div id="start" class="body">
    <AppHeader></AppHeader>
    <router-link to="/item">Item page</router-link>
    <AppFooter></AppFooter>
  </div>
</template>

<script>

import AppHeader from '../components/AppHeader'
import AppFooter from '../components/AppFooter'

export default {
  name: 'index',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style>
</style>
