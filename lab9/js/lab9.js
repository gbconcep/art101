/*
 * Author: Gavin Concepcion <gbconcep@ucsc.edu>
 * Created: 05/04/2022
 * License: Public Domain
 */

 var outputEl =
 document.getElementById("output");

 var new1El = document.createElement("p");
 new1El.style.color = "red";
 new1El.innerHTML = "Random Thingy"

 outputEl.appendChild(new1El);

 var new2El = document.createElement("h1");
 new2El.style.color = "green";
 new2El.innerHTML = "Another Random Thingy"

 outputEl.appendChild(new2El);
