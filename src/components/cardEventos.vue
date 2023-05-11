<template>
  <div class="container">
    <div class="imagem">
      <img :src="imagem" alt="imagem" />
    </div>
    <div class="informações">
      <p class="titulo">{{ titulo }}</p>
      <p class="data_Inicio">{{ data_inicio }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "cardEventos",
  data() {
    return {
      Linscritos: [],
    };
  },
  created() {},
  methods: {},
  props: {
    titulo: {
      type: String,
      default: "titulo do evento",
    },
    data_inicio: {
      type: String,
      default: "Data de inicio",
    },
    imagem: {
      type: String,
      default: "imagem",
    },
  },
};
</script>


<style scoped>
.container{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: black;
  border-radius: 10px;
  margin: 5px;
  width: 100%;
}
.informações {
  background-color: blue;
  margin: 1%;
}
.data_Inicio {
  background-color: chartreuse;
}
.titulo {
  background-color: chocolate;
}
.imagem {
  max-width: 200px;
  background-color: brown;
}
img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
</style>