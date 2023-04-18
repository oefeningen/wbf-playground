<template>
<leeg-kader :oefenvormen="oefenvormen" :strookId="strookId">
    <div slot="settings">
        <div class="text-caption">Welke getallen</div>

        <multiselect
            dense
            class="q-mt-sm"
            :options="getallen"
            :selectie.sync="getalselectie"></multiselect>
        <q-checkbox
            left-label
            v-model="splitsingZichtbaar"
            label="splitsing in getalbeeld" />
        <q-checkbox
            left-label
            v-model="figuurtjes"
            label="tekeningen in getalbeeld" />
        <div class="row q-mt-md">
            <div class="text-caption">Welke posities?</div>
            <div class="q-ma-sm fit justify-center">
                <multiselect
                    id="topsplits"
                    dense
                    class="q-mt-sm"
                    :options="['A']"
                    :selectie.sync="zoektermen"></multiselect>
                <multiselect
                    id="bottomsplits"
                    dense
                    class="q-mt-sm"
                    :options="['B', 'C']"
                    :selectie.sync="zoektermen"></multiselect>
            </div>
        </div>

        <div class="text-caption">Aantal per rij?</div>
        <q-btn-toggle
            class="q-mr-sm"
            v-model="aantal"
            push
            toggle-color="primary"
            :options="[
          { label: '2', value: 2 },
          { label: '3', value: 3 },

        ]" />

        <uitrekenknop @click="SaveSettingsEnReken">Reken uit</uitrekenknop>
    </div>
    <div slot="oefening">
        <oefeningtitel :toonTitel="toonTitel">Splitsingen </oefeningtitel>
        <div class="fit row justify-around">

            <div
                class="row q-pa-xs"
                v-for="i in aantal"
                v-if="oefeningen[i]"
                :key="'splits_' + i">
                <getalbeeld
                    :breedte="breedteGetalbeeld"
                    class="q-mr-sm"
                    :term1="splitsingZichtbaar? oefeningen[i][1] : oefeningen[i][0]"
                    :term2="splitsingZichtbaar? oefeningen[i][2] : 0"
                    :symbolen="figuurtjes ? 'varia' : 'getalbeeld'" />

                <splitsing
                    class="splitsing"
                    :breedte="breedte"
                    :oef="oefeningen[i]"
                    :zoektermen="zoektermen"
                    :toonOplossing="toonOplossing"></splitsing>

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
        splitsing: require('components/werkbladfabriek/stroken/splitsingen/basissplitsing')
            .default,
        getalbeeld: require('components/werkbladfabriek/stroken/splitsingen/getalbeeld')
            .default
    },
    data() {
        return {
            getallen: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            getalselectie: [3, 4, 5, 6, 7, 8, 9, 10],
            oefeningen: [1, 2, 3],
            zoektermen: [],
            aantal: 3,
            oefenpool: [],
            splitsingZichtbaar: false,
            figuurtjes: false,
            oefenopties:["figuurtjes","getalselectie","zoektermen","aantal","splitsingZichtbaar"],

            //Vaste data
            oefenvormen: oefenvormLijst

            //Inherent aan de oefening
        }
    },

    methods: {
        genereerOefening(wijzerposities) {
            return {}
        },
        oefeningenAanmaken() {
            if (this.getalselectie.length == 0) {
                this.getalselectie == this.getalselectie.concat(this.getallen)
            }
            this.oefenpool = []
            for (var g = 0; g < this.getalselectie.length; g++) {
                var getal = this.getalselectie[g]
                for (var i = 0; i <= getal; i++) {
                    this.oefenpool.push([getal, i, getal - i])
                }
            }
        },

        uitrekenen() {
            console.log('uitrekenen')
            // instellingen gelijkmaken met hoofdinstellingen
            this.syncOpties(this.oefenopties) 


            this.oefeningenAanmaken()
            this.oefeningen = _.shuffle(this.oefenpool)
            if (this.oefeningen.length < this.aantal) {
                this.oefeningen = this.oefeningen.concat(_.shuffle(this.oefenpool))
            }

            
           

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
            if (this.aantal < 3) {
                return '30mm'
            } else {
                return '25mm'
            }
        },
        breedteGetalbeeld() {
            if (this.aantal < 3) {
                return '50mm'
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
svg{
  border:none;
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
