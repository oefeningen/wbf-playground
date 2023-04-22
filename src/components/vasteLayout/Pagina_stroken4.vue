<template>
  <q-page class="justify-center">
    <div class="blad">
      <pagina-hoofding>
        <slot name="titel"></slot>
      </pagina-hoofding>
      <div id="pos1">
        <slot name="strook1">
          <leeg-kader></leeg-kader>
        </slot>
      </div>
      <div id="pos2">
        <slot name="strook2">
          <leeg-kader></leeg-kader>
        </slot>
      </div>
      <div id="pos3">
        <slot name="strook3">
          <leeg-kader></leeg-kader>
        </slot>
      </div>
      <div id="pos4">
        <slot name="strook4">
          <leeg-kader></leeg-kader>
        </slot>
      </div>
      <div id="posfoot">
        <pagina-footer></pagina-footer>
      </div>
    </div>

    <div class="zijbalk">
      <q-card>
        <q-card class="my-card bg-secondary instellingveld">
          <q-card-section class="q-pa-sm">
            <div class="text-h6">Instellingen</div>
          </q-card-section>
          <slot name="instellingen">
            <div class="q-pa-sm">nog geen instellingen</div>
          </slot>
          <q-separator />
          <q-card-actions>
            <q-space></q-space>
            <besturing-knoppen />
          </q-card-actions>
        </q-card>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
// import { uid } from 'quasar';
// import * as htmlToImage from "html-to-image"
import PaginaHoofding from './PaginaHoofding.vue';
import PaginaFooter from './PaginaFooter.vue';
import LeegKader from './leegKader4.vue';
// import knoppenRij from './knoppenrij.vue';
import besturingKnoppen from './besturingKnoppen.vue';
import { useBesturingStore } from 'src/stores/besturing-store';

// const props = defineProps({
//   map: Object,
// });
const besturingStore = useBesturingStore();

const filterNonPrinting = () => {
  return (node) => node.className != 'print-hide';
};
</script>
<style scoped>
.blad {
  position: relative;
  width: 21cm;
  height: 29.7cm;
  background-color: white;
  border: 0.5px dashed grey;
  padding: 0.8cm;
}
@media print {
  .blad {
    position: relative;
    width: 21cm;
    height: 29.7cm;
    background-color: white;
    border: none;
    padding: 0.8cm;
  }
}
@page {
  margin: 0;
}

#pos1 {
  background-color: white;
  position: absolute;
  top: 3.5cm;
}
#pos2 {
  background-color: white;
  position: absolute;
  top: 9.5cm;
}
#pos3 {
  background-color: white;
  position: absolute;
  top: 15.5cm;
}
#pos4 {
  background-color: white;
  position: absolute;
  top: 21.5cm;
}
#posfoot {
  background-color: white;
  position: absolute;
  top: 27.9cm;
  width: 19cm;
}
.zijbalk {
  position: fixed;
  left: 22cm;
  top: 2cm;
}
.instellingveld {
  width: 290px;
  padding: 10px;
}
</style>
