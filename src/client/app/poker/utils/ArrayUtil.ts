import {ObjectUtil} from "./ObjectUtil";

/**
 * ...
 * @author Georgi Semerdjiev
 */
export class ArrayUtil {
	
	/**
	 * Shuffles the elements of the array and returns a new array with the suffled elemets.
	 * This method modifies the original array!
	 *
	 * @param	arr The array whose elements have to be shuffled.
	 *
	 * @return	A new aray with shuffled elements of the original array.
	 */
	public static shuffle<T>(arr:Array<T>):Array<T> {
		var l:number = arr.length;
		var i:number;
		var j:number;
		var temp:T;
		
		for (i = 0; i < l; i++) {
			j = Math.random() * l;
			temp = arr[j];
			arr[j] = arr[i];
			arr[i] = temp;
		}
		
		return arr;
	}
	
	/**
	 * Finds the first item in the given array which have a property 'propertyName' having value 'propertyValue'.
	 * This method does not modifie the original array!
	 *
	 * @param	arr The array on which the search will be executed
	 * @param	propertyName The name of the property to compare
	 * @param	propertyValue The searched value
	 * @param	fromIndex the index from where the search will starts
	 *
	 * @return	the first item matching the criteria, otherwise(no matching item) - null
	 */
    public static find<T>(arr: Array<T>, propertyName: string, propertyValue: any, fromIndex: number = 0, deepCompare: boolean = false): T {
		var l:number = arr.length;
        var i: number;
		
		if (deepCompare) {

			for (i = fromIndex; i < l; i++) {
				if (ObjectUtil.compareObjects((arr[i] as any)[propertyName], propertyValue)) {
					return arr[i];
				}
			}

		} else {

			for (i = fromIndex; i < l; i++) {
				if ((arr[i] as any)[propertyName] == propertyValue) {
					return arr[i];
				}
			}

		}
		
		return null;
	}
	
	/**
	 * Finds the item having the maximum value of 'propertyName'. If several are maximums the first one is returned.
	 * This method does not modifie the original array!
	 *
	 * @param	arr The array on which the search will be executed
	 * @param	propertyName The name of the property to compare
	 * @param	fromIndex the index from where the search will starts
	 * @param	toIndex the index from where the search will end. The item on this index is excluded!.
	 *
	 * @return	the item having maximum value for 'propertyName';
	 */
    public static findMax<T extends any>(arr: Array<T>, propertyName: string, fromIndex: number = 0, toIndex: number = Number.MIN_VALUE): T {
		var i:number;
		var currentMax:T = arr[fromIndex];
		
		toIndex = arr.length < toIndex ? arr.length : toIndex;
		
		if (fromIndex >= toIndex) {
			throw new RangeError("fromIndex(" + fromIndex + ") must be lower than toIndex(" + toIndex + ")");
		}
		
		for (i = fromIndex; i < toIndex; i++) {
			if (((arr[i] as any)[propertyName] as number) > (currentMax[propertyName] as number)) {
				currentMax = arr[i];
			}
		}
		
		return currentMax;
	}
	
	/**
	 * Finds the item having the minimum value of 'propertyName'. If several are minimums the first one is returned.
	 * This method does not modifie the original array!
	 *
	 * @param	arr The array on which the search will be executed
	 * @param	propertyName The name of the property to compare
	 * @param	fromIndex the index from where the search will starts
	 * @param	toIndex the index from where the search will end. The item on this index is excluded!.
	 *
	 * @return	the item having minimum value of 'propertyName'
	 */
	public static findMin<T extends any>(arr:Array<T>, propertyName:string, fromIndex:number = 0, toIndex:number = Number.MAX_VALUE):T {
		var i:number;
		var currentMin:T = arr[fromIndex];
		
		toIndex = arr.length < toIndex ? arr.length : toIndex;
		
		if (fromIndex >= toIndex) {
			throw new RangeError("fromIndex(" + fromIndex + ") must be lower than toIndex(" + toIndex + ")");
		}
		
		for (i = fromIndex; i < toIndex; i++) {
			if ((arr[i] as any)[propertyName] < currentMin[propertyName]) {
				currentMin = arr[i];
			}
		}
		
		return currentMin;
	}
	
