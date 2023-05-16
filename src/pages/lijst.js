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
  {
    component: defineAsyncComponent(() =>
      import('src/components/werkbladFabriek/drillpaginas/drillTafels.vue')
    ),
    id: 'Tafels',
    label: 'Tafels Drill',
    value: 'Tafels',
  },
  {
    component: defineAsyncComponent(() =>
      import('src/components/werkbladFabriek/drillpaginas/drillTot100.vue')
    ),
    id: 'Tafels',
    label: 'Drill tot 100',
    value: 'Tafels',
  },
  {
    component: defineAsyncComponent(() =>
      import('src/components/testComponent.vue')
    ),
    id: 'Tafels',
    label: 'Testen',
    value: 'Tafels',
  },
];
