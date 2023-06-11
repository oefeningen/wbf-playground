import { defineAsyncComponent } from 'vue';

export default [
  {
    component: defineAsyncComponent(() =>
      import(
        'src/components/werkbladFabriek/stroken/playground/werkbladPlayground.vue'
      )
    ),

    label: 'Playground',
  },
  {
    component: defineAsyncComponent(() =>
      import('src/components/werkbladFabriek/tafelsVariabel.vue')
    ),

    label: 'Tafels Variabel',
  },
  {
    component: defineAsyncComponent(() =>
      import('src/components/werkbladFabriek/drillpaginas/drillTafels.vue')
    ),
    label: 'Tafels Drill',
  },
  {
    component: defineAsyncComponent(() =>
      import('src/components/werkbladFabriek/drillpaginas/drillTot100.vue')
    ),

    label: 'Drill tot 100',
  },
  {
    component: defineAsyncComponent(() =>
      import('src/components/testComponent.vue')
    ),
    label: 'Testen',
  },
];
