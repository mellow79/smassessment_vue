<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 col-sm-12 col-xs-12">
        <table class="table"  id="productTable">
          <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody v-for='product in products'
                 :key='product.id'>
            <Product @delete-product="$emit('delete-product', product.id)" :product="product" />
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Product from './Product'
export default {
  name: "Products",
  props:{
    products: Array

  },
  components:{
    Product
  },
  emits: ['delete-product']
}
</script>

<style scoped>

</style>