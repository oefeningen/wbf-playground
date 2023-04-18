<template>
<div class="kader">
    <div class="onzichtbaar column">
        <q-btn
            dense
            @click="RekenUit"
            size="sm"
            icon="refresh"
            color="deep-purple-3" />
        <q-btn
            @click="veranderVisualisatie"
            dense
            size="sm"
            icon="image"
            color="indigo-3" />

    </div>

    <component
        :is="visualisaties[visualisatieIndex]"
        :term1="oef.term1"
        :term2="oef.term2"
        :breedte="breedte"
        :hoogte="hoogte"
        :bewerking="oef.bewerking"></component>
    <div class="text-h5 text-center">{{oef.term1}} {{oef.bewerking}} {{oef.term2}} = <span class="oplossing" v-if="toonOplossing">{{oplossing}}</span><span v-else>.</span></div>

</div>
</template>

<script>
import {
    mapGetters
} from "vuex"
import _ from "lodash"

export default {
    data() {
        return {
            visualisatieIndex: 0,
            visualisaties: ["getalbeeld", "getalbeeldfiguur", "kralen", "lossekralen", "lossefiguren","twintigveld"],
            oef: {
                term1: "5",
                term2: "3",
                term3: "8",
                bewerking: "+"
            },
            huidigeTrigger: -4
        }
    },
    props: {
        size: {
            type: String,
            default: "2"
        }
    },
    components: {
        "getalbeeld": require("components/werkbladfabriek/stroken/tot10getalbeeld/getalbeeld").default,
        "getalbeeldfiguur": require("components/werkbladfabriek/stroken/tot10getalbeeld/getalbeeldfiguur").default,
        "kralen": require("components/werkbladfabriek/stroken/tot10getalbeeld/kralen").default,
        "lossekralen": require("components/werkbladfabriek/stroken/tot10getalbeeld/lossekralen").default,
        "lossefiguren": require("components/werkbladfabriek/stroken/tot10getalbeeld/lossefiguren").default,
        "twintigveld": require("components/werkbladfabriek/stroken/tot10getalbeeld/twintigveld").default,
    },
    computed: {
        ...mapGetters("drill", ["aantal", "oefeningen"]),
        ...mapGetters("besturing", ["toonOplossing"]),
        ...mapGetters("drill", ["triggerValue", "opties"]),
        breedte() {
            return this.size + "cm"
        },
        hoogte() {
            return Number(this.size) / 2 + "cm"
        },
        oplossing(){
            if(this.oef.bewerking == "+"){
                return Number(this.oef.term1)+Number(this.oef.term2)
            }else if (this.oef.bewerking =="-"){
                return Number(this.oef.term1)-Number(this.oef.term2)
            }
        }
    },
    watch: {
        triggerValue(val) {
            for (var i = 0; i < this.visualisaties.length; i++) {
                if (this.opties.visualisatie.value == this.visualisaties[i]) {
                    this.visualisatieIndex = i
                }
            }

            console.log("drilltrigger", val)
            if (this.oefeningen && this.oefeningen.length > 0) {
                this.oef = _.sample(this.oefeningen)

            } else {
                // oef = {
                // term1:"5",
                // term2:"3",
                // term3:"8",
                // bewerking:"+"
                // }
            }
        }
    },
    methods: {
        veranderVisualisatie() {
            this.visualisatieIndex++
            if (this.visualisatieIndex >= this.visualisaties.length) {
                this.visualisatieIndex = 0
            }
        },
        RekenUit() {
            if (this.oefeningen && this.oefeningen.length > 0) {
                this.oef = _.sample(this.oefeningen)

            } else {
                oef = {
                    term1: "5",
                    term2: "3",
                    term3: "8",
                    bewerking: "+"
                }
            }
        }
    }

}
</script>

<style>
.oplossing{
    font-weight: 550;
}
.knoppenbalk {
    border: 1px solid purple;
}

.kader {
    position: relative;
}

.onzichtbaar {
    opacity: 0;
    width: 10px;
    position: absolute;
    right: 0px;
    z-index: 5;
}

.kader:hover .onzichtbaar {
    opacity: 1;
}
</style>
