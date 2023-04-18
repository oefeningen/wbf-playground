<template>
  <leeg-kader :oefenvormen="oefenvormen" :strookId="strookId">
    <div slot="settings">
      <div class="text-caption">Bewerkingen</div>

      <multiselect
        :options="mogelijkeBewerkingen"
        :selectie.sync="bewerkingen"
        :spread="false"
      />
      <q-checkbox
        v-model="moeilijkeProdukten"
        label="ook moeilijke breuken"
      />

      <div class="text-caption">Aantal per rij?</div>
      <q-btn-toggle
        class="q-mr-sm"
        v-model="aantal"
        push
        toggle-color="primary"
        :options="[
          { label: '2', value: 2 },
          { label: '3', value: 3 }
        ]"
      />

      <uitrekenknop @click="SaveSettingsEnReken">Reken uit</uitrekenknop>
    </div>
    <div slot="oefening">
      <oefeningtitel :toonTitel="toonTitel"
        >Optellen en aftrekken
      </oefeningtitel>
      <div class="row justify-around q-mt-xl">
        <!-- <breuk noemer="5" /> + <breuk breuk="4/8" /> == -->
         <opteloefening
          class="breuksom"
          :toonOplossing="toonOplossing"
          :oef="oef"
          v-for="(oef, key) in oefeningen"
          :key="key"
        />
       
      </div>
      <div class="row justify-around q-mt-xl">
        <!-- <breuk noemer="5" /> + <breuk breuk="4/8" /> == -->
 <opteloefening
          class="breuksom"
          :toonOplossing="toonOplossing"
          :oef="oef"
          v-for="(oef, key) in oefeningen2"
          :key="key"
        />
       
      </div>

      <div class="row justify-around"></div>
    </div>
  </leeg-kader>
</template>

<script>
//Vaste imports
import besturingStrook from 'src/mixins/besturingStrook.js'
import oefenvormLijst from './lijst.js'

//Inherent aan de oefening

import _ from 'lodash'

const basisnoemers = [2, 3, 4, 5, 6, 7, 8, 9, 10]
const uitbreidingsnoemers = [
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25
]

