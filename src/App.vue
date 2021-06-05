<template>
  <div id="app">
    <img id="logo" src="./assets/logo-delivery.png">
    <h4 class="is-size-4">Lista de Produtos</h4>
    <div class="column is-4  is-offset-4">
      <div v-for="(produto, index) in produtos" :key="index">
        <Produto :imageUri="produto.imageUri" :name="produto.name" :price="produto.price" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Produto from './components/Produto';

export default {
  name: 'App',
  
  data(){
    return {
      produtos: [] 
    }
  },
  created: function(){
    console.log("TESTE");
    axios.get("https://bianca-aulas-ds2.herokuapp.com/products").then(resposta => {
      console.log("Pegou a lista de produtos"); 
      this.produtos = resposta.data;
    })
  },
  components: {
    Produto
  }
}
</script>

<style>
#app h4 {
  text-align: center;
}
  #logo { max-width: 200px; }
</style>
