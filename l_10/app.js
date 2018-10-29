new Vue({
  el: '#our-app',
  data: {
    message: 'Tutorial - 10 (Concept of Computed Property)',
    character: "",
    firstname: "",
    lastname: "",
    meter: "",
    maths: 0,
    science: 0,
    english: 0
  },
  methods: {
    runme: function() {
      return "This is methods"
    }
  },
  computed: {
    fullname: function() {
      return this.firstname+ "  "+this.lastname;
    },
    convertToCentimeter: function() {
      return this.meter*100;
    },
    totalsubjectMarks: function() {
      return parseInt(this.maths)  + parseInt(this.science) +  parseInt(this.english)
    }
  }
});
