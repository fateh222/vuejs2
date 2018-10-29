new Vue({
  el: '#our-app',
  data: {
    message: 'Tutorial - 6 (KeyBoard Events - Keypress, Keyup, Keydown)'
  },
  methods: {
    keypressfunc: function(event) {
      console.log(event.key);
    },
    keypressfunc: function(event) {
      console.log("Key Up ....");
    },
    keydownfunc: function(event) {
      console.log(event);
    }
  }
});
