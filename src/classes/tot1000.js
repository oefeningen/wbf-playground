import _ from "lodash"

export default class rekensomtot100 {
  constructor() {
    console.log("CLASSINIT", "optellen en aftrekkingen tot 20")
    this.totEnMet10 = []
    this.tot10 = []
    this.tot9 = []
    this.brug = []
    this.getallen = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    for (let i = 1; i < 10; i++) {
      for (let j = 1; j < 10; j++) {
        if ((i + j) <= 10) {
          this.tot10.push([i, j, i + j])
          this.totEnMet10.push([i, j, i + j])
          if ((i + j) <= 9) {
            this.tot9.push([i, j, i + j])
          }
        } else {
          if ((i + j) == 10) {
            this.totEnMet10.push([i, j, i + j])
          } else {
            this.brug.push([i, j, i + j])
          }
        }

      }
    }


  }






















  //Repeat from tot100

  get TplusE() {
    var term1 = _.random(1, 9) * 10
    var term2 = _.random(1, 9)
    var oef = [term1 + " + " + term2 + " = ", (term1 + term2)]
    return oef

  }
  get EplusT() {
    var term1 = _.random(1, 9) * 10
    var term2 = _.random(1, 9)
    var oef = [term2 + " + " + term1 + " = ", (term1 + term2)]
    return oef

  }
  get TplusT() {
    var oefA = _.sample(this.tot10)

    var oef = [oefA[0] * 10 + " + " + oefA[1] * 10 + " = ", oefA[2] * 10]
    return oef

  }
  get TminT() {
    var oefA = _.sample(this.tot10)

    var oef = [oefA[2] * 10 + " - " + oefA[1] * 10 + " = ", oefA[0] * 10]
    return oef

  }

  get TEplusEzb() {
    var oefA = _.sample(this.tot10)
    var factor = _.random(1, 9) * 10
    var oef = [oefA[0] + factor + " + " + oefA[1] + " = ", oefA[2] + factor]
    return oef

  }
  get EplusTEzb() {
    var oefA = _.sample(this.tot10)
    var factor = _.random(1, 9) * 10
    var oef = [oefA[1] + " + " + (Number(oefA[0]) + factor) + " = ", oefA[2] + factor]
    return oef

  }
  get TEplusEb() {
    var oefA = _.sample(this.brug)
    var factor = _.random(1, 8) * 10
    var oef = [oefA[0] + factor + " + " + oefA[1] + " = ", oefA[2] + factor]
    return oef

  }
  get TEminEzb() {
    var oefA = _.sample(this.tot10)
    var factor = _.random(1, 9) * 10
    var oef = [oefA[2] + factor + " - " + oefA[1] + " = ", oefA[0] + factor]
    return oef

  }
  get TEminEb() {
    var oefA = _.sample(this.brug)
    var factor = _.random(1, 8) * 10
    var oef = [oefA[2] + factor + " - " + oefA[1] + " = ", oefA[0] + factor]
    return oef

  }
  get TEplusTEzb() {
    var oefA = _.sample(this.tot10)
    var oefB = _.sample(this.tot9)

    var oef = [(oefA[0] + (oefB[0] * 10)) + " + " + (oefA[1] + (oefB[1] * 10)) + " = ", (oefA[2] + (oefB[2] * 10))]
    return oef

  }
  get TEplusTEb() {
    var oefA = _.sample(this.brug)
    var oefB = _.sample(this.tot9)

    var oef = [(oefA[0] + (oefB[0] * 10)) + " + " + (oefA[1] + (oefB[1] * 10)) + " = ", (oefA[2] + (oefB[2] * 10))]
    return oef

  }
  get TEminTEzb() {
    var oefA = _.sample(this.tot10)
    var oefB = _.sample(this.tot9)

    var oef = [(oefA[2] + (oefB[2] * 10)) + " - " + (oefA[1] + (oefB[1] * 10)) + " = ", (oefA[0] + (oefB[0] * 10))]
    return oef

  }
  get TEminTEb() {
    var oefA = _.sample(this.brug)
    var oefB = _.sample(this.tot9)

    var oef = [(oefA[2] + (oefB[2] * 10)) + " - " + (oefA[1] + (oefB[1] * 10)) + " = ", (oefA[0] + (oefB[0] * 10))]
    return oef

  }
  get aftrekkenVanT() {
    var aftrekkers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    var aftrekker = _.sample(aftrekkers)
    var aftrektal = Number(_.sample(aftrekkers)) * 10
    var oef = [aftrektal + " - " + aftrekker + " = ", aftrektal - aftrekker]
    return oef
  }
  get aanvullenTotT() {
    var aftrekkers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    var aftrekker = _.sample(aftrekkers)
    var aftrektal = Number(_.sample(aftrekkers)) * 10
    var oef = [(aftrektal - aftrekker) + " + ", aftrekker, " = " + aftrektal]
    return oef
  }




