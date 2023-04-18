<template>
  <div class="row">
    <cirkelbreuk teller="3" noemer="12" class="q-ma-sm" />
    <rechthoekbreuk teller="3" noemer="12" />
  </div>
</template>

<script>
export default {
  components: {
    cirkelbreuk: require('./templates/cirkelbreuk').default,
    rechthoekbreuk: require('./templates/rechthoekbreuk').default
  }
}
</script>

<style>
</style>