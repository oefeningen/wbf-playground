<template>
<div>

    <div class="text-caption">Welk bereik?</div>
    <div class="flex">
        <multiselect
            :options="optionsBereik"
            :selectie.sync="bereik"
            split="5" />
    </div>
    <!-- <p>{{oefentypes}}</p> -->
    <div class="text-caption q-mt-sm">Welke bewerkingen?</div>

    <multiselect
        :options="optionsBewerkingen"
        :selectie.sync="geselecteerdeBewerkingen"
        :spread="false" />

    <q-select
        class="q-mt-sm"
        bg-color="teal-3"
        outlined
        filled
        standout="bg-teal text-white"
        v-model="visualisatie"
        :options="visualisatieBereik"
        option-label="label"
        label="visualisatie" />

    <div class="text-caption q-mt-sm">Hoeveel oefeningen op een blad</div>
    <q-btn-toggle
        v-model="aantal"
        @click="RekenUit"
        push
        color='white text-grey'
        toggle-color="indigo-7  "
        :options="[
          {label: '10', value: '10'},
          {label: '15', value: '15'},
          {label: '20', value: '20'},
          {label: '30', value: '30'},

        ]" />

</div>
</template>

<script>
import {
    mapActions,
    mapGetters
} from "vuex";
import _ from "lodash";
import rekensomtot20 from "src/classes/tot20";

export default {
    components: {
        selectiechip: require("src/components/werkbladfabriek/ui/selectiechip").default
    },
    data() {
        return {

            bereik: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            optionsBereik: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            visualisatie: {
                label: "getalbeeld",
                value: "getalbeeld"
            },
            visualisatieBereik: [{
                    label: "getalbeeld",
                    value: "getalbeeld"
                },
                {
                    label: "getalbeeld met figuren",
                    value: "getalbeeldfiguur"
                },

                {
                    label: "kralen",
                    value: "kralen"
                },
                {
                    label: "losse figuren",
                    value: "lossefiguren"
                },
                {
                    label: "losse kralen",
                    value: "lossekralen"
                },
                {
                    label: "twintigveld",
                    value: "twintigveld"
                }
            ],

            aantal: "45",
            geselecteerdeBewerkingen: ["+", "-"],

            optionsBewerkingen: ["+", "-"]
        };
    },
    methods: {
        ...mapActions("drill", ["setAantal", "setDrillOefeningen", "triggerDrill", "setOpties"]),
        RekenUit() {
            console.log("oefeningen opbouwen")
            //een array met alle mogelijke oefeningen maken
            var mogelijkheden = []
            for (var i = 0; i < this.bereik.length; i++) {
                var max = this.bereik[i]
                console.log("oefeningen opbouwen met max", max)
                for (var x = 0; x <= max; x++) {
                    console.log("oefeningen opbouwen")
                    if (this.geselecteerdeBewerkingen.includes("+")) {
                        mogelijkheden.push({
                            term1: x.toString(),
                            term2: (max - x).toString(),
                            term3: max.toString(),
                            bewerking: "+"
                        })
                    }
                    if (this.geselecteerdeBewerkingen.includes("-")) {
                        mogelijkheden.push({
                            term1: max.toString(),
                            term2: (max - x).toString(),
                            term3: x.toString(),
                            bewerking: "-"
                        })
                    }

                }

            }
            console.log("mogelijkheden", mogelijkheden)

            //      this.saveDrillSettings(JSON.parse(JSON.stringify(settings)));
            this.$q.localStorage.set("tot10getalbeeld", {
                bereik: this.bereik,
                geselecteerdeBewerkingen: this.geselecteerdeBewerkingen,
                visualisatie: this.visualisatie,
                aantal: this.aantal
            })
            this.setAantal(this.aantal);
            this.setOpties({
                visualisatie: this.visualisatie
            })
            this.setDrillOefeningen(mogelijkheden);
            this.triggerDrill(false);
        }
    },
    computed: {
        ...mapGetters("drill", ["drillTriggered"])
    },
    mounted() {
        var settings = this.$q.localStorage.getItem("tot10getalbeeld")
        if (settings) {
            this.aantal = settings.aantal
            this.bereik = settings.bereik
            this.geselecteerdeBewerkingen = settings.geselecteerdeBewerkingen
            if (settings.visualisatie) {
                this.visualisatie = settings.visualisatie
            }
            this.triggerDrill(false);
            var comp = this
            setTimeout(function () {
                comp.triggerDrill(true)
            }, 5)

        }
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
