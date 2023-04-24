<template>
  <div>
    <leegKader4 :strookId="props.strookId" :oefenvormen="props.oefenvormen">
      <template #settings>hier zie je de settings : {{ opties }}</template>
      <template #oefening>hier zie je de oefening {{ generatieId }}</template>
    </leegKader4>
  </div>
</template>

<script setup>
import leegKader4 from 'src/components/vasteLayout/leegKader4.vue';
import useStrookBesturing from 'src/components/composables/useStrookBesturing';

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

const { opties, generatieId } = useStrookBesturing(props.strookId, uitrekenen);
</script>

<style lang="scss" scoped></style>
