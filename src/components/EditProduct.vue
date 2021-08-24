<template>
  <form id="editForm" @submit.prevent="editProduct" method="post">
    <!-- Name input -->
    <div class="form-outline mb-4">
      <label class="form-label" for="name">Name</label>
      <input v-model="product.name" type="text" id="name" class="form-control" />
    </div>

    <!-- Description input -->
    <div class="form-outline mb-4">
      <label class="form-label" for="description">Description</label>
      <textarea v-model="product.description" class="form-control" id="description" rows="4"></textarea>
    </div>

    <!-- Price input -->
    <div class="form-outline mb-4">
      <label class="form-label" for="price">Price</label>
      <input v-model="product.price" type="number" id="price" class="form-control" />
    </div>

    <!-- Submit button -->
    <button type="submit" :style="{background: color}" class="btn mb-4">Submit</button>
  </form>
</template>

<script>
import axios from "axios";

export default {
  mounted: function(){
    this.getProduct();
  },
  name: "EditProduct",
  props:{
    text: String,
    color: String
  },
  data(){
    return{
        product : {},
    }
  },
  methods: {
    onSubmit(e){
      e.preventDefault();
      if(!this.name){
        alert('Please add a product name');
        return
      }
      if(!this.price){
        alert('Please add a product price');
        return
      }

    },
    // get product by id for edit
    getProduct: function () {
      this.$parent.showProductList = !this.$parent.showProductList
      axios.get('http://localhost:8000/api/products/' + this.$route.params.id).then((response) => {
        //console.log("RESPONSE RECEIVED: ", response);
        this.product = response['data'];
        return this.product;

      }).catch((err) => {
        console.log("AXIOS ERROR: ", err);
      })
    },
    // edit a product
    editProduct: function () {
      axios.put('http://localhost:8000/api/products/'+ this.$route.params.id, this.product).then((response) => {
        //console.log("RESPONSE RECEIVED: ", response['data']);
        this.$router.push('/')
        this.$parent.showProductList = true

      }).catch((err) => {
        console.log("AXIOS ERROR: ", err);
      })

    }

  }
}
</script>

<style scoped>

</style>