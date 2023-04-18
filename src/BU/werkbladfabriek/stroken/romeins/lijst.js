export default [{
    component: () =>
      import('components/werkbladfabriek/stroken/romeins/omzetten'),
    id: 'omzetten',
    label: 'omzetten romeinse cijfers',
    value: 'omzetten'
  },
  {
    component: () =>
      import('components/werkbladfabriek/stroken/romeins/omzettenAnaarR'),
    id: 'omzettenAnaarR',
    label: 'omzetten naar romeinse cijfers',
    value: 'omzettenAnaarR'
  },
  {
    component: () =>
      import('components/werkbladfabriek/stroken/romeins/RomeinseBewerkingen'),
    id: 'bewerkingen',
    label: 'bewerkingen met Romeinse cijfers',
    value: 'bewerkingen'
  },
  {
    component: () =>
      import('components/werkbladfabriek/stroken/romeins/uitleg'),
    id: 'uitleg',
    label: 'Hoe werk je met Romeinse cijfers',
    value: 'uitleg'
  }
]
