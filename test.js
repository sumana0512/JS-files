// JavaScript Document
const Code = require('code');
const expect = Code.expect;
      sumOfOdds = require('./odd.js');
	  describe('An Array of Elements',function () {
      it('Should return sumOfOdds',function () {
		  expect(sumOfOdds([1,3,5])).to.be.equal(9);
});
	it('Should return a number',function(){
		expect(typeof sumOfOdds([1,2,3,4,5,6,7,8])).to.be.equal("number");

	});
});