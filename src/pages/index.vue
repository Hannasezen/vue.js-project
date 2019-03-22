<template>
  <div id="start">
    <AppHeader></AppHeader>
    <router-link to="/item">Item page</router-link>
  </div>
</template>

<script>

import AppHeader from '../components/AppHeader'

export default {
  name: 'index',
  components: {
    AppHeader
  }
}
</script>

<style>
/* reset styles -------------------------------------------------------
--------------------------------------------------------------------------*/

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body, ul, li, div, main, header, footer, h1, h2, h3, h4, h5, h6, span, a, img, aside {
  margin: 0;
  padding: 0;
}

body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  line-height: 1;
}

body.open-filters {
  visibility: hidden;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
  transition: color ease 0.3s;
  border: none;
}

button {
  cursor: pointer;
}

input, button {
  background: transparent;
  border: none;
  outline: none;
}

/* common styles --------------------------------------------------------
--------------------------------------------------------------------------*/

.flex {
  display: flex;
}

.text-red {
  color: rgb(241, 74, 88);
}

.wrapper {
  max-width: 1300px;
  min-width: 375px;
  margin: 0 auto;
  overflow: hidden;
}

.content-wrapper {
  flex-grow: 1;
}

.container {
  width: 90%;
  min-width: 345px;
  max-width: 1180px;
  margin: 0 auto;
}

.btn {
  display: block;
  font-family: 'OpenSansBold';
  font-size: 24px;
  width: 340px;
  height: 75px;
  margin: 0 auto;
  border: 1px solid rgb(229, 229, 229);
  transition: all ease 0.3s;
}

.btn:hover {
  color: rgb(241, 74, 88);
  border-color: rgb(241, 74, 88);
  cursor: pointer;
  transform: scale(1.01);
}

.btn:active {
  color: rgb(177, 7, 24);
  border-color: rgb(177, 7, 24);
  cursor: pointer;
  background: rgb(229, 229, 229);
}

a:hover {
  color: rgb(241, 74, 88);
}
</style>
