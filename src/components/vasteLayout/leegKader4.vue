<template>
  <div class="leegKader">
    <slot name="oefening"></slot>
    <div class="zijbalk-met-knoppen print-hide">
      <q-btn
        size="sm"
        flat
        round
        color="secondary"
        icon="settings"
        class="zijknop"
      >
        <q-tooltip> Instellingen voor deze oefening </q-tooltip>
        <q-menu transition-show="scale" transition-hide="scale">
          <div class="row no-wrap q-pa-md">
            <slot name="settings"></slot>
          </div>
        </q-menu>
      </q-btn>
      <q-btn
        size="sm"
        flat
        round
        color="primary"
        icon="swap_horiz"
        class="zijknop tweede"
      >
        <q-tooltip> Kies een andere oefenvorm </q-tooltip>
        <q-menu
          content-class="bg-light-green-2"
          transition-show="scale"
          transition-hide="scale"
        >
          <div class="text-caption q-mx-md q-mt-sm">
            Kies een andere oefenvorm
            <hr />
          </div>
          <div class="row no-wrap q-px-md q-mb-md">
            <q-list style="min-width: 100px">
              <q-item
                dense
                clickable
                v-close-popup
                v-for="(oefenvorm, key) in oefenvormen"
                :key="key"
              >
                <q-item-section
                  @click="
                    besturingStore.geselecteerdeOefeningen[
                      'strook' + strookId
                    ] = oefenvorm.label
                  "
                  >{{ oefenvorm.label }}</q-item-section
                >
              </q-item>
            </q-list>
          </div>
        </q-menu>
      </q-btn>
      <q-btn
        flat
        size="sm"
        round
        :color="besturingStore.toonTitel['strook' + strookId] ? 'green' : 'red'"
        icon="text_fields"
        class="zijknop vijfde"
        @click="toggleTitel"
      >
        <q-tooltip>
          <div v-if="besturingStore.opties['strook' + strookId].hideTitel">
            Toon de titel
          </div>
          <div v-else>Verberg de titel</div>
        </q-tooltip>
      </q-btn>

      <q-btn
        flat
        size="sm"
        round
        color="green"
        icon="refresh"
        class="zijknop derde"
        @click="opnieuwRekenen"
      >
        <q-tooltip> Deze oefening opnieuw berekenen </q-tooltip>
      </q-btn>
      <q-btn
        flat
        size="sm"
        round
        color="red"
        icon="arrow_downward"
        class="zijknop vierde"
        @click="besturingStore.oefeningDoorvoeren(strookId)"
      >
        <q-tooltip> Voer deze oefening door tot beneden </q-tooltip>
      </q-btn>
    </div>
  </div>
</template>
<script setup>
import { useBesturingStore } from 'src/stores/besturing-store.js';
import { uid } from 'quasar';

const props = defineProps({
  strookId: {
    type: String,
  },
  oefenvormen: {
    type: Array,
  },
});

const besturingStore = useBesturingStore();
const opnieuwRekenen = () => {
  besturingStore.generatieIds['strook' + props.strookId] = uid();
};
const toggleTitel = () => {
  besturingStore.opties['strook' + props.strookId].hideTitel =
    !besturingStore.opties['strook' + props.strookId].hideTitel;
};
</script>

<style scoped>
.leegKader {
  height: 6cm;
  width: 19cm;
  border: 1px dashed white;
  margin-left: 0.4cm;
}

@media print {
  .leegKader {
    height: 6cm;
    width: 19cm;
    border: none;
  }
}

.zijknop {
  position: absolute;
  top: 0cm;
  left: 0cm;
}
.tweede {
  position: absolute;
  top: 1cm;
  left: 0cm;
}
.derde {
  position: absolute;
  top: 4cm;
  left: 0cm;
}
.vierde {
  position: absolute;
  top: 4.9cm;
  left: 0cm;
}
.vijfde {
  position: absolute;
  top: 2.6cm;
  left: 0cm;
}

.zijbalk-met-knoppen {
  height: 6cm;
  width: 1cm;
  position: absolute;
  right: -1cm;
  top: -0cm;
}
</style>
