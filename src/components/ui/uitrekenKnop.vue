<template>
  <q-btn size="sm" flat text-gray>
    <q-avatar icon="refresh" size="sm"></q-avatar>
  </q-btn>
</template>

<script setup>
import { useBesturingStore } from 'src/stores/besturing-store';
import { uid } from 'quasar';

const besturingStore = useBesturingStore();

const props = defineProps({
  strookId: {
    type: String,
  },
});
const rekenUit = () => {
  besturingStore.generatieIds['strook' + strookId] = uid();
};
</script>

<style></style>
