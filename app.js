const app = Vue.createApp({

  data() {
    return {
      boxA: false,
      boxB: false,
      boxC: false,
      boxD: false,
    }
  },

  methods: {
    // Change each box (boxA, boxB, boxC, boxD) to toggle true/false based on if the bound @click event is activiated (toggles true the first time because initial data property is set to false)
    selectBox(box) {
      return box === 'A' ? this.boxA = !this.boxA 
      : box === 'B' ? this.boxB = !this.boxB
      : box === 'C' ? this.boxC = !this.boxC 
      : box === 'D' ? this.boxD = !this.boxD
      : null
    }
  },

  computed: {
    boxDClasses() {
      return {
        active: this.boxD,
      }
    }
  }

}).mount('#styling')