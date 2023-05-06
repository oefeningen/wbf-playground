<template>
<div>
    <div class="row justify-center">
        <q-btn
            class="q-ma-sm"
            round
            color="lime-7"
            icon="refresh"
            @click="uitrekenen"
            >
            <q-tooltip :delay="1000">
                Reken opnieuw uit met deze instellingen
            </q-tooltip>
        </q-btn>
      

        <q-btn
            class="q-ma-sm"
            round
            glossy
            :color="(toonOplossing) ? 'deep-orange':'light-green-12'"
            @click="toggleOplossing"
            icon="check_circle_outline" >
            <q-tooltip :delay="1000">
          Toon/verberg de oplossing
        </q-tooltip>
        </q-btn>
        <!-- <q-btn
            class="q-ma-sm"
            round
            color="red"
            glossy
            icon="stars" /> -->
        <q-btn
            class="q-ma-sm"
            round
            glossy
            color="green-5"
            icon="print"
            @click="print" >
            <q-tooltip :delay="1000">
          Print
        </q-tooltip>
        </q-btn>
    </div>
</div>
</template>

<script>
//import {ezPrintJS} from "libs/ezprintjs.min.js";
import { mapActions, mapState } from "vuex";
import _ from "lodash"

export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions("besturing", ["toggleOplossing"]),
    ...mapActions("drill", ["triggerDrill"]),
    print() {
      ezPrintJS({
        target: ".bladspiegel",
        printCanvas: true,

        setPrintSize: "A4",
        keepSourceCSS: true,
        printInIframe: true,
        afterPrintCb: function() {
          console.log("printen klaar");
          //document.body.removeChild(vm.img)
          //vm.$store.commit("setPrinting",false)
        }
      });
    },
    uitrekenen() {
      this.triggerDrill(true);
    }
  },
  computed: {
    ...mapState("besturing", ["toonOplossing"])
  }
};
</script>

<style>
.bovenrij {
  margin-bottom: -10px;
}
@page {
  margin: 0;
}
</style>
