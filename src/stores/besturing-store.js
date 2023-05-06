import { defineStore } from 'pinia';

export const useBesturingStore = defineStore('besturing', {
  state: () => ({
    testWaarde: 'appelmoes',
    toonOplossing: false,
    aantal: '45',
    opties: {
      strook1: {},
      strook2: {},
      strook3: {},
      strook4: {},
    },
    geselecteerdeOefeningen: {
      strook1: 'test',
      strook2: 'test2',
      strook3: 'test',
      strook4: 'test2',
    },

    toonTitel: {
      strook1: true,
      strook2: true,
      strook3: true,
      strook4: true,
    },
    generatieIds: {
      drill: '',
      strook1: '',
      strook2: '',
      strook3: '',
      strook4: '',
    },
    //oefeningen voor de drill
    oefeningen: [],
  }),
  getters: {},
  actions: {
    oefeningDoorvoeren(strookId) {
      var strookIndex = Number(strookId);
      for (var i = strookIndex + 1; i <= 4; i++) {
        this.geselecteerdeOefeningen['strook' + i] =
          this.geselecteerdeOefeningen['strook' + strookId];
        this.opties['strook' + i] = JSON.parse(
          JSON.stringify(this.opties['strook' + strookId])
        );
      }
    },
    getToonTitelByStrookId(strookId) {
      return this.toonTitel['strook' + strookId];
    },
  },
});
