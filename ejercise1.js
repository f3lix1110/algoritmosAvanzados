// Exercise #1
// Write a program that takes in an array of numbers and returns the largest number in the list. Example: The given array is [3, 5, 7, 1, 6] The largest number is 7.


function big(arr){
    var ini = arr[0];
    for(var i=0; i<arr.length; i++){
        
        var cadena = arr[i];
        //console.log(cadena);

        if(cadena >= ini ){
            ini = cadena;

        }
         
    }
    //console.log(ini);
}

big([3, 5, 7, 1, 6]);


