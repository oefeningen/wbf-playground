<template>
    <div>
      <q-scroll-area ref="scrollArea"  :style="hoogteStijl">
        <werkblad class="bladspiegel" @wisselWerkblad="wisselWerkblad">
            <div slot="titel">Romeinse cijfers</div>
            <test slot="strook1" strookId="1"></test>
            <test slot="strook2" strookId="2"></test>
            <test slot="strook3" strookId="3"></test>
            <test slot="strook4" strookId="4"></test>
            <div slot="instellingen"><instellingen/></div>
        </werkblad>
      </q-scroll-area>
      <q-btn @click="Scrollen" fab class="scrollknop fixed-bottom"><q-icon v-if="scrolled2top" name="keyboard_arrow_down"/><q-icon v-else name="keyboard_arrow_up"/></q-btn>
      
    </div>
</template>


<script>
import paginaMix from "src/mixins/paginaMix";

export default {
  emits:["wisselWerkblad"],
  components: {
    werkblad: require("components/werkbladfabriek/vaste_layout/Pagina_stroken4").default,
    test: require("components/werkbladfabriek/stroken/romeins/main_romeins").default,
    instellingen: require("components/werkbladfabriek/stroken/romeins/instellingen").default
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