<template>
<div>
  <v-card class="d-flex justify-space-between pb-2" elevation="0" color="#151618" >
      <div class="d-flex pl-5 white--text">          
             <v-icon left color="grey" large >mdi-minus</v-icon> 
          <div class="d-flex flex-column align-start">
             
              <p class="font-weight-bold text-h5 mb-0">Benjamin Gutierrez</p>
              <p class="font-weight-light text-caption">
              {{ $t('profesion') }} / {{ $t('curso') }} 
              </p>
          </div>
      </div>
      <v-btn class="rounded-0" small  @click="$vuetify.goTo('#sobremi', 950)">
          <v-icon left>
              mdi-arrow-down-thin
          </v-icon>
      </v-btn>
  </v-card>
  <v-card width="auto" height="450" color="transparent" elevation="0" class="rounded-0 pa-0">
    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/F44-fkzITsk?start=99" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    
  </v-card>    
</div>

</template>

<script>
export default {

}
</script>

<style>

</style>