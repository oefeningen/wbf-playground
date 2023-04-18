<template>
<leeg-kader :oefenvormen="oefenvormen" :strookId="strookId">
    <div slot="settings">
        <q-btn-toggle
            v-model="lettergrootte"
            push
            rounded
            toggle-color="primary"
            :options="[
          {value: '1.1em', slot: 'one'},
          {value: '1.3em', slot: 'two'},
          {value: '1.5em', slot: 'three'}
        ]">
            <template v-slot:one>
                <div class="row items-center no-wrap">
                    <div class="text-center">
                        <q-icon
                            left
                            size="1.1em"
                            name="text_format" />

                    </div>

                </div>
            </template>

            <template v-slot:two>
                <div class="row items-center no-wrap">
                    <div class="text-center">
                        <q-icon
                            left
                            size="1.3em"
                            name="text_format" />
                    </div>

                </div>
            </template>

            <template v-slot:three>
                <div class="row items-center no-wrap">
                    <div class="text-center">
                        <q-icon
                            left
                            size="1.5em"
                            name="text_format" />
                    </div>

                </div>
            </template>
        </q-btn-toggle>
        <uitrekenknop @click="SaveSettingsEnReken">Reken uit</uitrekenknop>
    </div>
    <div slot="oefening">
        <oefeningtitel :toonTitel="toonTitel">Woordenlijst</oefeningtitel>
        <div class="row justify-around kaderwoordenlijst">
            <div v-for="woord in woordenlijst" :style="{fontSize:lettergrootte}" class="woordenlijstwoord" >{{woord}}</div>

        </div>
    </div>
</leeg-kader>
</template>

<script>
//Vaste imports
import besturingStrook from "src/mixins/besturingStrook.js";
import oefenvormLijst from "./lijst.js";
import spoor from "src/components/werkbladfabriek/stroken/tafels/parts/tafelspoor";
import rooster from "src/components/werkbladfabriek/stroken/tafels/parts/rooster";

//Inherent aan de oefening

import _ from "lodash";
import Tafeloefening from "src/classes/Tafeloefening";

export default {
    mixins: [besturingStrook],
    components: {
        rooster
    },
    data() {
        return {
            //Vaste data
            oefenvormen: oefenvormLijst,
            lettergrootte: "120%",
            woordenlijst: []
            //Inherent aan de oefening

        };
    },

    methods: {
        uitrekenen() {
            // console.log("uitrekenen");
            // instellingen gelijkmaken met hoofdinstellingen
            this.OpgehaaldeOpties = this.getOpties();

            console.log(
                "opgehaalde opties uitrekenen() in testtafels",
                this.OpgehaaldeOpties
            );
            if (this.OpgehaaldeOpties.geselecteerdeWoorden) {
                this.woordenlijst = this.OpgehaaldeOpties.geselecteerdeWoorden
            }
            this.woordenlijst = _.shuffle(this.woordenlijst)
            console.log("woordenlijst", this.woordenlijst)

            this.uitrekenenFinished();
        },
        SaveSettingsEnReken() {
            console.log("uitrekenen en savesettings !!");
            this.woordenlijst = _.shuffle(this.woordenlijst)
            var LocaleOpties = {
                geselecteerdeWoorden: this.woordenlijst
            };
            this.setOpties(LocaleOpties);
            console.log("tot hier");
            this.setStartUitrekenen();
        }
    },
    computed: {
        breedte() {
            return 100 / (this.aantal / 5) + "%";
        }
    }
};
</script>

<style scoped>
p {
  font-size: 1.1em;
}
.woordenlijstwoord {
  margin-left:15px;
  margin-right:15px;

}
.kaderwoordenlijst{
  border: 1px solid black;
  padding:8px;
  border-radius: 10px;
  height:4cm;
  min-height: 4cm;
  max-height: 5cm;
}
</style>
