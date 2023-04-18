<template>
  <div class="vereenvoudigOefening row justify-around">
    <span class="eenheid">{{ oef[2] }}</span> <span class="en">en</span>

    <breuk class="eenheidbreuk" :breuk="oef[1]" />
    <span class="teken">=</span>

    <breuk
      :breuk="oef[0]"
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
  margin-left: 5px;

  font-size: 1.4em;
}
.teken {
  margin-left: -10px;
}
.eenheidbreuk {
  position: relative;
  right: 10px;
}
.en {
  position: relative;
  top: 5px;
  margin-right: 4px;
}
</style>