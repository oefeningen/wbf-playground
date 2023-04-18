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
import rekensomtot20 from "src/classes/tot20";

export default {
  components: {
    selectiechip: require("src/components/werkbladfabriek/ui/selectiechip").default
  },
  data() {
    return {
      oefentypes: [
        {
          titel: "tot 10",
          frequentie: 2,
          voorbeeld: "5+4",
          plus: "plusTot10",
          min: "minTot10"
        },
        {
          titel: "samenstellen",
          frequentie: 2,
          voorbeeld: "10 + 4, 15-10",
          plus: "samenstellenTot20plus",
          min: "samenstellenTot20min"
        },

        {
          titel: "tussen 10 en 20",
          frequentie: 2,
          voorbeeld: "12+4",
          plus: "plusTussen10en20",
          min: "minTussen10en20"
        },

        {
          titel: "met tientjes",
          frequentie: 2,
          voorbeeld: "18-16, 2+14",
          plus: "E_TEplusTussen10en20",
          min: "minMetTientjes"
        },
        {
          titel: "met brug",
          frequentie: 2,
          voorbeeld: "6 +  8",
          plus: "plusBrugTot20",
          min: "minBrugTot20"
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

        var oefening = new rekensomtot20();
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
