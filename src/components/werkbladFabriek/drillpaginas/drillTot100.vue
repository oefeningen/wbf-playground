<template>
  <drillSjabloon>
    <template #titel>Tafels</template>
    <template #instellingen>
      <div class="text-caption">Welke tafels?</div>
      <selectieChip
        v-for="oefentype in oefentypes"
        :key="oefentype.titel"
        :item="oefentype"
        v-model="oefentype.frequentie"
      />
      <div class="text-caption">Hoeveel oefeningen?</div>
      <q-btn-toggle
        v-model="besturingStore.aantal"
        @click="uitrekenen"
        push
        color="white text-grey"
        toggle-color="indigo-7  "
        :options="[
          { label: '20', value: '20' },
          { label: '30', value: '30' },
          { label: '40', value: '40' },
          { label: '45', value: '45' },
          { label: '60', value: '60' },
        ]"
      />
    </template>
  </drillSjabloon>
</template>

<script setup>
import drillSjabloon from 'src/components/vasteLayout/drillSjabloon.vue';
import multiSelect from 'src/components/ui/multiSelect.vue';
import { useBesturingStore } from 'src/stores/besturing-store';
import useDrillBesturing from 'src/components/composables/useDrillBesturing';
import Tafeloefening from 'src/classes/Tafeloefening';
import selectieChip from 'src/components/ui/selectieChip.vue';

const oefentypes = ref([
  {
    titel: 'tot 10',
    frequentie: 2,
    voorbeeld: '5+4',
    plus: 'plusTot10',
    min: 'minTot10',
  },
  {
    titel: 'samenstellen',
    frequentie: 2,
    voorbeeld: '10 + 4, 15-10',
    plus: 'samenstellenTot20plus',
    min: 'samenstellenTot20min',
  },
]);

const besturingStore = useBesturingStore();

import { ref } from 'vue';
import DrillSjabloon from 'src/components/vasteLayout/drillSjabloon.vue';

const geselecteerdeTafels = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
const optionsTafels = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
const geselecteerdeBewerkingen = ref(['x', ':']);
const optionsBewerkingen = ref(['x', ':']);

const uitrekenen = () => {
  console.log('uitrekenen in bron');
  console.log('aantal', besturingStore.aantal);

  var tafeloefening = new Tafeloefening(geselecteerdeTafels.value);
  besturingStore.oefeningen = tafeloefening.getReeks(
    geselecteerdeBewerkingen.value,
    besturingStore.aantal
  );
};

const { toonOplossing, generatieId } = useDrillBesturing(uitrekenen);
</script>

<style lang="scss" scoped></style>
