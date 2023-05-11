<template>
  <div class="container">
    <div>
        <h2>QTD Inscritos {{QTDINscrito}}</h2>
        <h2>QTD Json {{QTDJASON}}</h2>

      <h2>{{prev}} prev</h2>
      <h2>{{next}} next</h2>

      <router-link to="/">Home</router-link>

      <h2 @click="sortear" class="Botao">Botão</h2>

      <h1 class="NomeSorteado">{{ NomeSorteado }}</h1>

      <h2  v-for="(data, index) in ListaAuxSorteio" :key="index" >{{data}}</h2>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { API_URL_INSCRITOS } from "@/api";

export default {
  name: "componenteInscritos",
  data() {
    return {
      Linscritos: [],
      QTDINscrito: null,
      prev: null,
      next: null,
      NomeSorteado: "Nome do Sorteado",
      ListaAuxSorteio: [],
      QTDJASON:null,
    };
  },
  created() {
    this.obterListaInscritos();
  },
  methods: {
    obterListaInscritos() {
      axios.get(API_URL_INSCRITOS).then((resposta) => {
          console.log(resposta.data);
          this.Linscritos = resposta.data.results;
          console.log(this.Linscritos);
          this.next = resposta.data.next;
          this.prev = resposta.data.previous;
          this.QTDINscrito = resposta.data.count;
          this.QTDJASON = this.Linscritos.length;

        for(var x =0;x< this.QTDINscrito; x++){
            this.ListaAuxSorteio.push(x);
        }
        })
        .catch((erro) => {
          console.log(erro);
        });

       
        console.log(this.ListaAuxSorteio);
    },
    sortear() {
       if(this.ListaAuxSorteio.length == 0){
            this.preencherListaAux();
      }
      var NomedoSorteado;

      var QtdNaListaAux = this.ListaAuxSorteio.length;
      var NumeroSorteado = Math.floor(Math.random() *  QtdNaListaAux)
      var qtdlista = Math.ceil( this.QTDINscrito/this.QTDJASON);
      var  PosiListaSorteada =Math.ceil( NumeroSorteado/this.QTDJASON);
      var posiSorteada = NumeroSorteado % this.QTDJASON;


      console.log("qtd é : " +  QtdNaListaAux);
      console.log("sorteado"+NumeroSorteado);
      console.log("qtd lista"+qtdlista);
      console.log("em qual lista esta" + PosiListaSorteada);
      console.log("posi sorteada"+posiSorteada);
      



        
      /*if(this.rondom == 0){
            sorter NomedoSorteado = this.ListaAuxSorteio.shift();
      }else{
         sorter NomedoSorteado = this.ListaAuxSorteio.splice(rondom,1);
      }*/

      //console.log("o numero sorteado e :" + sorteado + " rondom : " + rondom)


      this.NomeSorteado = "" + NomedoSorteado;
    },


    preencherListaAux(){
        for(var x =0;x< this.QTDINscrito; x++){
            this.ListaAuxSorteio.push(x);
        }
    }

  },
};
</script>



<style scoped>
.container {
  display: flex;

  justify-content: center;
  flex-direction: column;
  background-color: aqua;
}
.NomeSorteado{
    background-color: red;
}
.Botao{
    background-color: yellow;
}
</style>
