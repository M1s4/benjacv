<template>
  <v-card class="overflow-hidden rounded-0">
    <v-app-bar app elevate-on-scroll color="#151618">
      <v-spacer></v-spacer>
      <v-btn
        class="text-caption white--text font-weight-bold px-3"
        text
        plain
        @click="$vuetify.goTo('#sobremi')"
      >
        Sobre mi
      </v-btn>
      <v-btn
        class="text-caption white--text font-weight-bold px-3"
        text
        plain
        @click="$vuetify.goTo('#portafolio')"
      >
        Portafolio
      </v-btn>
      <v-btn
        class="text-caption white--text font-weight-bold px-3"
        text
        plain
        @click="$vuetify.goTo('#contacto')"
      >
        Contacto
      </v-btn>
      <v-btn text @click="changeIcon" trasition>
       <img width="20" height="20" :src="require(`../assets/${icon}`)" alt="">
        
      </v-btn>
      <v-spacer></v-spacer>
    </v-app-bar>
  </v-card>
</template>

<script>
export default {
  name: "HelloWorld",

  data() {
    return {
      icon: "mex.svg",
    };
  },
  methods: {
    changeIcon() {
      this.icon = this.icon === "mex.svg" ? "usa.svg" : "mex.svg";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
