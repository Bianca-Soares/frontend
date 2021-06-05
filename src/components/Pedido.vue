<template>
    <div>
        <div class="container-fluid">
            <h1 class="h3 titulo-formulario"><strong>Fazer pedido</strong></h1>
            <hr>
            <form id="form" action="https://dashboard.heroku.com/apps/bianca-aulas-ds2/ordens" method="POST">
                <div class="row">
                    <div class="col-md-9">
                        <div class="form-group">
                            <label for="endereco">Endereço</label>
                            <input type="text" name="endereco" id="endereco" class="form-control form-control-sm">
                            <label for="latitude">Latitude</label>
                            <input type="text" name="latitude" id="latitude" class="form-control form-control-sm">
                            <label for="longitude">Longitude</label>
                            <input type="text" name="longitude" id="longitude" class="form-control form-control-sm">
                            <label for="idProduto">Id do produto</label>
                            <input type="text" name="idProduto" id="idProduto" class="form-control form-control-sm">
                            <label for="idProduto">Id do produto</label>
                            <input type="text" name="idProduto" id="idProduto" class="form-control form-control-sm">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col mb-3 mt-3">
                        <button type="submit" id="finalizar" class="btn btn-primary">
                            Finalizar
                        </button>
                        <button type="reset" class="btn btn-secondary">Limpar</button>
                    </div>
                </div>
                <br>
            </form>
        </div>
        <div id="pedido">
            <input type="text" v-model="endereco">
            <h2>Lista de pedidos</h2>
            <h3>Pedido</h3>
            {{endereco}}
        </div>
    </div>
    
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        
    },
    data(){
        return {
           
        }
    },
    props: {
        pedido: Object
    }
})
</script>
    #pedido{

    }

    #pedido-produto{

    }
<style scoped>

</style>