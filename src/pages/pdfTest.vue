<template>
  <div>
    <div w-20 h-20 bg-pink top-20 class="box"></div>
    <div w-full flex>
      <vue-pdf-embed row :source="source1" w-300 />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import VuePdfEmbed from 'vue-pdf-embed';

//loop over object

const source1 = ref('src\\assets\\Zeewier.pdf');

const count = ref(0);
const drawing = ref();

const min = -5;
const max = 5;
</script>
<style>
.vierkant {
  width: 100%;
  height: 0;
  padding-top: 100%;
  border: 1px solid red;
  max-width: 100px;
}
.test {
  border: 5px solid;
  display: flex;
  height: 150px;
  align-items: center;
}
/* box is floating over pdf*/
</style>
