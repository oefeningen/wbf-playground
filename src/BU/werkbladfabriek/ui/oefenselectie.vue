<template>
 <!-- v-model="oefs" -->
     <q-select
          filled
          bg-color="white"
          :value.sync="oefs"

          multiple
          @input="updateVeld($event)"
          :options="oefentypes"
          use-chips
          stack-label
          label="Oefenvormen"
        />
</template>
<script>
export default {
  props: ["geselecteerdeOefeningen", "oefentypes"],
  methods: {
    updateVeld(event) {
      var oefes = event;
      this.$emit("update:geselecteerdeOefeningen", oefes);
    }
  },
  computed: {
    oefs() {
      return this.geselecteerdeOefeningen;
    }
  }
};
</script>