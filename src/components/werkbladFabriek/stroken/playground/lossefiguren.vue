<template>
<div>
    <svg preserveAspectRatio="xMinYMin meet" viewBox="0 0 50 25" :width="breedte">

        <use
            class="parel"
            v-for="i in (max)"
            :transform="posities[i-1]"
            :key="i"
            :xlink:href="'/statics/telsymbolen.svg#'+tekeningen[i-1]"
            :width="8"
            :x="(i<=grens) ? 0 : 1"
            y="0" />
    </svg>

<use :xlink:href="'/statics/telsymbolen.svg#'+tekeningen[0]"
</div>
</template>

<script>
import gsap from "gsap"
import Draggable from "gsap/Draggable"
import _ from "lodash"

export default {
    data() {
        return {

            kralen: ["kraal1", "kraal2", "kraal3", "kraal4"],
            k1: "kraal1",

            iconsize: 5,
            //breedte = 7
            posities6: [
                'matrix(1,0,0,1,1.5827,-1.9067)',
                'matrix(1,0,0,1,8.3988,-3.7183)',
                'matrix(1,0,0,1,14.6244,-0.5138)',
                'matrix(1,0,0,1,20.4428,3.2438)',
                'matrix(1,0,0,1,27.2589,5.1482)',
                'matrix(1,0,0,1,35.1411,2.1625)',
                'matrix(1,0,0,1,38.6552,-2.2301)'
            ],
            //breedte = 5
            posities10: [
                'matrix(1,0,0,1,1.5827,-8.3693)',
                'matrix(1,0,0,1,4.9776,8.3601)',
                'matrix(1,0,0,1,0.7577,0.7131)',
                'matrix(1,0,0,1,12.0001,1.2889)',
                'matrix(1,0,0,1,15.3728,-7.5579)',
                'matrix(1,0,0,1,18.7629,8.0181)',
                'matrix(1,0,0,1,24.7444,0.7383)',
                'matrix(1,0,0,1,28.9702,-8.0671)',
                'matrix(1,0,0,1,35.0216,-0.231)',
                'matrix(1,0,0,1,30.8699,8.5224)',
                'matrix(1,0,0,1,41.0756,7.8823)',
                'matrix(1,0,0,1,40.9312,-7.6675)'
            ]
        }

    },
    computed: {
        posities() {
            if (this.max < 6) {
                return this.posities10
            } else {
                return this.posities10
            }
        },
        tekeningen() {
            const sample = arr => arr[Math.floor(Math.random() * arr.length)];
            const varia = ["vogel", "appel", "snoep", "ster", "knikker1"];
            const getalbeeld = ["bol", "hokje"];
            var symbool = "bol";
            if (this.symbolen == "getalbeeld") {
                symbool = sample(getalbeeld);
            } else if (this.symbolen == "varia") {
                symbool = sample(varia);
            } else {
                var lijst = varia.concat(getalbeeld);
                symbool = sample(lijst);
            }
            var tekenA = [];
            var term1 = Number(this.term1);
            var term2 = Number(this.term2);
            if (this.bewerking == "+") {
                var som = term1 + term2;
                for (var i = 0; i < 10; i++) {
                    if (i < term1) {
                        tekenA[i] = symbool;
                    } else {
                        if (i < som) {
                            tekenA[i] = symbool + "-b";
                        } else {
                            tekenA[i] = "";
                        }
                    }
                }
            }

            if (this.bewerking == "-") {
                for (var i = 0; i < 10; i++) {
                    if (i < term1 - term2) {
                        tekenA[i] = symbool;
                    } else {
                        if (i < term1) {
                            tekenA[i] = symbool + "-m";
                        } else {
                            tekenA[i] = "";
                        }
                    }
                }
            }
            return tekenA;
        },
        max() {
            if (this.bewerking == "+") {
                return Number(this.term1) + Number(this.term2)
            } else {
                return Number(this.term1)
            }

        },
        grens() {
            if (this.bewerking == "+") {
                return Number(this.term1)
            } else {
                return Number(this.term1) - Number(this.term2)
            }

        },
        k2() {
            if (this.bewerking == "+") {
                return "/statics/kralen.svg#" + this.kralen[1]
            } else {
                return this.k1 + "-m"

            }

        }

    },

    props: ["breedte", "term1", "term2", "bewerking"],

    mounted() {
        gsap.registerPlugin(Draggable)
        var drag = Draggable.create(".parel", {
            minimumMovement: 0.5,
            onDragEnd: function (e) {
                var transform = e.target.getAttribute("transform");
                console.log("'" + transform + "',")

            }
        })
        this.posities10 = _.shuffle(this.posities10)
        this.kralen = _.shuffle(this.kralen)
        this.k1 = "/statics/kralen.svg#" + this.kralen[0]

    }
}
</script>

<style>

</style>
