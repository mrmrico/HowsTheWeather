var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {

    this.title = new TitleView(); // child view

    this.input = new InputView({
      collection: this.collection
    });

    this.list = new ListView({
      collection: this.collection
    });

    this.render();
  },

  render: function() {

    this.$el.append([
      this.title.$el,    // appends title view, which has its own $el
      this.input.$el,
      this.list.$el
    ]);

    return this;
  }

});

// the view will have this template

/*
  $el : represents jQuery elt for view
        in truth, you don't even need the bling

  initialize : a fn that takes options that will attach automatically, meaning
               don't need to explicitly set the options to link the collection
              - useful to add child views
              - set data events
              - run render

              NOTE: the init function runs when the constructor is called,
                    ie. when the view is initialized (actually created)

              NOTE: data events on view elements should correspond to user
                    interactions

              views can be children of app, and they get the connection to collection by
              being children of the parent app, which has the collection stored at initialization

  render : this fn actually builds the DOM node, that is,
           it appends the children, etc


*/
