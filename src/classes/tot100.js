import _ from "lodash"

export default class rekensomtot100 {
  constructor() {
    console.log("CLASSINIT", "optellen en aftrekkingen tot 20")
    this.totEnMet10 = []
    this.tot10 = []
    this.tot9 = []
    this.tot8 = []
    this.brug = []
    for (let i = 1; i < 10; i++) {
      for (let j = 1; j < 10; j++) {
        if ((i + j) <= 10) {
          this.tot10.push([i, j, i + j])
          this.totEnMet10.push([i, j, i + j])
          if ((i + j) <= 9) {
            this.tot9.push([i, j, i + j])
            if ((i + j) <= 8) {
              this.tot8.push([i, j, i + j])
            }
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
    var oefB = _.sample(this.tot8)

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
    var oefB = _.sample(this.tot8)

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

  getOefening(oefensoort) {
    var oef = this[oefensoort]
    return oef
  }
}
