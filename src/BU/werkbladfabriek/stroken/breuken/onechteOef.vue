<template>
  <div class="vereenvoudigOefening row justify-around">
    <breuk :breuk="oef[0]" />
    <div>
      = <span v-if="toonOplossing" class="eenheid">{{ oef[2] }}</span>
      <span class="eenheid" v-else> . </span> en
    </div>
    <breuk
      :breuk="oef[1]"
      :toonTeller="toonOplossing"
      :toonNoemer="toonOplossing"
    />
  </div>
</template>

<script>
export default {
  components: {
    breuk: require('./basisbreuk').default
  },
  props: ['toonOplossing', 'oef']
}
</script>

<style>
.vereenvoudigOefening {
  width: 3.5cm;
  min-width: 3.5cm;
}
.eenheid {
  margin-left: 10px;
  margin-right: 10px;
  font-size: 1.4em;
}
</style>