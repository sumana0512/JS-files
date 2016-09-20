// JavaScript Document
function sumOfOddNumbers(numbers){
	var sum = 0;
	for(i=0; i< numbers.length; i++){
		if((numbers[i]%2) !== 0)
			sum += numbers[i];
	}
	return sum;
};
var sum = sumOfOddNumbers([1,2,3,4,5,6,7,8]);
console.log(sum);
module.exports = sumOfOddNumbers