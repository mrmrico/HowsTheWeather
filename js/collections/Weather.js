var Weather = Backbone.Collection.extend({
  // what is the shape of the collection
    // its simply the shape of the models it holds
  model: WeatherEntry,  // simply store the constructor to link the model

  addWeatherEntry: function(zipcode) {
    // you do the request inside the collection, not on the model
    $.get(
      'http://api.openweathermap.org/data/2.5/weather?zip=' + zipcode + ',us&units=imperial&APPID=5c680e5d8c8f29befb9f1c239dfae90b',
      function(data) {

        this.add({   // the collection already knows what you want to add, so just pass the data to it
            zipcode: zipcode,
            city: data.name,
            weather: data.main.temp.toFixed(2)
          });

      }.bind(this)
    );

  }

});
