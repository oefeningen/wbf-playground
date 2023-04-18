<template>
    <div class="row">
      <div class="klinkerdief" v-html="steelKlinkers(woord)"></div>
      <div class="invulwoord"><span class="oplossing" v-if="toonOplossing">{{woord}}</span></div>
     
    </div>
</template>

<script>
    export default {
        data(){
            return{
                icons: [" &#x1F353;", "&#x1F385;", "&#x1F414;", "&#x1F438;", "&#x1F47B;", "&#x1F638;"]
            }
        },
       
        props:["woord","toonOplossing"],
        methods:{
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
        }
    }
</script>

<style lang="scss" scoped>
.invulwoord{
    min-width: 140px;
    border-bottom: 1px solid black;
    height: 22px;
    width:4cm;
    margin-bottom: 12px;
    
    position:relative;
    

    
    
}
.klinkerdief{
    font-size: 1.3em; 
    text-align: center;
    
    min-width: 4.5cm;
}
</style>