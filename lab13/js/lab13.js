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

for (var i=1; i<=200; i++) {
  if (i % 105 == 0) {
    console.log("FizzBuzzBoom!");
  }
  else if (i % 35 == 0) {
    console.log("BuzzBoom!");
  }
  else if (i % 21 == 0) {
    console.log("FizzBoom!");
  }
  else if (i % 15 == 0) {
    console.log("FizzBuzz!");
  }
  else if (i % 7 == 0) {
    console.log("Boom!");
  }
  else if (i % 3 == 0) {
    console.log("Fizz!");
  }
  else if (i % 5 == 0) {
    console.log("Buzz!");
  }
  else {
    console.log(i)
  }
}


function fizzBuzzBoom(maxNums, factorObj) {
    for (var num=0; num<maxNums; num++) {
        var outputStr = "";
        for (var factor in factorObj)
            if (num % factor == 0) {
                outputStr += factorObj[factor];
            }
        }

        if (outputStr) {
            outputStr = " - " + outputStr + "!";
        }
        outputToPage(num.toString() + outputStr)
      }


function reportError(str) {
    outputEl.innerHTML = "<div class='error'>" + str + "</div>";
}

document.getElementById ("submit"). addEventListener ("click", function() {
    var max = document.getElementById ("max").value;
    console.log("max: ", max)
    if (! max) {
    }
}
