<template>
  <header>
    <h1>{{ title }}</h1>
    <Button @toggle-add-product="$emit('toggle-add-product')" text="Add Product" color="blue"/>
  </header>
</template>

<script>
import Button from './Button'
export default {
  name: "Header",
  props:{
    title: String,
  },
  components:{
    Button
  }
}
</script>

<style scoped>
header {
  display:flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom:20px
}
</style>