<template>
<leeg-kader :oefenvormen="oefenvormen" :strookId="strookId">
    <div slot="settings">
        <multiselect
            :options="optionsTafels"
            :selectie.sync="geselecteerdeTafels"
            split="10" />
        <uitrekenknop @click="SaveSettingsEnReken">Reken uit</uitrekenknop>
    </div>
    <div slot="oefening">
        <oefeningtitel :toonTitel="toonTitel">Tafelsporen</oefeningtitel>
         <div class="fit row justify-around">
          
           <spoor ref="spoor1" :geselecteerdeTafels="geselecteerdeTafels"  :toonOplossing="toonOplossing"></spoor>
            <spoor ref="spoor2" :geselecteerdeTafels="geselecteerdeTafels"  :toonOplossing="toonOplossing"></spoor>
           <spoor ref="spoor3" :geselecteerdeTafels="geselecteerdeTafels"  :toonOplossing="toonOplossing"></spoor>

        </div>
    </div>
</leeg-kader>
</template>

<script>
//Vaste imports
import besturingStrook from "src/mixins/besturingStrook.js";
import oefenvormLijst from "./lijst.js";
import spoor from "src/components/werkbladfabriek/stroken/tafels/parts/tafelspoor";

//Inherent aan de oefening

import _ from "lodash";
import Tafeloefening from "src/classes/Tafeloefening";

export default {
  mixins: [besturingStrook],
  components: {
    spoor
  },
  data() {
    return {
      //Vaste data
      oefenvormen: oefenvormLijst,

      //Inherent aan de oefening
      optionsTafels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      optionsBewerkingen: ["x", ":"],

      aantal: "15",
      oefenreeks1: [],
      oefenreeks2: [],
      oefenreeks3: [],
      oefenreeksen: [],
      geselecteerdeTafels: [],
      geselecteerdeBewerkingen: ["x"]
    };
  },

  methods: {
    uitrekenen() {
      // console.log("uitrekenen");
      // instellingen gelijkmaken met hoofdinstellingen
      this.OpgehaaldeOpties = this.getOpties();

      console.log(
        "opgehaalde opties uitrekenen() in testtafels",
        this.OpgehaaldeOpties
      );
      if (this.OpgehaaldeOpties.geselecteerdeTafels) {
        this.geselecteerdeTafels = this.OpgehaaldeOpties.geselecteerdeTafels;
      }

      this.$refs.spoor1.uitrekenen();
      this.$refs.spoor2.uitrekenen();
      this.$refs.spoor3.uitrekenen();
      this.uitrekenenFinished();
    },
    SaveSettingsEnReken() {
      console.log("uitrekenen en savesettings !!");
      var LocaleOpties = {
        geselecteerdeTafels: this.geselecteerdeTafels
      };
      this.setOpties(LocaleOpties);
      console.log("tot hier");
      this.setStartUitrekenen();
    }
  },
  computed: {
    breedte() {
      return 100 / (this.aantal / 5) + "%";
    }
  }
};
</script>

<style scoped>
p {
  font-size: 1.1em;
}
</style>
