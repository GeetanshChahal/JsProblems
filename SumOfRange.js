function rangeArr(start,end,step=1){
    let arr=[];
    if(step==0){
        console.log("Step can't be 0.");
        return [];
    }
    else if(step>0){    // positive step
        for(i=start;i<=end;i=i+step){
            arr.push(i);
        }
    }
    else{   // negative step
        for (let i = start; i >= end; i += step) {
            arr.push(i);
        }
    }
    return arr;
}

function rangeArrSum(arr){
    let arrSum=0;
    for(num of arr){
        arrSum+=num;
    }
    return arrSum;
}

console.log("Array:", rangeArr(1, 10, 2));  // [1, 3, 5, 7, 9]
console.log("Array:", rangeArr(5, 2, -1));  // [5, 4, 3, 2]
console.log("Array sum:", rangeArrSum(rangeArr(1, 10))); // 55

// Solution of The sum of a range problem (Chapter-4) from Eloquent Javascript Book
/*  Question: Write a range function that generates an array from start to end, 
    and a sum function that returns the sum of an array. 
    Extend range to support an optional step value, allowing both positive and negative steps. 
*/