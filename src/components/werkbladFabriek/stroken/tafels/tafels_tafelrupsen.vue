<template>
<leeg-kader :oefenvormen="oefenvormen" :strookId="strookId">
    <div slot="settings">
        <multiselect
            :options="optionsTafels"
            :selectie.sync="geselecteerdeTafels"
            split="10" />
            <div class="text-caption">moeilijkheid</div>
        <multiselect
            :options="optionsRupsen"
            :selectie.sync="geselecteerdeRupsOpties"
            split="10" />
            
        <uitrekenknop @click="SaveSettingsEnReken">Reken uit</uitrekenknop>
    </div>
    <div slot="oefening">
        <oefeningtitel :toonTitel="toonTitel">Vul de tafelrupsen aan</oefeningtitel>
         <div class="fit row justify-around">
          
           <tafelrups class="topalign" ref="spoor" :geselecteerdeTafels="geselecteerdeTafels"  :geselecteerdeRupsOpties="geselecteerdeRupsOpties" :toonOplossing="toonOplossing"></tafelrups>

        </div>
    </div>
</leeg-kader>
</template>

<script>
//Vaste imports
import besturingStrook from "src/mixins/besturingStrook.js";
import oefenvormLijst from "./lijst.js";
import tafelrups from "src/components/werkbladfabriek/stroken/tafels/parts/tafelrups";

//Inherent aan de oefening

import _ from "lodash";
import Tafeloefening from "src/classes/Tafeloefening";

export default {
  mixins: [besturingStrook],
  components: {
    tafelrups
  },
  data() {
    return {
      //Vaste data
      oefenvormen: oefenvormLijst,

      //Inherent aan de oefening
      optionsTafels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      optionsRupsen: ["start gegeven", "zelf afleiden"],

      geselecteerdeTafels: [],
      geselecteerdeRupsOpties: []
    };
  },

  methods: {
    uitrekenen() {
      console.log("uitrekenen");
      // instellingen gelijkmaken met hoofdinstellingen
      this.OpgehaaldeOpties = this.getOpties();

      console.log(
        "opgehaalde opties uitrekenen() in testtafels",
        this.OpgehaaldeOpties
      );
      if (this.OpgehaaldeOpties.geselecteerdeTafels) {
        this.geselecteerdeTafels = this.OpgehaaldeOpties.geselecteerdeTafels;
      }
      if (this.OpgehaaldeOpties.geselecteerdeRupsOpties) {
        this.geselecteerdeRupsOpties = this.OpgehaaldeOpties.geselecteerdeRupsOpties;
      }

      this.$refs.spoor.uitrekenen();
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
.topalign {
  position: absolute;
  top: 15px;
}
</style>
