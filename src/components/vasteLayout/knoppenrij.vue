<template>
  <div>
    <div class="row justify-center bovenrij">
      <q-btn
        class="q-ma-sm"
        round
        color="lime-7"
        icon="refresh"
        @click="RekenAllesUit"
      >
        <q-tooltip :delay="1000">
          Reken opnieuw uit met deze instellingen
        </q-tooltip>
      </q-btn>
      <q-btn
        class="q-ma-sm"
        round
        color="teal-4"
        glossy
        icon="shuffle"
        @click="shuffle"
      >
        <q-tooltip :delay="1000">
          Maak een nieuwe mix van oefeningen
        </q-tooltip>
      </q-btn>
    </div>
    <div class="row justify-center">
      <q-btn
        class="q-ma-sm"
        round
        glossy
        :color="besturingStore.toonOplossing ? 'deep-orange' : 'light-green-12'"
        @click="besturingStore.toonOplossing = !besturingStore.toonOplossing"
        icon="check_circle_outline"
      >
        <q-tooltip :delay="1000"> Toon/verberg de oplossing </q-tooltip>
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
        @click="print"
      >
        <q-tooltip :delay="1000"> Print </q-tooltip>
      </q-btn>
    </div>
  </div>
</template>

<script>
//import {ezPrintJS} from "libs/ezprintjs.min.js";
// import { mapActions, mapState } from 'vuex';
import { mapStores } from 'pinia';
import { useBesturingStore } from 'src/stores/besturing-store';

export default {
  data() {
    return {};
  },
  methods: {
    // ...mapActions("besturing", [
    //   "toggleOplossing",
    //   "triggerSaveMainSettings",
    //   "triggerShuffleOefeningen",
    //   "RekenAllesUit"
    // ]),
    RekenAllesUit() {},
    triggerSaveMainSettings(arg) {},
    triggerShuffleOefeningen(arg) {},

    print() {
      ezPrintJS({
        target: '.bladspiegel',
        printCanvas: true,

        setPrintSize: 'A4',
        keepSourceCSS: true,
        printInIframe: true,
        afterPrintCb: function () {
          console.log('printen klaar');
          //document.body.removeChild(vm.img)
          //vm.$store.commit("setPrinting",false)
        },
      });
    },
    shuffle() {
      this.triggerSaveMainSettings(true);
      this.triggerShuffleOefeningen(true);
    },
  },
  computed: {
    ...mapStores(useBesturingStore),
  },
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
