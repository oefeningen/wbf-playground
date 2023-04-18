<template>
<leeg-kader :oefenvormen="oefenvormen" :strookId="strookId">
    <div slot="settings">
        <div class="text-caption">Welke getallen</div>

        <multiselect
            dense
            class="q-mt-sm"
            :options="getallen"
            :selectie.sync="getalselectie"></multiselect>
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
          { label: '3', value: 3 },
          { label: '4', value: 4 },
          { label: '5', value: 5 }
        ]" />

        <uitrekenknop @click="SaveSettingsEnReken">Reken uit</uitrekenknop>
    </div>
    <div slot="oefening">
        <oefeningtitel :toonTitel="toonTitel">Splitsingen </oefeningtitel>
        <div class="fit row justify-around">

            <splitsing
                v-for="i in aantal"
                :key="'splits_' + i"
                :breedte="breedte"
                :oef="oefeningen[i]"
                :zoektermen="zoektermen"
                :toonOplossing="toonOplossing"></splitsing>

        </div>

        <div class="fit row justify-around"></div>
    </div>
</leeg-kader>
</template>

<script>
//Vaste imports
import besturingStrook from 'src/mixins/besturingStrook.js'
import oefenvormLijst from './lijst.js'
import Vue from "vue"

//Inherent aan de oefening

import _ from 'lodash'

export default {
    mixins: [besturingStrook],

    components: {
        splitsing: require('components/werkbladfabriek/stroken/splitsingen/basissplitsing')
            .default
    },
    data() {
        return {
            getallen: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            getalselectie: [3, 4, 5],
            oefeningen: [1, 2, 3],
            zoektermen: [],
            aantal: 4,
            oefenpool: [],
            oefenopties: ["zoektermen", "getalselectie", "aantal"],

            //Vaste data
            oefenvormen: oefenvormLijst

            //Inherent aan de oefening
        }
    },

    methods: {

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
            // instellingen gelijkmaken met hoofdinstellingen
            //opties zijn aantal, getalSelectie
            // this.OpgehaaldeOpties = JSON.parse(JSON.stringify(this.getOpties()))
            // for (var i = 0; i < this.oefenopties.length; i++) {
            //     if (this.OpgehaaldeOpties[this.oefenopties[i]]) {
            //         Vue.set(this, this.oefenopties[i], this.OpgehaaldeOpties[this.oefenopties[i]])
            //     }
            // }
            this.syncOpties(this.oefenopties)
            console.log(
                'opgehaalde opties uitrekenen() voor strook' + this.strookId,
                this.OpgehaaldeOpties
            )

            console.log('uitrekenen')
            
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

</style>
