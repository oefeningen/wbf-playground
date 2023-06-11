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

        hier zie je de oefening {{ generatieId }}
      </template>
    </leegKader4>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import leegKader4 from 'src/components/vasteLayout/leegKader4.vue';
import useStrookBesturing from 'src/components/composables/useStrookBesturing';
import multiSelect from 'src/components/ui/multiSelect.vue';
import oefeningTitel from 'src/components/vasteLayout/oefeningTitel.vue';
import uitrekenKnop from 'src/components/ui/uitrekenKnop.vue';

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
