import { onMounted, ref, watch, computed } from 'vue';
import _ from 'lodash';
import { uid } from 'quasar';
import { useBesturingStore } from 'src/stores/besturing-store';

export default function useTot100() {
  console.log('CLASSINIT', 'optellen en aftrekkingen tot 100');
  var totEnMet10 = [];
  var tot10 = [];
  var tot9 = [];
  var tot8 = [];
  var brug = [];

  for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
      if (i + j <= 10) {
        tot10.push([i, j, i + j]);
        totEnMet10.push([i, j, i + j]);

        if (i + j <= 9) {
          tot9.push([i, j, i + j]);

          if (i + j <= 8) {
            tot8.push([i, j, i + j]);
          }
        }
      } else {
        if (i + j === 10) {
          totEnMet10.push([i, j, i + j]);
        } else {
          brug.push([i, j, i + j]);
        }
      }
    }
  }

  const functions = {
    TplusE: () => {
      var term1 = _.random(1, 9) * 10;
      var term2 = _.random(1, 9);
      var oef = {
        opgave: term1 + ' + ' + term2 + ' = ',
        oplossing: term1 + term2,
        term1: term1,
        term2: term2,
        bewerking: '+',
      };
      return oef;
    },
    EplusT: () => {
      var term1 = _.random(1, 9) * 10;
      var term2 = _.random(1, 9);
      var oef = {
        opgave: term2 + ' + ' + term1 + ' = ',
        oplossing: term1 + term2,
        term1: term2,
        term2: term1,
        bewerking: '+',
      };
      return oef;
    },
    TplusT: () => {
      var oefA = _.sample(tot10);
      var oef = {
        opgave: oefA[0] * 10 + ' + ' + oefA[1] * 10 + ' = ',
        oplossing: oefA[2] * 10,
        term1: oefA[0] * 10,
        term2: oefA[1] * 10,
        bewerking: '+',
      };

      return oef;
    },
    TminT: () => {
      var oefA = _.sample(tot10);
      var oef = [oefA[2] * 10 + ' - ' + oefA[1] * 10 + ' = ', oefA[0] * 10];
      var oef = {
        opgave: oefA[2] * 10 + ' - ' + oefA[1] * 10 + ' = ',
        oplossing: oefA[0] * 10,
        term1: oefA[2] * 10,
        term2: oefA[1] * 10,
        bewerking: '-',
      };
      return oef;
    },
    //ZONDER BRUG
    TEplusEzb: () => {
      var oefA = _.sample(tot10);
      var factor = _.random(1, 9) * 10;
      var term1 = oefA[0] + factor;
      var term2 = oefA[1];
      var oef = {
        opgave: term1 + ' + ' + term2 + ' = ',
        oplossing: term1 + term2,
        term1: term1,
        term2: term2,
        bewerking: '+',
      };
      return oef;
    },
    EplusTEzb: () => {
      var oefA = _.sample(tot10);
      var factor = _.random(1, 9) * 10;
      var term2 = oefA[0] + factor;
      var term1 = oefA[1];
      var oef = {
        opgave: term1 + ' + ' + term2 + ' = ',
        oplossing: term1 + term2,
        term1: term1,
        term2: term2,
        bewerking: '+',
      };
      return oef;
    },
    TEminEzb: () => {
      var oefA = _.sample(tot10);
      var factor = _.random(1, 9) * 10;
      var term1 = oefA[2] + factor;
      var term2 = oefA[1];
      var oef = {
        opgave: term1 + ' - ' + term2 + ' = ',
        oplossing: term1 - term2,
        term1: term1,
        term2: term2,
        bewerking: '-',
      };
      return oef;
    },
    //MET BRUG
    TEplusEb: () => {
      var oefA = _.sample(brug);
      var factor = _.random(1, 9) * 10;
      var term1 = oefA[0] + factor;
      var term2 = oefA[1];
      var oef = {
        opgave: term1 + ' + ' + term2 + ' = ',
        oplossing: term1 + term2,
        term1: term1,
        term2: term2,
        bewerking: '+',
      };
      return oef;
    },
    TEminEb: () => {
      var oefA = _.sample(brug);
      var factor = _.random(1, 9) * 10;
      var term1 = oefA[2] + factor;
      var term2 = oefA[1];
      var oef = {
        opgave: term1 + ' - ' + term2 + ' = ',
        oplossing: term1 - term2,
        term1: term1,
        term2: term2,
        bewerking: '-',
      };
      return oef;
    },
    TEplusTEzb: () => {
      var oefA = _.sample(tot10);
      var oefB = _.sample(tot9);
      var term1 = oefA[0] + oefB[0] * 10;
      var term2 = oefA[1] + oefB[1] * 10;
      var som = term1 + term2;
      var oef = {
        opgave: term1 + ' + ' + term2 + ' = ',
        oplossing: term1 + term2,
        term1: term1,
        term2: term2,
        bewerking: '+',
      };
      return oef;
    },
    TEminTEzb: () => {
      var oefA = _.sample(tot10);
      var oefB = _.sample(tot9);
      var term1 = oefA[0] + oefB[0] * 10;
      var term2 = oefA[1] + oefB[1] * 10;
      var som = term1 + term2;
      var oef = {
        opgave: som + ' - ' + term2 + ' = ',
        oplossing: term1,
        term1: som,
        term2: term2,
        bewerking: '-',
      };
      return oef;
    },
    TEplusTEb: () => {
      var oefA = _.sample(brug);
      var oefB = _.sample(tot8);
      var term1 = oefA[0] + oefB[0] * 10;
      var term2 = oefA[1] + oefB[1] * 10;
      var som = term1 + term2;
      var oef = {
        opgave: term1 + ' + ' + term2 + ' = ',
        oplossing: som,
        term1: term1,
        term2: term2,
        bewerking: '+',
      };
      return oef;
    },
    TEminTEb: () => {
      var oefA = _.sample(brug);
      var oefB = _.sample(tot8);
      var term1 = oefA[0] + oefB[0] * 10;
      var term2 = oefA[1] + oefB[1] * 10;
      var som = term1 + term2;
      var oef = {
        opgave: som + ' - ' + term2 + ' = ',
        oplossing: term1,
        term1: som,
        term2: term2,
        bewerking: '-',
      };
      return oef;
    },
    aftrekkenVanT: () => {
      var aftrekkers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      var aftrekker = _.sample(aftrekkers);
      var aftrektal = Number(_.sample(aftrekkers)) * 10;
      var oef = {
        opgave: aftrektal + ' - ' + aftrekker + ' = ',
        oplossing: aftrektal - aftrekker,
        term1: aftrektal,
        term2: aftrekker,
        bewerking: '-',
      };

      return oef;
    },
    aanvullenTotT: () => {
      var aftrekkers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      var aftrekker = _.sample(aftrekkers);
      var aftrektal = Number(_.sample(aftrekkers)) * 10;
      var verschil = aftrektal - aftrekker;
      var oef = {
        opgave: verschil + ' + ' + ' .  = ' + aftrektal,
        oplossing: aftrekker,
        term1: verschil,
        term2: aftrekker,
        bewerking: '+',
      };
      return oef;
    },
    plusTot10() {
      var oefA = _.sample(tot10);
      var oef = {
        opgave: oefA[0] + ' + ' + oefA[1] + ' = ',
        oplossing: oefA[0] + oefA[1],
        term1: oefA[0],
        term2: oefA[1],
        bewerking: '+',
      };
      return oef;
    },
    minTot10() {
      var oefA = _.sample(tot10);
      var oef = {
        opgave: oefA[2] + ' + ' + oefA[1] + ' = ',
        oplossing: oefA[2] - oefA[1],
        term1: oefA[2],
        term2: oefA[1],
        bewerking: '-',
      };
      return oef;
    },
    plusTussen10en20: () => {
      var oefA = _.sample(this.tot10);
      var oef = {
        term1: oefA[0] + 10,
        term2: oefA[1],
        opgave: term1 + ' + ' + term2 + ' = ',
        oplossing: term1 + term2,
        bewerking: '+',
      };
      return oef;
    },
    minTussen10en20: () => {
      var oefA = _.sample(this.tot10);
      var oef = {
        term1: oefA[2] + 10,
        term2: oefA[1],
        opgave: term1 + ' - ' + term2 + ' = ',
        oplossing: term1 - term2,
        bewerking: '-',
      };
      return oef;
    },
  };

  const getOefening = (oef) => {
    if (typeof functions[oef] === 'function') {
      return functions[oef]();
    } else {
      console.error('oefening does not exist');
      return null;
    }
  };

  return {
    getOefening,
  };
}
