function countBs(str){
    return countChar(str,'B');
}

function countChar(str,charToCount){
    let count=0;
    let n=str.length;
    for(let i=0;i<n;i++){
        if(str[i]===charToCount){
            count++;
        }
    }
    return count;
}

let result=countBs("aBaaaaBBaB");
let result2=countChar("bCbbbaaaCCbCbC","b");

console.log(result);
console.log(result2);


// Solution of Bean Counting problem (Chapter-3) from Eloquent Javascript Book
/*  Question: Write a function called countChar that takes a string and a character as 
    arguments and returns how many times the specified character appears in the string. 
    Then, write another function called countBs that counts the number of uppercase 'B' 
    characters in a string using countChar
*/
