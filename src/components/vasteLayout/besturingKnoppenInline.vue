<template>
  <div>
    <div class="row justify-center bovenrij">
      <q-btn
        class="q-ma-sm"
        round
        color="lime-7"
        icon="refresh"
        @click="RekenAllesUit"
      >
        <q-tooltip :delay="1000">
          Reken opnieuw uit met de bestaande instellingen
        </q-tooltip>
      </q-btn>
      <q-btn
        class="q-ma-sm"
        round
        flat
        color="black"
        icon="refresh"
        @click="ResetEnRekenAllesUit"
      >
        <q-tooltip :delay="1000">
          Reken opnieuw uit met bovenstaande instellingen
        </q-tooltip>
      </q-btn>
      <q-btn
        class="q-ma-sm"
        round
        color="teal-4"
        glossy
        icon="shuffle"
        @click="shuffleOefeningen"
      >
        <q-tooltip :delay="1000">
          Maak een nieuwe mix van oefeningen
        </q-tooltip>
      </q-btn>
    </div>
    <div class="row justify-center">
      <q-btn
        class="q-ma-sm"
        round
        :color="besturingStore.toonOplossing ? 'deep-orange' : 'light-green-12'"
        @click="besturingStore.toonOplossing = !besturingStore.toonOplossing"
        icon="check_circle_outline"
      >
        <q-tooltip :delay="1000"> Toon/verberg de oplossing </q-tooltip>
      </q-btn>

      <q-btn class="q-ma-sm" round color="green-5" icon="print" @click="print">
        <q-tooltip :delay="1000"> Print </q-tooltip>
      </q-btn>
    </div>
  </div>
</template>

<script setup>
// import { ezPrintJS } from 'src/assets/libs/ezprintjs.min.js';
import _ from 'lodash';
import { useQuasar, uid } from 'quasar';
// import { mapActions, mapState } from 'vuex';
// import { mapStores } from 'pinia';
import { useBesturingStore } from 'src/stores/besturing-store';
import { nextTick } from 'vue';
const $q = useQuasar();

const besturingStore = useBesturingStore();

const print = () => {
  ezPrintJS({
    target: '.bladspiegel',
    printCanvas: true,

    setPrintSize: 'A4',
    keepSourceCSS: true,
    printInIframe: true,
    afterPrintCb: function () {
      console.log('printen klaar');
      //document.body.removeChild(vm.img)
      //vm.$store.commit("setPrinting",false)
    },
  });
};
const props = defineProps({
  geselecteerdeOefeningen: {
    type: Array,
  },
  opties: {
    type: Object,
  },
});

const RekenAllesUit = () => {
  besturingStore.generatieIds.strook1 = uid();
  besturingStore.generatieIds.strook2 = uid();
  besturingStore.generatieIds.strook3 = uid();
  besturingStore.generatieIds.strook4 = uid();
};
const ResetEnRekenAllesUit = async () => {
  saveSettings();
  nextTick().then(RekenAllesUit());
};

const saveSettings = () => {
  var opties = JSON.parse(JSON.stringify(props.opties));
  besturingStore.opties.strook1 = JSON.parse(JSON.stringify(props.opties));
  besturingStore.opties.strook2 = JSON.parse(JSON.stringify(props.opties));
  besturingStore.opties.strook3 = JSON.parse(JSON.stringify(props.opties));
  besturingStore.opties.strook4 = JSON.parse(JSON.stringify(props.opties));
};

const shuffleOefeningen = () => {
  if (props.geselecteerdeOefeningen.length > 0) {
    besturingStore.geselecteerdeOefeningen.strook1 = _.sample(
      props.geselecteerdeOefeningen
    ).label;
    besturingStore.geselecteerdeOefeningen.strook2 = _.sample(
      props.geselecteerdeOefeningen
    ).label;
    besturingStore.geselecteerdeOefeningen.strook3 = _.sample(
      props.geselecteerdeOefeningen
    ).label;
    besturingStore.geselecteerdeOefeningen.strook4 = _.sample(
      props.geselecteerdeOefeningen
    ).label;
    ResetEnRekenAllesUit();
  } else {
    $q.notify({
      message: 'Geen oefeningen geselecteerd',
    });
  }
};
</script>

<style>
.bovenrij {
  margin-bottom: -10px;
}
@page {
  margin: 0;
}
</style>
