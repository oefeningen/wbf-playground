<template>
  <div class="kolom">
    <p v-for="(oef, key) in props.oefeningen" :key="key" :class="lettertype">
      {{ oef[0] }}
      <span v-if="besturingStore.toonOplossing" class="oplossing">{{
        oef[1]
      }}</span
      ><span v-else> <span class="breder" v-if="oef.length > 2">.</span> </span>
      <span v-if="oef.length > 2">{{ oef[2] }}</span>
    </p>
  </div>
</template>

<script setup>
import { useBesturingStore } from 'src/stores/besturing-store';
import { computed } from 'vue';

const besturingStore = useBesturingStore();

const props = defineProps({
  oefeningen: {
    type: Array,
  },
});

const lettertype = computed(() => {
  if (besturingStore.aantal == '20') {
    return 'supergroot';
  } else if (besturingStore.aantal == '30') {
    return 'groot';
  } else if (besturingStore.aantal == '60') {
    return 'klein';
  } else {
    return 'middel';
  }
});
</script>

<style scoped>
.groot {
  font-size: 1.7em;
}
.supergroot {
  font-size: 1.9em;
}
.middel {
  font-size: 1.3em;
}
.klein {
  font-size: 1.1em;
}
.oplossing {
  font-weight: 800;
}
.breder {
  margin-left: 3%;
  margin-right: 3%;
}
.kolom {
  min-width: 5.5cm;
}
</style>
