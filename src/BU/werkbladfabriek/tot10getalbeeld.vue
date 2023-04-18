<template>
<div>
    <q-scroll-area ref="scrollArea" :style="hoogteStijl" >
        <werkblad class="bladspiegel">
            <div slot="titel">Rekenen tot 10 </div>
            <div slot="oefenruimte">
               
                <div  class="oefenruimte column justify-start content-between">
                    <div class="fit row wrap justify-around" >
                      <oefening v-for="i in Number(aantal)" :key="'oef'+i" :size="size" class="q-mb-xl"/>

                      
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
//TODO teltekeningen
//TODO getalbeeld inpakken met som eronder

export default {
  components: {
    oefenkolom: require("components/werkbladfabriek/ui/oefenkolom").default,
    werkblad: require("components/werkbladfabriek/vaste_layout/Pagina_drill").default,
    instellingen: require("components/werkbladfabriek/stroken/tot10getalbeeld/instellingen").default,
    oefening: require("components/werkbladfabriek/stroken/tot10getalbeeld/oefening").default,
    
  },
  mixins: [paginaMix],
  methods: {
   
  },
  computed: {
    ...mapGetters("drill", ["aantal", "oefeningen"]),
    ...mapGetters("besturing", ["toonOplossing"]),
    size(){
      if(this.aantal =="10"){
        return '5'
      }
      if(this.aantal =="15"){
        return '5'
      }
       if(this.aantal =="20"){
        return '4'
      }
       if(this.aantal =="30"){
        return '3.5'
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
}
</style>
