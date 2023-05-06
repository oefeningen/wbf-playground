<template>
  <div>
    <q-page class="justify-center">
      <div class="blad drillblad">
        <pagina-hoofding>
          <slot name="titel">Drill</slot>
        </pagina-hoofding>
        <div id="oefenruimte" class="q-mt-xl">
          <slot name="oefenruimte"></slot>
        </div>

        <div id="posfoot">
          <pagina-footer></pagina-footer>
        </div>
      </div>

      <div class="zijbalk">
        <q-card>
          <q-card class="my-card bg-secondary instellingveld">
            <q-card-section class="q-pa-sm">
              <div class="text-h6">Instellingen</div>
            </q-card-section>
            <slot name="instellingen">
              <div class="q-pa-sm">nog geen instellingen</div>
            </slot>
            <q-separator />
          </q-card>
        </q-card>
      </div>
    </q-page>
  </div>
</template>

<script setup>
import { uid } from 'quasar';
import PaginaFooter from './PaginaFooter.vue';
import PaginaHoofding from './PaginaHoofding.vue';
</script>

<style lang="scss" scoped>
.blad {
  position: relative;
  width: 21cm;
  height: 29.7cm;
  background-color: white;
  border: 0.5px dashed grey;
  padding: 0.8cm;
}

@media print {
  .blad {
    position: relative;
    width: 21cm;
    height: 29.7cm;
    background-color: white;
    border: none;
    padding: 0.8cm;
  }
}

@page {
  margin: 0;
}

#pos1 {
  background-color: white;
  position: absolute;
  top: 3.5cm;
}

#pos2 {
  background-color: white;
  position: absolute;
  top: 9.5cm;
}

#pos3 {
  background-color: white;
  position: absolute;
  top: 15.5cm;
}

#pos4 {
  background-color: white;
  position: absolute;
  top: 21.5cm;
}

#posfoot {
  background-color: white;
  position: absolute;
  top: 27.9cm;
  width: 19cm;
}

.zijbalk {
  position: fixed;
  left: 22cm;
  top: 2cm;
}

.instellingveld {
  width: 290px;
  padding: 5px;
}
</style>
