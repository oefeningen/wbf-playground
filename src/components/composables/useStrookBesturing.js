import { onMounted, ref, watch, computed } from 'vue';
import _ from 'lodash';
import { uid } from 'quasar';
import { useBesturingStore } from 'src/stores/besturing-store';

export default function useStrookBesturing(strookId, startActie) {
  const besturingStore = useBesturingStore();

  const generatieId = computed(() => {
    return besturingStore.generatieIds['strook' + strookId];
  });
  watch(generatieId, () => {
    startActie();
  });

  const opties = computed(() => {
    return besturingStore.opties['strook' + strookId];
  });

  const toonOplossing = computed(() => {
    return besturingStore.toonOplossing;
  });
  return {
    opties,
    toonOplossing,

    generatieId,
  };
}
