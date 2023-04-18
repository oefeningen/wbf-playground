<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 205 205"
      :width="breedte"
      preserveAspectRatio="xMinYMin meet"
    >
      <path
        v-for="(stuk, key) in stukken"
        :key="key"
        :d="stuk.pad"
        :fill="stuk.kleur"
        stroke="black"
        stroke-width="1.0"
      />
      <!-- <rect v-for="i in Number(noemer)" :key="'r'+i" :x="StukBreedte*(i-1)" y="0" :width="StukBreedte" height="120" :fill="kleuren[i-1]" stroke="black"/> -->
    </svg>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  data() {
    return {}
  },
  props: {
    breedte: {
      type: String,
      default: '50mm'
    },
    teller: {
      type: String,
      default: '4'
    },
    noemer: {
      type: String,
      default: '6'
    },
    shuffled: {
      type: String,
      default: 'false'
    }
  },
  methods: {
    getSectorPath(x, y, outerDiameter, a1, a2) {
      const degtorad = Math.PI / 180
      const halfOuterDiameter = outerDiameter / 2
      const cr = halfOuterDiameter - 5
      const cx1 = Math.cos(degtorad * a2) * cr + x
      const cy1 = -Math.sin(degtorad * a2) * cr + y
      const cx2 = Math.cos(degtorad * a1) * cr + x
      const cy2 = -Math.sin(degtorad * a1) * cr + y

      return (
        'M' +
        x +
        ' ' +
        y +
        ' ' +
        cx1 +
        ' ' +
        cy1 +
        ' A' +
        cr +
        ' ' +
        cr +
        ' 0 0 1 ' +
        cx2 +
        ' ' +
        cy2 +
        'Z'
      )
    }
  },
  computed: {
    stukken() {
      var stuks = []
      var kleurA = []
      var kleurenpalet = [
        'red',
        'yellow',
        'orange',
        'green',
        'blue',
        'purple',
        'pink',
        'lightgreen'
      ]
      var kleur = _.sample(kleurenpalet)
      var teller = Number(this.teller)
      var stukgrootte = 360 / Number(this.noemer)
      for (var i = 0; i < Number(this.noemer); i++) {
        var pad = this.getSectorPath(
          102,
          102,
          210,
          i * stukgrootte,
          (i + 1) * stukgrootte
        )
        var selkleur
        if (i < teller) {
          selkleur = kleur
        } else {
          selkleur = 'white'
        }
        stuks.push({ pad: pad, kleur: selkleur })
      }
      return stuks
    },

    pad1() {
      return this.getSectorPath(100, 100, 210, 0, 45)
    }
  }
}
</script>

<style>
</style>
