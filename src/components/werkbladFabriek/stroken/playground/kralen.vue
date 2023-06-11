<template>
<div>
    <svg preserveAspectRatio="xMinYMin meet" viewBox="0 0 50 25" :width="breedte">

        <g id="layer1">
            <path
                style="stroke-linejoin:miter;stroke-opacity:1;stroke:#000000;stroke-linecap:butt;stroke-width:0.3700043367486;fill:none"
                d="M1.3385409 13.73236C5.7670161 6.77542 13.303049 8.56955 18.724983 12.83926C34.313742 24.59793 38.008976 9.02065 48.959085 7.47558"
                id="draad" />
        </g>

        <use
            class="parel"
            v-for="i in (max)"
            :transform="posities[i-1]"
            :key="i"
            :xlink:href="(i<=grens) ? k1 : k2"
            :width="(max<6)? 7 : 5"
            :x="(i<=grens) ? 0 : 1"
            y="0" />
    </svg>
      
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
                'matrix(1,0,0,1,1.5827,-1.9067)',
                'matrix(1,0,0,1,6.4039,-3.7183)',
                'matrix(1,0,0,1,11.4507,-2.3878)',
                'matrix(1,0,0,1,15.9392,0.0096)',
                'matrix(1,0,0,1,20.3674,2.6697)',
                'matrix(1,0,0,1,25.3238,4.2593)',
                'matrix(1,0,0,1,30.4235,3.7373)',
                'matrix(1,0,0,1,34.9979,1.1552)',
                'matrix(1,0,0,1,39.2821,-1.918)',
                'matrix(1,0,0,1,43.7573,-4.5988)'
            ]
        }

    },
    computed:{
       posities(){
          if(this.max<6){
             return this.posities6
          }else{
             return this.posities10
          }
       },
       max(){
          if(this.bewerking == "+"){
             return Number(this.term1) + Number(this.term2)
          }else{
             return Number(this.term1)
          }
       },
       grens(){
          if(this.bewerking == "+"){
             return Number(this.term1)
          }else{
             return Number(this.term1)-Number(this.term2)
          }
       },
       k2(){
          if(this.bewerking == "+"){
           return  "/statics/kralen.svg#"+this.kralen[1]
        }else{
           return this.k1+"-m"
           
        }

       }
       
       
    },



    props: ["breedte", "term1","term2","bewerking"],

    mounted() {
        gsap.registerPlugin(Draggable)
        var drag = Draggable.create(".parel", {
            minimumMovement: 0.5,
            onDragEnd: function (e) {
                var transform = e.target.getAttribute("transform");
                console.log("'" + transform + "',")

            }
        })
        this.kralen = _.shuffle(this.kralen)
        this.k1 = "/statics/kralen.svg#"+this.kralen[0]
        

    }
}
</script>

<style>

</style>
