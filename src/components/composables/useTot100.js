import { onMounted, ref, watch, computed } from 'vue';
import _ from 'lodash';
import { uid } from 'quasar';
import { useBesturingStore } from 'src/stores/besturing-store';

export default function useTot100() {
  return {
    toonOplossing,
    generatieId,
  };
}
