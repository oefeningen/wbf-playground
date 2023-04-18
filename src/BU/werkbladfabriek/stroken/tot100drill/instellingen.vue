<template>
<div>
  
    <div class="text-caption">Welke types?</div>
    <div class="flex">
    <selectiechip v-for="(item,id) in oefentypes" v-model="item.frequentie" :item="item" :key="id"></selectiechip>
    </div>
    <!-- <p>{{oefentypes}}</p> -->
    <div class="text-caption q-mt-sm">Welke bewerkingen?</div>
    
    <multiselect
        
        :options="optionsBewerkingen"
        :selectie.sync="geselecteerdeBewerkingen"
        :spread="false" />
        <div class="text-caption q-mt-sm">Hoeveel oefeningen op een blad</div>
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
import rekensomtot100 from "src/classes/tot100";

export default {
  components: {
    selectiechip: require("src/components/werkbladfabriek/ui/selectiechip").default
  },
  data() {
    return {
      oefentypes: [
        {
          titel: "T+T",
          frequentie: 2,
          voorbeeld: "20+40",
          plus: "TplusT",
          min: "TminT"
        },
        {
          titel: "TE+-E zonder brug",
          frequentie: 2,
          voorbeeld: "52+3, 54-2",
          plus: "TEplusEzb",
          min: "TEminEzb"
        },

        {
          titel: "TE+-E met brug",
          frequentie: 2,
          voorbeeld: "48+5, 52-3",
          plus: "TEplusEb",
          min: "TEminEb"
        },

        {
          titel: "TE+-TE zonder brug",
          frequentie: 2,
          voorbeeld: "48-16, 23+14",
          plus: "TEplusTEzb",
          min: "TEminTEzb"
        },
        {
          titel: "TE+-TE met brug",
          frequentie: 2,
          voorbeeld: "48-16, 23+14",
          plus: "TEplusTEb",
          min: "TEminTEb"
        },
        {
          titel: "aanvullen tot T",
          frequentie: 2,
          voorbeeld: "70-6, 45+.",
          plus: "aanvullenTotT",
          min: "aftrekkenVanT"
        }
      ],

      aantal: "45",
      geselecteerdeBewerkingen: ["+", "-"],

      optionsBewerkingen: ["+", "-"]
    };
  },
  methods: {
    ...mapActions("drill", ["setAantal", "setDrillOefeningen", "triggerDrill"]),
    RekenUit() {
      console.log("this.aantal", this.aantal);
      //basisrij bepalen
      var basisrij = [];
      for (var i = 0; i < this.oefentypes.length; i++) {
        var oefentype = this.oefentypes[i];
        if (Number(oefentype.frequentie) > 0) {
          for (var j = 0; j < Number(oefentype.frequentie); j++) {
            if (this.geselecteerdeBewerkingen.includes("+")) {
              basisrij.push(oefentype.plus);
            }
            if (this.geselecteerdeBewerkingen.includes("-")) {
              basisrij.push(oefentype.min);
            }
          }
        }
      }
      if (basisrij.length > 0) {
        while (basisrij.length < Number(this.aantal)) {
          basisrij = basisrij.concat(basisrij);
          console.log("verlengen");
        }
        //Mengen
        basisrij = _.shuffle(basisrij);

        var oefening = new rekensomtot100();
        var oefeningen = [];
        for (var i = 0; i < this.aantal; i++) {
          oefeningen.push(oefening.getOefening(basisrij[i]));
        }
      }
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
    },
    geselecteerdeBewerkingen(value) {
      this.RekenUit();
    },
    oefentypes(value) {
      this.RekenUit();
    }
  }
};
</script>

<style>
</style>
