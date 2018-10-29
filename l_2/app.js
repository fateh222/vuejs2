new Vue({
  el: '#our-app',
  data: {
    message: 'Tutorial - 2 (Methods)'
  },
  methods: {
    run: function(messge, name) {
      return 'I am running ' +messge+ ' - ' +  name;
    },
    welcome: function() {
      return 'Good Morning';
    },
    valueAcess: function() {
      return this.infomation.first_name + ' ' +this.infomation.last_name;
    }
  }
});
