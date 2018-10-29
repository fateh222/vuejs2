var myapp_2 = new Vue({
  el: '#our-app-2',
  data: {
    author: "Fateh Singh"
  },
  methods: {
    secondApp: function() {
      return 'This is second instance';
    }
  },
  computed: {
    fullname: function() {
      return this.author;
    }
  }
});

var myapp_1 = new Vue({
  el: '#our-app-1',
  data: {
    message: 'Tutorial - 14 (Concept Multiple Instances)',
    author: myapp_2.author
  },
  methods: {
    secondApp: function() {
      return 'This is first instance';
    },
    thirdApp: function() {
      return myapp_2.secondApp();
    },
    accessComputedApp2: function() {
      return myapp_2.fullname;
    }
  }
});
