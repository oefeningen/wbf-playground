<template>
  <div>
    <div class="text-caption">Welke tafels?</div>
    {{ geselecteerdeTafels }}
    <multiSelect
      :options="optionsTafels"
      v-model:selectie="geselecteerdeTafels"
      split="10"
    />
    <div class="text-caption">Welke bewerkingen?</div>
    {{ geselecteerdeBewerkingen }}
    <multiSelect
      :options="optionsBewerkingen"
      v-model:selectie="geselecteerdeBewerkingen"
      :spread="false"
    />
    Welke oefeningen:
    {{ geselecteerdeOefeningen }}
    <oefeningSelectie
      v-model:geselecteerdeOefeningen="geselecteerdeOefeningen"
      :oefentypes="oefenvormen"
    />
  </div>
</template>

<script setup>
import oefenvormen from './lijst.js';
import oefeningSelectie from 'src/components/vasteLayout/oefeningSelectie.vue';
import multiSelect from 'src/components/ui/multiSelect.vue';
import { ref } from 'vue';

const geselecteerdeTafels = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
const optionsTafels = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
const geselecteerdeBewerkingen = ref(['x', ':']);
const optionsBewerkingen = ref(['x', ':']);
const geselecteerdeOefeningen = ref([]);
const oefentypes = ref(oefenvormen);

// const saveSettings = () => {
//   var settings = {
//     geselecteerdeTafels: geselecteerdeTafels.value,
//     geselecteerdeBewerkingen: geselecteerdeBewerkingen.value,
//   };
// };

// import instellingMix from 'src/mixins/instellingMix.js';

// export default {
//   data() {
//     return {
//       geselecteerdeTafels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//       optionsTafels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//       geselecteerdeBewerkingen: ['x', ':'],
//       geselecteerdeOefeningen: oefentypes,
//       optionsBewerkingen: ['x', ':'],
//       oefentypes: oefentypes,
//     };
//   },
//   components: {
//     oefenselectie: require('src/components/ui/oefenselectie').default,
//   },
//   mixins: [instellingMix],
//   methods: {
//     saveSettings() {
//       var settings = {
//         geselecteerdeTafels: this.geselecteerdeTafels,
//         geselecteerdeBewerkingen: this.geselecteerdeBewerkingen,
//       };
//       this.saveMainSettings(JSON.parse(JSON.stringify(settings)));
//     },
//   },
// };
</script>

<style></style>
