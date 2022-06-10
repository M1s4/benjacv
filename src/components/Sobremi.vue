<template>
  <v-card elevation="0" color="#151618" class="grey--text pa-4">
    <div>
      <div class="d-flex py-4">
        
        <p class="font-weight-bold text-subtitle-2" >
            <v-icon left color="grey">mdi-minus

            </v-icon >
            {{ $t('sobremi.titulo') }} 
        </p>
      </div>
      <p class="font-weight-light px-3 text-button text-left" >
        {{ $t('sobremi.data') }} 
      </p>
    </div>
    <div class="text-left pt-0 pa-4">
        <p>{{ $t('sobremi.titulo_redes') }} </p>
        <div class="pa-0 ma-0">
            <v-btn class="" text small target="_blank" href="https://www.facebook.com/benja.whereisbj">
               <v-icon color="grey" > mdi-facebook</v-icon>
           </v-btn>
           <v-btn class="" text small  target="_blank" href="https://api.whatsapp.com/send?phone=3223524812&text=Hola!%20">
               <v-icon color="grey" > mdi-whatsapp</v-icon>
           </v-btn>
        </div>
    </div>
    <v-btn icon  @click="$vuetify.goTo('#portafolio', 950)">
        <v-icon color="grey">mdi-chevron-down</v-icon>
    </v-btn>
  </v-card>
</template>

<script>
export default {};
</script>

<style>
</style>