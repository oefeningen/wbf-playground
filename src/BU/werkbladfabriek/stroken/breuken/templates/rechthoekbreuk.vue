<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 250 150"
      :width="breedte"
      preserveAspectRatio="xMinYMin meet"
    >
      <rect x="0" y="0" width="250" height="120" fill="white" stroke="black" />
      <rect
        v-for="i in Number(noemer)"
        :key="'r' + i"
        :x="StukBreedte * (i - 1)"
        y="0"
        :width="StukBreedte"
        height="120"
        :fill="kleuren[i - 1]"
        stroke="black"
        stroke-width="1.5"
      />
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
  computed: {
    StukBreedte() {
      return 250 / Number(this.noemer)
    },
    kleuren() {
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
      var noemer = Number(this.noemer)
      for (var i = 0; i < noemer; i++) {
        if (i < teller) {
          kleurA.push(kleur)
        } else {
          kleurA.push('white')
        }
      }
      if (this.shuffled == 'true') {
        kleurA = _.shuffle(kleurA)
      }
      return kleurA
    }
  }
}
</script>

<style>
</style>
