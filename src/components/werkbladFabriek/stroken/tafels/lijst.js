import { defineAsyncComponent } from 'vue';

export default [
  {
    component: defineAsyncComponent(() =>
      import(
        'src/components/werkbladFabriek/stroken/tafels/losseOefeningen.vue'
      )
    ),
    id: 'oefenvorm10',
    label: 'Losse oefeningen',
    value: 'oefenvorm10',
  },
  {
    component: defineAsyncComponent(() =>
      import('src/components/werkbladFabriek/stroken/tafels/tafelRooster.vue')
    ),
    id: 'oefenvorm10',
    label: 'Tafelrooster',
    value: 'oefenvorm10',
  },
  {
    component: defineAsyncComponent(() =>
      import('src/components/werkbladFabriek/stroken/tafels/tafelSpoor.vue')
    ),
    id: 'oefenvorm10',
    label: 'Tafelspoor',
    value: 'oefenvorm10',
  },
  {
    component: defineAsyncComponent(() =>
      import('src/components/werkbladFabriek/stroken/tafels/tafelRupsen.vue')
    ),
    id: 'oefenvorm10',
    label: 'Tafelrupsen',
    value: 'oefenvorm10',
  },
];
