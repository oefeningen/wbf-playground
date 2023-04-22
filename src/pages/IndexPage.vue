<template>
  <div>
    <!-- <tafelsVariabel /> -->
    <tafelsVariabel />
    <slotTest>
      <template #header>Appelmoes</template>
      <template #footer>
        <q-btn
          color="white"
          text-color="black"
          label="Standard"
          @click="optellen"
        />
      </template>
      <template #content>Content</template>
    </slotTest>
  </div>
</template>

<script setup>
import tafelsVariabel from 'src/components/werkbladFabriek/tafelsVariabel.vue';
import slotTest from 'src/components/slotTest.vue';
import leegKader4 from 'src/components/vasteLayout/leegKader4.vue';
import Pagina_stroken4 from 'src/components/vasteLayout/Pagina_stroken4.vue';
import useFirstTest from 'src/components/composables/firstTest';

const { testwaarde1, testwaarde2, optellen } = useFirstTest();
</script>

<style lang="scss" scoped></style>
