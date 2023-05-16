<template>
  <div>Test</div>
  {{ oef }}
  {{ test }}
</template>

<script setup>
import { ref } from 'vue';
import useTot100 from './composables/useTot100';

const { getOefening } = useTot100();

const oef = ref('appelmoes');
const test = getOefening('TplusT');

oef.value = getOefening('TplusT');
</script>

<style lang="scss" scoped></style>
