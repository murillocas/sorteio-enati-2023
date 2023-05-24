<template>

  <div class="container">
    <!--<card-eventos :imagem="'/imgexemplo.png'"
          :titulo="testes"
          :data_inicio="testestestes"/>-->
   
    <div class="listaCard" v-for="(data, index) in Leventos" :key="index">
        <router-link :to="`/programacao/${data.url}`">
        <cardEventos
          :imagem="'/imgexemplo.png'"
          :titulo="data.titulo"
          :data_inicio="data.data_inicio"
          :url="data.url"
        />
      </router-link>
    </div>
  </div>
</template> 

<script>
import axios from "axios";
import cardEventos from "./cardEventos.vue";
import {API_URL_EVENTOS} from '@/api';


export default {
  name: "programacaoEvento",
  components: {
    cardEventos,
  },
  created() {
    this.obterListaEventos();
  },
  data() {
    return {
      Leventos: [],
    };
  },
  methods: {
    obterListaEventos() {
      axios
        .get(API_URL_EVENTOS)
        .then((resposta) => {
          console.log(resposta.data);
          this.Leventos = resposta.data.results;
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

  width: 90%;
}
.cardEventosVue {
  display: flex;
  margin: 10px;
}

</style>
