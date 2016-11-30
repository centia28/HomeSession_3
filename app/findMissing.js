function findMissing(arr1,arr2){
	if(arr1.length !== arr2.length){
		if(arr2.length > 1){
			var found = false;
			var i = 0;
			while(i < arr2.length){
				if(arr2[i] !== arr1[i]){
					return arr2[i];
				}
				i++;
			}
		} else {
			if(arr2.length !== 0){
				return arr2[0];
			}
			return 0;
		}
	} else {
		return 0;
	}
}

module.exports=findMissing;