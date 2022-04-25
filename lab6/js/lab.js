/*
 * Author: Gavin Concepcion <gbconcep@ucsc.edu>
 * Created: 04/24/2022
 * License: Public Domain
 */

// Define Variables
myTransport = ["car", "bike", "metro", "walking"];

myMainRide = {
    make: "Honda",
    model: "Civic",
    color: "Gray",
    year: 1997,
    age: function() {
        return 2022 - age;
    }
}

//output
document.writeln("Kinds of transportation I use: ", myTransport, "<br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
