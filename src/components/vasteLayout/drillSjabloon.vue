<template>
  <div>
    <PaginaDrill class="bladspiegel">
      <template #titel><slot name="titel" /> </template>

      <template #oefenruimte>
        <div class="oefenruimte column justify-around">
          <div class="fit row wrap justify-around" v-if="bevat('A')">
            <oefenKolom
              :oefeningen="oefenreeks['A1']"
              v-if="bevat('A1')"
            ></oefenKolom>
            <oefenKolom
              :oefeningen="oefenreeks['A2']"
              v-if="bevat('A2')"
            ></oefenKolom>
            <oefenKolom
              :oefeningen="oefenreeks['A3']"
              v-if="bevat('A3')"
            ></oefenKolom>
          </div>
          <div class="fit row wrap justify-around" v-if="bevat('B')">
            <oefenKolom
              :oefeningen="oefenreeks['B1']"
              v-if="bevat('B1')"
            ></oefenKolom>
            <oefenKolom
              :oefeningen="oefenreeks['B2']"
              v-if="bevat('B2')"
            ></oefenKolom>
            <oefenKolom
              :oefeningen="oefenreeks['B3']"
              v-if="bevat('B3')"
            ></oefenKolom>
          </div>
          <div class="fit row wrap justify-around" v-if="bevat('C')">
            <oefenKolom
              :oefeningen="oefenreeks['C1']"
              v-if="bevat('C1')"
            ></oefenKolom>
            <oefenKolom
              :oefeningen="oefenreeks['C2']"
              v-if="bevat('C2')"
            ></oefenKolom>
            <oefenKolom
              :oefeningen="oefenreeks['C3']"
              v-if="bevat('C3')"
            ></oefenKolom>
          </div>
          <div class="fit row wrap justify-around" v-if="bevat('D')">
            <oefenKolom
              :oefeningen="oefenreeks['D1']"
              v-if="bevat('D1')"
            ></oefenKolom>
            <oefenKolom
              :oefeningen="oefenreeks['D2']"
              v-if="bevat('D2')"
            ></oefenKolom>
            <oefenKolom
              :oefeningen="oefenreeks['D3']"
              v-if="bevat('D3')"
            ></oefenKolom>
          </div>
        </div>
      </template>

      <template #instellingen>
        <slot name="instellingen" />
        <besturingKnoppenDrill
          @uitrekenen="passUitrekenen"
        ></besturingKnoppenDrill>
      </template>
    </PaginaDrill>
  </div>
</template>

<script setup>
import oefenKolom from 'src/components/vasteLayout/oefenKolom.vue';
import PaginaDrill from 'src/components/vasteLayout/PaginaDrill.vue';
import { computed } from 'vue';
import { useBesturingStore } from 'src/stores/besturing-store';
import besturingKnoppenDrill from './besturingKnoppenDrill.vue';
const besturingStore = useBesturingStore();

const emit = defineEmits(['uitrekenen']);

const passUitrekenen = () => {
  emit('uitrekenen');
};
//instellingen nog overzetten
const bevat = (letter) => {
  //   console.log(
  //     letter,
  //     kolomschema + ' ' + this.kolomschema.includes(letter)
  //   );
  if (kolomschema.value.includes(letter)) {
    return true;
  } else {
    return false;
  }
};

const kolomschema = computed(() => {
  if (besturingStore.aantal == '20') {
    return 'A1-A2-B1-B2';
  } else if (besturingStore.aantal == '30') {
    return 'A1-A2-B1-B2-C1-C2';
  } else if (besturingStore.aantal == '45') {
    return 'A1-A2-A3-B1-B2-B3-C1-C2-C3';
  } else if (besturingStore.aantal == '40') {
    return 'A1-A2-B1-B2-C1-C2-D1-D2';
  } else if (besturingStore.aantal == '60') {
    return 'A1-A2-A3-B1-B2-B3-C1-C2-C3-D1-D2-D3';
  } else {
    return 'A1-A2-A3-B1-B2-B3-C1-C2-C3-D1-D2-D3';
  }
});

const oefenreeks = computed(() => {
  var reeks = {};
  if (besturingStore.oefeningen && besturingStore.oefeningen.length > 0) {
    var labels = kolomschema.value.split('-');
    for (var i = 0; i < labels.length; i++) {
      reeks[labels[i]] = besturingStore.oefeningen.slice(i * 5, i * 5 + 5);
    }
  }

  return reeks;
});
</script>

<style scoped>
.scrollknop {
  position: fixed;
  left: 22cm;
  margin-bottom: 0.5cm;
}
.oefenruimte {
  min-height: 24cm;
}
</style>
