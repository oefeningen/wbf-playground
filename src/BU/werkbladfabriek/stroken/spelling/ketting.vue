<template>
<leeg-kader :oefenvormen="oefenvormen" :strookId="strookId">
    <div slot="settings">
        <q-btn-toggle
            v-model="lettergrootte"
            push
            rounded
            toggle-color="primary"
            :options="[
          {value: '1.5em', slot: 'one'},
          {value: '1.9em', slot: 'two'},
          {value: '2.3em', slot: 'three'}
        ]">
            <template v-slot:one>
                <div class="row items-center no-wrap">
                    <div class="text-center">
                        <q-icon
                            left
                            size="1.3em"
                            name="text_format" />

                    </div>

                </div>
            </template>

            <template v-slot:two>
                <div class="row items-center no-wrap">
                    <div class="text-center">
                        <q-icon
                            left
                            size="1.9em"
                            name="text_format" />
                    </div>

                </div>
            </template>

            <template v-slot:three>
                <div class="row items-center no-wrap">
                    <div class="text-center">
                        <q-icon
                            left
                            size="2.3em"
                            name="text_format" />
                    </div>

                </div>
            </template>
        </q-btn-toggle>
        <uitrekenknop @click="SaveSettingsEnReken">Reken uit</uitrekenknop>
    </div>
    <div slot="oefening">
        <oefeningtitel :toonTitel="toonTitel">Maak de woorden van de ketting los</oefeningtitel>
        <div class="row justify-around">
           <div class="ketting1">
                <div  :style="{fontSize:lettergrootte}" class="ketting">{{woord}}</div>
                <div class="fit row wrap justify-around" >
                    <div class="invulwoord" v-for="oplossing in opgave"><span v-if="toonOplossing" class="oplossing">{{oplossing}}</span></div>
                </div>
           </div>
           <div class="ketting2">
                <div  :style="{fontSize:lettergrootte}" class="ketting">{{woord2}}</div>
                <div class="fit row wrap justify-around" >
                    <div class="invulwoord" v-for="oplossing in opgave2"><span v-if="toonOplossing" class="oplossing">{{oplossing}}</span></div>
                </div>
           </div>
            <!-- <div>{{opgave}}</div> -->

        </div>
    </div>
</leeg-kader>
</template>

<script>
//Vaste imports
import besturingStrook from "src/mixins/besturingStrook.js";
import oefenvormLijst from "./lijst.js";

//Inherent aan de oefening

import _ from "lodash";

export default {
    mixins: [besturingStrook],
    components: {
       
    },
    data() {
        return {
            //Vaste data
            oefenvormen: oefenvormLijst,
            lettergrootte: "1.9em",
            woordenlijst: [],
            woord:"",
            woord2:"",
            aantalWoorden:0,
            opgave:[],
            opgave2:[],
            grens:20

            //Inherent aan de oefening

        };
    },
    watch:{
        lettergrootte(value){
            if(value=='1.5em'){
                this.grens = 25
            }
             if(value=='1.9em'){
                this.grens = 20
            }
               if(value=='2.3em'){
                this.grens = 16
            }
            this.SaveSettingsEnReken()
        }

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

    this.woord = ""
            this.opgave = []
            var woordketting =""
            this.woordenlijst = _.shuffle(this.woordenlijst)
            for(var i=0;i<this.woordenlijst.length;i++){
                
                var nieuwWoord = this.woordenlijst[i]
                console.log(nieuwWoord)
                if((woordketting.length + nieuwWoord.length)<=this.grens){
                    woordketting+=nieuwWoord
                    this.opgave.push(nieuwWoord)
                }
            }
            this.woord = woordketting
             var woordketting =""
             this.opgave2 = []
            this.woordenlijst = _.shuffle(this.woordenlijst)
            for(var i=0;i<this.woordenlijst.length;i++){
                
                var nieuwWoord = this.woordenlijst[i]
                console.log(nieuwWoord)
                if((woordketting.length + nieuwWoord.length)<=this.grens){
                    woordketting+=nieuwWoord
                    this.opgave2.push(nieuwWoord)
                }
            }
            this.woord2 = woordketting
            


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
@font-face {
    font-family: "Fuzzed";
    src: url("/statics/fonts/Fuzzed.ttf");
   
}
@font-face {
    font-family: "Chainz G98";
    src: url("/statics/fonts/ketting.ttf");
   
}
@font-face {
    font-family: "worm";
    src: url("/statics/fonts/Ignorantgit.ttf");
   
}
.speciaal{
    font-family: 'Fuzzed', sans-serif;
    font-size: .7cm;
}
.worm{
    font-family: 'worm', sans-serif;
    font-size: .9cm;
}
.ketting{
    display: inline;
    position: relative;
    top:-7mm;
    transform: scale(0.7,1);
    font-family: 'Chainz G98', sans-serif;
   
    
  
}


p {
  font-size: 1.1em;
}
.woordenlijstwoord {
  margin-left:15px;
  margin-right:15px;
 

}
.invulwoord{
    min-width: 140px;
    border-bottom: 1px solid black;
    height: 20px;
}
.kaderwoordenlijst{
  border: 1px solid black;
  padding:8px;
  border-radius: 10px;
  height:4cm;
  min-height: 4cm;
  max-height: 5cm;
}
.ketting2{
    position: absolute;
    top:3.8cm;

}
.ketting1{
    position: absolute;
    top:1.3cm;

}
</style>
