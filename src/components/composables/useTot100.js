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
    TplusT: () => {
      var oefA = _.sample(tot10);
      var oef = [oefA[0] * 10 + ' + ' + oefA[1] * 10 + ' = ', oefA[2] * 10];
      return oef;
    },
    TminT: () => {
      var oefA = _.sample(tot10);
      var oef = [oefA[2] * 10 + ' - ' + oefA[1] * 10 + ' = ', oefA[0] * 10];
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
