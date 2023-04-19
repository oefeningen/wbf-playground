import {
  Screen
} from "quasar";
import {
  mapActions
} from "vuex"


export default {
  data() {
    return {
      scrolled2top: true
    };
  },
  methods: {
    ...mapActions("besturing", ["ResetAlles"]),
    Scrollen() {
      if (this.scrolled2top) {
        this.$refs.scrollArea.setScrollPosition(1200, 600);
      } else {
        this.$refs.scrollArea.setScrollPosition(0, 600);
      }
      this.scrolled2top = !this.scrolled2top;
    },
    wisselWerkblad(werkblad) {
      console.log("werkblad", werkblad)
    }
  },
  computed: {
    hoogteStijl() {
      return "height:" + this.$q.screen.height + "px";
    }
  },
  mounted() {
    this.ResetAlles()

  },


}
