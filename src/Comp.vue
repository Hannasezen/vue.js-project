<template>
  <div id="comp">
    Comp template <h2>1 {{ msg }}</h2>
  </div>
</template>

<script>
export default {
  name: 'comp',
  data() {
    return {
      item: "item string"
    }
  },
  props: {
    msg: {
      type: String,
      default: "default string"
    }
  }
}
</script>

<style scoped>

</style>

