<template>
  <div>
    test
    <!-- <component
      :is="geselecteerdeOefening"
      :strookId="props.strookId"
    ></component> -->
  </div>
</template>

<script lang="ts" setup>
/*
Aan dit bestand moet niets gewijzigd worden.  Het moet enkel in de map geplaatst worden van zijn deeloefeningen.
Het bestand lijst.js moet aangepast worden en zorgt voor de rest



*/

import oefenvormLijst from './lijst.js';
// import { mapStores } from 'pinia';
import { useBesturingStore } from 'src/stores/besturing-store';
import { computed } from 'vue';

const besturingStore = useBesturingStore();
const props = defineProps({
  strookId: {
    type: String,
    required: true,
  },
});
const geselecteerdeOefening = computed(() => {
  var oefenlabel =
    besturingStore.geselecteerdeOefeningen['strook' + props.strookId];
  console.log('geselecteerdeOefening', oefenlabel);
  for (var i = 0; i < oefenvormLijst.length; i++) {
    if (oefenvormLijst[i].label == oefenlabel) {
      return oefenvormLijst[i].component;
    }
  }
  console.log('niets gevonden');
  return oefenvormLijst[0].component;
});

// export default {
//
//     geselecteerdeOefening() {
//       var oefenlabel =
//         this.besturingStore.geselecteerdeOefeningen['strook' + this.strookId];
//       console.log('geselecteerdeOefening', oefenlabel);
//       for (var i = 0; i < oefenvormLijst.length; i++) {
//         if (oefenvormLijst[i].label == oefenlabel) {
//           return oefenvormLijst[i].component;
//         }
//       }
//       console.log('niets gevonden');
//       return oefenvormLijst[0].component;
//     },
//   },
//   props: ['strookId'],
// };
</script>
