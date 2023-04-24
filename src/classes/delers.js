import _ from "lodash"

export default class delerszoeken {
  constructor() {
      
      this.delers= new Object()
      this.delers.delers1 = []
      this.delers.delers2 = []
      this.delers.delers3 = []
      this.delers.delers4 = []
      this.delers.delers5 = []
      this.delers.delers6 = []
      this.delers.delers7 = []
      this.delers.delers8 = []
      this.delers.delers9 = []
      this.delers.delers10 = []
      this.delers.delers11= []
      this.delers.delers12 = []
      this.delers.delers13= []

      this.veelvouden = new Object()


      for(let i = 1;i<100;i++){
        let d = this.berekenDelers(i)
        this.delers["delers"+d.length].push({deeltal:i, delers:d})
      }
      console.log("CLASSINIT","delers berekenen")
    }
    
    berekenDelers(getal){
        var delersVanGetal = []
        for(var i=1;i<=getal;i++){
            if(getal%i == 0){
                delersVanGetal.push(i)
                if(!this.veelvouden["veelvoud_"+i]){
                    this.veelvouden["veelvoud_"+i] = [getal]
                }else{
                    this.veelvouden["veelvoud_"+i].push(getal)
                }
            }
        }
        return delersVanGetal
    }
    getDelerOefening(aantalopgave){
        console.log("DELERS","opvragen van " +aantalopgave)
        //onsole.log("DELERS","opvragen van " +this.delers)
        
         return _.sample(this.delers[aantalopgave])    
        //return {deeltal:22, delers:[2,3]}
    }
    get delers3(){
        return _.sample(this.delers.delers3)
    }
    

}