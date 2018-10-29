 // Component
Vue.component('owt', {
  template:`
    <div>
      <p> This is my first compnent with name owt name: {{ name }} - author: {{ author }}</p>
      <p>method1: {{ method1() }}</p>
      <p> computed1: {{ computed1 }}</p>
      <button @click="fireme">change name</button>
    </div>
    `,
  data: function() {
    return {
      name: "my Tutorial",
      author: 'fateh singh'
    }
  },
  methods: {
    method1: function() {
      return "method1 is running in vue component";
    },
    fireme: function() {
      return this.author="sunny";
    }
  },
  computed: {
    computed1: function() {
      return 'computed1 is runing in vue component'
    }
  }
});


 // First Instance
var myapp_1 = new Vue({
  el: '#our-app-1',
  data: {
    message: 'Tutorial - 15 (Components in vuejs)'
  }
});

// Second Instance
var myapp_2 = new Vue({
  el: '#our-app-2',
  data: {
    author: "Fateh Singh"
  }
});
