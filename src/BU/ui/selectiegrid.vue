<template>
  <div>

    <div>
     <div class="flex q-pa-sm streepjeslijn">
       <q-btn round icon="rule" @click="showDialog = true" class="selectknop"><q-tooltip v-model="showing">
         {{ tooltip }}

       </q-tooltip></q-btn>
        <div class="flex flex-wrap chipveld">
          <q-chip v-for="label in labels" removable :key="label"  @remove="verwijderItem(label)">{{label}}</q-chip>
        </div>
     </div>

    </div>




    <q-dialog v-model="showDialog">
      <q-card>
        <q-card-section>
          <div class="text-h6">{{ label }}</div>
        </q-card-section>
        <q-card-section class="column">
          <div v-for="(optierij,key) in opties" :key="'rij_'+key" class="optierij">
            <q-btn-group push spread>
              <q-btn


                v-for="(opt, key) in optierij"
                push
                :key="key"
                :label="opt.label"
                @click="toggleSelect(opt.value)"
                :color="
                  selectie.indexOf(opt.value) > -1
                    ? selectiekleur
                    : 'white text-grey'
                "
              />
            </q-btn-group>
          </div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Verberg" color="primary" v-close-popup />
          <!-- <q-btn flat label="Turn on Wifi" color="primary" v-close-popup /> -->
        </q-card-actions>
      </q-card>
    </q-dialog>

  </div>
</template>

<script>
import _ from "lodash"

//opties leveren als multi-array: per lijn knoppen een array met label en value
//selectie is enkel values
//tooltip
//titel
//selectiekleur



export default {
  data() {
    return {
      showDialog: false,
      text:"",
      showing:false

    };
  },
  props: {
    selectiekleur:{
      default: "teal-4"
    },

    label: {
      default: "Maak een keuze"
    },
    tooltip: {
      default: "Maak een keuze uit de opties"
    },

    opties: {
      type: Array,
      required: true
    },
    selectie: {
      required: true
    },

  },
  computed:{
    fullOptions(){
      var full = []
      for(var i = 0; i<this.opties.length;i++){
        full = full.concat(this.opties[i])
      }
      return full
    },


    labels(){
      var labels = []
      // console.log("opties", this.options)
      for(let i = 0;i<this.selectie.length;i++){
        var sel = this.selectie[i]
        // console.log("sel", sel)
        var item = _.find(this.fullOptions,{
          'value':sel
        })
        if(item){
          labels.push(item.label)
        }





      }


      return labels

    }

  },


  methods: {
    toggleSelect(val) {
      var selected = this.selectie;

      var index = selected.indexOf(val);
      // console.log("index is " + index);
      if (index > -1) {
        // console.log("gevonden op index " + index);
        selected.splice(index, 1);

      } else {
        // console.log("niet gevonden ");
        selected.push(val);
      }
      //this.selectie = selected;
      this.$emit("update:selectie", selected);
    },
    verwijderItem(val){
      // console.log(val)
      var selectie = _.find(this.fullOptions,{"label":val})

      if(selectie){
        this.toggleSelect(selectie.value)
      }else{
        // console.log("geen selectie",this.opties)
      }

    }
  }

  //   props: [options]
};
</script>



<style scoped>


.streepjeslijn{
  position: relative;
  border-radius: 4px;
  display:flex;
  border:1px grey dashed;
  background-color: rgba(73, 73, 73, 0.1);

}
.chipveld{

  width: 87%;
  min-height:38px;

}
.selectknop{
  position:absolute;
  top:5px;
  right:5px;
}
.optierij{
  margin-top:-10px;
  margin-bottom:-10px;

}
</style>
