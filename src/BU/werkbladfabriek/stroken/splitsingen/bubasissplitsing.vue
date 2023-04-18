<template>
  <div>
    <svg
      width="40mm"
      height="40mm"
      viewBox="0 0 41.283794 36.657803"
      version="1.1"
      id="splitsing"
    >
      <defs id="defs2">
        <rect
          x="7.6171813"
          y="33.141422"
          width="13.563929"
          height="13.630746"
          id="rect861"
        />
      </defs>
      <metadata id="metadata5">
        <rdf:RDF>
          <cc:Work rdf:about="">
            <dc:format>image/svg+xml</dc:format>
            <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
            <dc:title></dc:title>
          </cc:Work>
        </rdf:RDF>
      </metadata>
      <g id="layer1" transform="translate(-5.3965235,-11.223097)">
        <rect
          style="
            opacity: 0.696774;
            fill: #ffffff;
            stroke: #000000;
            stroke-width: 0.265;
            stroke-linecap: round;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
          "
          id="rect835"
          width="21.782465"
          height="17.242231"
          x="14.967093"
          y="11.355597"
          ry="2.6726952"
          rx="2.6726952"
        />
        <rect
          style="
            opacity: 0.696774;
            fill: #ffffff;
            stroke: #000000;
            stroke-width: 0.165;
            stroke-linecap: round;
          "
          id="rect837"
          width="19.737234"
          height="15.390716"
          x="16.025427"
          y="12.290659"
          ry="1.7372519"
          rx="2.6726952"
        />
        <rect
          style="
            opacity: 0.696774;
            fill: #ffffff;
            stroke: #000000;
            stroke-width: 0.165;
            stroke-linecap: round;
          "
          id="rect839"
          width="18.400887"
          height="16.196278"
          x="28.196932"
          y="31.602121"
          ry="2.6726952"
          rx="2.6726952"
        />
        <rect
          style="
            opacity: 0.696774;
            fill: #ffffff;
            stroke: #000000;
            stroke-width: 0.165;
            stroke-linecap: round;
          "
          id="rect841"
          width="18.400887"
          height="16.196278"
          x="5.4790235"
          y="31.602121"
          ry="2.6726952"
          rx="2.6726952"
        />
        <path
          style="
            fill: none;
            stroke: #000000;
            stroke-width: 0.265;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
          d="m 14.633006,31.602121 11.292138,-2.803829 11.425773,2.803829"
          id="path855"
        />
        <text
          xml:space="preserve"
          id="text859"
          style="
            font-style: normal;
            font-weight: normal;
            font-size: 4.58611px;
            line-height: 1.25;
            font-family: sans-serif;
            letter-spacing: 0px;
            word-spacing: 0px;
            white-space: pre;
            shape-inside: url(#rect861);
            fill: #000000;
            fill-opacity: 1;
            stroke: none;
          "
        />
        <text
          xml:space="preserve"
          style="
            font-style: normal;
            font-weight: normal;
            font-size: 14.1111px;
            line-height: 1.25;
            font-family: sans-serif;
            letter-spacing: 0px;
            word-spacing: 0px;
            fill: #000000;
            fill-opacity: 1;
            stroke: none;
            stroke-width: 0.264583;
          "
          x="14.310557"
          y="44.901283"
          id="text867"
        >
          <tspan
            id="tspan865"
            x="14.310557"
            y="44.901283"
            style="
              font-style: normal;
              font-variant: normal;
              font-weight: normal;
              font-stretch: normal;
              font-size: 14.1111px;
              font-family: Arial;
              -inkscape-font-specification: Arial;
              text-align: center;
              text-anchor: middle;
              stroke-width: 0.264583;
            "
          >
            {{ oef[1] }}
          </tspan>
        </text>
        <text
          xml:space="preserve"
          :style="tekststijl"
          x="37.496189"
          y="44.567196"
          id="text871"
        >
          <tspan
            id="tspan869"
            x="37.496189"
            y="44.567196"
            style="
              font-style: normal;
              font-variant: normal;
              font-weight: normal;
              font-stretch: normal;
              font-size: 14.1111px;
              font-family: Arial;
              -inkscape-font-specification: Arial;
              text-align: center;
              text-anchor: middle;
              stroke-width: 0.264583;
            "
          >
            {{ oef[2] }}
          </tspan>
        </text>
        <text
          xml:space="preserve"
          style="
            font-style: normal;
            font-weight: normal;
            font-size: 14.1111px;
            line-height: 1.25;
            font-family: sans-serif;
            letter-spacing: 0px;
            word-spacing: 0px;
            fill: #000000;
            fill-opacity: 1;
            stroke: none;
            stroke-width: 0.264583;
          "
          x="25.869965"
          y="25.435938"
          id="text875"
        >
          <tspan
            id="tspan873"
            x="25.869965"
            y="25.435938"
            style="
              font-style: normal;
              font-variant: normal;
              font-weight: normal;
              font-stretch: normal;
              font-size: 14.1111px;
              font-family: Arial;
              -inkscape-font-specification: Arial;
              text-align: center;
              text-anchor: middle;
              stroke-width: 0.264583;
            "
          >
            {{ oef[0] }}
          </tspan>
        </text>
      </g>
    </svg>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  data() {
    return {
      tekststijl:
        'font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 14px;              font-family: Arial;              -inkscape-font-specification: Arial;              text-align: center;              text-anchor: middle;              stroke-width: 0.264583;',
      zoekterm: 'C'
    }
  },
  props: {
    zoektermen: {
      type: Array,
      default: ['A', 'B', 'C']
    },
    oef: {
      type: Array,
      default: [5, 4, 1]
    }
  },
  mounted() {
    // this.zoekterm = _.sample(this.zoektermen)
  }
}
</script>

<style>
</style>