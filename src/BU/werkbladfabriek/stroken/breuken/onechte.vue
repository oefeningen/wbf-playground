<template>
  <leeg-kader :oefenvormen="oefenvormen" :strookId="strookId">
    <div slot="settings">
      <div class="text-caption">Mogelijke eenheden</div>

      <multiselect
        :options="mogelijkeEenheden"
        :selectie.sync="eenheden"
        :spread="false"
      />
      <q-checkbox
        v-model="moeilijkeProdukten"
        label="ook moeilijke produkten"
      />

      <div class="text-caption">Aantal per rij?</div>
      <q-btn-toggle
        class="q-mr-sm"
        v-model="aantal"
        push
        toggle-color="primary"
        :options="[
          { label: '3', value: 3 },
          { label: '4', value: 4 }
        ]"
      />

      <uitrekenknop @click="SaveSettingsEnReken">Reken uit</uitrekenknop>
    </div>
    <div slot="oefening">
      <oefeningtitel :toonTitel="toonTitel"
        >Zonder de eenheden af {{ toonTitel }}
      </oefeningtitel>
      <div class="row justify-around q-mt-xl">
        <!-- <breuk noemer="5" /> + <breuk breuk="4/8" /> == -->

        <onechte-oefening
          :toonOplossing="toonOplossing"
          :oef="oef"
          v-for="(oef, key) in oefeningen2"
          :key="key"
        />
      </div>
      <div class="row justify-around q-mt-xl">
        <!-- <breuk noemer="5" /> + <breuk breuk="4/8" /> == -->

        <onechte-oefening
          :toonOplossing="toonOplossing"
          :oef="oef"
          v-for="(oef, key) in oefeningen"
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
    onechteOefening: require('components/werkbladfabriek/stroken/breuken/onechteOef')
      .default
  },
  data() {
    return {
      ookOnecht: false,
      moeilijkeProdukten: false,
      mogelijkeEenheden: [1, 2, 3, 4, 5],
      eenheden: [1],
      oefeningen: [],
      oefeningen2: [],
      aantal: 4,
      //waarden die gesynchroniseerd worden
      oefenopties:["moeilijkeProdukten","aantal","eenheden","ookOnecht"],

      //Vaste data
      oefenvormen: oefenvormLijst

      //Inherent aan de oefening
    }
  },

  methods: {
    genereerOefening(noemers) {
      console.log('genereer oefening')
      var noemer = _.sample(noemers)

      for (var i = 0; i < 100; i++) {
        var teller = _.random(1, noemer)
        if (this.aantalGemeenschappelijkeDelers(teller, noemer) == 1) {
          var eenheid = _.sample(this.eenheden)
          var oef = [
            teller + eenheid * noemer + '/' + noemer,
            teller + '/' + noemer,
            eenheid
          ]
          break
        }
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
    onvereenvoudigbareBreukZoeken() {
      var noemer = _.sample(basisnoemers)
      var delers = this.delersZoeken(noemer)
    },

    uitrekenen() {
      console.log('uitrekenen', basisnoemers)
      this.syncOpties(this.oefenopties)
      // instellingen gelijkmaken met hoofdinstellingen
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
#topsplits {
  max-width: 40px;
  margin-left: 20px;
}
#bottomsplits {
  max-width: 80px;
}
p {
  font-size: 1.1em;
}
.klokkaart {
  position: relative;
  top: -5px;
  min-width: 60px;
  min-height: 40px;
  border: 1px solid blue;
}
.verwoording {
  position: relative;
  bottom: 35px;
}
.schrijflijn {
  min-width: 40mm;
  height: 7mm;
  border-bottom: 1px solid black;
  position: relative;
  bottom: 35px;
}
</style>