	/**
	 * Finds the last item in the given array which have a property 'propertyName' having value 'propertyValue'.
	 * This method does not modifie the original array!
	 *
	 * @param	arr The array on which the search will be executed
	 * @param	propertyName The name of the property to compare
	 * @param	propertyValue The searched value
	 * @param	fromIndex the index from where the search will starts
	 *
	 * @return	the first item matching the criteria, otherwise(no matching item) - null
	 */
	public static findLast<T>(arr:Array<T>, propertyName:string, propertyValue:any, fromIndex:number = Number.MAX_VALUE):T {
		var l:number = arr.length < fromIndex ? arr.length : fromIndex;
		var i:number;
		
		for (i = l-1; i >= 0; i--) {
			if ((arr[i] as any)[propertyName] == propertyValue) {
				return arr[i];
			}
		}
		
		return null;
	}
	
	/**
	 * Finds and returns the index of the first item in the given array which have a property 'propertyName' having value 'propertyValue'. If no item is found returns -1.
	 * This method does not modifie the original array!
	 *
	 * @param	arr The array on which the search will be executed
	 * @param	propertyName The name of the property to compare
	 * @param	propertyValue The searched value
	 * @param	fromIndex the index from where the search will starts
	 *
	 * @return	the index of the first item matching the criteria, otherwise(no matching item) - -1
	 */
	public static findIndex<T>(arr:Array<T>, propertyName:string, propertyValue:any, fromIndex:number = 0):number {
		var l:number = arr.length;
		var i:number;
		
		for (i = fromIndex; i < l; i++) {
			if ((arr[i] as any)[propertyName] == propertyValue) {
				return i;
			}
		}
		
		return -1;
	}
	
	/**
	 * Finds and returns the index of the last item in the given array which have a property 'propertyName' having value 'propertyValue'. If no item is found returns -1.
	 * This method does not modifie the original array!
	 *
	 * @param	arr The array on which the search will be executed
	 * @param	propertyName The name of the property to compare
	 * @param	propertyValue The searched value
	 * @param	fromIndex the index from where the search will starts
	 *
	 * @return	the index of the first item matching the criteria, otherwise(no matching item) - -1
	 */
    public static findLastIndex<T>(arr: Array<T>, propertyName: string, propertyValue: any, fromIndex: number = Number.MAX_VALUE): number {
		var l:number = arr.length < fromIndex ? arr.length : fromIndex;
		var i:number;
		
		for (i = l-1; i >= 0; i--) {
			if ((arr[i] as any)[propertyName] == propertyValue) {
				return i;
			}
		}
		
		return -1;
	}
	
	/**
	 * Finds all items in the given array which have a property 'propertyName' having value 'propertyValue'.
	 * This method modifies the array!
	 *
	 * @param	arr The array on which the search will be executed
	 * @param	propertyName The name of the property to compare
	 * @param	propertyValue The searched value
	 * @param	fromIndex the index from where the search will starts
	 *
	 * @return	the array having all items matching the criteria, otherwise(no matching items) - empty array
	 */
	public static findMultiple<T>(arr:Array<T>, propertyName:string, propertyValue:any, fromIndex:number = 0):Array<T> {
		var returnArray:Array<T> = [];
		var l:number = arr.length;
		var i:number;
		
		for (i = fromIndex; i < l; i++) {
			if (arr[i] && (arr[i] as any)[propertyName] == propertyValue) {
				returnArray.push( arr[i] );
			}
		}
		
		return returnArray;
	}
	
	/**
	 * Finds indeces of all items in the given array which have a property 'propertyName' having value 'propertyValue'.
	 *
	 * @param	arr The array on which the search will be executed
	 * @param	propertyName The name of the property to compare
	 * @param	propertyValue The searched value
	 * @param	fromIndex the index from where the search will starts
	 *
	 * @return	the array with indeces of all items matching the criteria, otherwise(no matching items) - empty array
	 */
    public static findIndeces<T>(arr: Array<T>, propertyName: string, propertyValue: any, fromIndex: number = 0): Array<number> {
        var returnArray: Array<number> = [];
		var l:number = arr.length;
		var i:number;
		
		for (i = fromIndex; i < l; i++) {
			if ((arr[i] as any)[propertyName] == propertyValue) {
				returnArray.push( i );
			}
		}
		
		return returnArray;
	}
	
