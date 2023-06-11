<template>
  <div>
    <div ref="scrollArea">
      <Pagina_stroken4 class="bladspiegel">
        <template #titel>Playground</template>
        <template #strook1><mainStarter strookId="1"></mainStarter></template>
        <template #strook2><mainStarter strookId="2"></mainStarter></template>
        <template #strook3><mainStarter strookId="3"></mainStarter></template>
        <template #strook4><mainStarter strookId="4"></mainStarter></template>
        <template #instellingen><instellingenWerkblad /></template>
      </Pagina_stroken4>
    </div>
  </div>
</template>

<script setup>
import mainStarter from './mainStarter.vue';
import Pagina_stroken4 from 'src/components/vasteLayout/Pagina_stroken4.vue';
import instellingenWerkblad from './instellingenWerkblad.vue';
</script>

<style scoped></style>
