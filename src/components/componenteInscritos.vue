<template>
  <div class="container">
    <div class="container2">

      <div class = "informacoes">

        <h2>Evento: {{ nomeEvento }}</h2>
        <h2 class="qtdInscritos">QTD Inscritos {{ QTDINscrito }}</h2>
        
      </div>

    <!-- <h2>QTD Json {{QTDJASON}}</h2>

      <h2>{{prev}} prev</h2>
      <h2>{{next}} next</h2>

      <router-link to="/">Home</router-link>-->
   

    <div class="divNomeSorteado">
      <h1 class="NomeSorteado">{{ NomeSorteado }}</h1>
    </div>

    <div @click="sortear" class="Botao">
      <h2 >Sortear</h2>
    </div>

    <!--<h2 v-for="(data, index) in ListaAuxSorteio" :key="index">{{ data }}</h2>-->
    </div> 
    
  </div>
</template>

<script>
import axios from "axios";
import { API_URL_INSCRITOS, API_TOKEN } from "@/api";

export default {
  name: "componenteInscritos",
  mounted() {
    
  },
  data() {
    return {
      Linscritos: [],
      QTDINscrito: null,
      prev: null,
      next: 0,
      NomeSorteado: "",
      ListaAuxSorteio: [],
      QTDJASON: null,
      listaAtual: 1,
      idEvent: "",
      contador: 1,
      nomeEvento: ""
    };
  },
  created() {
    this.idEvent = this.$route.params.idEvent;
    this.urlParam = this.$route.params.url;
    this.nomeEvento = this.$route.params.nomeEvento;
    this.obterListaInscritos();
    this.preencherListaAux();
  },
  methods: {
   async obterListaInscritos() {
    try {
      await axios
        .get(API_URL_INSCRITOS + "/" + this.urlParam + "/" + this.idEvent+"/" + this.contador)
        .then((resposta) => {
          console.log(resposta.data);
          //this.Linscritos = resposta.data.results;
          this.Linscritos.push(...resposta.data.results);

          console.log(this.Linscritos);
          this.next = resposta.data.next;
          this.prev = resposta.data.previous;
          this.QTDINscrito = resposta.data.count;
          this.QTDJASON = this.Linscritos.length;
          this.contador += 1;
          if (this.next != null) {
            this.obterListaInscritos();
          }
        })
        .catch((erro) => {
          console.log(erro);
        });
      console.log(this.ListaAuxSorteio);
} catch (erro) {
        console.error("Erro ao obter dados da API:", erro);
      }

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



.informacoes {
  display: flex;
  align-items: center;
  justify-content:center;
  flex-direction: column;
  max-width: 50%;
}

.informacoes h2{
    text-align: center;
    font-size: 140%;
    margin-bottom: 20px;
}
.container {
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.container2{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  border: solid 2px #49a3f2;

  width: 90%;
  height: 80vh;
  max-width: 100%;
  max-height: 100vh;

}

.NomeSorteado {
  font-size: xx-large;
}

.Botao {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: #f27c38;
  color: #f0f0f0;
  padding: 30px;
  margin: 1em;
  max-width: 100%;
}

.Botao h2{
  font-size: x-large;
}
.qtdInscritos {
  color:  #1b3c59;
}
.divNomeSorteado {
  
  border-radius: 30px;
  border-color: black;
  padding: 6%;
}
.NomeSorteado{
  text-align: center;
}

</style>
