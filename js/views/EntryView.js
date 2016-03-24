var EntryView = Backbone.View.extend({

  className: 'entry',

  template: _.template('<p>It is currently <%= weather %><%= unit %> in <%= city %>.</p>'),

  events: {
    'click': 'clickAction'
  },

  initialize: function() {

    this.listenTo(this.model, 'change', this.render);
    this.render();

  },

  render: function() {
    // underscore has a template function
    // define the template as the html structure for the view
    // look at underscore documents for the syntax for the templates
    // the _ template function returns a function
    var entry = this.template({  // note that this is defined above in the template property
      weather: this.model.get('weather'),  // get the data out of the model and use
      unit: this.model.get('unit'),        // it to populate the data to be rendered
      city: this.model.get('city')         // on the DOM
    });

    this.$el.html(entry);

  },

  clickAction: function() {

    this.model.toggleUnit();

  }

});
