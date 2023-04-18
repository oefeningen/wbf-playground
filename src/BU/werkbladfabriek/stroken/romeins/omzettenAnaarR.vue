<template>
  <leeg-kader :oefenvormen="oefenvormen" :strookId="strookId">
    <div slot="settings">
      Instellingen
      <multiselect
        :options="optionsRomeins"
        :selectie.sync="optiesR"
      ></multiselect>
      <multiselect
        class="q-mt-sm"
        :options="optionsGrenzen"
        :selectie.sync="grenswaarden"
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
          { label: '15', value: '15' },
          { label: '20', value: '20' }
        ]"
      />
      <uitrekenknop @click="SaveSettingsEnReken">Reken uit</uitrekenknop>
    </div>
    <div slot="oefening">
      <oefeningtitel :toonTitel="toonTitel"
        >Naar Romeinse cijfers omzetten</oefeningtitel
      >
      <div class="fit row justify-between">
        <!-- <div>{{ oefenreeksen }}</div> -->
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
      optiesR: [],
      grenswaarden: [],
      oefenreeksen: [],
      optionsRomeins: ['simpel', 'aftrekken'],
      optionsGrenzen: ['<20', '<100', '<1000', '<5000'],
      oefenopties: ["aantal","optiesR","grenswaarden"],

      //Vaste data
      oefenvormen: oefenvormLijst

      //Inherent aan de oefening
    }
  },

  methods: {
    genereerOefening() {
      
      console.log("optiesR",this.optiesR)
       
      const opteltallen = [1, 2, 3, 5, 6, 7, 8]
      const aftrektallen = [4, 9]

      var optie = _.sample(this.optiesR)
      var grenswaarde = _.sample(this.grenswaarden)

      var getal = 0

      if (grenswaarde == '<20') {
        var startgetallen = [0, 10]
        var startgetal = _.sample(startgetallen)
        getal += startgetal
        if (optie == 'simpel') {
          getal += _.sample(opteltallen)
        } else {
          getal += _.sample(aftrektallen)
        }
      }
      if (grenswaarde == '<100') {
        if (optie == 'simpel') {
          getal += _.sample(opteltallen) * 10
          getal += _.sample(opteltallen)
        } else {
          var mogelijkheden = [0, 1, 2]
          var aftrekpositie = _.sample(mogelijkheden)
          if (aftrekpositie == 0) {
            getal += _.sample(aftrektallen) * 10
            getal += _.sample(opteltallen)
          } else if (aftrekpositie == 1) {
            getal += _.sample(aftrektallen)
            getal += _.sample(opteltallen) * 10
          } else {
            getal += _.sample(aftrektallen)
            getal += _.sample(aftrektallen) * 10
          }
        }
      }
      if (grenswaarde == '<1000') {
        if (optie == 'simpel') {
          getal += _.sample(opteltallen) * 100
          getal += _.sample(opteltallen) * 10
          getal += _.sample(opteltallen)
        } else {
          var mogelijkheden = [0, 1, 2, 11, 101, 111]
          var aftrekpositie = _.sample(mogelijkheden)
          if (aftrekpositie == 0) {
            getal += _.sample(aftrektallen) * 100
            getal += _.sample(opteltallen) * 10
            getal += _.sample(opteltallen)
          } else if (aftrekpositie == 1) {
            getal += _.sample(aftrektallen) * 10
            getal += _.sample(opteltallen) * 100
            getal += _.sample(opteltallen)
          } else if (aftrekpositie === 2) {
            getal += _.sample(aftrektallen)
            getal += _.sample(opteltallen) * 100
            getal += _.sample(opteltallen) * 10
          } else if (aftrekpositie === 11) {
            getal += _.sample(aftrektallen)
            getal += _.sample(opteltallen) * 100
            getal += _.sample(aftrektallen) * 10
          } else if (aftrekpositie === 101) {
            getal += _.sample(aftrektallen)
            getal += _.sample(opteltallen) * 10
            getal += _.sample(aftrektallen) * 100
          } else if (aftrekpositie === 111) {
            getal += _.sample(aftrektallen)
            getal += _.sample(aftrektallen) * 10
            getal += _.sample(aftrektallen) * 100
          }
        }
      }
      if (grenswaarde == '<5000') {
        const duizendtallen = [1000, 2000, 3000, 4000]
        if (optie == 'simpel') {
          getal += _.sample(opteltallen) * 100
          getal += _.sample(opteltallen) * 10
          getal += _.sample(opteltallen)
        } else {
          var mogelijkheden = [0, 1, 2, 11, 101, 111]
          var aftrekpositie = _.sample(mogelijkheden)
          if (aftrekpositie == 0) {
            getal += _.sample(aftrektallen) * 100
            getal += _.sample(opteltallen) * 10
            getal += _.sample(opteltallen)
          } else if (aftrekpositie == 1) {
            getal += _.sample(aftrektallen) * 10
            getal += _.sample(opteltallen) * 100
            getal += _.sample(opteltallen)
          } else if (aftrekpositie === 2) {
            getal += _.sample(aftrektallen)
            getal += _.sample(opteltallen) * 100
            getal += _.sample(opteltallen) * 10
          } else if (aftrekpositie === 11) {
            getal += _.sample(aftrektallen)
            getal += _.sample(opteltallen) * 100
            getal += _.sample(aftrektallen) * 10
          } else if (aftrekpositie === 101) {
            getal += _.sample(aftrektallen)
            getal += _.sample(opteltallen) * 10
            getal += _.sample(aftrektallen) * 100
          } else if (aftrekpositie === 111) {
            getal += _.sample(aftrektallen)
            getal += _.sample(aftrektallen) * 10
            getal += _.sample(aftrektallen) * 100
          }
        }
        getal += _.sample(duizendtallen)
      }

      return [getal + ' = ', this.convertToRomeins(getal)]
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
      if(this.optiesR.length==0){
        
        this.optiesR = this.optionsRomeins
      }
      if(this.grenswaarden.length == 0){
        console.log("er waren geen grenswaarden")
        this.grenswaarden = ['<20','<100']
      }
      this.syncOpties(this.oefenopties)
      
      console.log('uitrekenen')
      // instellingen gelijkmaken met hoofdinstellingen
      this.OpgehaaldeOpties = this.getOpties()
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

      // if (this.opties == []) {
      //   this.opties = this.optionsRomeins
      // }
      // var optie = _.sample(this.opties)
      // if (this.grenswaarden == []) {
      //   this.grenswaarden = this.optionsGrenzen
      // }

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
