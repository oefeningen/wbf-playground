import { onMounted, ref, watch, computed } from 'vue';
import _ from 'lodash';
import { uid } from 'quasar';
import { useBesturingStore } from 'src/stores/besturing-store';

export default function useStrookBesturing(startActie) {
  const besturingStore = useBesturingStore();

  const generatieId = computed(() => {
    return besturingStore.generatieIds.drill;
  });
  watch(generatieId, () => {
    startActie();
  });

  const toonOplossing = computed(() => {
    return besturingStore.toonOplossing;
  });
  return {
    toonOplossing,
    generatieId,
  };
}
