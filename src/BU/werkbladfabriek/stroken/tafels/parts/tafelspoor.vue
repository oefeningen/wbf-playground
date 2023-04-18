<template>
  <div>
    <div class="tafelspoor_titeldiv"><p class="tafelspoor_titel"><b>Kleur het tafelspoor van {{tafel}}</b></p></div>
    <table>
      <tr>
       <td v-for="(r,key) in 5" :key="key" :ref="'hok0_'+(r-1)" :class="isveelvoud('hok0_'+(r-1))">{{hokjes['hok0_'+(r-1)]}}</td>
      </tr>
      <tr>
        <td v-for="(r,key) in 5" :key="key" :ref="'hok1_'+(r-1)" :class="isveelvoud('hok1_'+(r-1))">{{hokjes['hok1_'+(r-1)]}}</td>
      </tr>
      <tr>
        <td v-for="(r,key) in 5" :key="key" :ref="'hok2_'+(r-1)" :class="isveelvoud('hok2_'+(r-1))">{{hokjes['hok2_'+(r-1)]}}</td>
      </tr>
      <tr>
        <td v-for="(r,key) in 5" :key="key" :ref="'hok3_'+(r-1)" :class="isveelvoud('hok3_'+(r-1))">{{hokjes['hok3_'+(r-1)]}}</td>
      </tr>
      <tr>
        <td v-for="(r,key) in 5" :key="key" :ref="'hok4_'+(r-1)" :class="isveelvoud('hok4_'+(r-1))">{{hokjes['hok4_'+(r-1)]}}</td>
      </tr>







    </table>
  </div>


