new Vue({
  el: '#our-app',
  data: {
    message: 'Tutorial - 11 (Dynamic CSS classes concept)',
    isActive: false
  },
  methods: {
    toggleClass: function() {
      this.isActive = !this.isActive
    }
  }
});
