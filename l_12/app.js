new Vue({
  el: '#our-app',
  data: {
    message: 'Tutorial - 12 (v-if, v-else, v-elseif, v-show)',
    isActive: false,
    count: 0
  },
  methods: {
    toggleClass: function() {
      this.isActive = !this.isActive
    },
    incrementCountValue: function() {
      this.count++
    }
  }
});