	/**
	 * Finds and removes the first item in the given array which have a property 'propertyName' having value 'propertyValue'.
	 * This method modifies the array!
	 *
	 * @param	arr The array on which the search will be executed
	 * @param	propertyName The name of the property to compare
	 * @param	propertyValue The searched value
	 *
	 * @return	the removed item matching the criteria, otherwise(no removed item) - null
	 */
	public static findAndRemove<T>(arr:Array<T>, propertyName:string, propertyValue:any):T {
		var l:number = arr.length;
		var i:number;
		
		for (i = 0; i < l; i++) {
			if ((arr[i] as any)[propertyName] == propertyValue) {
				return arr.splice(i, 1)[0];
			}
		}
		
		return null;
	}
	
	/**
	 * Finds and removes all items in the given array which have a property 'propertyName' having value 'propertyValue'
	 *
	 * @param	arr The array on which the search will be executed
	 * @param	propertyName The name of the property to compare
	 * @param	propertyValue The searched value
	 *
	 * @return	the array having all removed items matching the criteria, otherwise(no removed items) - empty array
	 */
	public static findAndRemoveMultiple<T>(arr:Array<T>, propertyName:string, propertyValue:any):Array<T> {
		var returnArray:Array<T> = [];
		var l:number = arr.length;
		var i:number;
		
		for (i = 0; i < l; i++) {
			if ((arr[i] as any)[propertyName] == propertyValue) {
				returnArray.push( arr.splice(i, 1)[0] );
				l--;
				i--;
			}
		}
		
		return returnArray;
	}
	
	/**
	 * Sums all 'propertyName' values on all elements of the array.
	 *
	 * @param	arr The target arrat 
	 * @param	propertyName The name of the property to summed
	 *
	 * @return	the sum of all values.
	 */
	public static sumProperies<T>(arr:Array<T>, propertyName:string):number {
		var result:number = 0;
		var l:number = arr.length;
		var i:number;
		
		for (i = 0; i < l; i++) {
			result += (arr[i] as any)[propertyName];
		}
		
		return result;
	}
	
	/**
	 * Creates a new indexed array. Each item of this array is equal to its index i.e. item[n] == n .
	 *
	 * @param	length number of items in the array
	 * @return	new indexed array.
	 */
    public static createIndexedArray(length: number): Array<number> {
        var returnArray: Array<number> = [];
		var i:number;
		
		for (i = 0; i < length; i++) {
			returnArray[i] = i;
		}
		
		return returnArray;
	}
	
	
	/**
	 * Creates a new array with duplicate values and a given lenght. Each value of the array wll be the same.
	 *
	 * @param	length number of items in the array
	 * @param	value the vlaue which each item of the array will have
	 * @return	new array.
	 */
	public static createArrayOfDuplicates<T>(length:number, value:T):Array<T> {
		var returnArray:Array<T> = [];
		var i:number;
		
		for (i = 0; i < length; i++) {
			returnArray[i] = value;
		}
		
		return returnArray;
	}
	
	/**
	 * Creates a union of 2 arrays. If some of the element of the arrays are equal only one copy of this elements is present in the new union array.
	 * This method does not modifie the original arrays!
	 *
	 * @param	arr1 The first array to be united.
	 * @param	arr2 The second array to be united.
	 *
	 * @return An array representing an union of the original two array. Each item in the union array is present only once.
	 */
	public static union<T>(arr1:Array<T>, arr2:Array<T>):Array<T> {
		var returnArray:Array<T> = arr2.concat();
		var l:number = arr1.length;
		var i:number;
		var item:T;
		
		for (i = 0; i < l; i++) {
			item = arr1[i];
			
			//if (arr2.indexOf(item) == -1) {		// faster, but will not remove same items in arr1
			if (returnArray.indexOf(item) == -1) {	// slower, but guarantees that there will be only one copy of each item in the union array.
				returnArray.push(item)
			}
		}
		
