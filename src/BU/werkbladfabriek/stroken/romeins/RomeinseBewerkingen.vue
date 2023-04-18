<template>
  <leeg-kader :oefenvormen="oefenvormen" :strookId="strookId">
    <div slot="settings">
      Instellingen
      <multiselect
        :options="optionsRomeins"
        :selectie.sync="optiesR"
      ></multiselect>
     
      <div class="text-caption">Hoeveel?</div>
      <q-btn-toggle
        class="q-mr-sm"
        v-model="aantal"
        push
        dense
        toggle-color="primary"
        :options="[
          { label: '10', value: '10' },
          { label: '15', value: '15' }
        ]"
      />
      <uitrekenknop @click="SaveSettingsEnReken">Reken uit</uitrekenknop>
    </div>
    <div slot="oefening">
      <oefeningtitel :toonTitel="toonTitel">Los op</oefeningtitel>
      <div class="fit row justify-between">
        <!-- <div>{{ oefeningenTot20 }}</div> -->
        <div
          v-for="(reeks, key) in oefenreeksen"
          :key="key"
          :style="'width:' + breedte + ';'"
        >
          <p
            class="tekstopgave"
            v-for="(oef, key) in reeks"
            contenteditable="true"
            :key="'r1_' + key"
          >
            {{ oef[0] }}
            <span v-if="toonOplossing" class="oplossing">{{ oef[1] }}</span>
          </p>
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
  components: {},
  data() {
    return {
      aantal: 10,
      oefeningenTot20: [],
      oefeningenTot100: [],
      optiesR: [],
      grenswaarden: [],
      oefenreeksen: [],
      optionsRomeins: ['tot 20', 'tot 100'],
      oefenopties:["grenswaarden","optiesR","aantal"],

      //Vaste data
      oefenvormen: oefenvormLijst

      //Inherent aan de oefening
    }
  },
  mounted() {
    this.bouwOefeningenBank()
  },

  methods: {
    bouwOefeningenBank() {
      this.oefeningenTot20 = []
      for (var i = 1; i < 20; i++) {
        for (var j = 1; j < 20; j++) {
          if (i + j <= 20) {
            this.oefeningenTot20.push([i, j])
          }
        }
      }
      this.oefeningenTot100 = []
      for (var i = 1; i < 100; i++) {
        for (var j = 1; j < 100; j++) {
          if (i + j <= 100) {
            this.oefeningenTot100.push([i, j])
          }
        }
      }
    },
    genereerOefening() {
      
      var oef = []
      if (_.sample(this.optiesR) == 'tot 20') {
        oef = _.sample(this.oefeningenTot20)
      } else {
        oef = _.sample(this.oefeningenTot100)
      }
      var bewerkingen = ['+', '-']
      var bewerking = _.sample(bewerkingen)
      if (bewerking == '+') {
        return [
          this.convertToRomeins(oef[1]) +
            ' + ' +
            this.convertToRomeins(oef[0]) +
            ' = ',
          this.convertToRomeins(oef[0] + oef[1])
        ]
      } else {
        return [
          this.convertToRomeins(oef[1] + oef[0]) +
            ' - ' +
            this.convertToRomeins(oef[0]) +
            ' = ',
          this.convertToRomeins(oef[1])
        ]
      }
      // return oef
    },

    convertToRomeins(int) {
      let roman = ''

      roman += 'M'.repeat(int / 1000)
      int %= 1000
      roman += 'CM'.repeat(int / 900)
      int %= 900
      roman += 'D'.repeat(int / 500)
      int %= 500
      roman += 'CD'.repeat(int / 400)
      int %= 400
      roman += 'C'.repeat(int / 100)
      int %= 100
      roman += 'XC'.repeat(int / 90)
      int %= 90
      roman += 'L'.repeat(int / 50)
      int %= 50
      roman += 'XL'.repeat(int / 40)
      int %= 40
      roman += 'X'.repeat(int / 10)
      int %= 10
      roman += 'IX'.repeat(int / 9)
      int %= 9
      roman += 'V'.repeat(int / 5)
      int %= 5
      roman += 'IV'.repeat(int / 4)
      int %= 4
      roman += 'I'.repeat(int)

      return roman
    },
    uitrekenen() {
      if (this.optiesR.length == 0) {
        this.optiesR = this.optionsRomeins
      }
      console.log('uitrekenen')
      // instellingen gelijkmaken met hoofdinstellingen
      this.syncOpties(this.oefenopties)
      var aantalPerReeks = 5
      this.oefenreeksen = []
      for (var r = 0; r < Math.floor(this.aantal / aantalPerReeks); r++) {
        this.oefenreeksen.push([])
      }
      var reeks = 0
      for (var i = 0; i <= this.aantal; i++) {
        var opgave = this.genereerOefening()
        this.oefenreeksen[reeks].push(opgave)
        if (i > 0 && i % aantalPerReeks == 0) {
          reeks++
        }
      }

      if (this.opties == []) {
        this.optiesR = this.optionsRomeins
      }
      var optie = _.sample(this.optiesR)
      if (this.grenswaarden == []) {
        this.grenswaarden = this.optionsGrenzen
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
      return 100 / (this.aantal / 5) + '%'
    }
  }
}
</script>

<style scoped>
p {
  font-size: 1.1em;
}
</style>
