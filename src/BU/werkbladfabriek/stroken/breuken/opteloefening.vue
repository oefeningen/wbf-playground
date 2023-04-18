<template>
<div class="row opteloefening text-h6" >
    <breuk :breuk="oef[1]"  class="optelbreuk"/> {{oef[0]}} 
        <breuk :breuk="oef[2]"  /> =
        <breuk :toonTeller='toonOplossing' :toonNoemer='toonOplossing'  :breuk="oef[3]"/> {{oef[0]}} 
        <breuk :toonTeller='toonOplossing' :toonNoemer='toonOplossing' :breuk="oef[4]"/> = 
        <breuk :toonTeller='toonOplossing' :toonNoemer='toonOplossing' :breuk="oef[5]"/>
        <div v-if="oef[6] && toonOplossing">=</div>
        <breuk v-if="oef[6] && toonOplossing":breuk="oef[6]"/>
</div>
</template>

<script>
export default {
    components: {
        breuk: require("./basisbreuk").default
    },
    computed:{

    },
    props: {
        toonOplossing:{
            type:Boolean,
            default:false
        },
        oef: {
            type: Array,
            default: null
        },
    }

}
</script>

<style lang="scss" scoped>
.opteloefening{
    width: 6cm;
    min-width: 6cm;
}
.optelbreuk{
    // width: 60px;
    // height: 68px;
    
}
    

</style>
