<template>
  <div>
    <leegKader4 :strookId="props.strookId" :oefenvormen="props.oefenvormen">
      <template #settings>
        <div>
          <p w-full>Welke tafels wil je gebruiken?</p>
          <multiSelect
            v-model:selectie="opties.geselecteerdeTafels"
            :options="optionsTafels"
          ></multiSelect>
        </div>
        <uitrekenKnop @click="uitrekenen" />
      </template>
      <template #oefening>
        <oefening-titel :strookId="props.strookId"
          >Tafelroosters</oefening-titel
        >

        <div class="fit row justify-around">
          <tafelRoosterEnkel
            :generatieId="SubGeneratieId"
            :geselecteerdeTafels="opties.geselecteerdeTafels"
            :toonOplossing="toonOplossing"
          ></tafelRoosterEnkel>
          <tafelRoosterEnkel
            :generatieId="SubGeneratieId"
            :geselecteerdeTafels="opties.geselecteerdeTafels"
            :toonOplossing="toonOplossing"
          ></tafelRoosterEnkel>
          <tafelRoosterEnkel
            :generatieId="SubGeneratieId"
            :geselecteerdeTafels="opties.geselecteerdeTafels"
            :toonOplossing="toonOplossing"
          ></tafelRoosterEnkel>
        </div>
      </template>
    </leegKader4>
  </div>
</template>

<script setup>
import { uid } from 'quasar';
import { ref, onMounted } from 'vue';
import leegKader4 from 'src/components/vasteLayout/leegKader4.vue';
import useStrookBesturing from 'src/components/composables/useStrookBesturing';
import multiSelect from 'src/components/ui/multiSelect.vue';
import oefeningTitel from 'src/components/vasteLayout/oefeningTitel.vue';
import uitrekenKnop from 'src/components/ui/uitrekenKnop.vue';
import tafelRoosterEnkel from './parts/tafelRoosterEnkel.vue';

const props = defineProps({
  strookId: {
    type: String,
  },
  oefenvormen: {
    type: Array,
  },
});
const SubGeneratieId = ref('');
const optionsTafels = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

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
