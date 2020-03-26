'use strict';
function binarySearch (list , item){
    let low = 0;
    let high = list.length - 1;
    
    while(low <= high){
        mid = Math.floor((low + high) / 2);
        let guess = list[mid];
        if(guess == item){
            return mid;
        }else if(guess > item){
            high = mid -1 ;
        }else{
            low = mid + 1
        }
    }
    return null;
}

let my_list = [1, 3, 5, 7, 9];

console.log(binarySearch(my_list , 10)); //Show null 
console.log(binarySearch(my_list , 3)); //Show 1 