</template>
<script>
export default {
  data() {
    return {
      tafel: 2,
      pad: [],
      hokjes: {
        hok0_0: "12",
        hok0_3: "12"
      }
    };
  },
  props: ["geselecteerdeTafels", "toonOplossing"],
  computed: {},
  methods: {
    isveelvoud(padje) {
      if (this.pad.indexOf(padje) > -1 && this.toonOplossing) {
        return "isveelvoud";
      } else {
        return "ishetniet";
      }
    },

    uitrekenen() {
      this.hokjes = {};

      var tafel = _.sample(this.geselecteerdeTafels);
      this.tafel = tafel;
      console.log("uitrekenen van tafelspoor van tafel " + tafel);
      var paden = [
        [
          "hok0_2",
          "hok1_2",
          "hok2_2",
          "hok3_2",
          "hok3_3",
          "hok3_4",
          "hok4_4",
          "hok4_3",
          "hok4_2",
          "hok4_1"
        ],
        [
          "hok0_0",
          "hok1_0",
          "hok1_1",
          "hok1_2",
          "hok1_3",
          "hok1_4",
          "hok2_4",
          "hok3_4",
          "hok3_3",
          "hok4_3"
        ],
        [
          "hok0_0",
          "hok1_0",
          "hok2_0",
          "hok2_1",
          "hok2_2",
          "hok2_3",
          "hok2_4",
          "hok3_4",
          "hok4_4",
          "hok4_3"
        ],
        [
          "hok0_0",
          "hok1_0",
          "hok1_1",
          "hok1_2",
          "hok1_3",
          "hok1_4",
          "hok2_4",
          "hok3_4",
          "hok3_3",
          "hok4_3"
        ],
        [
          "hok0_4",
          "hok0_3",
          "hok0_2",
          "hok1_2",
          "hok2_2",
          "hok2_3",
          "hok2_4",
          "hok3_4",
          "hok4_4",
          "hok4_3"
        ],
        [
          "hok0_4",
          "hok0_3",
          "hok1_3",
          "hok2_3",
          "hok2_2",
          "hok2_1",
          "hok3_1",
          "hok4_1",
          "hok4_2",
          "hok4_3"
        ],
        [
          "hok0_2",
          "hok1_2",
          "hok1_1",
          "hok1_0",
          "hok2_0",
          "hok3_0",
          "hok3_1",
          "hok3_2",
          "hok3_3",
          "hok4_3"
        ],
        [
          "hok0_1",
          "hok1_1",
          "hok1_2",
          "hok1_3",
          "hok2_3",
          "hok3_3",
          "hok3_2",
          "hok3_1",
          "hok3_0",
          "hok4_0"
        ],
        [
          "hok0_4",
          "hok0_3",
          "hok1_3",
          "hok1_2",
          "hok2_2",
          "hok2_1",
          "hok3_1",
          "hok3_0",
          "hok4_0",
          "hok4_1"
        ],
        [
          "hok0_2",
          "hok1_2",
          "hok1_3",
          "hok2_3",
          "hok2_2",
          "hok2_1",
          "hok2_0",
          "hok3_0",
          "hok4_0",
          "hok4_1"
        ],
        [
          "hok0_1",
          "hok1_1",
          "hok2_1",
          "hok2_2",
          "hok2_3",
          "hok1_3",
          "hok1_4",
          "hok2_4",
          "hok3_4",
          "hok4_4"
        ],
        [
          "hok0_1",
          "hok1_1",
          "hok1_0",
          "hok2_0",
          "hok2_1",
          "hok2_2",
          "hok2_3",
          "hok2_4",
          "hok3_4",
          "hok4_4"
        ],
        [
          "hok0_3",
          "hok1_3",
          "hok1_2",
          "hok1_1",
          "hok2_1",
          "hok2_2",
          "hok2_3",
          "hok2_4",
          "hok3_4",
          "hok4_4"
        ],
        [
          "hok0_2",
          "hok1_2",
          "hok1_1",
          "hok2_1",
          "hok3_1",
          "hok3_0",
          "hok4_0",
          "hok4_1",
          "hok4_2",
          "hok4_3"
        ],
        [
          "hok0_3",
          "hok0_2",
          "hok0_1",
          "hok0_0",
          "hok1_0",
          "hok2_0",
          "hok3_0",
          "hok3_1",
          "hok3_2",
          "hok4_2"
        ],
        [
          "hok0_4",
          "hok1_4",
          "hok2_4",
          "hok3_4",
          "hok3_3",
          "hok3_2",
          "hok3_1",
          "hok3_0",
          "hok4_0",
          "hok4_1"
        ],
        [
          "hok0_3",
          "hok1_3",
          "hok1_2",
          "hok1_1",
          "hok1_0",
          "hok2_0",
          "hok3_0",
          "hok3_1",
          "hok4_1",
          "hok4_2"
        ],
        [
          "hok0_3",
          "hok1_3",
          "hok1_4",
          "hok2_4",
          "hok2_3",
          "hok2_2",
          "hok2_1",
          "hok2_0",
          "hok3_0",
          "hok4_0"
        ],
        [
          "hok0_2",
          "hok0_3",
          "hok0_4",
          "hok1_4",
          "hok2_4",
          "hok3_4",
          "hok4_4",
          "hok4_3",
          "hok4_2",
          "hok4_1"
        ],
        [
          "hok0_2",
          "hok0_1",
          "hok1_1",
          "hok2_1",
          "hok3_1",
          "hok3_2",
          "hok3_3",
          "hok3_4",
          "hok4_4",
          "hok4_3"
        ],
        [
          "hok0_3",
          "hok0_2",
          "hok0_1",
          "hok0_0",
          "hok1_0",
          "hok2_0",
          "hok3_0",
          "hok4_0",
          "hok4_1",
          "hok4_2"
        ],
        [
          "hok0_4",
          "hok1_4",
          "hok2_4",
          "hok2_3",
          "hok2_2",
          "hok1_2",
          "hok1_1",
          "hok2_1",
          "hok3_1",
          "hok4_1"
        ],
        [
          "hok0_3",
          "hok1_3",
          "hok1_2",
          "hok1_1",
          "hok1_0",
          "hok2_0",
          "hok2_1",
          "hok2_2",
          "hok3_2",
          "hok4_2"
        ],
        [
          "hok0_4",
          "hok1_4",
          "hok1_3",
          "hok2_3",
          "hok2_4",
          "hok3_4",
          "hok3_3",
          "hok3_2",
          "hok3_1",
          "hok4_1"
        ],
        [
          "hok0_3",
          "hok1_3",
          "hok1_2",
          "hok1_1",
          "hok2_1",
          "hok2_2",
          "hok2_3",
          "hok3_3",
          "hok3_2",
          "hok4_2"
        ],
        [
          "hok0_1",
          "hok1_1",
          "hok1_2",
          "hok1_3",
          "hok2_3",
          "hok3_3",
          "hok3_4",
          "hok4_4",
          "hok4_3",
          "hok4_2"
        ]
      ];
      var pad = _.sample(paden);
      this.pad = pad;
      //var pad = paden[5]
      var veelvouden = [];
      var valse = [];
      console.log(pad);
      for (var i = 0; i < pad.length; i++) {
        var veelvoud = (i + 1) * Number(tafel);
        this.hokjes[pad[i]] = veelvoud;
        veelvouden.push(veelvoud);
        valse.push((i + Number(1)) * (Number(tafel) - 1));
        valse.push((i + Number(1)) * (Number(tafel) + 1));
        valse.push((i + Number(1)) * (Number(tafel) + Number(2)));
        if (tafel < 9) {
          valse.push((i + Number(1)) * (Number(tafel) + 3));
        } else {
          valse.push((i + Number(1)) * (tafel - 2));
        }
      }
      for (var j = 0; j < veelvouden.length; j++) {
        _.remove(valse, function(n) {
          n == veelvouden[j];
        });
      }

      for (var r = 0; r < 5; r++) {
        for (var k = 0; k < 5; k++) {
          if (!this.hokjes["hok" + r + "_" + k]) {
            this.hokjes["hok" + r + "_" + k] = _.sample(valse);
          }
        }
      }
    }
  },
  watch: {
    geselecteerdeTafels(value) {
      this.tafel = _.sampleSize(this.geselecteerdeTafels);
      this.uitrekenen();
    },
    toonOplossing(value) {
      if (value) {
      }
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
  font-size: 0.75em;
  font-family: Arial;
  height: 20%;
  width: 20px;
  text-align: center;
}
.isveelvoud {
  background-color: #42b983;
}

table {
  border-collapse: collapse;
  width: 4cm;
  height: 4cm;
}

.tekening {
  max-width: 0.8cm;
  max-height: 0.8cm;
}
.grijs {
  background-color: #d3d3d3;
}
.tafelspoor_titel {
  font-size: 80%;
  text-align: center;
  margin-bottom: -0px;
  width: 100%¨;
}
</style>

