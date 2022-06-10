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
        {{ $t('menu.sobremi') }} 
      </v-btn>
      <v-btn
        class="text-caption white--text font-weight-bold px-3"
        text
        plain
        @click="$vuetify.goTo('#portafolio')"
      >
        {{ $t('menu.portafolio') }} 
      </v-btn>
      <v-btn
        class="text-caption white--text font-weight-bold px-3"
        text
        plain
        @click="$vuetify.goTo('#contacto')"
      >
        {{ $t('menu.contacto') }} 
      </v-btn>
      <v-spacer></v-spacer>

      <v-btn-toggle   v-model="toggle_exclusive"
          mandatory
        
        group>
         <v-btn
        class="white--text px-3"
        v-for="language in languages"
        :key="language.locale"
        @click="changeLanguage(language.locale)"     
        fab   
        rounded
        x-small
        plain
      >     
       <img width="15" :src="require(`../assets/${language.src}`)">
      </v-btn>
      </v-btn-toggle>
     

      <v-spacer></v-spacer>
    </v-app-bar>
  </v-card>
</template>

<script>
import { i18n } from "@/plugins/i18n";
export default {
  name: "HelloWorld",

  data() {
    return {
      icon: "mex.svg",
      city: [{ locale: "es" }, { locale: "en" }],
      languages: [
        {
          locale: "es",
          title: "Esp",
          src: "mex.svg",
        },
        {
          locale: "en",
          title: "Eng",
          src: "usa.svg",
        },
      ],
    };
  },
  methods: {
    changeIcon() {
      this.icon = this.icon === "mex.svg" ? "usa.svg" : "mex.svg";
      i18n.locale = this.city === "es" ? "en" : "es";
    },
    changeLanguage(locale) {
      i18n.locale = locale;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
