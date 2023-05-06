<template>
  <div>
    <p contenteditable="true" v-if="toonTitel"><slot> </slot></p>
    <p class="onzichtbaar" v-else text-white>_</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  props: ['toonTitel'],
};
</script>

<style scoped>
p {
  font-weight: 600;
  font-size: 1.2em;
}
.onzichtbaar {
  border: none;
}
</style>
