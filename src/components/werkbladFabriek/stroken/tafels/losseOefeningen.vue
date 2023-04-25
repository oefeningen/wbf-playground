<template>
  <div>
    <leegKader4 :strookId="props.strookId" :oefenvormen="props.oefenvormen">
      <template #settings>
        <div m-x-2>
          <div class="text-caption">Welke tafels?</div>
          <multiSelect
            :options="optionsTafels"
            v-model:selectie="opties.geselecteerdeTafels"
            split="5"
          />
        </div>
        <div m-x-2>
          <div class="text-caption">Welke bewerkingen?</div>
          <multiSelect
            :options="optionsBewerkingen"
            v-model:selectie="opties.geselecteerdeBewerkingen"
            :spread="false"
          />
        </div>
        <div m-x-2>
          <div class="text-caption">Hoeveel?</div>
          <q-btn-toggle
            v-model="opties.aantal"
            push
            dense
            toggle-color="primary"
            :options="[
              { label: '10', value: '10' },
              { label: '15', value: '15' },
              { label: '20', value: '20' },
              { label: '25', value: '25' },
            ]"
          />
        </div>

        <uitrekenKnop @click="uitrekenen">Reken uit</uitrekenKnop>
      </template>
      <template #oefening>
        <oefening-titel :strookId="props.strookId">Los op!</oefening-titel>

        <div class="fit row justify-between">
          <div
            min-w-30
            v-for="(reeks, key) in oefenreeksen"
            :key="key"
            :style="'width:' + breedte + ';'"
          >
            <p
              class="tekstopgave"
              v-for="(oef, key) in reeks"
              contenteditable="true"
              :key="'r1_' + key"
            >
              {{ oef[0] }}
              <span v-if="toonOplossing" class="oplossing">{{ oef[1] }}</span>
            </p>
          </div>
        </div>
      </template>
    </leegKader4>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useQuasar } from 'quasar';
import leegKader4 from 'src/components/vasteLayout/leegKader4.vue';
import useStrookBesturing from 'src/components/composables/useStrookBesturing';
import multiSelect from 'src/components/ui/multiSelect.vue';
import oefeningTitel from 'src/components/vasteLayout/oefeningTitel.vue';
import uitrekenKnop from 'src/components/ui/uitrekenKnop.vue';

import Tafeloefening from 'src/classes/Tafeloefening';
const $q = useQuasar();
const props = defineProps({
  strookId: {
    type: String,
  },
  oefenvormen: {
    type: Array,
  },
});

const aantal = computed(() => {
  if (opties.value.aantal) {
    return opties.value.aantal;
  } else {
    return 15;
  }
});

const optionsBewerkingen = ref(['x', ':']);
const optionsTafels = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
const oefenreeksen = ref([]);

const uitrekenen = () => {
  console.log('uitrekenen', opties.value.geselecteerdeTafels);
  oefenreeksen.value = [];
  if (
    opties.value.geselecteerdeTafels &&
    opties.value.geselecteerdeTafels.length > 0
  ) {
    console.log(
      'DIALOOG MOET NIET OPGEROEPEN WORDEN',
      opties.value.geselecteerdeTafels.length
    );
    var tafeloefening = new Tafeloefening(opties.value.geselecteerdeTafels);
    for (var i = 0; i < aantal.value / 5; i++) {
      var reeks = tafeloefening.getReeks(
        opties.value.geselecteerdeBewerkingen,
        5
      );
      oefenreeksen.value.push(reeks);
    }
  } else {
    $q.notify({
      message: 'Er zijn gegevens te kort!',
    });
  }
};

const { opties, toonOplossing, generatieId } = useStrookBesturing(
  props.strookId,
  uitrekenen
);
onMounted(uitrekenen);
</script>

<style lang="scss" scoped></style>
