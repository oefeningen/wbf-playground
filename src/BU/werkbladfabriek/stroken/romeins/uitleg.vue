<template>
  <leeg-kader :oefenvormen="oefenvormen" :strookId="strookId">
    <div slot="settings">Instellingen</div>
    <div slot="oefening">
      <oefeningtitel :toonTitel="toonTitel"
        >Romeinse cijfers omzetten</oefeningtitel
      >

      <p>Romeinse cijfers gebruiken letters als cijferwaarden.</p>
      <div class="row">
        <div class="column">
          <table>
            <tr>
              <td class="kop">M</td>

              <td class="kop">D</td>
              <td class="kop">C</td>
              <td class="kop">L</td>
              <td class="kop">X</td>
              <td class="kop">V</td>
              <td class="kop">I</td>
            </tr>
            <tr>
              <td>1000</td>

              <td>500</td>
              <td>100</td>
              <td>50</td>
              <td>10</td>
              <td>5</td>
              <td>1</td>
            </tr>
          </table>
        </div>

        <div class="column bewoording">
          <ul>
            <li>Je telt de getallen van links naar rechts op.</li>
            <li>Een letter mag maximum 3 keer na elkaar voorkomen</li>
          </ul>
        </div>
        <div class="column">
          <!-- <img src="/statics/soldaat.png" alt="soldaat" /> -->
        </div>
      </div>
      <div>
        <li>
          De letters staan van groot naar klein, staat er een kleiner getal voor
          een groter, dan wordt dit afgetrokken
        </li>
        <li>V, L en D mogen niet gebruikt worden voor de aftrekking</li>
      </div>

      <!-- <div>{{ oefenreeksen }}</div> -->
    </div>

    <div class="fit row justify-around"></div>
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
      opties: [],

      oefenreeksen: [],
      optionsRomeins: ['simpel', 'aftrekken', 'volledig'],

      //Vaste data
      oefenvormen: oefenvormLijst

      //Inherent aan de oefening
    }
  },

  methods: {},
  computed: {}
}
</script>

<style scoped>
p {
  font-size: 1.1em;
}
td {
  width: 45px;
  padding: 0px;
  border: 1px solid black;
  text-align: center;
}
.kop {
  background-color: lightcyan;
}
.bewoording {
  width: 50%;
}
</style>