export default {
  mixins: [besturingStrook],

  components: {
    breuk: require('components/werkbladfabriek/stroken/breuken/basisbreuk')
      .default,
      opteloefening:require("./opteloefening").default
    
  },
  data() {
    return {
      oefening:["3/5","5/9"],
      ookOnecht: false,
      moeilijkeProdukten: false,
      mogelijkeBewerkingen:["+","-"],
      bewerkingen:["+","-"],
      eenheden: [1],
      oefeningen: [],
      oefeningen2: [],
      aantal: 3,

      //opties die gesynchroniseerd moeten worden
      oefenopties:["aantal","ookOnecht","moeilijkeProdukten","bewerkingen","eenheden"],

      //Vaste data
      oefenvormen: oefenvormLijst

      //Inherent aan de oefening
    }
  },

  methods: {
    genereerOefening(noemerlijst) {
      if(_.sample(this.bewerkingen)=="+"){
        return this.genereerPlusOefening(noemerlijst)
      }else{
        return this.genereerMinOefening(noemerlijst)
      }
    },
    genereerPlusOefening(noemerlijst){
      console.log('genereer + oefening')
      var noemers = _.sampleSize(noemerlijst,2)
      var t1 = _.random(1,noemers[0]-1)
      var t2 = _.random(1,noemers[1]-1)

      //noemer bepalen => noemers vermenigvuldigen en delen door ggd
      var ggd = this.GemeenschappelijkeDelers(noemers[0],noemers[1]).pop()
      console.log("ggd van "+noemers.toString(),ggd)
      var nieuweNoemer = noemers[0]*noemers[1]/ggd

      var tussen1 = t1 * noemers[1] / ggd
      var tussen2 = t2 * noemers[0] / ggd
      

      var b1 = t1+"/"+noemers[0]
      var b2 = t2+"/"+noemers[1]
      var b3 = tussen1+"/"+nieuweNoemer
      var b4 = tussen2+"/"+nieuweNoemer
      var b5 = (tussen2+tussen1)+"/"+nieuweNoemer
      var bewerking = "+"
      var oef = [bewerking,b1,b2,b3,b4,b5]
      //controleer of je kun vereenvoudigen
      var ngd = this.GemeenschappelijkeDelers(tussen1+tussen2, nieuweNoemer).pop()
      if(ngd != 1){
        // oef.push((tussen1+tussen2)/ngd +"/"+nieuweNoemer/ngd)
      }
      return oef
    },
    genereerMinOefening(noemerlijst){
      console.log('genereer + oefening')
      var noemers = _.sampleSize(noemerlijst,2)
      var t1 = _.random(1,noemers[0]-1)
      var t2 = _.random(1,noemers[1]-1)

      //bepaal grootste getal
      var teller1
      var teller2
      var noemer1
      var noemer2
      if(t1/noemers[0]>t2/noemers[1]){
        teller1 = t1
        noemer1 = noemers[0]
        teller2 = t2
        noemer2 = noemers[1]
      }else{
        teller1 = t2
        noemer1 = noemers[1]
        teller2 = t1
        noemer2 = noemers[0]
      }

      //noemer bepalen => noemers vermenigvuldigen en delen door ggd
      var ggd = this.GemeenschappelijkeDelers(noemers[0],noemers[1]).pop()
      console.log("ggd van "+noemers.toString(),ggd)
      var nieuweNoemer = noemers[0]*noemers[1]/ggd

      var tussen1 = teller1 * noemer2 / ggd
      var tussen2 = teller2 * noemer1 / ggd
      
      var bewerking = "-"
      var b1 = teller1+"/"+noemer1
      var b2 = teller2+"/"+noemer2
      
      var b3 = tussen1+"/"+nieuweNoemer
      var b4 = tussen2+"/"+nieuweNoemer
      var b5 = (tussen1-tussen2)+"/"+nieuweNoemer

      var oef = [bewerking,b1,b2,b3,b4,b5]
      //controleer of je kun vereenvoudigen
      var ngd = this.GemeenschappelijkeDelers(tussen1-tussen2, nieuweNoemer).pop()
      if(ngd != 1){
        // oef.push((tussen1-tussen2)/ngd +"/"+nieuweNoemer/ngd)
      }
      return oef
    },

    delersZoeken(getal) {
      var delers = []
      for (var i = 1; i <= getal; i++) {
        if (getal % i == 0) {
          delers.push(i)
        }
      }
    },
    aantalGemeenschappelijkeDelers(a, b) {
      var delersA = []
      for (var i = 1; i <= a; i++) {
        if (a % i == 0) {
          delersA.push(i)
        }
      }
      var delersB = []
      for (var i = 1; i <= b; i++) {
        if (b % i == 0) {
          delersB.push(i)
        }
      }
      var samen = _.intersection(delersA, delersB)
      return samen.length
    },
    GemeenschappelijkeDelers(a, b) {
      var delersA = []
      for (var i = 1; i <= a; i++) {
        if (a % i == 0) {
          delersA.push(i)
        }
      }
      var delersB = []
      for (var i = 1; i <= b; i++) {
        if (b % i == 0) {
          delersB.push(i)
        }
      }
      var samen = _.intersection(delersA, delersB)
      return samen
    },
    onvereenvoudigbareBreukZoeken() {
      var noemer = _.sample(basisnoemers)
      var delers = this.delersZoeken(noemer)
    },

    uitrekenen() {
      console.log('uitrekenen', basisnoemers)
      // instellingen gelijkmaken met hoofdinstellingen
      this.syncOpties(this.oefenopties) 
      this.oefeningen = []
      this.oefeningen2 = []
      for (var i = 0; i < this.aantal; i++) {
        console.log('oefening uitrekenen')
        if (this.moeilijkeProdukten) {
          this.oefeningen.push(this.genereerOefening(uitbreidingsnoemers))
          this.oefeningen2.push(this.genereerOefening(uitbreidingsnoemers))
        } else {
          this.oefeningen.push(this.genereerOefening(basisnoemers))
          this.oefeningen2.push(this.genereerOefening(basisnoemers))
        }
      }

      this.OpgehaaldeOpties = this.getOpties()

      if (this.opties == []) {
        // this.opties = this.optionsRomeins
      }

      console.log(
        'opgehaalde opties uitrekenen() in testtafels',
        this.OpgehaaldeOpties
      )
      // if (this.OpgehaaldeOpties.geselecteerdeTafels) {
      //   // this.geselecteerdeTafels = this.OpgehaaldeOpties.geselecteerdeTafels;
      // }

      this.uitrekenenFinished()
    },
    SaveSettingsEnReken() {
      console.log('uitrekenen en savesettings !!')
      this.pushOpties(this.oefenopties) 
      console.log('tot hier')
      this.setStartUitrekenen()
      this.uitrekenen()
    }
  },
  computed: {
    breedte() {
      if (this.aantal < 4) {
        return '40mm'
      } else {
        return '30mm'
      }
    }
  }
}
</script>

<style scoped>
.breuksom{
  /* border:1px solid pink; */
  min-width:6cm;
  width: 6cm;

}

</style>
