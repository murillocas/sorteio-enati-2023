//import Vue from 'vue';
//import VueRouter from 'vue-router';
//import { defineAsyncComponent } from 'vue'

//import Programacao from '@/components/ProgramacaoEvento.vue'
//import Inscritos from '@/components/componenteInscritos.vue'

//const Programacao = defineAsyncComponent(() => import('@/components/listaEventos.vue'))
//const Inscritos = defineAsyncComponent(() => import('@/components/componenteInscritos.vue'))



const routes = [
    {
        path:'/',name:"Eventos",
        component:() => import('@/components/listaEventos.vue')
    },{
        path:'/programacao/:url',
        component:() => import('@/components/componenteProgramacao.vue')

    },{
        path : '/inscritos/:url/:idEvent',name: "Inscritos",
        component:() => import('@/components/componenteInscritos.vue'),
    }


]

//const router = new VueRouter({
    //routes
  //});
  
  export default routes;