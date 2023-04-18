<template>
<div>
    <!-- <q-dialog v-model="kiesWoordpakketTrigger" persistent>
        <q-card>

            <q-card-section horizontal>

                <q-card-section>
                    <q-avatar>

                        <q-btn
                            color="primary"
                            icon="add"
                            dense
                            flat />

                    </q-avatar>
                    

                    <q-list bordered>
                        <q-item
                            clickable
                            v-ripple
                            dense
                            v-for="(woordpakket,key) in woordpakketten"
                            :key="key"
                            :active="actiefWP === woordpakket.titel"
                            @click="preSelectWoordpakket(woordpakket)">

                            <q-item-section>{{woordpakket.titel}}</q-item-section>
                        </q-item>
                    </q-list>
                </q-card-section>
                <q-card-section>
                    <div id="divVoorWoorden">
                        <q-input
                            v-model="woordpakketSelectie"
                            label="woorden"
                            type="textarea">
                            <template v-slot:append>
                                <q-avatar>

                                    <q-btn
                                        color="primary"
                                        icon="save"
                                        dense
                                        flat />

                                </q-avatar>
                            </template>
                        </q-input>
                    </div>
                </q-card-section>

            </q-card-section>
            <q-card-section>
                <q-card-actions vertical align="center">
                    <q-btn
                        flat
                        label="sluit"
                        v-close-popup />
                    <q-btn flat label="Action 2" />
                </q-card-actions>
            </q-card-section>
        </q-card>
    </q-dialog> -->
    <div>
    <q-dialog v-model="deleteWPbevestiging" persistent>
        <q-card>
            <q-card-section class="row items-center">
                <p>Weet je zeker dat je dit woordpakket wil verwijderen?</p>
            </q-card-section>
            <q-card-actions align="right">
                <q-btn flat label="Annuleer" color="primary" v-close-popup />
                <q-btn label="Verwijder woordpakket" color="primary" v-close-popup @click="deleteWP" />
                
            </q-card-actions>
        </q-card>
    </q-dialog>
    <q-dialog v-model="changeWPNameDialog" persistent>
        <q-card>
            <q-card-section>
                <div class="text-caption">Welke naam wilt u dit woordpakket geven?</div>
                <q-input v-model="nieuweNaam" type="text" label="" />
            </q-card-section>
            <q-card-actions align="right">
                <q-btn flat label="Annuleer" color="primary" v-close-popup />
                <q-btn label="OK" color="primary" v-close-popup @click="changeName"/>
                
            </q-card-actions>
        </q-card>
    </q-dialog>
    <q-dialog v-model="nieuwWoordpakketDialog" persistent>
        <q-card>
            <q-card-section>
                <div class="text-caption">Welke naam wilt u dit woordpakket geven?</div>
                <q-input v-model="nieuweNaam" type="text" label="" />
            </q-card-section>
            <q-card-actions align="right">
                <q-btn flat label="Annuleer" color="primary" v-close-popup />
                <q-btn label="OK" color="primary" v-close-popup @click="createNieuwWP"/>
                
            </q-card-actions>
        </q-card>
    </q-dialog>
    <q-dialog v-model="kiesWoordpakketTrigger" persistent>
        <q-card class="woordpakketvenster">

            <q-card-section horizontal>

                <q-card-section>
                    <q-avatar>

                        <q-btn
                            color="primary"
                            icon="add"
                            @click="initNieuwWP"
                            dense
                            flat />

                    </q-avatar>

                    <q-list bordered class="lijst">
                        <q-item
                            clickable
                            v-ripple
                            dense
                            v-for="(woordpakket,key) in woordpakketten"
                            :key="key"
                            :active="actiefWP === woordpakket.titel"
                            @click="preSelectWoordpakket(woordpakket)">

                            <q-item-section>{{woordpakket.titel}}</q-item-section>
                            <q-item-section side>
                                <div class="row">
                                    <q-btn
                                    dense
                                        color="primary"
                                        class="q-pa-none"
                                        icon="edit"
                                        @click="initChangeName(woordpakket)"
                                        size="xs"
                                        flat />
                                    <q-btn
                                    dense
                                        color="red"
                                        class="q-pa-none"
                                        icon="delete"
                                        @click="initDeleteWP(woordpakket)"
                                        size="xs"
                                        flat />
                                </div>
                            </q-item-section>

                        </q-item>
                    </q-list>
                </q-card-section>
                <q-card-section>
                    <div id="divVoorWoorden">
                        <p><strong>{{actiefWP}}</strong>
                         <!-- <caption>sel: {{selectedId}}</caption> -->
                         </p>
                        <q-input
                            v-model="woordpakketSelectie"
                            label="woorden (typ ze met een komma ertussen)"
                            type="textarea">
                            <template v-slot:append>
                                <q-avatar>

                                    <q-btn
                                        color="primary"
                                        icon="save"
                                        @click="woordpakketOpslaan"
                                        dense
                                        flat />

                                </q-avatar>
                            </template>
                        </q-input>
                    </div>
                </q-card-section>

            </q-card-section>
            <q-card-section>
                <q-card-actions  align="right">
                    <q-btn
                        flat
                        label="Annuleer"
                        v-close-popup />
                    <q-btn color="primary" label="Gebruik dit woordpakket" @click="GebruikDitWoordpakket"  v-close-popup />
                </q-card-actions>
            </q-card-section>
        </q-card>
    </q-dialog>
