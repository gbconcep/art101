/*
 * Author: Gavin Concepcion <gbconcep@ucsc.edu>
 * Created: 04/27/2022
 * License: Public Domain
 */

// sortUserName - a function that takes user input and sorts the letters
// of their name
function sortUserName() {
  var userName = window.prompt("Hello there! What is your name?");
  console.log("userName =", userName);

  // split string to array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);

  // sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);

  // join array to a string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  return nameSorted;
}

//output
document.writeln("Hello again. I've readjusted your name. Take a look!:",
    sortUserName(), "<br>");
