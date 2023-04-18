<template>
  <div>
    <!-- <component :is="geselecteerdeOefening" :strookId="strookId" :oefenvormen="oefenvormen"></component> -->
    <component :is="geselecteerdeOefening" :strookId="strookId"></component>
  </div>
</template>
    

<script>
/*
Aan dit bestand moet niets gewijzigd worden.  Het moet enkel in de map geplaatst worden van zijn deeloefeningen.
Het bestand lijst.js moet aangepast worden en zorgt voor de rest



*/

import oefenvormLijst from './lijst.js'
import { mapGetters } from 'vuex'

export default {
  data() {
    return {}
  },
  methods: {},
  computed: {
    ...mapGetters('besturing', ['getGeselecteerdeOefening']),
    geselecteerdeOefening() {
      var oefenlabel = this.getGeselecteerdeOefening(this.strookId)
      console.log('geselecteerdeOefening', oefenlabel)
      for (var i = 0; i < oefenvormLijst.length; i++) {
        if (oefenvormLijst[i].label == oefenlabel) {
          return oefenvormLijst[i].component
        }
      }
      console.log('niets gevonden')
      return oefenvormLijst[0].component
    }
  },
  props: ['strookId']
}
</script>
