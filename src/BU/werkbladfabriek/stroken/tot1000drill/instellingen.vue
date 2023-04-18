<template>
<div>
  
    <div class="text-caption">Welke types?</div>
    <div class="flex">
    <!-- <selectiechip v-for="(item,id) in oefentypes" v-model="item.frequentie" :item="item" :key="id"></selectiechip> -->
     <oefenselectie  :geselecteerdeOefeningen.sync="geselecteerdeOefeningen" :oefentypes="oefentypes"/>
    </div>
    <!-- <p>{{oefentypes}}</p> -->
    
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
import rekensomtot1000 from "src/classes/tot1000";

export default {
  components: {
    oefenselectie: require("src/components/werkbladfabriek/ui/oefenselectie").default,
    selectiechip: require("src/components/werkbladfabriek/ui/selectiechip").default
  },
  data() {
    return {
      oefentypes: [
        {
          label: "H+H",
          value: "HplusH"
        },
        {
          label: "H-H",
          value: "HminH"
        },
        {
          label: "HT+H",
          value: "HTplusH"
        },
        {
          label: "HT-H",
          value: "HTminH"
        },
        {
          label: "HT+T",
          value: "HTplusT"
        },
        {
          label: "HT-T",
          value: "HTminT"
        },
        {
          label: "HT+HT",
          value: "HTplusHTzb"
        },
        {
          label: "HT-HT",
          value: "HTminHTzb"
        },
        {
          label: "HT+T (brug)",
          value: "HTplusTb"
        },
        {
          label: "HT-T (brug)",
          value: "HTminTb"
        },
        {
          label: "HT+HT (brug)",
          value: "HTplusHTb"
        },
        {
          label: "HT-HT (brug)",
          value: "HTminHTb"
        },
        {
          label: "HT+TE ",
          value: "HTplusTE"
        },
        {
          label: "HT-TE ",
          value: "HTminTE"
        },
        {
          label: "HTE+E ",
          value: "HTEplusE"
        },
        {
          label: "HTE-E ",
          value: "HTEminE"
        },
        {
          label: "HTE+T ",
          value: "HTEplusT"
        },
        {
          label: "HTE-T ",
          value: "HTEminT"
        },

        {
          label: "H-T ",
          value: "HminT"
        },
        {
          label: "H-E ",
          value: "HminE"
        },
        {
          label: "H-TE ",
          value: "HminTE"
        },
        {
          label: "D-H ",
          value: "DminH"
        },

        {
          label: "D-T ",
          value: "DminT"
        },
        {
          label: "D-HT ",
          value: "DminHT"
        }
      ],

      aantal: "45",
      geselecteerdeOefeningen: [],

      optionsBewerkingen: ["+", "-"]
    };
  },
  methods: {
    ...mapActions("drill", ["setAantal", "setDrillOefeningen", "triggerDrill"]),
    RekenUit() {
      console.log("this.aantal", this.aantal);
      //basisrij bepalen
      var basisrij = [];
      for (var i = 0; i < this.geselecteerdeOefeningen.length; i++) {
        var oefentype = this.geselecteerdeOefeningen[i].value;
        basisrij.push(oefentype);
      }
      if (basisrij.length > 0) {
        while (basisrij.length < Number(this.aantal)) {
          basisrij = basisrij.concat(basisrij);
          console.log("verlengen");
        }
        //Mengen
        basisrij = _.shuffle(basisrij);

        var oefening = new rekensomtot1000();
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
