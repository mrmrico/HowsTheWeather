var TitleView = Backbone.View.extend({

  el: '<h1>', // wrapping this in brackets indicates that you want a NEW DOM node
              // note, this simply stores the tagname, its not the actual jQuery elt

  initialize: function() {
    this.render();          // call render, not to append, but to have it initialized
  },

  render: function() {
    this.$el.text('How\'s the weather?');
    return this;
  }

});
