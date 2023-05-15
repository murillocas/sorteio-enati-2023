<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
//import cardEventosVue from './components/cardEventos.vue'
//import componenteInscritosVue from './components/componenteInscritos.vue'

//import Programacao from './components/listaEventos.vue'
//<Programacao/>

export default {
  name: 'App',
  components: {
   //Programacao,
    //componenteInscritosVue
    //cardEventosVue
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500;700&display=swap');

*{
  margin: 0;
}
a{
  text-decoration:none;

}
#app{
 display: flex;
 align-items: center;
 justify-content: center;
  width: 100%;
}
body{
  font-family: 'Roboto', sans-serif;

  display: flex;
  align-items: center;
  justify-content: center;
}


</style>
