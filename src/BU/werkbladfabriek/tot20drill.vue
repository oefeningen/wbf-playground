<template>
<div>
    <q-scroll-area ref="scrollArea" :style="hoogteStijl">
        <werkblad class="bladspiegel">
            <div slot="titel">Rekenen tot 20 </div>
            <div slot="oefenruimte">
               
                <div  class="oefenruimte column justify-around">
                    <div class="fit row wrap justify-around" v-if="bevat('A')" >
                        <oefenkolom :oefeningen="oefenreeks['A1']" v-if="bevat('A1')"></oefenkolom>
                        <oefenkolom :oefeningen="oefenreeks['A2']" v-if="bevat('A2')"></oefenkolom>
                        <oefenkolom :oefeningen="oefenreeks['A3']" v-if="bevat('A3')"></oefenkolom>
                    </div>
                    <div class="fit row wrap justify-around" v-if="bevat('B')">
                        <oefenkolom :oefeningen="oefenreeks['B1']" v-if="bevat('B1')"></oefenkolom>
                        <oefenkolom :oefeningen="oefenreeks['B2']" v-if="bevat('B2')"></oefenkolom>
                        <oefenkolom :oefeningen="oefenreeks['B3']" v-if="bevat('B3')"></oefenkolom>
                    </div>
                     <div class="fit row wrap justify-around" v-if="bevat('C')">
                        <oefenkolom :oefeningen="oefenreeks['C1']" v-if="bevat('C1')"></oefenkolom>
                        <oefenkolom :oefeningen="oefenreeks['C2']" v-if="bevat('C2')"></oefenkolom>
                        <oefenkolom :oefeningen="oefenreeks['C3']" v-if="bevat('C3')"></oefenkolom>
                    </div>
                    <div class="fit row wrap justify-around" v-if="bevat('D')">
                        <oefenkolom :oefeningen="oefenreeks['D1']" v-if="bevat('D1')"></oefenkolom>
                        <oefenkolom :oefeningen="oefenreeks['D2']" v-if="bevat('D2')"></oefenkolom>
                        <oefenkolom :oefeningen="oefenreeks['D3']" v-if="bevat('D3')"></oefenkolom>
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
    instellingen: require("components/werkbladfabriek/stroken/tot20drill/instellingen").default
  },
  mixins: [paginaMix],
  methods: {
    bevat(letter) {
      console.log(
        letter,
        this.kolomschema + " " + this.kolomschema.includes(letter)
      );
      if (this.kolomschema.includes(letter)) {
        return true;
      } else {
        return false;
      }
    }
  },
  computed: {
    ...mapGetters("drill", ["aantal", "oefeningen"]),
    ...mapGetters("besturing", ["toonOplossing"]),
    kolomschema() {
      if (this.aantal == "20") {
        return "A1-A2-B1-B2";
      } else if (this.aantal == "30") {
        return "A1-A2-B1-B2-C1-C2";
      } else if (this.aantal == "45") {
        return "A1-A2-A3-B1-B2-B3-C1-C2-C3";
      } else if (this.aantal == "40") {
        return "A1-A2-B1-B2-C1-C2-D1-D2";
      } else if (this.aantal == "60") {
        return "A1-A2-A3-B1-B2-B3-C1-C2-C3-D1-D2-D3";
      }
    },
    oefenreeks() {
      var reeks = {};
      var labels = this.kolomschema.split("-");

      for (var i = 0; i < labels.length; i++) {
        reeks[labels[i]] = this.oefeningen.slice(i * 5, i * 5 + 5);
      }
      return reeks;
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