  get plusTot10() {
    var oefA = _.sample(this.tot10)
    var oef = [oefA[0] + " + " + oefA[1] + " = ", oefA[2]]
    return oef

  }
  get minTot10() {
    var oefA = _.sample(this.tot10)
    var oef = [oefA[2] + " - " + oefA[1] + " = ", oefA[0]]
    return oef
  }
  get plusTussen10en20() {
    var oefA = _.sample(this.tot10)
    var oef = [(oefA[0] + 10) + " + " + oefA[1] + " = ", (oefA[2] + 10)]
    return oef
  }
  get E_TEplusTussen10en20() {
    var oefA = _.sample(this.tot10)
    var oef = [oefA[1] + " + " + (oefA[0] + 10) + " = ", (oefA[2] + 10)]
    return oef
  }
  get minTussen10en20() {
    var oefA = _.sample(this.tot10)
    var oef = [oefA[2] + 10 + " - " + oefA[0] + " = ", oefA[1] + 10]
    return oef

  }
  get minMetTientjes() {
    var oefA = _.sample(this.tot10)
    var oef = [Number(oefA[2]) + Number(10) + " - " + (Number(oefA[0]) + Number(10)) + " = ", oefA[2]]
    return oef
  }
  get plusBrugTot20() {
    var oefA = _.sample(this.brug)
    var oef = [oefA[0] + " + " + oefA[1] + " = ", oefA[2]]
    return oef
  }
  get minBrugTot20() {
    var oefA = _.sample(this.brug)
    var oef = [oefA[2] + " - " + oefA[1] + " = ", oefA[0]]
    return oef
  }
  get aftrekkenVan10() {
    var aftrekkers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    var aftrekker = _.sample(aftrekkers)
    var oef = [10 + " - " + aftrekker + " = ", 10 - aftrekker]
    return oef
  }
  get aftrekkenVan20() {
    var aftrekkers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    var aftrekker = _.sample(aftrekkers)
    var oef = [20 + " - " + aftrekker + " = ", 10 - aftrekker]
    return oef
  }
  get TEaftrekkenVan20() {
    var aftrekkers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    var aftrekker = Number(_.sample(aftrekkers)) + Number(10)
    var oef = [20 + " - " + aftrekker + " = ", 20 - aftrekker]
    return oef
  }
  get aanvullenTot10() {
    var aftrekkers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    var aftrekker = Number(_.sample(aftrekkers))
    var oef = [aftrekker + " + ", (10 - aftrekker), " = 10"]
    return oef
  }


  //TOT 1000


  get HplusH() {
    var oefA = _.sample(this.tot10)

    var oef = [oefA[0] * 100 + " + " + oefA[1] * 100 + " = ", oefA[2] * 100]
    return oef

  }
  get HminH() {
    var oefA = _.sample(this.tot10)

    var oef = [oefA[2] * 100 + " - " + oefA[1] * 100 + " = ", oefA[0] * 100]
    return oef

  }
  get HTplusH() {
    var oefA = _.sample(this.tot9)
    var tiental = Number(_.sample(this.getallen)) * 10

    var oef = [Number(oefA[0]) * 100 + tiental + " + " + Number(oefA[1]) * 100 + " = ", oefA[2] * 100 + tiental]
    return oef
  }

