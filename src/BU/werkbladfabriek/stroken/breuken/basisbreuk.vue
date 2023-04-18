<template>
  <div>
    <svg
      width="7.9085436mm"
      height="8.9666395mm"
      viewBox="-0.8 -0.2 8.1085435 9.1666396"
      version="1.1"
      id="svg8"
    >
      >
      <g
        inkscape:label="Laag 1"
        inkscape:groupmode="layer"
        id="layer1"
        transform="translate(-1.2695302,-2.7421263)"
      >
        <rect
          @click="noemerZichtbaar = !noemerZichtbaar"
          style="
            opacity: 1;
            fill: #ffffff;
            stroke: none;
            stroke-width: 0.264999;
            stroke-linecap: round;
          "
          id="rect845"
          width="5.278573"
          height="4.5183125"
          x="2.0045214"
          y="7.0826306"
        />
        <rect
          @click="tellerZichtbaar = !tellerZichtbaar"
          style="
            opacity: 1;
            fill: #ffffff;
            stroke: none;
            stroke-width: 0.264999;
            stroke-linecap: round;
          "
          id="rect843"
          width="4.6772165"
          height="3.7797618"
          x="2.0045214"
          y="2.8129969"
        />
        <text
          v-if="toonTeller || tellerZichtbaar"
          xml:space="preserve"
          style="
            font-style: normal;
            font-variant: normal;
            font-weight: normal;
            font-stretch: normal;
            font-size: 4.9389px;
            line-height: 1.25;
            font-family: ari;
            -inkscape-font-specification: ari;
            text-align: center;
            letter-spacing: 0px;
            word-spacing: 0px;
            text-anchor: middle;
            stroke-width: 0.264583;
          "
          x="4.2684445"
          y="6.2919607"
          id="text835"
        >
          <tspan
            sodipodi:role="line"
            id="tspan833"
            x="4.2684445"
            y="6.2919607"
            style="
              font-style: normal;
              font-variant: normal;
              font-weight: normal;
              font-stretch: normal;
              font-family: Arial;
              -inkscape-font-specification: Arial;
              stroke-width: 0.264583;
            "
          >
            {{ breukteller }}
          </tspan>
        </text>
        <text
          v-if="toonNoemer || noemerZichtbaar"
          xml:space="preserve"
          style="
            font-size: 4.9389px;
            line-height: 1.25;
            font-family: sans-serif;
            text-align: center;
            letter-spacing: 0px;
            word-spacing: 0px;
            text-anchor: middle;
            stroke-width: 0.264583;
          "
          x="4.13481"
          y="11.648477"
          id="text839"
        >
          <tspan
            sodipodi:role="line"
            id="tspan837"
            x="4.13481"
            y="11.648477"
            style="
              font-style: normal;
              font-variant: normal;
              font-weight: normal;
              font-stretch: normal;
              font-family: Arial;
              -inkscape-font-specification: Arial;
              stroke-width: 0.264583;
            "
          >
            {{ breuknoemer }}
          </tspan>
        </text>
        <path
          style="
            fill: none;
            stroke: #000000;
            stroke-width: 0.264583px;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-opacity: 1;
          "
          d="M 1.2695302,6.9490007 H 7.2830943"
          id="path853"
        />
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      noemerZichtbaar: false,
      tellerZichtbaar: false
    }
  },
  props: {
    breuk: {
      type: String,
      default: null
    },
    teller: {
      type: String,
      default: '1'
    },
    noemer: {
      type: String,
      default: '2'
    },
    toonNoemer: {
      type: Boolean,
      default: true
    },
    toonTeller: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    breukteller() {
      if (this.breuk != null) {
        return this.breuk.split('/')[0]
      } else {
        return this.teller
      }
    },
    breuknoemer() {
      if (this.breuk != null) {
        return this.breuk.split('/')[1]
      } else {
        return this.noemer
      }
    }
  }
}
</script>

<style>
</style>