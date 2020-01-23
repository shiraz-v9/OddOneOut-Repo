//ALL CANVAS CODE HERE
$(document).ready(function(){

  var player1 = "";
  var player2 = "";
  var player3 = "";
  var player4 = "";
  var player5 = "";
  var player6 = "";
  var player7 = "";
  var player8 = "";
  var player9 = "";
  var player10 = "";


  $("#players").hide();

  // hide & show the navbar in mobile viewport only
  $("#icon").click(function(){
    // $(".navbar").css{"visibility", "visible"};
    $(".navbar").toggle(500);
  });

  $("#playbtn").click(function(){
    $("#p1").hide(1000);
    $("#p2").hide(1500);
    $("#p3").hide(2000);
    $("#playbtn").hide();
    $("#players").show("slow");
    //Boolean(GameStart == true);

    // $("section").css("background-color", "white");

});

});
if (GameStart == true) {

}
