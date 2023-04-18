export default [{
    component: () =>
      import('components/werkbladfabriek/stroken/splitsingen/splitsing'),
    id: 'splitsing',
    label: 'Splitsingen',
    value: 'splitsing'
  },
  {
    component: () =>
      import('components/werkbladfabriek/stroken/splitsingen/splitsinggetalbeeld'),
    id: 'splitsinggetalbeeld',
    label: 'Splitsingen met getalbeeld',
    value: 'splitsinggetalbeeld'
  }

]
