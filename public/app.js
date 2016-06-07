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

    main();
  };
  //this actually sets up the request. We pass in null because we're not actually sending any information. This methods requires the null for backwards compatibility reasons...
  request.send(null);
};

function main () {

  // TODO: - Make a select drop down with all the countries,

  // TODO: - Display the country name, population, capital city of the country that is selected.

  // TODO: - Persist the last country that was selected

  // TODO: - Style

  //Further: Add new functionality. eg
  // TODO: - Show bordering countries and their statistics.

  // TODO: - Filter select to only show countries in a region, sub-region.
}
