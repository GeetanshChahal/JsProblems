function isEven(number){
    if(number<0) return isEven(-number);    //can also use Math.abs(number)
    if(number==0) return true;
    if(number==1) return false;

    return isEven(number-2 );
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

// Solution of Recursion problem (Chapter-3) from Eloquent Javascript Book
/*  Write a recursive function isEven(number) that determines if a given whole number is even or odd. 
    The function should return true for even numbers and false for odd ones, handling both positive and negative numbers.
    Test it on inputs 50, 75, and -1. */