import { defineAsyncComponent } from 'vue';

export default [
  {
    component: defineAsyncComponent(() =>
      import(
        'src/components/werkbladFabriek/stroken/playground/oefeningSjabloon.vue'
      )
    ),
    id: 'oefenvorm10',
    label: 'Losse oefeningen',
    value: 'oefenvorm10',
  },
  {
    component: defineAsyncComponent(() =>
      import(
        'src/components/werkbladFabriek/stroken/playground/getalbeeldHerkennen.vue'
      )
    ),
    id: 'oefenvorm10',
    label: 'Getalbeeld',
    value: 'oefenvorm10',
  },
];
