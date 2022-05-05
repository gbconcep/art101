/*
 * Author: Gavin Concepcion <gbconcep@ucsc.edu>
 * Created: 05/02/2022
 * License: Public Domain
 */

// named function
 function numberSquared(x) {
     var results = x * x
     return results;
 }

 // test Function
 console.log("What is 2 squared?", numberSquared(2));
 console.log("What is 5 squared?", numberSquared(5));
 console.log("What is 8 squared?", numberSquared(8));

 array = [99, 3, 7, 50, 25, 64, 45]
 console.log("My array is:", array);

 var results = array.map(numberSquared)
 console.log("Test the arrays:", results);

 var result = array.map(function(x) {
   var results = Math.sqrt(x)
   return results;
 })

 console.log("Squareroot of the array:", result)
