
// Exercise #3
// Step 1

// Write a program that takes in two lists and returns the greatest number out of the two lists. Hint: call the function from Class Exercise #1 (Exercise #1 should return a single number - the greatest number in the list).

// Step 2

// Find a partner.
// Exchange your code.
// Read your partner's code and suggest improvements on how you would refactor their code.
// Test your partner's code for correctness (does it give the correct output), if it does not give the correct output, work together to fix the code.

function bigger(arr){

    big = [];
    for(var i=0; i<arr.length; i++){
        var max = arr[i][0];
        //console.log(max);
        for(var j=0; j<arr[i].length; j++){
            var actual = arr[i][j];
            if(actual >= max){
                max = actual;
                
            }
        }
        
        big.push(max);
        
    }

        var uno = big[0];
        var dos = big[1];
        //console.log(dos);

        if(uno>=dos){
            console.log(uno);
        } else {
            console.log(dos);
        }
    //console.log(big);
}

bigger([[9, 52, 7, 41, 16], [3, 45, 6, 9, 5]]);

