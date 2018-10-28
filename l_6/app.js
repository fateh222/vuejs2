new Vue({
  el: '#our-app',
  data: {
    message: 'Tutorial - 6 (KeyBoard Events - Keypress, Keyup, Keydown)',
    infomation: {
      first_name: 'Fateh',
      last_name: 'Singh',
      profession: 'Software Engineer'
    }
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
