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
#app{
 display: flex;
 align-items: center;
 justify-content: center;
 background-color: blueviolet;
width: 50%;
}
body{
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
