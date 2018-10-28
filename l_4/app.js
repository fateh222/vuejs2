new Vue({
  el: '#our-app',
  data: {
    message: 'Tutorial - 4 (Event Handling - click and Double Click events)',
    infomation: {
      first_name: 'Fateh',
      last_name: 'Singh',
      profession: 'Software Engineer'
    },
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
