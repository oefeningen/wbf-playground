import {
  mapState,
  mapGetters,
  mapActions
} from 'vuex'
import _ from "lodash"


export default {
  methods: {
    ...mapActions("besturing", ["setGeselecteerdeOefening", "saveMainSettings", "triggerShuffleOefeningen", "RekenAllesUit", "ResetAlles"]),
    shuffleOefeningen() {
      console.log("ShuffleOefeningen")
      this.triggerShuffleOefeningen(false)

      if (this.geselecteerdeOefeningen.length > 0) {
        console.log("oefenshuffle", "er zijn " + this.geselecteerdeOefeningen.length + "oefenvormen geselecteerd")




        //geselecteerdeOefeningen

        for (var i = 1; i < 5; i++) {
          var oefSel = _.sample(this.geselecteerdeOefeningen)
          var payload = {
            strookId: i,
            oefening: oefSel.label
          }
          console.log("setShuffle", payload)
          this.setGeselecteerdeOefening(payload)

        }

        this.ResetAlles()
        this.RekenAllesUit()
      } else {
        this.$q.notify("Genereren kan niet!")
        this.$q.notify("Je hebt geen oefenvormen geselecteerd!")
        this.triggerShuffleOefeningen(false)
      }


    }
  },
  computed: {
    ...mapGetters("besturing", ["getSaveMainSettingsTrigger", "getTriggerShuffleOefeningen"])

  },
  watch: {
    getSaveMainSettingsTrigger(value) {
      if (value) {
        this.saveSettings()
      }
    },
    getTriggerShuffleOefeningen(value) {
      if (value) {
        this.shuffleOefeningen()
      }
    }


  },
  props: ["strookId"],

}
