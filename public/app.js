window.onload = function() {
  //makes the request for an API we wish to use.
  var url = 'https://restcountries.eu/rest/v1';
  var request = new XMLHttpRequest();

  // console.log(request);
  //we're passing our varibale in here to our get request.
  request.open("GET", url);
  request.onload = function() {
    //200 stands for the successful http transaction
    if (request.status === 200) {
      console.log("got the data");
      var jsonString = request.responseText;
      var countries = JSON.parse( jsonString );
      var country = countries[0];
      console.log(country);
      console.log(country.name);
      console.log(request);
    }

  // TODO: - Make a select drop down with all the countries.
  var countryList = document.getElementById('countries-list');
  var countryInfo = document.getElementById( 'countryinfo' );


  for (var country of countries) {
    var option = document.createElement("option");
    option.innerText = country.name;
    countryList.appendChild( option );
  }

// TODO: - Display the country name, population, capital city of the country that is selected.
  var displayCountryInfo = function(event) {
    for (var country of countries) {
      if (event.target.value === country.name) {

        var h3 = document.createElement( "h3" );
        h3.innerText = country.name;
        countryInfo.appendChild( h3 );

        var liCapital = document.createElement( "li" );
        liCapital.innerText = country.capital;
        countryInfo.appendChild( liCapital );

        var liPopulation = document.createElement( "li" );
        liPopulation.innerText = country.population;
        countryInfo.appendChild( liPopulation );

      }
    }
  };

  countryList.onchange = displayCountryInfo;

};
//this actually sets up the request. We pass in null because we're not actually sending any information. This methods requires the null for backwards compatibility reasons...
request.send(null);

  // TODO: - Persist the last country that was selected


  // TODO: - Style

  //Further: Add new functionality. eg
  // TODO: - Show bordering countries and their statistics.

  // TODO: - Filter select to only show countries in a region, sub-region.
};
