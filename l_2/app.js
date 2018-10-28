new Vue({
  el: '#our-app',
  data: {
    message: 'Second Tutorial (Methods)',
    infomation: {
      first_name: 'Fateh',
      last_name: 'Singh',
      profession: 'Software Engineer'
    }
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
