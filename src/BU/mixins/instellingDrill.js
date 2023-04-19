import {
  mapState,
  mapGetters,
  mapActions
} from 'vuex'
import _ from "lodash"


export default {
  methods: {
    // ...mapActions("besturing", ["setGeselecteerdeOefening", "saveMainSettings", "triggerShuffleOefeningen", "RekenAllesUit", "ResetAlles"]),

  },
  computed: {
    ...mapGetters("besturing", ["getSaveDrillSettingsTrigger", "getTriggerShuffleOefeningen"])

  },
  watch: {
    getSaveDrillSettingsTrigger(value) {
      if (value) {
        this.saveSettings()
      }
    },

  }


  ,


}
