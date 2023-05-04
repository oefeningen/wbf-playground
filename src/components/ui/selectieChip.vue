<template>
  <div>
    <q-chip
      close
      size="15px"
      width="40px"
      light
      @remove="remove"
      removable
      clickable
      ref="chip"
      :color="kleur"
      @click="activeer"
    >
      <div class="selchip">
        <q-avatar @click.stop="veranderFrequentie" class="bol">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 64 64"
            style="enable-background: new 0 0 64 64"
            xml:space="preserve"
            width="32"
          >
            <g id="Layer_1">
              <g>
                <circle class="st0" cx="32" cy="32" r="32" />
              </g>
              <g class="st1" v-show="aantal >= 1">
                <path
                  class="st2"
                  d="M33.8,53.6c-1,0.6-2.5,0.6-3.5,0L12.7,43.1c-1-0.6-1-1.5,0-2.1l17.5-10.5c1-0.6,2.5-0.6,3.5,0l17.5,10.5c1,0.6,1,1.5,0,2.1L33.8,53.6z"
                />
              </g>
              <g v-show="aantal >= 1">
                <path
                  class="st3"
                  d="M33.8,51.6c-1,0.6-2.5,0.6-3.5,0L12.7,41.1c-1-0.6-1-1.5,0-2.1l17.5-10.5c1-0.6,2.5-0.6,3.5,0l17.5,10.5c1,0.6,1,1.5,0,2.1L33.8,51.6z"
                />
              </g>
              <g class="st1" v-show="aantal >= 2">
                <path
                  class="st2"
                  d="M33.8,45.6c-1,0.6-2.5,0.6-3.5,0L12.7,35.1c-1-0.6-1-1.5,0-2.1l17.5-10.5c1-0.6,2.5-0.6,3.5,0l17.5,10.5c1,0.6,1,1.5,0,2.1L33.8,45.6z"
                />
              </g>
              <g v-show="aantal >= 2">
                <path
                  class="st4"
                  d="M33.8,43.6c-1,0.6-2.5,0.6-3.5,0L12.7,33.1c-1-0.6-1-1.5,0-2.1l17.5-10.5c1-0.6,2.5-0.6,3.5,0l17.5,10.5c1,0.6,1,1.5,0,2.1L33.8,43.6z"
                />
              </g>
              <g class="st1" v-show="aantal >= 3">
                <path
                  class="st2"
                  d="M33.8,37.6c-1,0.6-2.5,0.6-3.5,0L12.7,27.1c-1-0.6-1-1.5,0-2.1l17.5-10.5c1-0.6,2.5-0.6,3.5,0l17.5,10.5c1,0.6,1,1.5,0,2.1L33.8,37.6z"
                />
              </g>
              <g v-show="aantal >= 3">
                <path
                  class="st5"
                  d="M33.8,35.6c-1,0.6-2.5,0.6-3.5,0L12.7,25.1c-1-0.6-1-1.5,0-2.1l17.5-10.5c1-0.6,2.5-0.6,3.5,0l17.5,10.5c1,0.6,1,1.5,0,2.1L33.8,35.6z"
                />
              </g>
            </g>
            <g id="Layer_2"></g>
          </svg>
        </q-avatar>
        <span class="boventest">{{ item.voorbeeld }}</span>

        <div class="ondertest">{{ item.titel }}</div>
      </div>
    </q-chip>
  </div>
</template>

<script setup>
import { ref, defineEmits, onMounted, watch, computed } from 'vue';

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  modelValue: {
    type: Number,
  },
});

const emit = defineEmits(['update:modelValue']);

const aantal = ref(props.modelValue);

watch(aantal, (newValue) => {
  emit('update:modelValue', aantal);
});

const kleur = ref('primary');

const remove = () => {
  kleur.value = 'grey';
  aantal.value = 0;
};
const veranderFrequentie = () => {
  kleur.value = 'primary';
  if (aantal.value < 3) {
    aantal.value++;
  } else {
    aantal.value = 1;
  }
};

const activeer = () => {
  kleur.value = 'primary';
  emit('update', aantal.value);
};
</script>
<style scoped>
.bol {
  position: relative;
  top: 5px;
}
.selchip {
  width: 100px;
}
.boventest {
  position: relative;
  top: 2px;
  font-weight: 600;
  font-size: 0.8em;
  color: white;
}
.ondertest {
  width: 100%;
  position: relative;
  bottom: 6px;
  text-align: left;
  font-size: 0.6em;
  left: 20px;
  color: white;
}
.st0 {
  fill: #e0e0d1;
}

.st1 {
  opacity: 0.2;
}

.st2 {
  fill: #231f20;
}

.st3 {
  fill: #c75c5c;
}

.st4 {
  fill: #76c2af;
}

.st5 {
  fill: #4f5d73;
}
</style>
