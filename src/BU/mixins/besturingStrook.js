import {
  mapState,
  mapGetters,
  mapActions
} from 'vuex'
import Vue from "vue"


export default {
  methods: {

    ...mapActions("besturing", ["setStrookOpties", "setUitrekenstatus"]),
    syncOpties(oefenopties) {
      this.OpgehaaldeOpties = JSON.parse(JSON.stringify(this.getOpties()))
      for (var i = 0; i < this.oefenopties.length; i++) {
        if (this.OpgehaaldeOpties[this.oefenopties[i]] || this.OpgehaaldeOpties[this.oefenopties[i]] == false) {
          Vue.set(this, this.oefenopties[i], this.OpgehaaldeOpties[this.oefenopties[i]])
        }
      }
    },
    pushOpties(oefenopties) {
      var LocaleOpties = {}
      for (var i = 0; i < oefenopties.length; i++) {
        Vue.set(LocaleOpties, oefenopties[i], this[oefenopties[i]])
      }
      this.setOpties(LocaleOpties)


    },




    setOpties(LocaleOpties) {
      var payload = {}
      // var parsedOptions = JSON.parse(JSON.justify(LocaleOpties))
      payload = {
        strookId: this.strookId,
        opties: LocaleOpties
      }
      this.setStrookOpties(payload)
    },
    setStartUitrekenen() {
      this.setUitrekenstatus({
        strookId: this.strookId,
        status: false
      })
      this.setUitrekenstatus({
        strookId: this.strookId,
        status: true
      })
    },
    uitrekenenFinished() {
      this.setUitrekenstatus({
        strookId: this.strookId,
        status: false
      })
    },
    setUitrekenenFinished() {
      this.setUitrekenstatus({
        strookId: this.strookId,
        status: false
      })

    },
    getOpties() {
      // return this.getOptiesByStrookId(this.strookId)
      return this.opties["opties_" + this.strookId]
    },
  },
  computed: {
    ...mapState("besturing", ["toonOplossing", "opties"]),
    ...mapGetters("besturing", [ /*"getOptiesByStrookId", */ "getUitrekenStatusByStrookId", "getToonTitelByStrookId"]),

    uitrekenstatus() {
      return this.getUitrekenStatusByStrookId(this.strookId)
    },
    toonTitel() {
      return this.getToonTitelByStrookId(this.strookId)
    }

  },
  watch: {
    uitrekenstatus(value) {
      if (value == true) {
        console.log("Strook" + this.strookId + ": uitrekenen() wordt aangeroepen.  Vergeet niet af te sluiten met uitrekenenFinished")
        this.uitrekenen()
      }
    },
  },
  props: ["strookId"],
  components: {
    leegKader: require("components/werkbladfabriek/vaste_layout/leegKader4").default
  },
  mounted() {
    if (this.uitrekenstatus == true) {
      this.uitrekenen()
    }
  }
}
