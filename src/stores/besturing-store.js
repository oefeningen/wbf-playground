import { defineStore } from 'pinia';

export const useBesturingStore = defineStore('besturing', {
  state: () => ({
    testWaarde: 'appelmoes',
    toonOplossing: false,
    opties: {},
    geselecteerdeOefeningen: {
      strook1: null,
      strook2: null,
      strook3: null,
      strook4: null,
    },
    uitrekenstatus: {
      strook1: false,
      strook2: false,
      strook3: false,
      strook4: false,
    },
    toonTitel: {
      strook1: true,
      strook2: true,
      strook3: true,
      strook4: true,
    },
    saveMainSettingsTrigger: false,
    shuffleOefeningenTrigger: false,
    DrillUitrekenstatus: false,

    saveDrillSettingsTrigger: false,
    DrillSettings: {
      oefeningen: [],
      aantal: 30,
    },
  }),
  getters: {},
  actions: {
    doorvoeren(strookId) {
      var strookIndex = Number(strookId);
      console.log(
        'doorvoeren aangevraagd ' + strookIndex,
        this.opties['opties_' + strookId]
      );
      var nieuweSettings = JSON.parse(
        JSON.stringify(this.opties['opties_' + strookId])
      );
      var component = this.geselecteerdeOefeningen['strook' + strookIndex];
      for (var i = strookIndex + 1; i <= 4; i++) {
        console.log('set voor strook ' + i);
        this.opties['opties_' + i] = nieuweSettings;
        this.geselecteerdeOefeningen['strook' + i] = component;
      }
    },
    getToonTitelByStrookId(strookId) {
      return this.toonTitel['strook' + strookId];
    },
  },
});
