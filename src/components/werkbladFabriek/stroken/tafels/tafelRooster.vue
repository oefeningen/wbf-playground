<template>
  <div>
    <leegKader4 :strookId="props.strookId" :oefenvormen="props.oefenvormen">
      <template #settings>
        Hier de settings
        <uitrekenKnop @click="uitrekenen" />
      </template>
      <template #oefening>
        <oefening-titel :strookId="props.strookId"
          >Tafelroosters</oefening-titel
        >

        <div class="fit row justify-around">
          <tafel-raster
            :generatieId="SubGeneratieId"
            :geselecteerdeTafels="opties.geselecteerdeTafels"
            :toonOplossing="toonOplossing"
          ></tafel-raster>
          <tafel-raster
            :generatieId="SubGeneratieId"
            :geselecteerdeTafels="opties.geselecteerdeTafels"
            :toonOplossing="toonOplossing"
          ></tafel-raster>
          <tafel-raster
            :generatieId="SubGeneratieId"
            :geselecteerdeTafels="opties.geselecteerdeTafels"
            :toonOplossing="toonOplossing"
          ></tafel-raster>
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
import tafelRaster from 'src/components/werkbladfabriek/stroken/tafels/parts/tafelRaster.vue';

const props = defineProps({
  strookId: {
    type: String,
  },
  oefenvormen: {
    type: Array,
  },
});
const SubGeneratieId = ref('');

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
