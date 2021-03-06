'use strict';
var assert = require('assert');

//mocha test cases

//sample test case from mocha to ensure test system is working
describe('Mocha', function() {
  describe('#sample()', function() {
    it('should pass (sample test)', function() {
      assert([1, 2, 3].indexOf(4), -1);
    });
  });
});

//test math in function distance(lat1, lng1, lat2, lng2)
describe('Math', function() {
  describe('#distance()', function() {
    it('Should return the expected radians', function() {
      //deg2rad = deg * (Math.PI/180)
      assert(180*Math.PI/180, Math.PI);
    });
    it('Should return the expected square', function() {
      //square(x) = Math.pow(x, 2)
      assert(Math.pow(4, 2), 16);
    });
  });
});

//test lat long in function search() and parks()
describe('Coordinates', function() {
  describe('#search() and #parks()', function() {
    it('Should return the expected lat lng', function() {
      //test lat long for localStorage format
      let location = {lat: 41.834748, lng:  -87.626781};
      let latitude = 41.834748;
      let longitude = -87.626781;
      assert(location, {lat: latitude, lng: longitude});
    });
  });
});
