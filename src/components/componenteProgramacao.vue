<template>
  <div class="container">
    <!--<card-eventos :imagem="'/imgexemplo.png'"
          :titulo="testes"
          :data_inicio="testestestes"/>-->

    <div class="listaCard" v-for="(data, index) in programacao" :key="index">
      <router-link :to="`/inscritos/${urlParam}/${data.id}/${data.nome}`">
        <cardProgramacao
          :imagem="'/imgexemplo.png'"
          :nome="data.nome"
          :hora_inicio="data.hora"
          :hora_fim="data.hora_termino"
          
        />
      </router-link>
    </div>
  </div>
</template> 

<script>
import axios from "axios";
import cardProgramacao from "./cardProgramacap.vue";
import { API_URL_PROGRAMACOES } from "@/api";

export default {
  name: "programacaoEvento",
  mounted() {
    // Exibe o valor do parâmetro "url"
  },
  components: {
    cardProgramacao,
  },
  created() {
    this.urlParam = this.$route.params.url;
    console.log(this.urlParam);
    //while(this.proximo != null){
    this.obterListaEventos();
    //}
  },
  data() {
    return {
      programacao: [],
      urlParam: "",
      contador: 1,
      proximo: 0,
    };
  },
  methods: {
    async obterListaEventos() {
      //console.log("testestes"+ this.urlParam);
      try {
        await axios
          .get(API_URL_PROGRAMACOES + "/" + this.urlParam + "/" + this.contador)
          .then((resposta) => {
            console.log(resposta.data);
            this.proximo = resposta.data.next;
            console.log(this.proximo);
            this.contador += 1;
            this.programacao.push(...resposta.data.results);
            if (this.proximo != null) {
              this.obterListaEventos();
            }
          })
          .catch((erro) => {
            console.log(erro);
          });
      } catch (erro) {
        console.error("Erro ao obter dados da API:", erro);
      }
    },
  },
};
</script>


<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
}
.cardEventosVue {
  display: flex;
  margin: 10px;
}
</style>
