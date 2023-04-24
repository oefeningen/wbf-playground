import _ from "lodash"

export default class OptellenEnAftrekkenBasis {
  constructor() {
      console.log("optellen en aftrekkingen")
      this.totEnMet10 = []
      this.tot10 = []
      this.tot9 = []
      this.brug = []
      for(let i=1;i<10;i++) {
        for (let j = 1; j < 10; j++) {
          if((i+j)<10){
            this.tot10.push([i,j,i+j])
            this.totEnMet10.push([i,j,i+j])
            if((i+j)<9){
              this.tot9.push([i,j,i+j])
            }
          }else{
            if((i+j) == 10){
              this.totEnMet10.push([i,j,i+j])
            }else {
              this.brug.push([i, j, i + j])
            }
          }

        }
      }

    }
    get E_E_Brug(){
      var oefA = _.sample(this.brug)
      return oefA

    }
    get TE_E_ZB_tot20(){
      var oefA = _.sample(this.totEnMet10)
      return [(oefA[0]+10),oefA[1], (Number(oefA[2])+10)]
    }

    get TE_TE_ZB(){
    var oefA = _.sample(this.tot10)
    var oefB = _.sample(this.tot10)
    return [(oefA[0]*10)+oefB[0],(oefA[1]*10)+oefB[1], (oefA[2]*10)+oefB[2]]
  }

  get TE_E_ZB(){
    var oefA = _.sample(this.tot10)
    var oefB = _.sample(this.totEnMet10)
    return [(oefA[0]*10)+oefB[0],oefB[1], (oefA[0]*10)*oefB[2]]
  }

  get TE_E_B(){
    var oefA = _.sample(this.tot9)
    var oefB = _.sample(this.brug)
    return [(oefA[0]*10)+oefB[0],oefB[1], (oefA[0]*10)*oefB[2]]
  }

  get TE_TE_B(){
    var oefA = _.sample(this.tot9)
    var oefB = _.sample(this.brug)
    return [(oefA[0]*10)+oefB[0],(oefA[1]*10)+oefB[1], (oefA[2]*10)+oefB[2]]
  }


  get HTE_HTE_ZB(){
    var oefA = _.sample(this.tot10)
    var oefB = _.sample(this.tot10)
    var oefH = _.sample(this.tot9)
    return [(oefH[0]*100)+(oefA[0]*10)+oefB[0],(oefH[1]*100)+(oefA[1]*10)+oefB[1],(oefH[2]*100)+(oefA[2]*10)+oefB[2]]
  }

  get HTE_HTE_BB(){
    var oefA = _.sample(this.brug)
    var oefB = _.sample(this.brug)
    var oefH = _.sample(this.tot9)
    return [(oefH[0]*100)+(oefA[0]*10)+oefB[0],(oefH[1]*100)+(oefA[1]*10)+oefB[1],(oefH[2]*100)+(oefA[2]*10)+oefB[2]]
  }

  get HTE_HTE_B(){
    var oefA = _.sample(this.tot10)
    var oefB = _.sample(this.tot10)

    var kans = _.random(2)
    var oefH = _.sample(this.tot10)
    console.log("bruglocatie = " +kans)
    if(kans == 1){

      oefA = _.sample(this.brug)
      oefH = _.sample(this.tot9)

    }else{
      oefB = _.sample(this.brug)

    }

    var oefH = _.sample(this.tot10)
    return [(oefH[0]*100)+(oefA[0]*10)+oefB[0],(oefH[1]*100)+(oefA[1]*10)+oefB[1],(oefH[2]*100)+(oefA[2]*10)+oefB[2]]
  }



  get DHTE_DHTE_ZB(){
    var oefA = _.sample(this.tot10)
    var oefB = _.sample(this.tot10)
    var oefH = _.sample(this.tot10)
    var oefD = _.sample(this.tot9)
    return [(oefD[0]*1000)+(oefH[0]*100)+(oefA[0]*10)+oefB[0],(oefD[1]*1000)+(oefH[1]*100)+(oefA[1]*10)+oefB[1],(oefD[2]*1000)+(oefH[2]*100)+(oefA[2]*10)+oefB[2]]
  }

  get DHTE_DHTE_BBB(){
    var oefA = _.sample(this.brug)
    var oefB = _.sample(this.brug)
    var oefH = _.sample(this.brug)
    var oefD = _.sample(this.tot9)
    return [(oefD[0]*1000)+(oefH[0]*100)+(oefA[0]*10)+oefB[0],(oefD[1]*1000)+(oefH[1]*100)+(oefA[1]*10)+oefB[1],(oefD[2]*1000)+(oefH[2]*100)+(oefA[2]*10)+oefB[2]]
  }

  get DHTE_DHTE_BB(){
    var oefA = _.sample(this.brug)
    var oefB = _.sample(this.brug)
    var oefH = _.sample(this.brug)
    var kans = _.random(3)

    console.log("bruglocatie = " +kans)
    if(kans == 1){

      oefA = _.sample(this.tot10)


    }else if(kans == 2){
      oefB = _.sample(this.tot10)

    }else{
      oefH = _.sample(this.tot10)

    }

    var oefD = _.sample(this.tot9)
    return [(oefD[0]*1000)+(oefH[0]*100)+(oefA[0]*10)+oefB[0],(oefD[1]*1000)+(oefH[1]*100)+(oefA[1]*10)+oefB[1],(oefD[2]*1000)+(oefH[2]*100)+(oefA[2]*10)+oefB[2]]
  }
  get DHTE_DHTE_B(){
    var oefA = _.sample(this.tot10)
    var oefB = _.sample(this.tot10)
    var oefH = _.sample(this.tot10)
    var kans = _.random(3)

    console.log("bruglocatie = " +kans)
    if(kans == 1){

      oefA = _.sample(this.brug)
      oefH = _.sample(this.tot9)

    }else if(kans == 2){
      oefB = _.sample(this.brug)
      oefA = _.sample(this.tot9)
    }else{
      oefH = _.sample(this.brug)

    }

    var oefD = _.sample(this.tot9)
    return [(oefD[0]*1000)+(oefH[0]*100)+(oefA[0]*10)+oefB[0],(oefD[1]*1000)+(oefH[1]*100)+(oefA[1]*10)+oefB[1],(oefD[2]*1000)+(oefH[2]*100)+(oefA[2]*10)+oefB[2]]
  }






/*
// retourneren
  [0]   bewerkingvoluit    2 + 3 =
  [1]   uitkomst          5
  [2]   bewerking         +
  [3]   oplossingswijze   [geen, cirkelrekenen, rekenvoordeel, ...]
  [3]   term2             3


*/


  getReeks(types,bewerkingen,aantal){
    console.log("reeksopgevraagd")
    let reeks = []
    for(let i=0;i<aantal;i++) {
      let oef = this[_.sample(types)]
      if(_.sample(bewerkingen) == "+"){
        reeks.push([oef[0] +  " + "+oef[1]+ " = ",oef[2]])
      }else{
        reeks.push([oef[2] +  " - "+oef[1]+ " = ",oef[0]])
      }
      console.log(oef)
    }
    return reeks
  }





}
