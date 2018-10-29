new Vue({
  el: '#our-app',
  data: {
    message: 'Tutorial - 5 (Event Handling - Mouseover, Mouseout, Mousemove)',
    x: 0,
    y: 0,
    txtOver: "Mouseover",
    txtOut: "Mouseout"

  },
  methods: {
    movefunc: function(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    overfunc: function() {
      this.txtOver = " this is new text";
    },
    outfunc: function() {
      this.txtOut = "after mouseout"
    }
  }
});
