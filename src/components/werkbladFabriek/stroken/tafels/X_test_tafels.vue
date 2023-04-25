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
        <oefeningtitel :toonTitel="toonTitel">Los deze oefeningen op</oefeningtitel>
         <div class="fit row justify-between">
            <div
                v-for="(reeks,key) in oefenreeksen"
                :key="key"
                :style="'width:'+breedte+';'">
                <p
                    class="tekstopgave"
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
      if (this.OpgehaaldeOpties.geselecteerdeBewerkingen) {
        this.geselecteerdeBewerkingen = this.OpgehaaldeOpties.geselecteerdeBewerkingen;
      }
      if (this.OpgehaaldeOpties.aantal) {
        this.aantal = this.OpgehaaldeOpties.aantal;
      }
      this.oefenreeksen = [];
      this.oefenreeksen = [];
      if (this.geselecteerdeTafels.length > 0) {
        console.log(
          "DIALOOG MOET OPGEROEPEN WORDEN",
          this.geselecteerdeTafels.length
        );
        var tafeloefening = new Tafeloefening(this.geselecteerdeTafels);
        for (var i = 0; i < this.aantal / 5; i++) {
          var reeks = tafeloefening.getReeks(this.geselecteerdeBewerkingen, 5);
          this.oefenreeksen.push(reeks);
        }

        console.log("oefenreeksen", this.oefenreeksen);
      } else {
        console.log("DIALOOG MOET OPGEROEPEN WORDEN");
        this.$q
          .dialog({
            title: "Opgelet",
            message: "Je hebt geen tafels geselecteerd?",
            cancel: true,
            persistent: true
          })
          .onOk(() => {
            // console.log('>>>> OK')
          });
      }
      this.uitrekenenFinished();
    },
    SaveSettingsEnReken() {
      console.log("uitrekenen en savesettings !!");
      var LocaleOpties = {
        geselecteerdeTafels: this.geselecteerdeTafels,
        geselecteerdeBewerkingen: this.geselecteerdeBewerkingen,
        aantal: this.aantal
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
.tekstopgave {
  font-size: 1.4em;
  margin-top: -8px;
}
</style>
