<template>
 <q-chip square removable :color="kleur" >
    <!-- <q-btn  flat size="sm"><q-avatar text-color="white"><frequentieicon :aantal="aantal" ></frequentieicon></q-avatar></q-btn> -->
    <q-avatar @click="veranderFrequentie" text-color="white"><frequentieicon :aantal="aantal" ></frequentieicon></q-avatar>
        
        <div> <span class="boventest"><slot name="boven"></slot></span>
        <slot></slot>
        <div class="ondertest"><slot name="onder"></slot></div>
</div>
      </q-chip>
    
</template>
<script>
import frequentieicon from "components/ui/frequentieicon";
export default {
  data() {
    return {
      kleur: "green"
    };
  },
  props: ["aantal"],
  components: {
    frequentieicon
  },
  methods: {
    veranderFrequentie(waarde) {
      var aantal = this.aantal
      console.log("veranderFrequentie");
      this.kleur = "green";
      if (aantal < 3) {
        aantal++;
      } else {
        aantal = 0;
        this.kleur = "grey";
      }
      this.$emit("update:aantal", aantal);

      //this.$emit('input', this.aantal);
    }
  }
};
</script>
<style scoped>
.boventest {
  position: relative;
  top: -5px;
  font-weight: 900;
  font-size: 1em;
}
.ondertest {
  width: 100%;
  position: absolute;
  top: 20px;
  text-align: center;
  font-size: 0.7em;
  left: 5px;
}
</style>