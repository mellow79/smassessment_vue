<template>
  <form @submit="onSubmit" method="post">
    <!-- Name input -->
    <div class="form-outline mb-4">
      <label class="form-label" for="name">Name</label>
      <input v-model="name" type="text" id="name" class="form-control" />

    </div>

    <!-- Description input -->
    <div class="form-outline mb-4">
      <label class="form-label" for="description">Description</label>
      <textarea v-model="description" class="form-control" id="description" rows="4"></textarea>
    </div>

    <!-- Price input -->
    <div class="form-outline mb-4">
      <label class="form-label" for="price">Price</label>
      <input v-model="price" type="number" id="price" class="form-control" />
    </div>

    <!-- Submit button -->
    <button type="submit" :style="{background: color}" class="btn mb-4">Submit</button>
  </form>
</template>

<script>
export default {
  name: "AddProduct",
  props:{
    text: String,
    color: String
  },
  data(){
    return{
      id: '',
      name: '',
      description: '',
      price: '',
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

      const newProduct = {
         name: this.name,
         description: this.description,
         price: this.price
      }

     this.$emit('add-product', newProduct)

      this.name = '';
      this.description = '';
      this.price = '';
    }

  }
}
</script>

<style scoped>

</style>