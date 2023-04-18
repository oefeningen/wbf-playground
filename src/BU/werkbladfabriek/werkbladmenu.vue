<template>
    <div class="q-pa-lg">
        <h5>Kies een werkbladtype</h5>
        <div class="fit row wrap justify-start items-start content-start q-pa-lg">
            <q-card class="my-card q-ma-sm" v-for="(werkblad,key) in werkbladtypes" :key="'type_'+key">
                <img :src="'/statics/screenshots/'+werkblad.image">
                <q-card-section>
                   
                    <div class="text-subtitle2">{{werkblad.naam}}</div>
                </q-card-section>
                <q-card-actions vertical align="center">
                    <q-btn  label="Maak dit werkblad" color="primary" @click="maakWerkblad(werkblad.component)"/>
                   
                </q-card-actions>
                
            </q-card>

        </div>

    </div>
    
</template>

<script>
    export default {
        props:["werkbladtypes"],
        methods:{
            maakWerkblad(comp){
                console.log("werkblad gekozen")
                this.$emit("selectWerkblad",comp)
            }
        },
        
        
    }
</script>

<style lang="scss" scoped>
    .my-card{
        width: 180px;
    }

</style>