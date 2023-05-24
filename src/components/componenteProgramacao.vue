<template>

  <div class="container">
    <!--<card-eventos :imagem="'/imgexemplo.png'"
          :titulo="testes"
          :data_inicio="testestestes"/>-->
   
    <div class="listaCard" v-for="(data, index) in programacao" :key="index">
        <router-link :to="`/inscritos/${urlParam }/${data.id}`">
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
import cardProgramacao from "./cardProgramacap.vue"
import {API_URL_PROGRAMACOES} from '@/api';


export default {
  name: "programacaoEvento",
   mounted() {
    this.urlParam = this.$route.params.url;
    console.log(this.urlParam); // Exibe o valor do parâmetro "url"
  },
  components: {
    cardProgramacao,
  },
  created() {
    this.obterListaEventos();
  },
  data() {
    return {
      programacao: [],
      urlParam: "",
    };
  },
  methods: {
    obterListaEventos() {
      axios
        .get(API_URL_PROGRAMACOES /* +"/" + this.urlParam*/)
        .then((resposta) => {
          console.log(resposta.data);
          this.programacao = resposta.data.results;
        })
        .catch((erro) => {
          console.log(erro);
        });
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
