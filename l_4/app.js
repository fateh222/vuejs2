new Vue({
  el: '#our-app',
  data: {
    message: 'Tutorial - 4 (Event Handling - click and Double Click events)',
    counter: 0
  },
  methods: {
    increment: function(inc) {
      this.counter +=  inc ;
    },
    decrement: function(dec) {
      this.counter -=  dec ;
    }
  }
});
