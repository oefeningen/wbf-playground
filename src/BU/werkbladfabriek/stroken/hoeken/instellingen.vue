<template>
<div>

    <div class="text-caption">Welke hoeken?</div>
    <selectiechip
        v-for="(item,id) in oefentypes"
        v-model="item.frequentie"
        :item="item"
        :key="id"></selectiechip>
    <!-- <p>{{oefentypes}}</p> -->

    <q-select
        class="q-mt-sm"
        bg-color="teal-3"
        outlined
        filled
        standout="bg-teal text-white"
        v-model="nauwkeurigheid"
        :options="optiesNauwkeurigheid"
        label="Nauwkeurigheid" />
    <q-select
        class="q-mt-sm"
        bg-color="teal-3"
        outlined
        filled
        standout="bg-teal text-white"
        v-model="oefenvorm"
        :options="oefenvormen"
        label="Welke oefenvorm" />


    <div class="text-caption q-mt-sm">Hoeveel oefeningen op een blad</div>
    <q-btn-toggle
        v-model="aantal"
        @click="RekenUit"
        push
        color='white text-grey'
        toggle-color="indigo-7  "
        :options="[
          {label: '9', value: '9'},
          {label: '12', value: '12'},
          {label: '15', value: '15'}

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
            nauwkeurigheid:{
                label:"tot op 5 graden",
                value:5
            },
            oefentypes: [{
                    titel: "scherpe hoeken",
                    frequentie: 3,
                    },
                    {
                    titel: "rechte hoeken",
                    frequentie: 1,
                    },{
                    titel: "stompe hoeken",
                    frequentie: 3,
                    },
            ],
            oefenvorm: {label: "aanduiden: scherp, recht of stomp", value:"aanduiden"},
            oefenvormen:[
                {label: "benoemen: scherp, recht of stomp", value:"benoemen"},
                {label: "aanduiden: scherp, recht of stomp", value:"aanduiden"},
                {label: "de hoek meten", value:"meten"}
            ],

            optiesNauwkeurigheid:[
                {
                    label:"tot op 10 graden",
                    value:10
                },
                {
                    label:"tot op 5 graden",
                    value:5
                },
                {
                    label:"tot op 1 graad",
                    value:1
                },


            ],


                aantal: "10",
              
            };
        },
        methods: {
                ...mapActions("drill", ["setAantal", "setDrillOefeningen", "triggerDrill", "setOpties"]),
                scherpehoeken(nauwkeurigheid){
                    var hoeken = []
                    for(var i = 5;i < 88;i++){
                        console.log("modulo", i%Number(nauwkeurigheid))
                        if(i%Number(nauwkeurigheid) == 0){
                            hoeken.push(i)
                        }
                    }
                    console.log("scherpe hoeken",hoeken)
                    return hoeken

                },
                stompehoeken(nauwkeurigheid){
                    var hoeken = []
                    for(var i = 95;i <= 180;i++){
                        if(i%nauwkeurigheid == 0){
                            hoeken.push(i)
                        }
                    }
                    return hoeken

                },
                RekenUit() {
                    console.log("oefeningen opbouwen")
                    //een array met alle mogelijke oefeningen maken
                    
                        var scherp = {
                            frequentie: this.oefentypes[0].frequentie, 
                            hoeken:this.scherpehoeken(this.nauwkeurigheid.value)
                        }
                        var recht = {
                            frequentie:this.oefentypes[1].frequentie,
                            hoeken:[90]
                        }
                        var stomp = {
                            frequentie: this.oefentypes[2].frequentie, 
                            hoeken:this.stompehoeken(this.nauwkeurigheid.value)
                        }

                    var mogelijkheden = {scherp:scherp, recht:recht, stomp:stomp}
                    
                    
                    console.log("mogelijkheden", mogelijkheden)

                    //      this.saveDrillSettings(JSON.parse(JSON.stringify(settings)));
                    this.$q.localStorage.set("hoeken", {
                        nauwkeurigheid: this.nauwkeurigheid,
                        oefenvorm: this.oefenvorm,
                        aantal: this.aantal
                    })
                    this.setAantal(this.aantal);
                    this.setOpties({
                        oefenvorm: this.oefenvorm
                    })
                    this.setDrillOefeningen(mogelijkheden);
                    this.triggerDrill(false);
                }
            },

            computed: {
                ...mapGetters("drill", ["drillTriggered"])
            },
            mounted() {
                var settings = this.$q.localStorage.getItem("hoeken")
                if (settings) {
                    this.aantal = settings.aantal
                    this.bereik = settings.bereik
                    this.geselecteerdeBewerkingen = settings.geselecteerdeBewerkingen
                    this.visualisatie = settings.visualisatie
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
