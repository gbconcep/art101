/*
 * Author: Gavin Concepcion <gbconcep@ucsc.edu>
 * Created: 05/25/2022
 * License: Public Domain
 */

var actButton = document.getElementById("activate")

actButton.addEventListener("click", function(){
// Using the core $.ajax() method
$.ajax({
    // The URL for the request (from the api docs)
    url: "https://yesno.wtf/api",
    // The data to send (will be converted to a query string)
    // Whether this is a POST or GET request
    type: "GET",
  })
    // The type of data we expect back
    .done(function(data){
      console.log("Worked!")
      console.log(JSON.stringify(data));

      $("#output").append("<h1>" + data.answer + "</h1>");
      $("#output").append("<img src=" + data.image + ">");
    })

    .fail(function(request, error){
    	$("#output").html("Something broke");
    })
  })
