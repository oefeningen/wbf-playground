import {
  mapState,
  mapGetters,
  mapActions
} from 'vuex'


export default {
  methods: {


  },
  computed: {


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
    leegKader: require("components/vaste_layout/leegKader4").default
  }
}
