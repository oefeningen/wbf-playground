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

    <hoek class="hoekje" :hoek="hoek" :breedte="breedte"/>
    <!-- <div class="text-h5 text-center">{{oef.term1}} {{oef.bewerking}} {{oef.term2}} = <span class="oplossing" v-if="toonOplossing">{{oplossing}}</span><span v-else>.</span></div> -->
    <div id="meerkeuze" v-if="vraag=='aanduiden'">
        <div><q-checkbox class="q-ml-md" dense right-label v-model="scherp" label="scherpe hoek" /></div>
        <div><q-checkbox class="q-ml-md" dense right-label v-model="recht" label="rechte hoek" /></div>
       <div> <q-checkbox class="q-ml-md" dense right-label v-model="stomp" label="stompe hoek" /></div>
    </div>
    <div id="benoemen" v-if="vraag=='benoemen'">
        <div>dit is een </div>
        <div><span v-if="!toonOplossing">__________________</span> <span class="hoekoplossing" v-else> {{hoektype}}</span> hoek</div>
       
    </div>
     <div id="meten" v-if="vraag=='meten'">
        <div>deze hoek is </div>
        <div class="text-center"><span v-if="!toonOplossing">_________</span> <span   class="hoekoplossing" v-else>{{hoek}}</span>&deg;</div>
       
    </div>

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
            // scherp:false,
            hoek:"90",
            // recht:false,
            // stomp:false,
            visualisaties: ["aanduiden","benoemen","meten"],
            vraag:"aanduiden",
            oef: {
                term1: "5",
                term2: "3",
                term3: "8",
                bewerking: "+"
            },
            huidigeTrigger: -4,
            visualisatieIndex:0

        }
    },
    props: {
        size: {
            type: String,
            default: "2"
        }
    },
    components: {
        hoek: require("components/werkbladfabriek/stroken/hoeken/basishoek").default
    },
    computed: {
        ...mapGetters("drill", ["aantal", "oefeningen"]),
        ...mapGetters("besturing", ["toonOplossing"]),
        ...mapGetters("drill", ["triggerValue", "opties"]),
        hoektype(){
           if(Number(this.hoek)<90){
               return "scherpe"
           }else if(Number(this.hoek)>90){
               return "stompe"
           }else{
               return "rechte"
           }
        },
        scherp(){
            if(this.toonOplossing == false){
                return false
            }else{
                if(Number(this.hoek)<90){
                    return true
                }else{
                    return false
                }
            }

        },
        stomp(){
            if(this.toonOplossing == false){
                return false
            }else{
                if(Number(this.hoek)>90){
                    return true
                }else{
                    return false
                }
            }

        },
        recht(){
            if(this.toonOplossing == false){
                return false
            }else{
                if(Number(this.hoek)==90){
                    return true
                }else{
                    return false
                }
            }

        },
        



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
            this.vraag=this.opties.oefenvorm.value
            this.RekenUit()
            // for (var i = 0; i < this.visualisaties.length; i++) {
            //     if (this.opties.visualisatie.data == this.visualisaties[i]) {
            //         this.visualisatieIndex = i
            //     }
            // }

            // console.log("drilltrigger", val)
            // if (this.oefeningen && this.oefeningen.length > 0) {
            //     this.oef = _.sample(this.oefeningen)

            // } else {
            //     // oef = {
            //     // term1:"5",
            //     // term2:"3",
            //     // term3:"8",
            //     // bewerking:"+"
            //     // }
            // }
        }
    },
    methods: {
        veranderVisualisatie() {
            this.visualisatieIndex++
            if (this.visualisatieIndex >= this.visualisaties.length) {
                this.visualisatieIndex = 0
            }
            this.vraag=this.visualisaties[this.visualisatieIndex]
        },
        RekenUit() {
           var mogelijkheden = []
           var lijst = ["scherp","recht","stomp"]
           for(var l=0;l<lijst.length;l++){
               var hoektype = this.oefeningen[lijst[l]]
               for(var i=0;i<Number(hoektype.frequentie);i++){
                   mogelijkheden.push(_.sample(hoektype.hoeken))
               }
           }
           console.log("mogelijke hoeken", mogelijkheden)
           this.hoek = _.sample(mogelijkheden).toString()
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
.hoekoplossing {
    font-size: 1.5em;
    font-weight: bold;
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
