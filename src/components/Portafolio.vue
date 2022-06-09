<template>
  <div>
    <p class="text-left font-weight-bold text-overline grey--text ml-3">
      <v-icon left color="grey">mdi-minus</v-icon>
      Portafolio
    </p>
    <v-carousel
      v-model="model"
      hide-delimiter-background
      :show-arrows="false"
      cycle
      delimiter-icon="mdi-minus"
      class="pb-9"
      height="auto"
    >
      <v-carousel-item v-for="(item, i) in portafolio" :key="i">
        <v-sheet color="#151618" tile>
          <v-row class="" align="center" justify="center">
            <v-card
              color="#151618"
              class="mx-auto text-left pa-3 rounded-0"
              height=""
              elevation="0"
            >
              <v-img
                class="white--text align-end"
                max-height="200"
                max-width="100%"
                :src="require(`../assets/${item.src}`)"
                
                gradient="to bottom, rgba(21,22,24,.5), rgba(21,22,24.1)"
              >
                <v-card-title class="font-weight-bold text-h5"
                  >{{item.nombre}}
                  </v-card-title
                >
                <v-card-subtitle class="pb-0 grey--text text-caption"
                  >{{item.ciudad}}</v-card-subtitle
                >
              </v-img>
              <v-card-text class="text--primary">
                <p class="font-weigjt-bold text-subtitle-1 grey--text pt-3">
                  {{item.data}}
                </p>
                <div class="grey--text">
                  <p class="font-weight-bold">ritmos :</p>
                  <div class="d-flex">
                    <p class="grey--text text-body-2 font-weight-bold px-2" plain text x-small v-for="(itemm, i) in item.ritmos" :key="i">
                      {{itemm}}
                    </p>                   
                  </div>
                </div>
                
              </v-card-text>
            </v-card>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>


<script>
export default {
  data: () => ({
    model: 0,
    colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
    portafolio:{
      huejazz:{
        src:'huejazz.jpg',
        nombre:'Huejazz in the sand',
        ciudad:'Puerto Vallarta, Jal',
        data:'Puerto Vallarta Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
        ritmos:{
          0:'jazzlatino',
          1:'reggae',
          2:'soul-jazz'
        }      
          },
      garbo:{
        src:'garbo.jpg',
        nombre:'Garbo',
        ciudad:'Puerto Vallarta, Jal',
        data:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
        ritmos:{
          0:'jazzlatino',
          1:'reggae',
          2:'soul-jazz'
        }      
          },
          HulaSayula:{
        src:'HulaSayula.jpg',
        nombre:'Hula Sayula',
        ciudad:'Sayulita, Nay',
        data:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
        ritmos:{
          0:'jazzlatino',
          1:'reggae',
          3:'Ska',
          4:'Reggaeton'
        }      
          },
          Vidanta:{
        src:'vvidanta.jpg',
        nombre:'Vidanta',
        ciudad:'Jarretaderas, Nay',
        data:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
        ritmos:{
          0:'lehaciaalamamada',
          1:'bolero',
          3:'Ska',
          4:'Reggaeton'
        }      
          },
          PielCanela:{
        src:'pielcanela.jpg',
        nombre:'Piel Canela',
        ciudad:'Puerto Vallarta, Jal',
        data:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
        ritmos:{
          0:'Soul Jazz',
          1:'bolero',
          3:'Ska',
          4:'Reggaeton'
        }      
          },
    },
    image: "../assets/huejazz.jpg",
  }),
};
</script>