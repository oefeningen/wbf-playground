<template>
<div>
<svg :viewBox="viewbox" :width="breedte" :height="hoogte" preserveAspectRatio="xMinYMid meet"> >
    <g>
        <rect
            width="20"
            height="20"
            :x="((i-1)*20)"
            y="0"
            v-for="i in 10"
            :key="'blok_'+i"
            :fill="kleuren[i-1]"
            stroke="black" />
        <rect
            width="20"
            height="20"
            :x="((i-1)*20)"
            y="20"
            v-for="i in 10"
            :key="'blok_'+(10+i)"
            :fill="kleuren[(10+i)-1]"
            stroke="black" />
        <line
            x1="100"
            x2="100"
            y1="-1"
            y2="41"
            stroke="black"
            stroke-width="4" />
        <line
            v-show="lijntjes[i-1]"
            v-for="i in 10"
            :x1="((i-1)*20)+2"
            :x2="((i-1)*20)+18"
            y1="-2"
            y2="21"
            :key="'lijn_'+i"
            :id="'lijn_'+i"
            stroke="black"
            stroke-width="1.5" />
        <line
            v-show="lijntjes[i+9]"
            v-for="i in 10"
            :x1="((i-1)*20)+2"
            :x2="((i-1)*20)+18"
            y1="18"
            y2="41"
            :key="'lijn_'+(i+10)"
            :id="'lijn_'+(i+10)"
            stroke="black"
            stroke-width="1.5" />
      
    </g>
    
</svg>
<!-- <p>{{kleuren}}</p> -->
</div>
</template>

<script>
import gsap from "gsap"
import _ from "lodash"

export default {
    data() {
        return {
            grootte: "20",
            marge: "5",
            gap: "8",
            palet: ["red", "orange", "green", "lightblue", "teal", "purple", "yellow"],
            kleur1: "",
            kleur2: ""
        };
    },
    computed: {
        viewbox() {
            var viewbreedte = 200

            return "0 0 " + viewbreedte + " 50";
        },
        lijntjes(){
          var lijnen = []
          for(var i=0;i<20;i++){
            if(this.bewerking =="+"){
              lijnen.push(false)
            }else{
              if(i<(Number(this.term1)-Number(this.term2))){
                lijnen.push(false)
              }else if(i<Number(this.term1)){
                lijnen.push(true)
              }else{
                lijnen.push(false)
              }
            }
          }
          return lijnen

        },
        kleuren() {
            var kleuren = []
            var term1 = Number(this.term1)
            var term2 = Number(this.term2)
            
            if (this.bewerking == "+") {
              for(var i=0;i<20;i++){
                console.log(i + 'is kleiner dan '+ term1)
                if(i<term1){
                  kleuren.push(this.kleur1)
                }else if(i<(Number(term1) + Number(term2))){
                  kleuren.push(this.kleur2)
                }else{
                  kleuren.push("white")
                }
              }
            }else if(this.bewerking == "-"){
              for(var i=0;i<20;i++){
                if(i<(term1)){
                  kleuren.push(this.kleur2)
                }else{
                  kleuren.push("white")
                }
              }
            }
            


            return kleuren

        }

    },
    mounted() {
        
        var palet = _.shuffle(this.palet)
        this.kleur1 = palet[0]
        this.kleur2 = palet[1]

    },
    props: {
        term1: {
            type: String,
            default: "5"
        },
        term2: {
            type: String,
            default: "5"
        },
        bewerking: {
            type: String,
            default: "+"
        },
        hoogte: {
            type: String,
            default: "3cm"
        },
        breedte: {
            type: String,
            default: "5cm"
        },

    }
};
</script>

<style>
svg {
    border: 0px solid black;
    /* background-color: rgb(200, 255, 127); */
}
</style>
