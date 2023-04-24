import _ from "lodash"

export default class Tafeloefening {
  constructor(geselecteerdeTafels) {
    console.log("dit zijn de geselecteerdetafels ")
    console.log(geselecteerdeTafels)

    this.geselecteerdeTafels = geselecteerdeTafels
    if (this.geselecteerdeTafels == undefined) {
      this.geselecteerdeTafels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
    this.tafelArray = []
    for (let j = 0; j < this.geselecteerdeTafels.length; j++) {
      for (let i = 0; i <= 10; i++) {
        this.tafelArray.push([i, this.geselecteerdeTafels[j], (i * this.geselecteerdeTafels[j])])
      }
    }

  }
  get maaloefening() {
    var oefA = _.sample(this.tafelArray)
    return [oefA[0] + " x " + oefA[1] + " = ", oefA[2]]

  }
  get deeloefening() {
    var oefA = _.sample(this.tafelArray)
    return [oefA[2] + " : " + oefA[1] + " = ", oefA[0]]
  }

  getReeks(bewerkingen, lengte) {
    var reeks = []
    for (var i = 0; i < lengte; i++) {
      if (_.sample(bewerkingen) == ":") {
        reeks.push(this.deeloefening)
      } else {
        reeks.push(this.maaloefening)
      }
    }
    return reeks
  }

}
