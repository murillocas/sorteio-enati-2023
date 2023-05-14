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
import { API_URL_INSCRITOS, API_TOKEN } from "@/api";

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
      listaAtual:1,
    };
  },
  created() {
    this.obterListaInscritos();
    this.preencherListaAux();
  },
  methods: {
    obterListaInscritos() {
     
        axios.get(API_URL_INSCRITOS ).then((resposta) => {
          console.log(resposta.data);
          this.Linscritos = resposta.data.results;
          console.log(this.Linscritos);
          //this.next = resposta.data.next;
          this.prev = resposta.data.previous;
          this.QTDINscrito = resposta.data.count;
          this.QTDJASON = this.Linscritos.length;
          
           this.preencherListaAux();

        })
        .catch((erro) => {
          console.log(erro);
        });
        console.log(this.ListaAuxSorteio);
    }, obterListaInscritosteste() {
      var pegarProximo = true;
      var pagina = 1;
      while(pegarProximo){
        axios.get(API_URL_INSCRITOS +"?page=" + pagina,{headers: {'Authorization': API_TOKEN}}).then((resposta) => {
          console.log(resposta.data);
          this.Linscritos = resposta.data.results;
          console.log(this.Linscritos);
          this.next = resposta.data.next;
          this.prev = resposta.data.previous;
          this.QTDINscrito = resposta.data.count;
          //this.QTDJASON = this.Linscritos.length;

        })
        .catch((erro) => {
          console.log(erro);
        });

        if(this.next == null){
          pegarProximo = false;
          pagina +=1;
        }

      }
     
       
        console.log(this.ListaAuxSorteio);
    },
    sortear() {
       if(this.ListaAuxSorteio.length == 0){
            this.preencherListaAux();
        }
      //var NomedoSorteado;

      //sortear não repetidos com base na lista auxiliar
      var QtdNaListaAux = this.ListaAuxSorteio.length;
      var NumeroSorteado = Math.floor(Math.random() *  QtdNaListaAux)

      //pegar o valor na posição sorteada na lista auxiliar
      if(this.NumeroSorteado == 0){
          //remove o primeiro elemento
          NumeroSorteado = this.ListaAuxSorteio.shift();
      }else{
        // remove o elemento na posiSorteada
         NumeroSorteado = this.ListaAuxSorteio.splice(NumeroSorteado,1);
      }

      // identificar a qtd de listas possiveis 
      //var qtdlista = Math.ceil( this.QTDINscrito/this.QTDJASON);

      // identificar em qual lista esta o numero sorteado
     //var  PosiListaSorteada =Math.ceil( NumeroSorteado/this.QTDJASON);
      //if(PosiListaSorteada == 0){
       // PosiListaSorteada = 1
      //}

      // identificar em qual possição da lista esta o numero
      //var posiSorteada = NumeroSorteado % this.QTDJASON;


      console.log("qtd é : " +  QtdNaListaAux);
      console.log("sorteado"+NumeroSorteado);
     // console.log("qtd lista"+qtdlista);
      //console.log("em qual lista esta" + PosiListaSorteada);
      //console.log("posi sorteada"+posiSorteada);

      // atualiza o jzon coso esteja em outra pagina
      
      //if(this.listaAtual != PosiListaSorteada){
       // this.atualizarJzon(PosiListaSorteada);
      //}
      
      
      //console.log("o numero sorteado e :" + sorteado + " rondom : " + rondom)
      this.NomeSorteado = this.Linscritos[NumeroSorteado].nome;
    },


    preencherListaAux(){
        for(var x =0;x< this.QTDINscrito; x++){
            this.ListaAuxSorteio.push(x);
        }
    },
    /*atualizarJzon(posiLista){
         axios.get(API_URL_INSCRITOS).then((resposta) => {
          console.log(resposta.data);
          this.Linscritos = resposta.data.results;
          console.log(this.Linscritos);
          this.next = resposta.data.next;
          this.prev = resposta.data.previous;
          this.listaAtual = posiLista;
        })
        .catch((erro) => {
          console.log(erro);
        });
    },*/

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
