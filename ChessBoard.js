for (let i=1;i<=8;i++){
    let row="";
    for(let j=1;j<=8;j++){
        if((i+j)%2==0){
            row+=" "
        }
        else{
            row+="#"
        }
    }
    console.log(row);
}

// Solution of ChessBoard problem from Eloquent Javascript Book
/*  Question:
    Write a program in JavaScript to generate a string that represents an 8×8 grid, with newline characters separating the lines.
    The grid should alternate between spaces (" ") and hash ("#") characters, forming a chessboard pattern.
*/