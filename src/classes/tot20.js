import _ from "lodash"

export default class rekensomtot20 {
  constructor() {
    console.log("CLASSINIT", "optellen en aftrekkingen tot 20")
    this.totEnMet10 = []
    this.tot10 = []
    this.tot9 = []
    this.brug = []
    for (let i = 1; i < 10; i++) {
      for (let j = 1; j < 10; j++) {
        if ((i + j) < 10) {
          this.tot10.push([i, j, i + j])
          this.totEnMet10.push([i, j, i + j])
          if ((i + j) < 9) {
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
    var oef = [Number(oefA[2]) + Number(10) + " - " + (Number(oefA[0]) + Number(10)) + " = ", oefA[1]]
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
  get samenstellenTot20plus() {
    var termen = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    var kans = [1, 2]
    var term1 = Number(_.sample(termen))
    if (_.sample(kans) == 1) {
      return ["10 + " + term1 + " = ", 10 + term1]
    } else {
      return [term1 + " + 10 = ", 10 + term1]
    }
  }
  get samenstellenTot20min() {
    var termen = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    var kans = [1, 2]
    var term1 = Number(_.sample(termen))
    if (_.sample(kans) == 1) {
      return [(10 + term1) + " - " + term1 + " = ", 10]
    } else {
      return [(term1 + 10) + " - 10 = ", term1]
    }
  }

  getOefening(oefensoort) {
    var oef = this[oefensoort]
    return oef
  }
}
