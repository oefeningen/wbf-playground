<template>
  <div>
    <p contenteditable="true" v-if="!hideTitel"><slot> </slot></p>
    <p class="onzichtbaar" v-else text-white>_</p>
  </div>
</template>

<script setup>
import { useBesturingStore } from 'src/stores/besturing-store';
import { computed } from 'vue';

const besturingStore = useBesturingStore();
const props = defineProps({
  strookId: {
    type: String,
  },
});
const hideTitel = computed(() => {
  if (besturingStore.opties['strook' + props.strookId].hideTitel) {
    return true;
  } else {
    return false;
  }
});
</script>

<style scoped>
p {
  font-weight: 600;
  position: relative;
  left: -5px;
  font-size: 1.2em;
}
.onzichtbaar {
  border: none;
}
</style>
