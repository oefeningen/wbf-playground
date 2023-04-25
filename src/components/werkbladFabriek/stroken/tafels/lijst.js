import {
  defineAsyncComponent
} from 'vue';

export default [{
    component: defineAsyncComponent(() =>
      import('src/components/werkbladFabriek/stroken/tafels/losseOefeningen.vue')
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
  // {
  //   component: () =>
  //     import('src/components/werkbladfabriek/stroken/tafels/test_tafels'),
  //   id: 'oefenvorm1',
  //   label: 'losse oefeningen',
  //   value: 'oefenvorm1',
  // },
  // {
  //   component: () =>
  //     import('components/werkbladfabriek/stroken/tafels/tafels_tafelspoor'),
  //   id: 'Tafelspoor',
  //   label: 'tafelspoor',
  //   value: 'tafelspoor',
  // },
  // {
  //   component: () =>
  //     import('components/werkbladfabriek/stroken/tafels/tafels_tafelrupsen'),
  //   id: 'tafelrupsen',
  //   label: 'tafelrupsen',
  //   value: 'tafelrupsen',
  // },
  // {
  //   component: () =>
  //     import('components/werkbladfabriek/stroken/tafels/tafels_rooster'),
  //   id: 'rooster',
  //   label: 'rooster',
  //   value: 'rooster',
  // },
];
