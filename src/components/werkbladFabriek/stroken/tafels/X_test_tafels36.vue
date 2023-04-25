<template>
<leeg-kader :oefenvormen="oefenvormen" :strookId="strookId">
    <div slot="settings">
        <multiselect
            :options="optionsTafels"
            :selectie.sync="geselecteerdeTafels"
            split="10" />
        <div class="text-caption">Welke bewerkingen?</div>
        <multiselect
            :options="optionsBewerkingen"
            :selectie.sync="geselecteerdeBewerkingen"
            :spread="false" />
        <div class="text-caption">Hoeveel?</div>
        <q-btn-toggle
            v-model="aantal"
            push
            dense
            toggle-color="primary"
            :options="[
          {label: '10', value: '10'},
          {label: '15', value: '15'},
          {label: '20', value: '20'},
          {label: '25', value: '25'}
        ]" />

        <uitrekenknop @click="SaveSettingsEnReken">Reken uit</uitrekenknop>
    </div>
    <div slot="oefening">
        <p>Dit is de tweede oefensoort++++++++++++ {{uitrekenstatus}}</p>
        <div class="fit row justify-between"  
        >
        <div v-for="(reeks,key) in oefenreeksen" :key="key" :style="'width:'+breedte+';'">
            <p
                v-for="(oef,key) in reeks"
                contenteditable="true"
                :key="'r1_'+key">{{oef[0]}} <span v-if="toonOplossing" class="oplossing">{{oef[1]}}</span></p>
        </div>
       

    </div>
    </div>
</leeg-kader>
</template>

<script>
//Vaste imports
import besturingStrook from "src/mixins/besturingStrook.js";
import oefenvormLijst from "./lijst.js";

//Inherent aan de oefening

import _ from "lodash";
import Tafeloefening from "src/classes/Tafeloefening";

export default {
  mixins: [besturingStrook],

  data() {
    return {
      //Vaste data
      oefenvormen: oefenvormLijst,

      //Inherent aan de oefening
      optionsTafels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      optionsBewerkingen: ["x", ":"],
      aantal: 15,
      oefenreeks1: [],
      oefenreeks2: [],
      oefenreeks3: [],
      oefenreeksen: [],
      geselecteerdeTafels: [],
      geselecteerdeBewerkingen: ["x"]
    };
  },

  methods: {
    SaveSettingsEnReken() {
      console.log("uitrekenen en savesettings");
      var opties = {};
      Object.assign(opties, {
        geselecteerdeTafels: this.geselecteerdeTafels,
        geselecteerdeBewerkingen: this.geselecteerdeBewerkingen
      });
      console.log("opties_test", opties);
      this.setOpties(opties);

      this.setStartUitrekenen();
    },
    uitrekenen() {
      // console.log("uitrekenen");
      this.opties = this.getOpties();
      if (this.opties.geselecteerdeTafels) {
        this.geselecteerdeTafels = this.opties.geselecteerdeTafels;
      }
      if (this.opties.geselecteerdeBewerkingen) {
        this.geselecteerdeBewerkingen = this.opties.geselecteerdeBewerkingen;
      }
      this.oefenreeksen = [];
      var tafeloefening = new Tafeloefening(this.opties.geselecteerdeTafels);
      for (var i = 0; i < this.aantal / 5; i++) {
        var reeks = tafeloefening.getReeks(
          this.opties.geselecteerdeBewerkingen,
          5
        );
        this.oefenreeksen.push(reeks);
      }
      // instellingen gelijkmaken met hoofdinstellingen

      console.log("oefenreeksen", this.oefenreeksen);
      this.uitrekenenFinished();
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
