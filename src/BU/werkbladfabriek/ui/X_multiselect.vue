<template>
<div>

    <div>
        <q-btn-group push :spread="spread">
            <q-btn
                :size="size"
                class="q-px-sm"
                dense
                v-if="key<split"
                v-for="(opt,key) in options"
                push
                :key="key"
                :label="opt"
                @click="toggleSelect(opt)"
                :color="(selectie.indexOf(opt)>-1) ? 'primary' : 'white text-grey'" />
        </q-btn-group>
    </div>
    <div v-if="options.length>split">
        <q-btn-group push :spread="spread">
            <q-btn
                :size="size"
                v-if="key>=split"
                class="q-px-sm"
                dense
                v-for="(opt,key) in options"
                push
                :key="key"
                :label="opt"
                @click="toggleSelect(opt)"
                :color="(selectie.indexOf(opt)>-1) ? 'primary' : 'white text-grey'" />
        </q-btn-group>
    </div>
    
</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    split: {
      default: 10
    },
    size: {
      default: "md"
    },
    options: {
      type: Array,
      required: true
    },
    selectie: {
      required: true
    },
    spread: {
      default: true
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
    }
  }

  //   props: [options]
};
</script>

<style>
</style>
