/*
 * Author: Gavin Concepcion <gbconcep@ucsc.edu>
 * Created: 05/11/2022
 * License: Public Domain
 */

$("button.purple").click(function(){
    //make text purple
    $("#challenges").removeClass("pink");
    $("#challenges").toggleClass("purple");
    $("#problems").removeClass("pink");
    $("#problems").toggleClass("purple");
    $("#results").removeClass("pink");
    $("#results").toggleClass("purple");

});

$("button.pink").click(function(){
  //make text pink
  $("#challenges").removeClass("purple");
  $("#challenges").toggleClass("pink");
  $("#problems").removeClass("purple");
  $("#problems").toggleClass("pink");
  $("#results").removeClass("purple");
  $("#results").toggleClass("pink");

});
