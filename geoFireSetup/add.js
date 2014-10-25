var Firebase = require('firebase');
var GeoFire = require('geofire');

var pifFirebase = new Firebase("https://pif.firebaseio.com/geoLocationData");

var geoFire = new GeoFire(pifFirebase);

geoFire.set("11e2d3d9-cd1c-4a5c-9444-4358e4676046", [53.476905998569876,-2.23804950714111]).then(function() {
  console.log("Provided key has been added to GeoFire");
}, function(error) {
  console.log("Error: " + error);
});

geoFire.set("6c6ad09d-23d9-4ca1-8655-c18b513ecbb0", [53.486541923924705,-2.22776508331298]).then(function() {
  console.log("Provided key has been added to GeoFire");
}, function(error) {
  console.log("Error: " + error);
});

geoFire.set("2f49c10b-1a69-4b2e-8b44-269916923bfe", [53.49086016125709,-2.2437043190002]).then(function() {
  console.log("Provided key has been added to GeoFire");
}, function(error) {
  console.log("Error: " + error);
});