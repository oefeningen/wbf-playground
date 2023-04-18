<template>
    <div class="kolom">
        <p v-for="(oef,key) in oefeningen" :key="key" :class="lettertype">{{oef[0]}} <span v-if="toonOplossing" class="oplossing">{{oef[1]}}</span><span v-else> <span  class="breder" v-if="oef.length>2">.</span> </span> <span v-if="oef.length>2">{{oef[2]}}</span></p>
    </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  data() {
    return {
      //lettertype: "test"
    };
  },
  props: ["oefeningen"],
  computed: {
    ...mapGetters("drill", ["aantal"]),
    ...mapState("besturing", ["toonOplossing"]),
    lettertype() {
      if (this.aantal == "20") {
        return "supergroot";
      } else if (this.aantal == "30") {
        return "groot";
      } else if (this.aantal == "60") {
        return "klein";
      } else {
        return "middel";
      }
    }
  }
};
</script>

<style scoped>
.groot {
  font-size: 1.7em;
}
.supergroot {
  font-size: 1.9em;
}
.middel {
  font-size: 1.3em;
}
.klein {
  font-size: 1.1em;
}
.oplossing {
  font-weight: 800;
}
.breder {
  margin-left: 3%;
  margin-right: 3%;
}
.kolom {
  min-width: 5.5cm;
}
</style>
