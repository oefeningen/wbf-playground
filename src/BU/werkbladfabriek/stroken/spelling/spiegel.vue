<template>
<leeg-kader :oefenvormen="oefenvormen" :strookId="strookId">
    <div slot="settings">
        <q-btn-toggle
            v-model="aantal"
            toggle-color="primary"
            :options="[
                {label: '4', value: 2},
                {label: '6', value: 3},
                {label: '8', value: 4},
                {label: '10', value: 5}
            ]"
        />
           
        
        <uitrekenknop @click="SaveSettingsEnReken">Reken uit</uitrekenknop>
    </div>
    <div slot="oefening">
        <oefeningtitel :toonTitel="toonTitel">Welke woorden zie je in de spiegel?</oefeningtitel>
        <div class="spiegelcontainer flex">
            <div class="spiegelrij" v-for="i in aantal">
                <div class="spiegel">{{woordenlijst[(i-1)*2]}}</div>
                <div class="invulwoord"><span class="oplossing" v-if="toonOplossing">{{woordenlijst[(i-1)*2]}}</span></div>
                <div class="spiegel">{{woordenlijst[((i-1)*2)+1]}}</div>
                <div class="invulwoord"><span class="oplossing" v-if="toonOplossing">{{woordenlijst[((i-1)*2)+1]}}</span></div>
                <!-- <div>{{opgave}}</div> -->
    
            </div>
            
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
            aantal:3,

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
            console.log("uitrekenen aangeroepen");
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
    height: 32px;
    position: relative;
    
}
.kaderwoordenlijst{
  border: 1px solid black;
  padding:8px;
  border-radius: 10px;
  height:4cm;
  min-height: 4cm;
  max-height: 5cm;
}
.spiegelcontainer{
    position: relative;
    top:-0.5cm;
    align-content: space-around;
    height:5.2cm;
    
}
.spiegelrij{
    display:flex;
    justify-content: space-around;
    width:19cm;
}
.spiegel{
     /* IE6 and 7 via hack */
  *filter: progid:DXImageTransform.Microsoft.BasicImage(mirror=1);
  /* Standards browsers, including IE9+ */
  -moz-transform: scale(-1,1);
  -ms-transform: scale(-1,1);
  -o-transform: scale(-1,1); /* Op 11.5 only */
  -webkit-transform: scale(-1,1);
  transform: scale(-1,1);
  font-size: 1.2em;
  border:1px solid grey;
  padding:4px;
  box-shadow: 2px 2px #c2bebe;
  background: linear-gradient(90deg, rgba(232,232,232,1) 0%, rgba(236,236,245,1) 35%, rgba(255,255,255,1) 100%) !important;
  width:3.3cm;
  text-align: center;  
}
</style>
