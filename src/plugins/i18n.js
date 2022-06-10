import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
const messages = {
  es: {
    hello: 'Hola Mundo!',
   profesion:'Pianista',
   curso:'Clases de piano',
   menu:{
      sobremi:'sobre mi',
      portafolio:'Portafolio',
      contacto:'Contacto'
   },
   sobremi:{
    titulo:'SOBRE MI',
    data:'IT IS A LONG ESTABLISHED FACT THAT A READER WILL BE DISTRACTED BY THE READABLE CONTENT OF A PAGE WHEN LOOKING AT ITS LAYOUT. THE POINT OF USING LOREM IPSUM IS THAT IT HAS A MORE-OR-LESS NORMAL DISTRIBUTION OF LETTERS, AS OPPOSED TO USING CONTENT HERE, CONTENT HERE, MAKING IT LOOK LIKE READABLE ENGLISH.',
    titulo_redes:'redes sociales',
   }, 
   contacto:{
    titulo:'CONTACTO',
    pregunta:'¿NECESITAS MAS INFORMACION?',    
   },
   portafolio:{
    titulo:'PORTAFOLIO',
       huejazz:{
        titulo:'Huejazz in the sand',
        ciudad:'Puerto Vallarta, Jalisco',
        data:'Puerto Vallarta Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
        ritmos:{
          ritmo1:'reggaeton',
          ritmo2:'ska',
          ritmo3:'corridos',
          ritmo4:'corridos tumbados',
        }
       },
       garbo:{
        titulo:'Garbo',
        ciudad:'Puerto Vallarta, Jalisco',
        data:'Puerto Vallarta Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
        ritmos:{
          ritmo1:'reggaeton',
          ritmo2:'ska',
          ritmo3:'corridos',
          ritmo4:'corridos tumbados',
        }
       },
       hulasayula:{
        titulo:'Hula Sayula',
        ciudad:'Sayulita, Nayarit',
    data:'Puerto Vallarta Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
        ritmos:{
          ritmo1:'reggaeton',
          ritmo2:'ska',
          ritmo3:'corridos',
          ritmo4:'corridos tumbados',
        }
       },
       vidanta:{
        titulo:'Vidanta',
        ciudad:'Jarretaderas, Nayarit',
        data:'Puerto Vallarta Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
        ritmos:{
          ritmo1:'reggaeton',
          ritmo2:'ska',
          ritmo3:'corridos',
          ritmo4:'corridos tumbados',
        }
       },
       pielcanela:{
        titulo:'Piel Canela',
        ciudad:'Puerto',
        data:'Puerto Vallarta Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
        ritmos:{
          ritmo1:'reggaeton',
          ritmo2:'ska',
          ritmo3:'corridos',
          ritmo4:'corridos tumbados',
        }
       }
   }
  },
  en: {
    hello: 'Hello World!',
   profesion:'Pianist',
   curso:'Piano lessons',
   menu:{
    sobremi:'About me',
    portafolio:'Portfolio',
    contacto:'Contact'
   },
   sobremi:{
    titulo:'ABOUT ME',
    data:'Texto traducido ESTABLISHED FACT THAT A READER WILL BE DISTRACTED BY THE READABLE CONTENT OF A PAGE WHEN LOOKING AT ITS LAYOUT. THE POINT OF USING LOREM IPSUM IS THAT IT HAS A MORE-OR-LESS NORMAL DISTRIBUTION OF LETTERS, AS OPPOSED TO USING CONTENT HERE, CONTENT HERE, MAKING IT LOOK LIKE READABLE ENGLISH.',
    titulo_redes:'Social media',
   },   
   contacto:{
    titulo:'CONTACT',
    pregunta:'NEED MORE INFORMATION?',    
   },
   portafolio:{
    titulo:'PORTFOLIO',
    huejazz:{
     titulo:'Huejazz in the sand',
     ciudad:'Puerto Vallarta, Jalisco',
     data:'Puerto Vallarta Traducido is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
     ritmos:{
       ritmo1:'reggaeton',
       ritmo2:'ska',
       ritmo3:'clasicos',
       ritmo4:'soul jazz',
     }
    },
    garbo:{
     titulo:'Garbo',
     ciudad:'Puerto Vallarta, Jalisco',
     data:'Puerto Vallarta Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
     ritmos:{
       ritmo1:'reggaeton',
       ritmo2:'ska',
       ritmo3:'corridos',
       ritmo4:'corridos tumbados',
     }
    },
    hulasayula:{
     titulo:'Hula Sayula',
     ciudad:'Sayulita, Nayarit',
     data:'Puerto Vallarta Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
     ritmos:{
       ritmo1:'reggaeton',
       ritmo2:'ska',
       ritmo3:'corridos',
       ritmo4:'corridos tumbados',
     }
    },
    vidanta:{
     titulo:'Vidanta',
     ciudad:'Jarretaderas, Nayarit',
     data:'Puerto Vallarta Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
     ritmos:{
       ritmo1:'reggaeton',
       ritmo2:'ska',
       ritmo3:'corridos',
       ritmo4:'corridos tumbados',
     }
    },
    pielcanela:{
     titulo:'Piel Canela',
     ciudad:'Puerto',
     data:'Puerto Vallarta Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
     ritmos:{
       ritmo1:'reggaeton',
       ritmo2:'ska',
       ritmo3:'corridos',
       ritmo4:'corridos tumbados',
     }
    }
   }
   
  },

}

export const i18n = new VueI18n({
  locale: 'es',
  fallbackLocale: 'en',
  messages
})