</div>
    <div class="text-caption">Welke oefeningen?</div>
    <oefenselectie :geselecteerdeOefeningen.sync="geselecteerdeOefeningen" :oefentypes="oefentypes" />
    <div class="text-caption">Woorden?</div>
    <q-input
        v-model="sample"
        filled
        type="textarea" />
    <q-btn
        color="primary"
        label="Kies woordpakket"
        size="sm"
        dense
        @click="KiesWoordpakket" />

    <!-- <p>{{geselecteerdeOefeningen}}</p> -->
    <!-- <p>{{getTriggerShuffleOefeningen}}</p> -->

</div>
</template>

<script>
import {
    mapActions,
    mapState
} from "vuex"
import oefentypes from "./lijst.js";
import instellingMix from "src/mixins/instellingMix.js";
import {
    QDialog,uid
} from 'quasar';

export default {
    data() {
        return {
            actiefWP: "",
            kiesWoordpakketTrigger: false,
            woordpakketSelectie:"",
            actiefWP:"",
            deleteWPbevestiging:false,
            changeWPNameDialog:false,
            nieuwWoordpakketDialog:false,
            nieuweNaam:"",
            wpActionSelection:null,
            // geselecteerdeTafels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            // optionsTafels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            // geselecteerdeBewerkingen: ["x", ":"],
            geselecteerdeOefeningen: oefentypes,
            selectedId:"",
            // optionsBewerkingen: ["x", ":"],
            oefentypes: oefentypes,
            sample: "appels,trekken,zitten,poppen,kunnen,haren,geven,regen,open,zomer,buren,sleutel,spiegel,snoepen,geiten,blijven,buiten,paarden,speelden,soorten"
        };
    },
    components: {
        oefenselectie: require("src/components/ui/oefenselectie").default
    },
    mixins: [instellingMix],
    methods: {
       ...mapActions("werkbladen", ["FBLoadWoordpakketten","FBSaveWoordpakket"]),
       GebruikDitWoordpakket(){
           this.sample = this.woordpakketSelectie
       },
       deleteWP(){

       },
        woordpakketOpslaan(){
            console.log("saveWoordpakket")
            var payload = {
                id:this.selectedId,
                titel:this.actiefWP,
                woorden:this.woordpakketSelectie

            }
            this.FBSaveWoordpakket(payload)

        },
        preSelectWoordpakket(woordpakket) {
            console.log("woordpakket:",woordpakket)
            this.selectedId = woordpakket.id
            this.actiefWP = woordpakket.titel
            this.woordpakketSelectie = woordpakket.woorden
        },
        initDeleteWP(wp){
            this.deleteWPbevestiging =true
            this.wpActionSelection = wp

        },
        initNieuwWP(){
            this.nieuweNaam = ""
            this.nieuwWoordpakketDialog=true
           
        },
        createNieuwWP(){
            this.actiefWP = this.nieuweNaam
            this.selectedId= uid()
            this.woordpakketSelectie = ""
        },
        
        initChangeName(wp){
            this.changeWPNameDialog = true
            this.wpActionSelection = wp
        },
        changeName(){
            console.log("saveWoordpakket")
            var payload = {
                id:this.selectedId,
                titel:this.nieuweNaam,
                woorden:this.woordpakketSelectie

            }
            this.FBSaveWoordpakket(payload)

        },
       
        KiesWoordpakket() {
            this.kiesWoordpakketTrigger = true
        },
        saveSettings() {
            var sample = this.sample
            var woorden = sample.split(",")
            for(var i=0;i<woorden.length;i++){
                woorden[i] = _.trim(woorden[i])
                
            }

            var settings = {
                geselecteerdeWoorden:woorden,
                // geselecteerdeBewerkingen: this.geselecteerdeBewerkingen
            };
            this.saveMainSettings(JSON.parse(JSON.stringify(settings)));
        }
    },
    computed: {
        ...mapState("werkbladen", ["woordpakketten"])
    },
    mounted() {
        this.FBLoadWoordpakketten()
    }
};
</script>

<style>

#divVoorWoorden{

  padding:10px;
  min-width: 450px;
  width: 450px;

}
.woordpakketvenster{
    min-width: 800px;
    width: 800px;
    
}
.lijst{
    width:260px;
}

</style>