		return returnArray;
	}
	/**
	 * Creates a section of 2 arrays. If multiple equal elements are present sevreal times in both array ther resultinga rray contains the minimum nubers of concurreces.
	 * This method does not modifie the original arrays!
	 *
	 * @param	arr1 The first array be sectioned.
	 * @param	arr2 The second array to be sectioned.
	 *
	 * @return An array representing an section of the original two array.
	 */
	public static section<T>(arr1:Array<T>, arr2:Array<T>):Array<T> {
		var returnArray:Array<T> = [];
		var l:number;
		var i:number;
		var item:T;
		var index:number;
		
		var short:Array<T>;
		var long:Array<T>;
		
		if (arr1.length < arr2.length) {
			short = arr1;
			long = arr2.concat();
		} else {
			short = arr2;
			long = arr1.concat();
		}
		
		l = short.length;
		
		for (i = 0; i < l; i++) {
			item = short[i];
			index = long.indexOf(item);
			
			if (index != -1) {	// slower, but guarantees that there will be only one copy of each item in the union array.
				returnArray.push(item)
				long.splice(index, 0);
			}
		}
		
		return returnArray;
	}
	
	/**
	 * Checks if two arrays have the same elements. If the strict atrribute is true then the elements have to be on the same indeces (arr1[i] == arr2[i]).
	 *
	 * @param	arr1	The first array
	 * @param	arr2	The second array
	 * @param	strict	Do the indeces of the elements have to be the same (true), or the arrays may have the same elements but in different order (false).
	 * @return
	 */
	public static parityCheck<T>(arr1:Array<T>, arr2:Array<T>, strict:Boolean = false):Boolean {
		var l:number = arr1.length;
		var i:number;
		
		if (l != arr2.length) return false; 	//if the two arrays have differet lenghts they are definitely different. l is the length of arr1
		
		if (strict) {							// if we are doing strict or not strict check we will be using slightly different loops.
			for (i = 0; i < l; i++) {
				if (arr1[i] != arr2[i]) return false;
			}
			
			return true;
			
		} else {
			for (i = 0; i < l; i++) {
				if ( arr2.indexOf( arr1[i] ) == -1 ) return false;
			}
			
			return true;
		}
	}
	
	/**
	 * Creates an array having the values of the 'popertyName' field of each item in the array.
	 * This method does not modifie the original array!
	 *
	 * @param	arr	The target array from where the values will be extracted.
	 * @param	popertyName	The name of the property which have to be extracted
	 *
	 * @return	An array having the values of the 'popertyName' field of each item in the array.
	 */
	public static extractValues<T>(arr:Array<T>, popertyName:string):Array<any> {
		var returnArray:Array<any> = [];
		var l:number = arr.length;
		var i:number;
		
		for (i = 0; i < l; i++) {
			returnArray[i] = (arr[i] as any)[popertyName];
		}
		
		
		return returnArray;
	}
	
	//TODO: write description
	/**
	 * @param	arr	The target array from where the values will be extracted.
	 * @param	popertyName	The name of the property which have to be extracted
	 *
	 * @return	An array having the values of the 'popertyName' field of each item in the array.
	 */
	public static sumValues<T>(arr:Array<T>, popertyName:string):number {
		var result:number = 0;
		var l:number = arr.length;
		var i:number;
		
		for (i = 0; i < l; i++) {
			result += (arr[i] as any)[popertyName];
		}
		
		return result;
	}
	/**
	 * Removes item from an array if it exists in it. if it does not - nothing happens.
	 * This method modifies the array!
	 *
	 * @param	arr	The array from which the item will be removed.
	 * @param	item The item which have to be removed.
	 */
	public static removeItem<T>(arr:Array<T>, item:T):void {
		var index:number = arr.indexOf(item);
		
		if (index != -1) {
			arr.splice(index, 1);
		}
	}

    public static createRandomIntsArray(length: number, min: number, max: number): Array<number> {
        var result: Array<number> = [];
		var i:number;
		var diff:number = max - min;
		
        for (i = 0; i < length; i++) {
            result[i] = min + Math.floor(Math.random() * diff);
		}
		
		return result;
	}
	
	public static repositionItem<T>(arr:Array<T>, item:T, position:number):Array<T> {
		var originalIndex:number = arr.indexOf(item);

        return ArrayUtil.repositionIndex(arr, originalIndex, position);
	}
	
	public static repositionIndex<T>(arr:Array<T>, originalIndex:number, newIndex:number):Array<T> {
		var l:number = arr.length;
		var item:T
		
		if (newIndex < 0) {
			newIndex = 0;
		}
		
		if (originalIndex >= 0) {
			item = arr.splice(originalIndex, 1)[0];
			
			/*if (originalIndex > newIndex) {
				newIndex--;
			}*/
		}
		
		arr.splice(newIndex, 0, item);
		
		return arr;
	}
}


