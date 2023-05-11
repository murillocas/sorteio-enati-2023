<template>
    <div>
        <div class="container">
        <div class="imagem">
            <img :src= imagem alt="imagem"> </div>
        <div class="informações">
            <h1>{{nome}}</h1>     
            <p>{{hora_inicio}}</p>
            <p>{{hora_fim}}</p>

        </div>
    </div>
    </div>
    
</template>

<script>

export default {
    name:"cardProgramacao",
    data(){
        return {
            Linscritos: []
        }
    },created(){
    },methods:{
       
    },props:{
        nome:{
           type: String,
            default: "Nome da programação"
        },hora_inicio:{
            type: String,
            default: "Hora de inicio"
        },imagem:{
            type:String,
            default: "url"
        },hora_fim:{
            type:String,
            default: "Hora fim"

        }
    }
}
</script>


<style scoped>
    .container{
        display: flex;

        justify-content: center;
        align-items: center;
        flex-direction: row;
        background-color: aqua;
        border-radius: 10px;
        margin: 5px;
    }
    .informações{
            flex-direction: column;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: blue;
                margin: 1%;
    }
    .imagem{
         max-width: 200px;
         background-color: brown;
    }
    img{
       width: auto;
        height: auto;
        max-width: 100%;
  max-height: 100%;
    }
</style>