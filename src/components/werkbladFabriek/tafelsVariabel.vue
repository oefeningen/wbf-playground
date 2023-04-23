<template>
  <div>
    <div ref="scrollArea" :style="hoogteStijl">
      <Pagina_stroken4 class="bladspiegel">
        <template #titel>Tafels</template>
        <template #strook1><mainTafels strookId="1"></mainTafels></template>
        <template #strook2><mainTafels strookId="2"></mainTafels></template>
        <template #strook3><mainTafels strookId="3"></mainTafels></template>
        <template #strook4><mainTafels strookId="4"></mainTafels></template>
        <template #instellingen><instellingenTafels /></template>
      </Pagina_stroken4>
    </div>
    <!-- <q-btn @click="Scrollen" fab class="scrollknop fixed-bottom"
      ><q-icon v-if="scrolled2top" name="keyboard_arrow_down" /><q-icon
        v-else
        name="keyboard_arrow_up"
    /></q-btn> -->
  </div>
</template>

<script setup>
// import paginaMix from 'src/mixins/paginaMix';
import mainTafels from './stroken/tafels/mainTafels.vue';

import Pagina_stroken4 from '../vasteLayout/Pagina_stroken4.vue';
import instellingenTafels from './stroken/tafels/instellingenTafels.vue';

const hoogteStijl = '890px';

// export default {
//   emits: ['wisselWerkblad'],
//   components: {
//     instellingenTafels,
//     // mainTafels,
//     Pagina_stroken4,
//   },
//   // mixins: [paginaMix],
// };
</script>

<style scoped>
.scrollknop {
  position: fixed;
  left: 22cm;
  margin-bottom: 0.5cm;
}
</style>
