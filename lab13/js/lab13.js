/*
 * Author: Gavin Concepcion <gbconcep@ucsc.edu>
 * Created: 05/16/2022
 * License: Public Domain
 */

// Create a "FizzBuzz" function similar to how we did in class.
// Loop through numbers 1 to 200, listing them as you go
// If the number is a multiple of 3, if should print "Fizz!"
// If the number is a multiple of 5, it should print "Buzz!"
// If the number is a multiple of more than one 3, 5 or 7, it should combine Fizz, Buzz, and Boom. For example, if the number is a multiple of 3 AND 5, it should print "FizzBuzz!" and so on.
// Make it so the output of your program appears in your output div.
console.log("Yes, my JS is running");

function fizzBuzz() {
  console.log("Yes, my function is running");
  for (var i=1; i<=200; i++) {
    var str = ''
    if (i % 3 == 0) {
      str += "Fizz";
    }
    if (i % 5 == 0) {
      str += "Buzz";
    }
    if (i % 7 == 0) {
      str += "Boom";
    }
    if (str == '') {
      str += i;
    }
    else {
      str += "!";
    }
    $("#output").append("<p>" + str + "</p>");
  }
}

fizzBuzz();
