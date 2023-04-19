<template>
  <div>
    <q-scroll-area ref="scrollArea" :style="hoogteStijl">
      <Pagina_stroken4 class="bladspiegel" @wisselWerkblad="wisselWerkblad">
        <div v-slot="titel">Tafels</div>
        <mainTafels v-slot="strook1" strookId="1"></mainTafels>
        <mainTafels #strook2 strookId="2"></mainTafels>
        <mainTafels #strook3 strookId="3"></mainTafels>
        <mainTafels #strook4 strookId="4"></mainTafels>
        <div slot="instellingen"><instellingen /></div>
      </Pagina_stroken4>
    </q-scroll-area>
    <q-btn @click="Scrollen" fab class="scrollknop fixed-bottom"
      ><q-icon v-if="scrolled2top" name="keyboard_arrow_down" /><q-icon
        v-else
        name="keyboard_arrow_up"
    /></q-btn>
  </div>
</template>

<script>
import paginaMix from 'src/mixins/paginaMix';
import mainTafels from './stroken/tafels/mainTafels.vue';
// import MainTafels from "src/BU/werkbladfabriek/stroken/tafels/mainTafels.vue";
import Pagina_stroken4 from '../vasteLayout/Pagina_stroken4.vue';
import instellingen from './stroken/tafels/instellingen.vue';

export default {
  emits: ['wisselWerkblad'],
  components: {
    instellingen,
    mainTafels,
    Pagina_stroken4,
  },
  mixins: [paginaMix],
};
</script>

<style scoped>
.scrollknop {
  position: fixed;
  left: 22cm;
  margin-bottom: 0.5cm;
}
</style>
