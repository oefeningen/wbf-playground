<template>
  <div>
    <q-breadcrumbs>
      <q-breadcrumbs-el
        label="Terug"
        icon="backspace"
        @click="toonWerkblad = false"
      />
    </q-breadcrumbs>
    <div v-if="!toonWerkblad">
      <q-btn
        v-for="oef in oefenvormLijst"
        :key="oef.label"
        :label="oef.label"
        @click="loadWerkblad(oef)"
      />
    </div>
    <component :is="geselecteerdWerkblad" v-if="toonWerkblad"></component>
  </div>
</template>

<script setup>
/*
Aan dit bestand moet niets gewijzigd worden.  Het moet enkel in de map geplaatst worden van zijn deeloefeningen.
Het bestand lijst.js moet aangepast worden en zorgt voor de rest
*/

import { createPinia } from 'pinia';
import oefenvormLijst from './lijst.js';
import { useBesturingStore } from 'src/stores/besturing-store';
import { computed, ref } from 'vue';

const toonWerkblad = ref(false);
const geselecteerdWerkblad = ref(null);
const besturingStore = useBesturingStore();
const props = defineProps({
  strookId: {
    type: String,
    required: true,
  },
});

const loadWerkblad = (wb) => {
  geselecteerdWerkblad.value = wb.component;
  toonWerkblad.value = true;
};

const geselecteerdeOefening = computed(() => {
  var oefenlabel =
    besturingStore.geselecteerdeOefeningen['strook' + props.strookId];

  for (var i = 0; i < oefenvormLijst.length; i++) {
    if (oefenvormLijst[i].label == oefenlabel) {
      console.log('geselecteerdeOefening', oefenlabel);
      console.log('geselecteerdecomponent', oefenvormLijst[i].component);
      return oefenvormLijst[i].component;
    }
  }
  console.log('niets gevonden');
  return oefenvormLijst[0].component;
});
</script>
