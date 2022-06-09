<template>
<v-app>
  <v-card id="app" elevation="0" >
    <HelloWorld />
    <Inicio id="inicio"/>
    <sobremi id="sobremi"/>
    <portafolio id="portafolio"/>
    <Contacto id="contacto"/>
    <ancla />
  </v-card>
</v-app>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Inicio from './components/Inicio.vue'
import Sobremi from './components/Sobremi.vue'
import Contacto from './components/Contacto.vue'
import Portafolio from './components/Portafolio.vue'
import Ancla from './components/Btnancla.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Inicio,
    Sobremi,
    Contacto,
    Portafolio,
    Ancla
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #151618;
  margin-top: 50px;
  
}
</style>
