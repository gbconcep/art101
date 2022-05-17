/*
 * Author: Gavin Concepcion <gbconcep@ucsc.edu>
 * Created: 05/16/2022
 * License: Public Domain
 */

// Return Houses depending on length mod 4
function sortingClass(str) {
  len = str.length;
  mod = len % 4;
  if (mod == 0) {
    return "Black Eagles"
  }
  else if (mod == 1) {
    return "Blue Lions"
  }
  else if (mod == 2) {
    return "Golden Deer"
  }
  else if (mod == 3) {
    return "Ashen Wolves"
  }
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
    var name = document.getElementById("input").value;
    var house = sortingClass(name);
    newText = "<p>The Goddess Sothis has placed you in the " + house + " house. </p>";
    document.getElementById("output").innerHTML = newText;
})
