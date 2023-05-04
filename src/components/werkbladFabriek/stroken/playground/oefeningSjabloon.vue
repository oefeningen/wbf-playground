<template>
  <div>
    <leegKader4 :strookId="props.strookId" :oefenvormen="props.oefenvormen">
      <template #settings>
        Hier de settings
        <uitrekenKnop @click="uitrekenen" />
      </template>
      <template #oefening>
        <oefening-titel :strookId="props.strookId"
          >De titel van je oefening</oefening-titel
        >
        <!-- {{ type1 }}
        <selectieChip :item="type1" v-model="type1.frequentie" /> -->
        <p>Appelmoest</p>
        {{ oefentypes }}
        <selectieChip
          v-for="oefentype in oefentypes"
          :key="oefentype.titel"
          :item="oefentype"
          v-model="oefentype.frequentie"
        />
        hier zie je de oefening {{ generatieId }}
      </template>
    </leegKader4>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue';
import leegKader4 from 'src/components/vasteLayout/leegKader4.vue';
import useStrookBesturing from 'src/components/composables/useStrookBesturing';
import multiSelect from 'src/components/ui/multiSelect.vue';
import oefeningTitel from 'src/components/vasteLayout/oefeningTitel.vue';
import uitrekenKnop from 'src/components/ui/uitrekenKnop.vue';

import selectieChip from 'src/components/ui/selectieChip.vue';

const type1 = reactive({
  titel: 'titel',
  frequentie: 1,
  voorbeeld: 'voorbeeld',
  plus: 'plus',
  min: 'min',
});

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

const props = defineProps({
  strookId: {
    type: String,
  },
  oefenvormen: {
    type: Array,
  },
});

const uitrekenen = () => {
  console.log('uitrekenen');
};

//Dit hier na uitrekenfunctie zetten
const { opties, toonOplossing, generatieId } = useStrookBesturing(
  props.strookId,
  uitrekenen
);
onMounted(uitrekenen);
</script>

<style lang="scss" scoped></style>
