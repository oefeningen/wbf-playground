import { defineAsyncComponent } from 'vue';

export default [
  {
    component: defineAsyncComponent(() =>
      import(
        'src/components/werkbladFabriek/stroken/playground/werkbladPlayground.vue'
      )
    ),
    id: 'Tafels',
    label: 'Tafels',
    value: 'Tafels',
  },
  {
    component: defineAsyncComponent(() =>
      import('src/components/werkbladFabriek/tafelsVariabel.vue')
    ),
    id: 'Tafels',
    label: 'Tafels Variabel',
    value: 'Tafels',
  },
];
