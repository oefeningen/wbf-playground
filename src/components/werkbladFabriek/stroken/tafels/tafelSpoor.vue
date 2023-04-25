<template>
  <div>
    <leegKader4 :strookId="props.strookId" :oefenvormen="props.oefenvormen">
      <template #settings>
        <p w-full>Welke tafels wil je gebruiken?</p>
        <multiSelect
          v-model:selectie="opties.geselecteerdeTafels"
          :options="optionsTafels"
        ></multiSelect>
        <uitrekenKnop @click="uitrekenen" />
      </template>
      <template #oefening>
        <oefening-titel :strookId="props.strookId">Tafelspoor</oefening-titel>
        <div class="fit row justify-around">
          <tafelSpoorEnkel
            :generatieId="SubGeneratieId"
            :geselecteerdeTafels="opties.geselecteerdeTafels"
            :toonOplossing="toonOplossing"
          ></tafelSpoorEnkel>
          <tafelSpoorEnkel
            :generatieId="SubGeneratieId"
            :geselecteerdeTafels="opties.geselecteerdeTafels"
            :toonOplossing="toonOplossing"
          ></tafelSpoorEnkel>
          <tafelSpoorEnkel
            :generatieId="SubGeneratieId"
            :geselecteerdeTafels="opties.geselecteerdeTafels"
            :toonOplossing="toonOplossing"
          ></tafelSpoorEnkel>
        </div>
      </template>
    </leegKader4>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { uid } from 'quasar';
import leegKader4 from 'src/components/vasteLayout/leegKader4.vue';
import useStrookBesturing from 'src/components/composables/useStrookBesturing';
import multiSelect from 'src/components/ui/multiSelect.vue';
import oefeningTitel from 'src/components/vasteLayout/oefeningTitel.vue';
import uitrekenKnop from 'src/components/ui/uitrekenKnop.vue';
import tafelSpoorEnkel from './parts/tafelSpoorEnkel.vue';

const optionsTafels = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
const SubGeneratieId = ref('');

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
  SubGeneratieId.value = uid();
};

//Dit hier na uitrekenfunctie zetten
const { opties, toonOplossing, generatieId } = useStrookBesturing(
  props.strookId,
  uitrekenen
);
onMounted(uitrekenen);
</script>

<style lang="scss" scoped></style>
