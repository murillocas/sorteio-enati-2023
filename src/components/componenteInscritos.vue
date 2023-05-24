<template>
  <div class="container">
    <div class="container2">
      <h2 class="qtdInscritos">QTD Inscritos {{ QTDINscrito }}</h2>
    <!-- <h2>QTD Json {{QTDJASON}}</h2>

      <h2>{{prev}} prev</h2>
      <h2>{{next}} next</h2>

      <router-link to="/">Home</router-link>-->
    <div class="Botao">
      <h2 @click="sortear">Botão</h2>
    </div>

    <div class="divNomeSorteado">
      <h1 class="NomeSorteado">{{ NomeSorteado }}</h1>
    </div>

    <h2 v-for="(data, index) in ListaAuxSorteio" :key="index">{{ data }}</h2>
    </div>
    
  </div>
</template>

<script>
import axios from "axios";
import { API_URL_INSCRITOS, API_TOKEN } from "@/api";

export default {
  name: "componenteInscritos",
  mounted() {
    this.idEvent = this.$route.params.idEvent;
    this.urlParam = this.$route.params.url;
  },
  data() {
    return {
      Linscritos: [],
      QTDINscrito: null,
      prev: null,
      next: 0,
      NomeSorteado: "Nome do Sorteado",
      ListaAuxSorteio: [],
      QTDJASON: null,
      listaAtual: 1,
      idEvent: "",
    };
  },
  created() {
    this.obterListaInscritos();
    this.preencherListaAux();
  },
  methods: {
    obterListaInscritos() {
      axios
        .get(API_URL_INSCRITOS /*+ "/" + this.urlParam + "/" + this.idEvent*/)
        .then((resposta) => {
          console.log(resposta.data);
          this.Linscritos = resposta.data.results;
          console.log(this.Linscritos);
          this.next = resposta.data.next;
          this.prev = resposta.data.previous;
          this.QTDINscrito = resposta.data.count;
          this.QTDJASON = this.Linscritos.length;
          if (this.next != null) {
            this.obterListaInscritos();
          }
        })
        .catch((erro) => {
          console.log(erro);
        });
      console.log(this.ListaAuxSorteio);
    },
    obterListaInscritosteste() {
      var pegarProximo = true;
      var pagina = 1;
      while (pegarProximo) {
        axios
          .get(API_URL_INSCRITOS + "?page=" + pagina, {
            headers: { Authorization: API_TOKEN },
          })
          .then((resposta) => {
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

        if (this.next == null) {
          pegarProximo = false;
          pagina += 1;
        }
      }

      console.log(this.ListaAuxSorteio);
    },
    sortear() {
      if (this.ListaAuxSorteio.length == 0) {
        this.preencherListaAux();
      }
      //var NomedoSorteado;

      //sortear não repetidos com base na lista auxiliar
      var QtdNaListaAux = this.ListaAuxSorteio.length;
      var NumeroSorteado = Math.floor(Math.random() * QtdNaListaAux);

      //pegar o valor na posição sorteada na lista auxiliar
      if (this.NumeroSorteado == 0) {
        //remove o primeiro elemento
        NumeroSorteado = this.ListaAuxSorteio.shift();
      } else {
        // remove o elemento na posiSorteada
        NumeroSorteado = this.ListaAuxSorteio.splice(NumeroSorteado, 1);
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

      console.log("qtd é : " + QtdNaListaAux);
      console.log("sorteado" + NumeroSorteado);
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

    preencherListaAux() {
      for (var x = 0; x < this.QTDINscrito; x++) {
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
body {
}
.container {
  display: flex;
  width: 100vh;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.NomeSorteado {
}
.Botao {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: purple;
  padding: 20px;
  margin: 1em;
}
.qtdInscritos {
}
.divNomeSorteado {
  border: 5px solid black;
  border-radius: 30px;
  border-color: black;
  padding: 6%;
}
.NomeSorteado{
  text-align: center;
}
.container2{
    display: flex;
  flex-direction: column;
 justify-content: center;
  align-items: center;
  background-color: gray;
  padding: 2em;
  border-radius: 10px;
  height: 50%;
  width: 50%;
  max-width: 500px;
  max-height: 500px;
}
</style>
