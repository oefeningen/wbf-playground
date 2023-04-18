<template>
    <div>
       
        <component :is="navigatie" :werkbladtypes="werkbladtypes" v-on:selectWerkblad="wisselWerkblad" />
       <q-page-sticky position="bottom-right" :offset="[45, 45]">
            <q-btn color="primary" icon="home" @click="navigatie='werkbladmenu'" fab v-if="navigatie!='werkbladmenu'" />
          </q-page-sticky>
       
      

    </div>
</template>

<script>
    import werkbladtypes from "components/werkbladfabriek/werkbladlijst"
    import {mapState, mapActions} from "vuex"
    export default {
        data(){
            return {
                 navigatie: "werkbladmenu",
                 werkbladtypes:werkbladtypes

            }
        },

        components: {
        "spelling": require("components/werkbladfabriek/spelling").default,
        "procent_van_getal": require("components/werkbladfabriek/procent_van_getal").default,
        "tafeldrill": require("components/werkbladfabriek/tafeldrill").default,
        "tafels": require("components/werkbladfabriek/tafels").default,
        "tot10getalbeeld": require("components/werkbladfabriek/tot10getalbeeld").default,
        "tot20drill": require("components/werkbladfabriek/tot20drill").default,
        "tot100drill": require("components/werkbladfabriek/tot100drill").default,
        "tot1000drill": require("components/werkbladfabriek/tot1000drill").default,
        "werkbladmenu": require("components/werkbladfabriek/werkbladmenu").default,
        "hoeken": require("components/werkbladfabriek/hoeken").default,
        "romeins": require("components/werkbladfabriek/romeins").default,
        "splitsingen": require("components/werkbladfabriek/splitsingen").default,
        "kloklezen": require("components/werkbladfabriek/kloklezen").default,
        "breuken": require("components/werkbladfabriek/breuken").default,
        
        


         },
         methods:{
            ...mapActions("werkbladen",["FBsetVanuitWerkbladbeheer"]), 
            wisselWerkblad(value) {
            this.navigatie = value
        },
         },
         mounted(){
             this.FBsetVanuitWerkbladbeheer(false)
         }
        
    }
</script>

<style lang="scss" scoped>

</style>