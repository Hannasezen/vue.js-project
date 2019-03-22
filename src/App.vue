<template>
  <div id="app">
    <h1>First title {{ msg }}</h1>
    <Comp v-for="item in arr" :msg="item" :key="item.id"></Comp>
  </div>
</template>

<script>
  import Comp from './Comp.vue'

  export default {
    name: 'app',
    data () {
      return {
        msg: 'message',
        arr: [
          'one', 'two', 'three', 'four'
        ]
      }
    },
    components: {
      Comp
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>
