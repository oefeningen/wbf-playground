<template>
<q-page class="justify-center">

    <div class="blad drillblad">
        <pagina-hoofding>
            <!-- <p>de map is {{selectedMapId}}</p> -->
            <slot name="titel">Drill</slot>
        </pagina-hoofding>
        <div id="oefenruimte" class="q-mt-xl">
            <slot name="oefenruimte"></slot>
        </div>

        <div id="posfoot">
            <pagina-footer></pagina-footer>
        </div>
    </div>

    <div class="zijbalk">
        <q-card>
            <q-card class="my-card bg-secondary instellingveld">
                <q-card-section class="q-pa-sm">
                    <div class="text-h6 ">Instellingen</div>
                </q-card-section>
                <slot name='instellingen'>
                    <div class="q-pa-sm">nog geen instellingen</div>
                </slot>
                <q-separator />
                <q-card-actions>
                    <q-space></q-space>
                    <knoppenrij />
                </q-card-actions>

                <q-btn v-if="vanuitWerkbladbeheer"
                    color="primary"
                    icon="send"
                    label="Exporteer naar digiwerkblad"
                    @click="exporteer" />
                    
            </q-card>
        </q-card>

    </div>

</q-page>
</template>

<script>
import {
    uid
} from "quasar"
import * as htmlToImage from "html-to-image"
import {
    mapActions,
    mapState
} from "vuex"
import JSZip from "jszip"
import {
    saveAs
} from 'file-saver';

export default {
    components: {
        paginaHoofding: require("components/werkbladfabriek/vaste_layout/PaginaHoofding").default,
        paginaFooter: require("components/werkbladfabriek/vaste_layout/PaginaFooter").default,
        leegKader: require("components/werkbladfabriek/vaste_layout/leegKader4").default,
        knoppenrij: require("components/werkbladfabriek/vaste_layout/knoppenrijDrill").default
    },
    props: ["map"],
    computed: {
        ...mapState("mappen", ["selectedMapId"]),
        ...mapState("werkbladen",["vanuitWerkbladbeheer"])
    },
    methods: {
        

        ...mapActions("besturing", ["toonOplossing", "toggleOplossing"]),
        ...mapActions("mappen", ["FBWerkbladGegenereerd"]),
        exporteer(){
            this.toonOplossing()
            var mc = this
            setTimeout(function(){ mc.maakZip() }, 1000)
            

        },
        maakZip() {
            // this.toonOplossing()
            console.log("verzamel gegevens")
            var werkblad = {
                map: this.selectedMapId,

                actief: false,
                id: uid(),
                invulvelden: []
            }
            var el = document.getElementsByClassName('oplossing');
            var blad = document.getElementsByClassName('drillblad')[0]
            for (var i = 0; i < el.length; i++) {
                var positie = this.getPosition(el[i])
                var bladpositie = this.getPosition(blad)
                console.log(el[i].innerHTML, this.getPosition(el[i]))
                console.log(el[i].getBoundingClientRect().width)
                var opgave = {
                    id: uid(),
                    x: positie.x,
                    y: positie.y - bladpositie.y - 15,
                    controleer: true,
                    antwoord: el[i].innerHTML,
                    breedte: (el[i].getBoundingClientRect().width * 2) + 45
                }
                werkblad.invulvelden.push(opgave)
            }
            console.log("werkblad", werkblad)

            // zip.file("invulvelden.json", JSON.stringify(werkblad.invulvelden))

            this.toggleOplossing()
            this.$q.dialog({
                title: 'Vraagje',
                message: 'Welke naam wil je dit werkblad geven?',
                prompt: {
                    model: '',
                    type: 'text' // optional
                },
                cancel: true,
                persistent: true
            }).onOk(data => {
                // var zip = new JSZip()
                werkblad.naam = data

                var node = document.getElementsByClassName('blad');
                var image = null
                htmlToImage.toPng(node[0])
                    .then((dataUrl) => {
                        var img = new Image();
                        img.src = dataUrl;
                        image = dataUrl
                        // preview toevoegen na werkblad  
                        // document.body.appendChild(img);
                        console.log("dataUrl", dataUrl.substr(dataUrl.indexOf(',')))
                        var payload = {
                            map: werkblad.map,
                            name: werkblad.naam,
                            invulvelden: werkblad.invulvelden,
                            id: werkblad.id,
                            image: dataUrl,
                            actief: false
                        }
                        console.log("gegenereerd", payload)
                        this.FBWerkbladGegenereerd(payload)

                        // zip.file("werkblad.png", dataUrl.substr(dataUrl.indexOf(',')), {
                        // base64: true
                    })
                    .catch(function (error) {
                        console.error('oops, Er ging iets mis!', error);
                    })
            }).onCancel(() => {
                // console.log('>>>> Cancel')
            }).onDismiss(() => {
                // console.log('I am triggered on both OK and Cancel')
            })
        }

    ,
    verzamelGegevens() {

    },
    getPosition(el) {
        var xPos = 0;
        var yPos = 0;
        var afwijkingY = 4

        while (el) {
            if (el.tagName == "BODY") {
                // deal with browser quirks with body/window/document and page scroll
                var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
                var yScroll = el.scrollTop || document.documentElement.scrollTop;

                xPos += (el.offsetLeft - xScroll + el.clientLeft);
                yPos += (el.offsetTop - yScroll + el.clientTop) + afwijkingY;
            } else {
                // for all other non-BODY elements
                // console.log("geen body",el.offsetLeft)
                xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
                yPos += (el.offsetTop - el.scrollTop + el.clientTop) +afwijkingY;
            }

            el = el.offsetParent;
        }
        return {
            x: xPos,
            y: yPos
        };
    }
    }
}
</script>
<style scoped>
.blad {
  position: relative;
  width: 21cm;
  height: 29.7cm;
  background-color: white;
  border: 0.5px dashed grey;
  padding: 0.8cm;
}
@media print {
  .blad {
    position: relative;
    width: 21cm;
    height: 29.7cm;
    background-color: white;
    border: none;
    padding: 0.8cm;
  }
}
@page {
  margin: 0;
}

#pos1 {
  background-color: white;
  position: absolute;
  top: 3.5cm;
}
#pos2 {
  background-color: white;
  position: absolute;
  top: 9.5cm;
}
#pos3 {
  background-color: white;
  position: absolute;
  top: 15.5cm;
}
#pos4 {
  background-color: white;
  position: absolute;
  top: 21.5cm;
}
#posfoot {
  background-color: white;
  position: absolute;
  top: 27.9cm;
  width: 19cm;
}
.zijbalk {
  position: fixed;
  left: 22cm;
  top: 2cm;
}
.instellingveld {
  width: 290px;
  padding: 5px;
}
</style>
