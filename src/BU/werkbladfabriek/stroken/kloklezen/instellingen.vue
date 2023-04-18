<template>
  <div>
   
    <!-- <p>{{geselecteerdeTafels}}</p>  -->
    <oefenselectie
      :geselecteerdeOefeningen.sync="geselecteerdeOefeningen"
      :oefentypes="oefentypes"
    />
    <!-- <p>{{geselecteerdeOefeningen}}</p> -->
    <!-- <p>{{getTriggerShuffleOefeningen}}</p> -->
  </div>
</template>

<script>
import oefentypes from './lijst.js'
import instellingMix from 'src/mixins/instellingMix.js'

export default {
  data() {
    return {
      geselecteerdeTafels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      optionsTafels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      geselecteerdeBewerkingen: ['x', ':'],
      geselecteerdeOefeningen: oefentypes,
      optionsBewerkingen: ['x', ':'],
      oefentypes: oefentypes
    }
  },
  components: {
    oefenselectie: require('src/components/werkbladfabriek/ui/oefenselectie')
      .default
  },
  mixins: [instellingMix],
  methods: {
    saveSettings() {
      var settings = {
        geselecteerdeTafels: this.geselecteerdeTafels,
        geselecteerdeBewerkingen: this.geselecteerdeBewerkingen
      }
      this.saveMainSettings(JSON.parse(JSON.stringify(settings)))
    }
  }
}
</script>

<style>
</style>
