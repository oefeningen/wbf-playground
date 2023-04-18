<template>
<div>
    <q-scroll-area ref="scrollArea" :style="hoogteStijl" >
        <werkblad class="bladspiegel">
            <div slot="titel">Hoeken</div>
            <div slot="oefenruimte">
               
                <div  class="oefenruimte column justify-start content-between">
                    <div class="fit row wrap justify-around align-self" >
                      <oefening v-for="i in Number(aantal)" :key="'oef'+i" :size="size" class="q-mb-xs"/>

                      
                    </div>
                 
                   
                </div>

            </div>

            <div slot="instellingen">
                <instellingen />
            </div>
        </werkblad>
    </q-scroll-area>
    <q-btn
        @click="Scrollen"
        fab
        class="scrollknop fixed-bottom">
        <q-icon v-if="scrolled2top" name="keyboard_arrow_down" />
        <q-icon v-else name="keyboard_arrow_up" />
    </q-btn>

</div>
</template>

<script>
import paginaMix from "src/mixins/paginaMix";
import { mapGetters } from "vuex";


export default {
  components: {
    oefenkolom: require("components/werkbladfabriek/ui/oefenkolom").default,
    werkblad: require("components/werkbladfabriek/vaste_layout/Pagina_drill").default,
    instellingen: require("components/werkbladfabriek/stroken/hoeken/instellingen").default,
    oefening: require("components/werkbladfabriek/stroken/hoeken/oefening").default,
    
  },
  mixins: [paginaMix],
  methods: {
   
  },
  computed: {
    ...mapGetters("drill", ["aantal", "oefeningen"]),
    ...mapGetters("besturing", ["toonOplossing"]),
    size(){
      if(this.aantal =="9"){
        return '5'
      }
      if(this.aantal =="12"){
        return '4'
      }
       if(this.aantal =="15"){
        return '4'
      }
      

    }
   
  }
};
</script>

<style scoped>
.scrollknop {
  position: fixed;
  left: 22cm;
  margin-bottom: 0.5cm;
}
.oefenruimte {
  min-height: 24cm;
  height: 24cm;
}
</style>
