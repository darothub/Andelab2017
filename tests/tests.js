'use strict';


var chai = require('jasmine');
// var assert = chai.assert;
// var expect = chai.expect;
// var should = chai.should();
var myApp = require('../app/library.js');

describe('Min-Max Numbers in a List: ', function () {

  describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

    it('should return [1,4] for [1, 2, 3 , 4]', function () {
      expect(findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
    });

    it('should return [4, 6] for [6, 4]', function () {
      expect(findMinMax([6, 4])).toEqual([4, 6]);
    });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
      });

    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [4] for [4, 4, 4, 4]', function () {
        expect(findMinMax([4, 4, 4, 4])).toEqual([4]);
      });

    });
    
    describe('should return error for non array', function(){
      it('should return invalid argument type for non array', function(){
        expect(findMinMax("string").toEqual("invalid argument type"))
      });
      
    });

     describe('should return undefined if called with no argument', function(){
      it('should return undefined', function(){
        expect(findMinMax().toEqual("invalid"))
      });
      
    });

});