<template>
    <svg :viewBox="viewbox" :width="breedte" :height="hoogte" preserveAspectRatio="xMinYMin meet"> >
            <g>
                
                <use :xlink:href="'/statics/telsymbolen.svg#'+tekeningen[0]" :width="grootte" x="0" y="0"/>
                <use :xlink:href="'/statics/telsymbolen.svg#'+tekeningen[1]" :width="grootte" x="0" :y="spoor2"/>
                <use :xlink:href="'/statics/telsymbolen.svg#'+tekeningen[2]" :width="grootte" :x="(Number(grootte)+Number(marge))" y="0"/>
                <use :xlink:href="'/statics/telsymbolen.svg#'+tekeningen[3]" :width="grootte" :x="(Number(grootte)+Number(marge))" :y="spoor2"/>
                <use :xlink:href="'/statics/telsymbolen.svg#'+tekeningen[4]" :width="grootte" :x="2*(Number(grootte)+Number(marge))+Number(gap)" y="0"/>
                <use :xlink:href="'/statics/telsymbolen.svg#'+tekeningen[5]" :width="grootte" :x="2*(Number(grootte)+Number(marge))+Number(gap)" :y="spoor2"/>
                <use :xlink:href="'/statics/telsymbolen.svg#'+tekeningen[6]" :width="grootte" :x="3*(Number(grootte)+Number(marge))+Number(gap)" y="0"/>
                <use :xlink:href="'/statics/telsymbolen.svg#'+tekeningen[7]" :width="grootte" :x="3*(Number(grootte)+Number(marge))+Number(gap)" :y="spoor2"/>
                <use :xlink:href="'/statics/telsymbolen.svg#'+tekeningen[8]" :width="grootte" :x="4*(Number(grootte)+Number(marge))+2*Number(gap)" y="0"/>
                <use :xlink:href="'/statics/telsymbolen.svg#'+tekeningen[9]" :width="grootte" :x="4*(Number(grootte)+Number(marge))+2*Number(gap)" :y="spoor2"/>
            </g>
        </svg>
</template>

<script>
export default {
  data() {
    return {
      grootte: "30",
      marge: "5",
      gap: "8"
    };
  },
  computed: {
    viewbox() {
      var viewbreedte =
        5 * (Number(this.grootte) + Number(this.marge)) + 3 * Number(this.gap);

      return "-5 0 " + viewbreedte + " 50";
    },
    spoor2() {
      return 50;
    },
    tekeningen() {
      const sample = arr => arr[Math.floor(Math.random() * arr.length)];
      const varia = ["vogel", "appel", "snoep", "ster", "knikker1"];
      const getalbeeld = ["bol", "hokje"];
      var symbool = "bol";
      if (this.symbolen == "getalbeeld") {
        symbool = sample(getalbeeld);
      } else if (this.symbolen == "varia") {
        symbool = sample(varia);
      } else {
        var lijst = varia.concat(getalbeeld);
        symbool = sample(lijst);
      }
      var tekenA = [];
      var term1 = Number(this.term1);
      var term2 = Number(this.term2);
      if (this.bewerking == "+") {
        var som = term1 + term2;
        for (var i = 0; i < 10; i++) {
          if (i < term1) {
            tekenA[i] = symbool;
          } else {
            if (i < som) {
              tekenA[i] = symbool + "-b";
            } else {
              tekenA[i] = "";
            }
          }
        }
      }

      if (this.bewerking == "-") {
        for (var i = 0; i < 10; i++) {
          if (i < term1 - term2) {
            tekenA[i] = symbool;
          } else {
            if (i < term1) {
              tekenA[i] = symbool + "-m";
            } else {
              tekenA[i] = "";
            }
          }
        }
      }
      return tekenA;
    }
  },
  props: {
    term1: {
      type: String,
      default: "5"
    },
    term2: {
      type: String,
      default: "5"
    },
    bewerking: {
      type: String,
      default: "+"
    },
    hoogte: {
      type: String,
      default: "3cm"
    },
    breedte: {
      type: String,
      default: "5cm"
    },
    symbolen: {
      type: String,
      default: "getalbeeld"
    }
  }
};
</script>

<style>
svg {
  border: 1px solid black;
  /* background-color: rgb(200, 255, 127); */
}
</style>
