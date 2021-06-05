<template>
    <div id="produto">    
        <div class="card">
        <div class="card-image">
            <figure class="image is-4by3">
            <img :src="imageUri" alt="Placeholder image">
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
            <div class="media-content">
                <p class="title is-4">{{name}}</p>
                <p class="subtitle is-6">{{price}}</p>
            </div>
            </div>

            <div class="content">
           
            </div>
        </div>
        </div>

    </div>
</template>

<script> 
import axios from 'axios';

export default {
    created: function(){
        axios.get(this.imageUri);
    },
    data(){
        return {
            Produto: {}
        }
    },
    props: {
        imageUri: String,
        name: String,
        price: Number
    } 
}
</script>

<style scoped>
    #produto{
        text-align: center;
        margin-top: 2%;
    }

</style>
