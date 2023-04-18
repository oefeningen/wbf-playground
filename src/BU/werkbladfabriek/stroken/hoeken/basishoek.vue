<template>
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="-20 0 250 250" :width="breedte" preserveAspectRatio="xMinYMin meet">
        <defs>
            <marker
       style="overflow:visible;"
       id="pijltje"
       refX="0.0"
       refY="0.0"
       orient="auto">
      <path
         transform="scale(1.1) rotate(0) translate(1,0)"
         d="M 8.7185878,4.0337352 L -2.2072895,0.016013256 L 8.7185884,-4.0017078 C 6.9730900,-1.6296469 6.9831476,1.6157441 8.7185878,4.0337352 z "
         style="fill-rule:evenodd;stroke-width:0.625;stroke-linejoin:round;stroke:#000000;stroke-opacity:1;fill:#000000;fill-opacity:1"
         />
    </marker>
            
        </defs>
        <g :transform="'translate('+oversteek+',0)'">
            <circle cx="50" cy="200" r="3" fill="black"/>
            <line x1="50" y1="200"
                  x2="250" y2="200"
                  stroke="black"
                  stroke-width="2"/>
            <line x1="50" y1="200"
                  x2="250" y2="200"
                  stroke="black"
                  stroke-width="2"
                  :transform="'rotate('+Number(hoek)*-1+',50,200)'"
                  />
            <path :d="berekend"
                 fill="none" stroke="blue" stroke-width="1" marker-start="url(#pijltje)" />
        </g>

     </svg>


</template>

<script>
export default {

    methods:{
        getSectorPath(x, y, outerDiameter, a1, a2) {
         const degtorad = Math.PI / 180;
         const halfOuterDiameter = outerDiameter / 2;
         const cr = halfOuterDiameter - 5;
         const cx1 = (Math.cos(degtorad * a2) * cr) + x;
         const cy1 = (-Math.sin(degtorad * a2) * cr) + y;
         
         const cxt = (Math.cos(degtorad * a2/2) * cr) + x;
         const cyt = (-Math.sin(degtorad * a2/2) * cr) + y;
         
         
         const cx2 = (Math.cos(degtorad * a1) * cr) + x;
         const cy2 = (-Math.sin(degtorad * a1) * cr) + y;
         return "M" +  " " + cx1 + " " + cy1 + " A"  + cr + " " + cr + " 0 0 1 " + cx2 + " " + cy2;


      },
    },
    props:{
        breedte:{
         type:String,
         default:"70mm"
      },
      hoek:{
         type:String,
         default:"45"
      },
    },
    computed:{
        berekend(){
             return this.getSectorPath(50, 200, 200, 0, Number(this.hoek)) 

        },
        oversteek(){
            var marge = 0
            if(Number(this.hoek)<=100){
              marge = 0
              }else if(Number(this.hoek)<=140){
                marge=35
              }else{
              marge = 65
              }  
            return marge
        
        }

    }

}
</script>

<style>

</style>
