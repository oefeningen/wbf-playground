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
            ]" />

        <uitrekenknop @click="SaveSettingsEnReken">Reken uit</uitrekenknop>
    </div>
    <div slot="oefening">
        <oefeningtitel :toonTitel="toonTitel">Klinkerdief</oefeningtitel>
        <div class="spiegelcontainer flex">
            <div  v-for="i in aantal">
                <!-- <div class="diefoefening row">
                    <div class="klinkerdief" v-html="steelKlinkers(woordenlijst[(i-1)*2])"></div>
                    <div class="invulwoord"><span class="oplossing" v-if="toonOplossing">{{woordenlijst[(i-1)*2]}}</span></div>
                </div> -->
               <div class="spiegelrij">
                    <kdopgave :woord="woordenlijst[(i-1)*2]" :toonOplossing="toonOplossing" />
                    <kdopgave :woord="woordenlijst[((i-1)*2)+1]" :toonOplossing="toonOplossing" />
               </div>
                 <!-- <div class="diefoefening row">
                <div class="klinkerdief" v-html="steelKlinkers(woordenlijst[((i-1)*2)+1])"></div>
                <div class="invulwoord"><span class="oplossing" v-if="toonOplossing">{{woordenlijst[((i-1)*2)+1]}}</span></div>
                 </div> -->
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
     components:{
            kdopgave:require("components/werkbladfabriek/stroken/spelling/kdopgave").default
        },
    data() {
        return {
            //Vaste data
            oefenvormen: oefenvormLijst,
            lettergrootte: "1.9em",
            woordenlijst: [],
            woord: "",
            woord2: "",
            aantalWoorden: 0,
            opgave: [],
            opgave2: [],
            aantal: 3,
            icons: [" &#x1F353;", "&#x1F385;", "&#x1F414;", "&#x1F438;", "&#x1F47B;", "&#x1F638;"]

            //Inherent aan de oefening

        };
    },
    watch: {
        lettergrootte(value) {
            if (value == '1.5em') {
                this.grens = 25
            }
            if (value == '1.9em') {
                this.grens = 20
            }
            if (value == '2.3em') {
                this.grens = 16
            }
            this.SaveSettingsEnReken()
        }

    },

    methods: {
        steelKlinkers(woord) {
            if (woord) {
                var nw = woord.replace(/e/g, _.sample(this.icons))
                nw = nw.replace(/a/g, _.sample(this.icons))
                nw = nw.replace(/o/g, _.sample(this.icons))
                nw = nw.replace(/i/g, _.sample(this.icons))
                nw = nw.replace(/u/g, _.sample(this.icons))
                return nw
            } else {
                return 'nee'
            }
        },
        KiesWoordpakket() {

        },
        getLettertype() {
            var types = ["worm", "was", "sokken"]
            return "worm"

        },
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
    font-family: "Candy Stripe";
    src: url("/statics/fonts/candystr.ttf");

}
@font-face {
    font-family: "Laundry Day";
    src: url("/statics/fonts/LaundryDay.ttf");

}
@font-face {
    font-family: "My Socks Line";
    src: url("/statics/fonts/MySocksLine.ttf");

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
    top:0.3cm;
}
.kaderwoordenlijst{
  border: 1px solid black;
  padding:8px;
  border-radius: 10px;
  height:4cm;
  min-height: 4cm;
  max-height: 5cm;
}
.spiegelrij{
    display:flex;
    
}
.snoep{
    font-size: 1.5em;
    font-family: "Candy Stripe";
    border:1px solid grey;
  padding:4px;
  box-shadow: 2px 2px #c2bebe;
  background: linear-gradient(90deg, rgba(232,232,232,1) 0%, rgba(236,236,245,1) 35%, rgba(255,255,255,1) 100%) !important;
  width:3.3cm;
  text-align: center;  

}
.was{
    font-size: 1.95em;
    font-family: "Laundry Day";
  padding:1px;
  width:3.3cm;
  text-align: center;  
}
.klinkerdief{
   font-size: 1.2em; 
}
.sokken{
    font-size: 1.8em;
    font-family: "My Socks Line", "Times";
  padding:4px;
   width:3.3cm;
  text-align: center;  
}
.diefoefening{
    vertical-align:middle;
}
.spiegelcontainer{
    position: relative;
    top:-0.5cm;
    align-content: space-around;
    height:5.2cm;
    
}

</style>
