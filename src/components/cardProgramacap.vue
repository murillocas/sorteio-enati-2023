<template>
  <div class="containerdois">
    <div class="inerContent">
      <div class="imagem">
        <img :src="imagem" alt="imagem" />
      </div>
      <div class="informações">
        <div class="tituloEnv">
            <h1>{{ nome }}</h1>
        </div>
        <div class="descricaoEnv">
            <p>{{ hora_inicio }}</p>
        <p>{{ hora_fim }}</p>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cardProgramacao",
  data() {
    return {
      Linscritos: [],
    };
  },
  created() {},
  methods: {},
  props: {
    nome: {
      type: String,
      default: "Nome da programação",
    },
    hora_inicio: {
      type: String,
      default: "Hora de inicio",
    },
    imagem: {
      type: String,
      default: "url",
    },
    hora_fim: {
      type: String,
      default: "Hora fim",
    },
  },
};
</script>


<style scoped>
.containerdois{
  font-family: 'Roboto', sans-serif;
  color: #222228;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  min-width:500px;
  height: 200px;
  background-color: #e6e6e6;
  margin: 10px auto;
  border-radius: 10px;
  max-width: 500px;
}

.inerContent{
  width: 90%;
  display: flex;
  flex-direction: row;
}

.container{
  display: flex;
  justify-content: center;
  align-items: center;
 
  border-radius: 10px;
  margin: 5px;
  width: 100%;
}
.informações {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin: 1%;
}
.data_Inicio {
  padding: 5px 10px;
  
}
.titulo {
  font-weight:bold;
  font-size: 100%;
  padding: 5px 10px;
  margin-bottom: 10px
}
.imagem {
  
  padding: 5px 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 450px;
  max-width: 30%;
  background-color: #f0f0f0;
}



img {
  max-width: 100%;
  max-height: 100%;
  
}
.tituloEnv{
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.tituloEnv h1{
   font-weight:bold;
  font-size: 100%;
  padding: 5px 10px;
  margin-bottom: 10px
}
.descricaoEnv{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>