export default [{
    component: () =>
      import('components/werkbladfabriek/stroken/breuken/vereenvoudigen'),
    id: 'vereenvoudigen',
    label: 'vereenvoudigen',
    value: 'vereenvoudigen'
  },
  {
    component: () =>
      import('components/werkbladfabriek/stroken/breuken/onechte'),
    id: 'onechte',
    label: 'onechte breuk oplossen',
    value: 'onechte'
  },
  {
    component: () =>
      import('components/werkbladfabriek/stroken/breuken/onechtemaken'),
    id: 'onechtemaken',
    label: 'onechte breuk maken',
    value: 'onechtemaken'
  },
  // {
  //   component: () =>
  //     import('components/werkbladfabriek/stroken/breuken/breukherkennen'),
  //   id: 'breukherkennen',
  //   label: 'breuk herkennen',
  //   value: 'breukherkennen'
  // },
  {
    component: () =>
      import('components/werkbladfabriek/stroken/breuken/optellen'),
    id: 'optellen',
    label: 'breuken optellen en aftrekken',
    value: 'optellen'
  }
]
