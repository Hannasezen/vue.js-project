<template>
  <div id="item-page">
    <AppHeader></AppHeader>
    <h1>Item page</h1>
    <router-link to="/">Start page</router-link>
  </div>
</template>

<script>

import AppHeader from '../components/AppHeader'

export default {
  name: 'item',
  components: {
    AppHeader
  }
}
</script>
