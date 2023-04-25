<template>
  <div>
    <leegKader4 :strookId="props.strookId" :oefenvormen="props.oefenvormen">
      <template #settings>
        <multiSelect
          :options="optionsTafels"
          v-model:selectie="opties.geselecteerdeTafels"
          split="10"
        />
        <div class="text-caption">moeilijkheid</div>
        <multiSelect
          :options="optionsRupsen"
          v-model:selectie="opties.geselecteerdeRupsOpties"
          split="10"
        />

        <uitrekenKnop @click="uitrekenen" />
      </template>
      <template #oefening>
        <oefening-titel :strookId="props.strookId">Rupsen</oefening-titel>

        <tafelRupsOef
          class="omhoog"
          :generatieId="SubGeneratieId"
          :geselecteerdeTafels="opties.geselecteerdeTafels"
          :geselecteerdeRupsOpties="opties.geselecteerdeRupsOpties"
          :toonOplossing="toonOplossing"
        ></tafelRupsOef>
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
import tafelRupsOef from './parts/tafelRupsOef.vue';

const optionsTafels = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
const optionsRupsen = ref(['start gegeven', 'zelf afleiden']);
const SubGeneratieId = ref('');

const init = () => {
  if (!opties.value.geselecteerdeRupsOpties) {
    opties.value.geselecteerdeRupsOpties = [];
  }
  uitrekenen();
};

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
onMounted(init);
</script>

<style lang="scss" scoped>
.omhoog {
  position: relative;
  top: -29px;
}
</style>
