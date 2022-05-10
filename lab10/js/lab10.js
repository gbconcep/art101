/*
 * Author: Gavin Concepcion <gbconcep@ucsc.edu>
 * Created: 05/09/2022
 * License: Public Domain
 */

// sortUserName - nameSort() function from lab7
function sortUserName() {

  // split string to array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);

  // sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);

  // join array to a string
  var nameString = nameArraySort.join('');
  console.log("nameSorted =", nameString);

  return nameSorted;
}

// Find the element.

var button = document.getElementById("my_button");
console.log("Button:", button);

// Create an event handler within the JS file that listens for a button click.
button.addEventListener("click", function(){
	// When the button is pushed, prompt the user to input their name with the prompt() function.
  console.log("Button")
  var name = document.getElementById("my_input").value;
  console.log("name:", name);

// Use this input to change the text from ‘Hello, World!’ to ‘Hello’ + the user’s name
	var output = document.getElementById("output");
	console.log("Output:", output);
	output.innerHTML = "Hello, " + name;
	});
