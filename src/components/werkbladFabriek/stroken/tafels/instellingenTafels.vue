<template>
  <div>
    <div class="text-caption">Welke tafels?</div>
    <!-- {{ geselecteerdeTafels }} -->
    <multiSelect
      :options="optionsTafels"
      v-model:selectie="geselecteerdeTafels"
      split="10"
    />
    <div class="text-caption">Welke bewerkingen?</div>
    <!-- {{ geselecteerdeBewerkingen }} -->
    <multiSelect
      :options="optionsBewerkingen"
      v-model:selectie="geselecteerdeBewerkingen"
      :spread="false"
    />
    Welke oefeningen:
    <!-- {{ geselecteerdeOefeningen }} -->
    <oefeningSelectie
      v-model:geselecteerdeOefeningen="geselecteerdeOefeningen"
      :oefentypes="oefenvormen"
    />
    <besturingKnoppenInline
      :geselecteerdeOefeningen="geselecteerdeOefeningen"
      :opties="opties"
    />
  </div>
</template>

<script setup>
import oefenvormen from './lijst.js';
import besturingKnoppenInline from 'src/components/vasteLayout/besturingKnoppenInline.vue';
import oefeningSelectie from 'src/components/vasteLayout/oefeningSelectieCheckbox.vue';
import multiSelect from 'src/components/ui/multiSelect.vue';
import { ref, computed } from 'vue';

const geselecteerdeTafels = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
const optionsTafels = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
const geselecteerdeBewerkingen = ref(['x', ':']);
const optionsBewerkingen = ref(['x', ':']);
const geselecteerdeOefeningen = ref(oefenvormen);
const oefentypes = ref(oefenvormen);

const opties = computed(() => {
  return {
    geselecteerdeTafels: geselecteerdeTafels.value,
    geselecteerdeBewerkingen: geselecteerdeBewerkingen.value,
  };
});
</script>

<style></style>
