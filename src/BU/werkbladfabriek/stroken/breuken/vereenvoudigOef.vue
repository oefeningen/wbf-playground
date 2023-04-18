<template>
  <div class="vereenvoudigOefening row justify-around">
    <breuk :breuk="oef[0]" /> =
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
  width: 2.5cm;
  min-width: 2.5cm;
}
</style>