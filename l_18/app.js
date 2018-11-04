Vue.directive('custom-owt', {
  bind: function(el, binding, vnode) {
    //console.log(el);  // dom element
     el.style.backgroundColor = "blue"; // style="background-color:"
     el.style.fontSize = "20px";
     el.style.color = "green";
     el.title = "Title is now updated";
     //console.log(binding);  // properties of directive
     //console.log("Value = "+binding.value);
     console.log("Name: "+binding.value.name);
  },
  update: function(object1,object2){
    //console.log("Running");
    var data = JSON.parse(JSON.stringify(object2));
    //console.log(data);
  },
  unbind: function() {

  }
});
var myapp_1 = new Vue({
  el: '#our-app-1',
  data: {
    message: 'Tutorial - 18 (Vuejs Custom Directives)',
    custom: "this is custom directive call"
  },
  methods:{
      updateValue: function(){
        console.log("update...");
        this.message = "Value has been updated now."
      }
  }
});
