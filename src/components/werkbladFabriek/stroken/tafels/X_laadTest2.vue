<template>
  <div>
    <leegKader4 :strookId="props.strookId" :oefenvormen="props.oefenvormen">
      <template #settings>hier zie je de settings 2 </template>
      <template #oefening
        >hier zie je de oefening 2
        <multiSelect
          :options="optionsBewerkingen"
          v-model:selectie="geselecteerdeBewerkingen"
          :spread="false"
        />
      </template>
    </leegKader4>
  </div>
</template>

<script setup>
import leegKader4 from 'src/components/vasteLayout/leegKader4.vue';
import { ref } from 'vue';
import multiSelect from 'src/components/ui/multiSelect.vue';

const optionsBewerkingen = ref(['x', ':']);
const geselecteerdeBewerkingen = ref([]);

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
