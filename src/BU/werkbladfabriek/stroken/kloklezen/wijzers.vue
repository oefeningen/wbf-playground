<template>
  <leeg-kader :oefenvormen="oefenvormen" :strookId="strookId">
    <div slot="settings">
      Verwoording :
      <q-btn-toggle
        class="q-mr-sm"
        v-model="verwoording"
        push
        dense
        toggle-color="primary"
        :options="[
          { label: 'eenvoudig', value: 'simpel' },
          { label: 'uitgebreid', value: 'gewoon' }
        ]"
      />
      <multiselect
        dense
        class="q-mt-sm"
        :options="positieOpties"
        :selectie.sync="posities"
      ></multiselect>
      <q-select v-model="nauwkeurigheid" :options="eenheden" label="Tot op:" />
      aantal per rij:
      <q-btn-toggle
        class="q-mr-sm"
        v-model="aantal"
        push
        toggle-color="primary"
        :options="[
          { label: '3', value: '3' },
          { label: '4', value: '4' }
        ]"
      />
      <uitrekenknop @click="SaveSettingsEnReken">Reken uit</uitrekenknop>
    </div>
    <div slot="oefening">
      <oefeningtitel :toonTitel="toonTitel">Teken de wijzers</oefeningtitel>
      <div class="fit row justify-around">
        <div class="klokkaart" v-for="(oef, key) in oefeningen" :key="key">
          <klok
            :uur="oef.uur"
            :minuten="oef.minuten"
            class="q-ml-lg"
            :breedte="breedte"
            :toonWijzers="false || toonOplossing"
          ></klok>
          <div class="text-h6 text-center verwoording">
            {{ oef.verwoording }}
          </div>
          <!-- <div v-else class="schrijflijn"></div> -->
        </div>
      </div>

      <div class="fit row justify-around"></div>
    </div>
  </leeg-kader>
</template>

<script>
//Vaste imports
import besturingStrook from 'src/mixins/besturingStrook.js'
import oefenvormLijst from './lijst.js'

//Inherent aan de oefening

import _ from 'lodash'

export default {
  mixins: [besturingStrook],

  components: {
    klok: require('components/werkbladfabriek/stroken/kloklezen/basisklok')
      .default,
    splitsing: require('components/werkbladfabriek/stroken/splitsingen/basissplitsing')
      .default
  },
  data() {
    return {
      verwoording: 'simpel',
      oefeningen: [],
      aantal: 3,
      posities: ['voor', 'over', 'voor half', 'over half'],
      positieOpties: ['voor', 'over', 'voor half', 'over half'],
      nauwkeurigheid: 'tot op de minuut',
      // breedte: '50mm',
      eenheden: [
        'tot op de minuut',
        'tot op 5 minuten',
        'tot op het kwartier',
        'tot op het half uur',
        'tot op het uur'
      ],
      voor: {
        minuut: [45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 0],
        minuut5: [45, 50, 55, 0],
        kwart: [45, 0],
        half: [0, 30],
        uur: [0]
      },
      over: {
        minuut: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        minuut5: [5, 10, 15],
        kwart: [15, 0],
        half: [0, 30],
        uur: [0]
      },
      voorHalf: {
        minuut: [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
        minuut5: [20, 25, 30],
        kwart: [15, 30],
        half: [0, 30],
        uur: [0]
      },
      overHalf: {
        minuut: [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
        minuut5: [35, 40, 35],
        kwart: [30, 45],
        half: [0, 30],
        uur: [0]
      },

      //Vaste data
      oefenvormen: oefenvormLijst

      //Inherent aan de oefening
    }
  },

  methods: {
    genereerOefening(wijzerposities) {
      var uren = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

      var uur = _.sample(uren)
      var volgendUur = uur + 1
      if (volgendUur == 13) {
        volgendUur = 1
      }
      var minuten = _.sample(wijzerposities)

      var verwoording = ''
      if (minuten == 0) {
        verwoording = uur + ' uur'
      } else if (minuten == 30) {
        verwoording = 'half ' + volgendUur
      } else if (minuten == 15) {
        verwoording = 'kwart over ' + uur
      } else if (minuten == 45) {
        verwoording = 'kwart voor ' + volgendUur
      } else if (minuten < 15) {
        verwoording = minuten + ' over ' + uur
      } else if (minuten > 45) {
        verwoording = 60 - minuten + ' voor ' + volgendUur
      } else if (minuten < 30) {
        if (this.verwoording == 'simpel') {
          verwoording = minuten + ' over ' + uur
        } else {
          verwoording = 30 - minuten + ' voor half ' + volgendUur
        }
      } else if (minuten > 30) {
        if (this.verwoording == 'simpel') {
          verwoording = 60 - minuten + ' voor ' + volgendUur
        } else {
          verwoording = minuten - 30 + ' over half ' + volgendUur
        }
      }

      return { uur: uur, minuten: minuten, verwoording: verwoording }
    },

    uitrekenen() {
      var wijzerposities = []
      var totOp

      if (this.nauwkeurigheid == 'tot op de minuut') {
        totOp = 'minuut'
      } else if (this.nauwkeurigheid == 'tot op 5 minuten') {
        totOp = 'minuut5'
      } else if (this.nauwkeurigheid == 'tot op het kwartier') {
        totOp = 'kwart'
      } else if (this.nauwkeurigheid == 'tot op het half uur') {
        totOp = 'half'
      } else {
        totOp = 'uur'
      }
      for (var i = 0; i < this.posities.length; i++) {
        var positie = this.posities[i]
        console.log(positie)
        if (positie == 'voor') {
          wijzerposities = wijzerposities.concat(this.voor[totOp])
        } else if (positie == 'over') {
          wijzerposities = wijzerposities.concat(this.over[totOp])
        } else if (positie == 'over half') {
          wijzerposities = wijzerposities.concat(this.overHalf[totOp])
        } else if (positie == 'voor half') {
          wijzerposities = wijzerposities.concat(this.voorHalf[totOp])
        }
      }
      console.log('wijzerposities:', wijzerposities)
      this.oefeningen = []

      for (var i = 0; i < this.aantal; i++) {
        this.oefeningen.push(this.genereerOefening(wijzerposities))
      }

      console.log('uitrekenen')
      // instellingen gelijkmaken met hoofdinstellingen
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
      var LocaleOpties = {
        grenswaarden: this.grenswaarden
        // geselecteerdeTafels: this.geselecteerdeTafels
      }
      this.setOpties(LocaleOpties)
      console.log('tot hier')
      this.setStartUitrekenen()
      this.uitrekenen()
    }
  },
  computed: {
    breedte() {
      if (this.aantal == 3) {
        return '50mm'
      } else {
        return '41mm'
      }
    }
  }
}
</script>

<style scoped>
p {
  font-size: 1.1em;
}
.klokkaart {
  position: relative;
  top: -5px;
  min-width: 60px;
  min-height: 40px;
}
.verwoording {
  position: relative;
  bottom: 35px;
}
.schrijflijn {
  width: 40mm;
  min-width: 40mm;
  height: 7mm;
  border-bottom: 1px solid black;
  position: relative;
  bottom: 35px;
}
</style>
