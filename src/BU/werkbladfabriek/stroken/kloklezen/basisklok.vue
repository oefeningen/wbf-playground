<template>
  <div>
    <!-- <div class="iconenbalk"><q-icon name="fa-sun" />appel</div> -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 250 250"
      :width="breedte"
    >
      <defs>
        <g id="groteWijzer">
          <line
            x1="100"
            y1="100"
            x2="100"
            y2="20"
            stroke="black"
            stroke-width="3"
          />
        </g>
        <g id="kleineWijzer">
          <line
            x1="100"
            y1="100"
            x2="100"
            y2="60"
            stroke="blue"
            stroke-width="4"
          />
        </g>
        <g id="minuutstreep">
          <line
            x1="176"
            y1="100"
            x2="180"
            y2="100"
            stroke="black"
            stroke-width="2"
          />
        </g>
        <g id="minuutstreep5">
          <line
            x1="174"
            y1="100"
            x2="180"
            y2="100"
            stroke="black"
            stroke-width="2"
          />
        </g>
        <g id="kwartierstreep">
          <line
            x1="174"
            y1="100"
            x2="180"
            y2="100"
            stroke="black"
            stroke-width="3"
          />
        </g>

        <g id="wijzerplaat">
          <circle cx="100" cy="100" r="100" fill="white" stroke="black" />
          <circle cx="100" cy="100" r="80" fill="white" stroke="black" />
          <circle cx="100" cy="100" r="3" fill="grey" stroke="white" />
        </g>
      </defs>
      <use xlink:href="#wijzerplaat" x="0" y="0" />
      <use
        xlink:href="#minuutstreep"
        v-for="i in 60"
        :key="'streep' + i"
        x="0"
        y="0"
        :transform="'rotate(' + 6 * i + ',100,100)'"
      />
      <use
        xlink:href="#minuutstreep5"
        v-for="i in 12"
        :key="'streep_5_' + i"
        x="0"
        y="0"
        :transform="'rotate(' + 30 * i + ',100,100)'"
      />
      <text
        v-for="i in 12"
        :key="'tekst_' + i"
        :x="berekenTekstPos(i).x"
        :y="berekenTekstPos(i).y"
        class="small"
      >
        {{ arabisch[i - 1] }}
      </text>

      <use
        xlink:href="#kwartierstreep"
        v-for="i in 4"
        :key="'streep_15_' + i"
        x="0"
        y="0"
        :transform="'rotate(' + 90 * i + ',100,100)'"
      />
      <use
        v-if="toonWijzers"
        xlink:href="#groteWijzer"
        :transform="'rotate(' + groothoek + ',100,100)'"
      />
      <use
        v-if="toonWijzers"
        xlink:href="#kleineWijzer"
        :transform="'rotate(' + kleinhoek + ',100,100)'"
      />
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arabisch: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      romeins: [
        'I',
        'II',
        'III',
        'IV',
        'V',
        'VI',
        'VII',
        'VIII',
        'IX',
        'X',
        'XI',
        'XII'
      ]
    }
  },
  props: {
    toonWijzers: {
      type: Boolean,
      default: true
    },
    breedte: {
      type: String,
      default: '50mm'
    },
    uur: {
      type: Number,
      default: '12'
    },
    minuten: {
      type: Number,
      default: '15'
    }
  },

  methods: {
    berekenTekstPos(pos) {
      var hoek = Number(pos) * 30 - 90
      var x = Math.cos((hoek * Math.PI) / 180) * 90 + 94
      var y = Math.sin((hoek * Math.PI) / 180) * 90 + 105
      return { x: x, y: y }
    }
  },
  computed: {
    kleinhoek() {
      var uur = Number(this.uur) * 30 + (Number(this.minuten) / 60) * 30
      return uur
    },
    groothoek() {
      var minuut = Number(this.minuten) * 6
      return minuut
    }
  }
}
</script>

<style>
</style>