  get HTminH() {
    var oefA = _.sample(this.tot9)
    var tiental = Number(_.sample(this.getallen)) * 10

    var oef = [Number(oefA[2]) * 100 + tiental + " - " + Number(oefA[1]) * 100 + " = ", oefA[0] * 100 + tiental]
    return oef
  }
  get HplusHT() {
    var oefA = _.sample(this.tot10)
    var tiental = Number(_.sample(this.getallen))

    var oef = [Number(oefA[0]) * 100 + " + " + Number(oefA[1]) * 100 + tiental + " = ", oefA[2] * 100 + tiental]
    return oef
  }
  get HminHT() {
    var oefA = _.sample(this.tot9)
    var tiental = Number(_.sample(this.getallen))

    var oef = [Number(oefA[2] + Number(1)) * 100 + " - " + Number(oefA[1]) * 100 + tiental + " = ", oefA[1] * 100 - tiental]
    return oef
  }
  get HTplusT() {
    var oefA = _.sample(this.tot9)
    var honderdtal = Number(_.sample(this.getallen)) * 100
    var oef = [honderdtal + (oefA[0] * 10) + " + " + (oefA[1] * 10) + " = ", honderdtal + oefA[2] * 10]
    return oef
  }
  get HTminT() {
    var oefA = _.sample(this.tot9)
    var honderdtal = Number(_.sample(this.getallen)) * 100
    var oef = [honderdtal + (oefA[2] * 10) + " - " + (oefA[1] * 10) + " = ", honderdtal + oefA[0] * 10]
    return oef
  }
  get HTplusHTzb() {
    var oefA = _.sample(this.tot10)
    var oefB = _.sample(this.tot9)

    var oef = [(oefA[0] + (oefB[0] * 10)) * 10 + " + " + (oefA[1] + (oefB[1] * 10)) * 10 + " = ", (oefA[2] + (oefB[2] * 10)) * 10]
    return oef

  }
  get HTminHTzb() {
    var oefA = _.sample(this.tot10)
    var oefB = _.sample(this.tot9)

    var oef = [(oefA[2] + (oefB[2] * 10)) * 10 + " - " + (oefA[1] + (oefB[1] * 10)) * 10 + " = ", (oefA[0] + (oefB[0] * 10)) * 10]
    return oef
  }
  get HTplusTb() {
    var oefA = _.sample(this.brug)
    var honderdtal = Number(_.sample(this.getallen)) * 100
    var oef = [honderdtal + (oefA[0] * 10) + " + " + (oefA[1] * 10) + " = ", honderdtal + oefA[2] * 10]
    return oef
  }
  get HTminTb() {
    var oefA = _.sample(this.brug)
    var honderdtal = Number(_.sample(this.getallen)) * 100
    var oef = [honderdtal + (oefA[2] * 10) + " - " + (oefA[1] * 10) + " = ", honderdtal + oefA[0] * 10]
    return oef
  }
  get HTplusHTb() {
    var oefA = _.sample(this.brug)
    var oefB = _.sample(this.tot9)

    var oef = [(oefA[0] + (oefB[0] * 10)) * 10 + " + " + (oefA[1] + (oefB[1] * 10)) * 10 + " = ", (oefA[2] + (oefB[2] * 10)) * 10]
    return oef

  }
  get HTminHTb() {
    var oefA = _.sample(this.brug)
    var oefB = _.sample(this.tot9)

    var oef = [(oefA[2] + (oefB[2] * 10)) * 10 + " - " + (oefA[1] + (oefB[1] * 10)) * 10 + " = ", (oefA[0] + (oefB[0] * 10)) * 10]
    return oef

  }
  get HTplusTE() {
    var H = _.sample(this.getallen) * 100
    var T_oef = _.sample(this.tot9)
    var E = _.sample(this.getallen)

    var oef = [H + (T_oef[0] * 10) + " + " + ((T_oef[1] * 10) + E) + " = ", H + E + (T_oef[2] * 10)]
    return oef

  }

  get HTminTE() {
    var H = _.sample(this.getallen) * 100
    var T_oef = _.sample(this.tot9)
    var E = _.sample(this.getallen)

    var oef = [H + (T_oef[2] * 10) + " - " + ((T_oef[1] * 10) + E) + " = ", H - E + (T_oef[0] * 10)]
    return oef

  }


  get HTEplusE() {
    var H = _.sample(this.getallen) * 100
    var E_oef = _.sample(this.tot9)
    var T = _.sample(this.getallen) * 10

    var oef = [H + (E_oef[0]) + T + " + " + (E_oef[1]) + " = ", H + T + (E_oef[2])]
    return oef

  }
  get HTEminE() {
    var H = _.sample(this.getallen) * 100
    var E_oef = _.sample(this.tot9)
    var T = _.sample(this.getallen) * 10

    var oef = [H + (E_oef[2]) + T + " - " + (E_oef[1]) + " = ", H + T + (E_oef[0])]
    return oef

  }

  get HTEplusT() {
    var H = _.sample(this.getallen) * 100
    var T_oef = _.sample(this.tot9)
    var E = _.sample(this.getallen)

    var oef = [H + (T_oef[0] * 10) + E + " + " + (T_oef[1] * 10) + " = ", H + E + (T_oef[2] * 10)]
    return oef

  }
  get HTEminT() {
    var H = _.sample(this.getallen) * 100
    var T_oef = _.sample(this.tot9)
    var E = _.sample(this.getallen)

    var oef = [H + (T_oef[2] * 10) + E + " - " + (T_oef[1] * 10) + " = ", H + E + (T_oef[0] * 10)]
    return oef

  }

  get HminE() {
    var H = _.sample(this.getallen) * 100
    var E = _.sample(this.getallen)

    var oef = [H + " - " + E + " = ", H - E]
    return oef

  }

  get HminT() {
    var H = _.sample(this.getallen) * 100
    var T = _.sample(this.getallen) * 10

    var oef = [H + " - " + T + " = ", H - T]
    return oef

  }
  get DminH() {
    var H = _.sample(this.getallen) * 100

    var oef = [1000 + " - " + H + " = ", 1000 - H]
    return oef

  }
  get DminT() {
    var H = _.sample(this.getallen) * 10

    var oef = [1000 + " - " + H + " = ", 1000 - H]
    return oef

  }

  get DminE() {
    var H = _.sample(this.getallen)

    var oef = [1000 + " - " + H + " = ", 1000 - H]
    return oef

  }

  get HminTE() {
    var H = _.sample(this.getallen) * 100
    var T = _.sample(this.getallen) * 10
    var E = _.sample(this.getallen)


    var oef = [H + " - " + (T + E) + " = ", H - T - E]
    return oef

  }
  get DminHT() {
    var H = _.sample(this.getallen) * 100
    var T = _.sample(this.getallen) * 10



    var oef = [1000 + " - " + (T + H) + " = ", 1000 - H - T]
    return oef

  }








  getOefening(oefensoort) {
    var oef = this[oefensoort]
    return oef
  }
}
