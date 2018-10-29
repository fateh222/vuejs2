new Vue({
  el: '#our-app',
  data: {
    message: 'Tutorial - 8 (Key Modifiers - enter, alt, ctrl, keyCode, delete, space)',
    counter: 0
  },
  methods: {
    keypressfunc: function(event) {
      console.log("Event is running .....");
    },
  }
});
