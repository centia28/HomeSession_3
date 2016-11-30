/*Once you are done, create another prototype(d) function called search, it will take just one argument which 
is the number you are to find. The search function should return an object, which contains

.count, the number of times you function iterated to find the index of the number in question
.index, the index of the number in question
.length, the length of the original array
The .search function should implement the binary search algorithm, each time you iterate, you should increase 
the count, to test how efficient your implementation is.
*/

//Generate array
function generateArray(end,step){
	var res = [];
	for (var i = step; i <= end; i+=step) {
		res.push(i);
	}
	return res;
}

//toTwenty()` returns `[1, 2, 3 . . . 20]
Array.prototype.toTwenty = function(){
	return generateArray(20,1);
};

//toForty() returns [2, 4, 6 . . . 40]
Array.prototype.toForty = function(){
	return generateArray(40,2);
};

//toOneThousand() returns [10, 20, 30 . . . 1000]
Array.prototype.toOneThousand = function(){
	return generateArray(1000,10);
};

//The search function using binary search
Array.prototype.search = function(num){
	var first = 0;
	var last = this.length-1;
	var found = false;
	var cnt=0,ind=-1;

	while (first<=last && !found) {
		var midpoint = Math.floor((first+last)/2);
		if(this[midpoint] == num){
			found = true;
			ind = midpoint;
		} else {
			if (num < this[midpoint]) {
				last = midpoint - 1;
			} else {
				first = midpoint + 1
			}
			cnt++;
		}
	}
	return {count:cnt,index:ind,length:this.length};
};