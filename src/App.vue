<template>
    <div class="container">
      <Header  @toggle-add-product="toggleAddProduct" title="Consume Laravel API"/>
      <router-view :key="$route.fullPath" />
      <div v-show="showAddProduct">
        <AddProduct @add-product="addProduct" />
      </div>
      <div v-show="showProductList">
        <Products @delete-product="deleteProduct" :products="products" />
      </div>
    </div>
</template>

<script>
import Header from './components/Header'
import Products from './components/Products'
import AddProduct from "./components/AddProduct";
//import EditProduct from "./components/EditProduct"

import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueAxios, axios)
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueRouter)

export default {
  name: 'App',
  components: {
    Header,
    Products,
    AddProduct,
   // EditProduct
  },
  data: function(){
    return {
      products:[],
      showAddProduct: false,
      showProductList: true,
    }
  },
  methods: {
    toggleAddProduct() {
      this.showAddProduct = !this.showAddProduct
    },
    // add a product
    addProduct: function (product) {
      let postData = product;
      let axiosConfig = {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
        }
      };

      axios.post('http://localhost:8000/api/products/', postData, axiosConfig).then((response) => {
        //console.log("RESPONSE RECEIVED: ", response['data'].id);
        const data = response['data'];
        this.products = [...this.products, data]

      }).catch((err) => {
        console.log("AXIOS ERROR: ", err);
      })

    },

    // get all products
    getProducts: function () {
      axios.get('http://localhost:8000/api/products').then((response) => {
        this.products = response['data'];
        return this.products;
      })
          .catch((err) => {
            console.log("AXIOS ERROR: ", err);
          })
    },

    // delete a product by ID
    deleteProduct: function(id){
      if( confirm('Are you sure you want to delete this product')){
        axios.delete('http://localhost:8000/api/products/'+ id).then((response) => {
          if(response.statusText !==  "OK") return false;
          this.products = this.products.filter((product) => product.id !== id);

        }).catch((err) => {
          console.log("AXIOS ERROR: ", err);
        })
      }
    },

  },
  created(){
    this.products = this.getProducts();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.btn {
  display: inline-block;
  background: green;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-weight: inherit

}
.btn:hover {
  color: #fff;
  font-weight: bold
}
</style>
