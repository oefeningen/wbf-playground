import { onMounted, ref, watch } from 'vue';
import { Quasar } from 'quasar';
import _ from 'lodash';

export default function usePage() {
  const scrolled2top = ref(false);

  const hoogteStijl = computed(() => {
    'height:' + Quasar.screen.height + 'px';
  });

  return {
    hoogteStijl,
  };
}
