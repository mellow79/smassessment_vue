<template>
    <tr>
      <td>{{ product.id }}</td>
      <td>{{ product.name }}</td>
      <td>{{ product.description  }}</td>
      <td>{{ product.price }}</td>
      <td> <router-link :to="{ name: 'EditProduct', params: { id: product.id }}"><i class="fas fa-edit"></i></router-link> | <i @click="onDelete(product.id)" class="fas fa-times"></i> </td>
    </tr>
</template>

<script>
export default {
  name: 'Product',
  props: {
    product: Object,
  },
  methods: {
    onDelete(id){
       this.$emit('delete-product', id);
    }
  }
}
</script>

<style>
.product {
  background: #f4f4f4;
  margin: 5px;
  padding:10px 20px;
  cursor: pointer
}
.product.reminder{
  border-left: 5px solid blue;
}
.product h3{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.fa-times {
  color: red;
}
.fa-edit{
  color: green;
}
</style>