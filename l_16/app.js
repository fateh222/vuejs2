var myapp_1 = new Vue({
  el: '#our-app-1',
  data: {
    message: 'Tutorial - 16 (Setter and Getter functions of computed property)',
    firstname: "",
    lastname: "",
    channelname: 'OWT'
  },
  computed: {
    fullname: {
      get: function() {
        return this.firstname+" "+this.lastname;
      },
      set: function() {
        return this.channelname = "Updated OWT";
      }
    }
  }
});
