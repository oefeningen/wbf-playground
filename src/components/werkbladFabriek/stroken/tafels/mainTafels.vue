<template>
  <div>
    <component :is="geselecteerdeOefening" :strookId="strookId"></component>
  </div>
</template>

<script>
/*
Aan dit bestand moet niets gewijzigd worden.  Het moet enkel in de map geplaatst worden van zijn deeloefeningen.
Het bestand lijst.js moet aangepast worden en zorgt voor de rest



*/

import oefenvormLijst from './lijst.js';
import { mapStores } from 'pinia';
import { useBesturingStore } from 'src/stores/besturing-store';

export default {
  data() {
    return {};
  },
  methods: {},
  computed: {
    ...mapStores(useBesturingStore),
    geselecteerdeOefening() {
      var oefenlabel =
        this.besturingStore.geselecteerdeOefeningen['strook' + this.strookId];
      console.log('geselecteerdeOefening', oefenlabel);
      for (var i = 0; i < oefenvormLijst.length; i++) {
        if (oefenvormLijst[i].label == oefenlabel) {
          return oefenvormLijst[i].component;
        }
      }
      console.log('niets gevonden');
      return oefenvormLijst[0].component;
    },
  },
  props: ['strookId'],
};
</script>
