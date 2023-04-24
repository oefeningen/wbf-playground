<template>
  <div>
    <div flex-col>
      <p v-for="oef in oefentypes" :key="oef.label" h-3>
        <q-checkbox
          v-model="selectedExercises"
          :val="oef"
          dense
          :label="oef.label"
        />
      </p>
    </div>
    <!-- 
    <q-select
      filled
      bg-color="white"
      v-model="selectedExercises"
      multiple
      :options="oefentypes"
      use-chips
      stack-label
      label="Oefenvormen"
    /> -->
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  geselecteerdeOefeningen: {
    type: Array,
    required: true,
  },
  oefentypes: {
    type: Array,
    required: true,
  },
});

const emits = defineEmits(['update:geselecteerdeOefeningen']);

const selectedExercises = ref(props.geselecteerdeOefeningen);

watch(
  selectedExercises,
  (newVal) => {
    emits('update:geselecteerdeOefeningen', newVal);
  },
  { deep: true }
);
</script>
