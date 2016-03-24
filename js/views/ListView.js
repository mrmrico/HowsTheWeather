var ListView = Backbone.View.extend({

  id: 'list', // don't need to be explicit about elt's tag since default it <div>

  initialize: function() {
    this.listenTo(this.collection, 'add', this.render);
    // listenTo is an event to moniter a change in the models
    // there is a whole catalog of events that you can listen to
    //this.collection.on('add', this.render, this);
  },

  render: function() {

    this.$el.empty();  // need to clear every time so that on updates, it will rerender
                       // properly without duplicates
                       // NOTE react solves this problem since creates a VIRTUAL DOM so
                       // it does not need to rerender elts already there

    // interate over collection and intialize an entry view object
    this.entries = this.collection.models.map(function(model) {
      return new EntryView({
        model: model
      });
    });

    // iterate ov er the entries and convert the to jquery elements
    var $els = this.entries.map(function(entry) {
      return entry.$el;
    });

    // append
    this.$el.append($els);

    return this;
  }

});
