/**
	The count-and-say sequence is the sequence of integers with the first five terms as following:

	1.     1
	2.     11
	3.     21
	4.     1211
	5.     111221
	1 is read off as "one 1" or 11.
	11 is read off as "two 1s" or 21.
	21 is read off as "one 2, then one 1" or 1211.
	Given an integer n, generate the nth term of the count-and-say sequence.

	Note: Each term of the sequence of integers will be represented as a string.
 * @param {number} n
 * @return {string}
 */

var countAndSay = function(n) {
    if(n === 0) return;
    if(n === 1) return '1'
    var data = '1';
    for(var i = 2; i <= n; i++) {
    	var count = 1;
    	var text = data.split('')
    	var temp = ''
    	while(text.length > 0) {
    		var s = text.shift()
    		while(text[0] === s ) {
    			text.shift();
    			count++
    		}
    		temp += count + s
    		count = 1;
    	}
    	data = temp;
    	count = 1;
    }
    return data
};

console.log(countAndSay(1))