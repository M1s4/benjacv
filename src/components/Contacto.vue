<template>
   <div class="d-flex  mt-13">
       <v-card  width="45%" class="pl-2 grey--text" height="250" elevation="0" color="transparent">
          <p class="text-left font-weight-bold text-overline" >
            <v-icon left color="grey">mdi-minus</v-icon>
            {{ $t('contacto.titulo') }} 
          </p>
          <div class="text-left pt-3">
              <p class="font-weight-bold text-subtitle-1 mb-2">{{ $t('contacto.pregunta') }} </p>
              <v-btn  outlined color="grey" class="text-caption rounded-0" target="_blank" href="https://api.whatsapp.com/send?phone=3223524812&text=Hola!%20">
                  <v-icon left>
                      mdi-whatsapp
                  </v-icon>
                   WHATSAPP                  
              </v-btn>
          </div>        
          <div class="text-left pt-15">
              <v-btn text x-small >
                  <v-icon small color="grey" target="_blank" href="https://www.facebook.com/benja.whereisbj">
                      mdi-facebook
                  </v-icon>
              </v-btn>
              <v-btn text x-small href="#" >
                  <v-icon small color="grey">
                      mdi-youtube
                  </v-icon>
              </v-btn>
          </div>
       </v-card>
       <v-card width="55%" height="auto" class="rounded-0" color="transparent" elevation="0">         
          <v-img width="100%"  height="100%"  :src="require('../assets/imgcontacto.jpg')"
                gradient="to left, rgba(21,22,24,.1), rgba(21,22,24,.1)">
          </v-img>
       </v-card>
      
   </div>
</template>

<script>
export default {

}
</script>

<style>

</style>