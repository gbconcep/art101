/*
 * Author: Gavin Concepcion <gbconcep@ucsc.edu>
 * Created: 05/30/2022
 * License: Public Domain
 */

var actButton = document.getElementById("activate")

actButton.addEventListener("click", function(){
// Using the core $.ajax() method
$.ajax({
    // The URL for the request (from the api docs)
    url: "https://xkcd.com/info.0.json",
    // The data to send (will be converted to a query string)
    // Whether this is a POST or GET request
    type: "GET",
  })
    // The type of data we expect back
    .done(function(data){
      console.log("Worked!")
      console.log(JSON.stringify(data));

      $("#output").append("<h1>" + data.title + "</h1>");
      $("#output").append("<img src=" + data.img + ">");
      $("#output").append("<p>" + data.alt + "</p>");
    })

    .fail(function(request, error){
    	$("#output").html("Something broke");
    })
  })
