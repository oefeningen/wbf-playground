<template>
  <div><p contenteditable="true" v-if="toonTitel"><slot> </slot> </p>
  <p class="witteletters" v-else>_</p>
  </div>

</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["toonTitel"]
};
</script>

<style scoped>
p {
  font-weight: 600;
  font-size: 1.2em;
  color:black;
}
.witteletters{
  color:white;
  opacity: 0.0;

}
</style>
