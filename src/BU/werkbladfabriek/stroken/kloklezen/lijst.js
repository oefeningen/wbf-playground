export default [{
    component: () =>
      import('components/werkbladfabriek/stroken/kloklezen/verwoording'),
    id: 'verwoording',
    label: 'wijzers => verwoording',
    value: 'verwoording'
  },
  {
    component: () =>
      import('components/werkbladfabriek/stroken/kloklezen/wijzers'),
    id: 'wijzers',
    label: 'verwoording => wijzers',
    value: 'wijzers'
  },

]
