var myapp_1 = new Vue({
  el: '#our-app-1',
  data: {
    message: 'Tutorial - 17 (Concept of Reference in VueJs i.e $refs)',
  },
  methods: {
    btnSubmit: function() {
      console.log(this.$refs);
      console.log("Name: "+this.$refs.txtname.value);
      console.log("Email: "+this.$refs.txtemail.value);
      console.log("Email: "+this.$refs.para.innerHTML);
    }
  }
});
