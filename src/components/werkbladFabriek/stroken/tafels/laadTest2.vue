<template>
  <div>
    <leegKader4 :strookId="props.strookId" :oefenvormen="props.oefenvormen">
      <template #settings>hier zie je de settings 2 </template>
      <template #oefening>hier zie je de oefening 2</template>
    </leegKader4>
  </div>
</template>

<script setup>
import leegKader4 from 'src/components/vasteLayout/leegKader4.vue';
const props = defineProps({
  strookId: {
    type: String,
  },
  oefenvormen: {
    type: Array,
  },
});
</script>

<style lang="scss" scoped></style>
