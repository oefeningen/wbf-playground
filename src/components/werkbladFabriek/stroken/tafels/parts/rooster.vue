<template>
  <div class="rooster">
  <table>
    <tr>
      <td class="grijs"><img class="tekening" src="statics/tafels/roostermaal.png" alt="X"/></td>
      <td class="grijs">{{tafels[0]}}</td>
      <td  v-if="geselecteerdeTafels.length>1" class="grijs">{{tafels[1]}}</td>
      <td  v-if="geselecteerdeTafels.length>2" class="grijs">{{tafels[2]}}</td>
    </tr>

    <tr>
      <td class="grijs">{{factor1}}</td>
      <td><span v-show="toonOplossing">{{factor1*tafels[0]}}</span> </td>
      <td v-if="geselecteerdeTafels.length>1"><span v-show="toonOplossing">{{factor1*tafels[1]}}</span> </td>
      <td v-if="geselecteerdeTafels.length>2"><span v-show="toonOplossing">{{factor1*tafels[2]}}</span> </td>

    </tr>

    <tr>
      <td class="grijs">{{factor2}}</td>
      <td><span v-show="toonOplossing">{{factor2*tafels[0]}}</span> </td>
      <td v-if="geselecteerdeTafels.length>1"><span v-show="toonOplossing">{{factor2*tafels[1]}}</span> </td>
      <td v-if="geselecteerdeTafels.length>2"><span v-show="toonOplossing">{{factor2*tafels[2]}}</span> </td>

    </tr>

    <tr>
      <td class="grijs">{{factor3}}</td>
      <td><span v-show="toonOplossing">{{factor3*tafels[0]}}</span> </td>
      <td v-if="geselecteerdeTafels.length>1"><span v-show="toonOplossing">{{factor3*tafels[1]}}</span> </td>
      <td v-if="geselecteerdeTafels.length>2"><span v-show="toonOplossing">{{factor3*tafels[2]}}</span> </td>

    </tr>




  </table>
  </div>

</template>
<script>
export default {
  data() {
    return {
      factor1: 5,
      factor2: 6,
      factor3: 7,
      tafels: []
    };
  },
  props: ["geselecteerdeTafels", "toonOplossing"],
  computed: {},
  methods: {
    uitrekenen() {
      console.log("roostertje wordt uitgerekend");
      var factoren = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      this.tafels = _.sampleSize(this.geselecteerdeTafels, 3);
      var selfac = _.sampleSize(factoren, 3);
      this.factor1 = selfac[0];
      this.factor2 = selfac[1];
      this.factor3 = selfac[2];
    }
  },
  watch: {
    geselecteerdeTafels(value) {
      var factoren = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      this.tafels = _.sampleSize(this.geselecteerdeTafels, 3);
      var selfac = _.sampleSize(factoren, 3);
      this.factor1 = selfac[0];
      this.factor2 = selfac[1];
      this.factor3 = selfac[2];
    }
  }
};
</script>
<style scoped>
td {
  border: 1px solid black;
  width: 1cm;
  max-width: 1cm;
  height: 1cm;
  margin: -2px;
  padding: 0;
  background-color: white;
  font-size: 1.5em;
  font-family: Arial;

  text-align: center;
}
table {
  border-collapse: collapse;
  width: 4cm;
}
.rooster {
  max-width: 3cm;
}

.tekening {
  max-width: 0.8cm;
  max-height: 0.8cm;
}
.grijs {
  background-color: #d3d3d3;
}
</style>
