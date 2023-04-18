<template>
<div>
  
    <div class="text-caption">Welke tafels?</div>
    <multiselect
        :options="optionsTafels"
        :selectie.sync="geselecteerdeTafels"
        split="10" />
    <div class="text-caption">Welke bewerkingen?</div>
    <multiselect
        :options="optionsBewerkingen"
        :selectie.sync="geselecteerdeBewerkingen"
        :spread="false" />
        <div class="text-caption">Hoeveel oefeningen op een blad</div>
        <q-btn-toggle
            v-model="aantal"
            @click="RekenUit"
            push
            color='white text-grey'
            toggle-color="indigo-7  "
            :options="[
          {label: '20', value: '20'},
          {label: '30', value: '30'},
          {label: '40', value: '40'},
          {label: '45', value: '45'},
          {label: '60', value: '60'},
         
        ]" />
    


</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import _ from "lodash";
import Tafeloefening from "src/classes/Tafeloefening";


export default {
  data() {
    return {
      aantal: "45",
      geselecteerdeTafels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      optionsTafels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      geselecteerdeBewerkingen: ["x", ":"],

      optionsBewerkingen: ["x", ":"]
    };
  },
  components:{
    "multiselect": require("components/werkbladfabriek/ui/multiselect").default
  },
  methods: {
    ...mapActions("drill", ["setAantal", "setDrillOefeningen", "triggerDrill"]),
    RekenUit() {
      console.log("this.aantal", this.aantal);
      var oefeningen = [];

      var tafeloefening = new Tafeloefening(this.geselecteerdeTafels);
      oefeningen = tafeloefening.getReeks(
        this.geselecteerdeBewerkingen,
        Number(this.aantal)
      );

      //      this.saveDrillSettings(JSON.parse(JSON.stringify(settings)));
      this.setAantal(this.aantal);
      this.setDrillOefeningen(oefeningen);
      this.triggerDrill(false);
    }
  },
  computed: {
    ...mapGetters("drill", ["drillTriggered"])
  },
  watch: {
    drillTriggered(value) {
      if (value) {
        this.RekenUit();
      }
    }
  }
};
</script>

<style>
</style>
