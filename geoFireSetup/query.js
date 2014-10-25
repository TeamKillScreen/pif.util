var Firebase = require('firebase');
var GeoFire = require('geofire');

var pifFirebase = new Firebase("https://pif.firebaseio.com/geoLocationData");

var geoFire = new GeoFire(pifFirebase);

var geoQuery = geoFire.query({
  center: [53.476730522494556,-2.25376319885253], //MOSI
  radius: 3 //kilometers
});

geoQuery.on("key_entered", function(key, location, distance) {
  console.log("Partner " + key + " found at " + location + " (" + distance + " km away)");
});

//