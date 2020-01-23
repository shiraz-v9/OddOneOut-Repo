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
  var sp = " "; //use this for spacing
  //var players = [];

  $("#playerForm").hide(); // u can use a class to hide all context!
  $("#welcomeMsg").hide();
  //GameStart=false;
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
    $("#playerForm").show("slow");
    //Boolean(GameStart == true);

    $("section").css("background-color", "grey").show("slow");

});

// $('#submitBtn').click(function() {
//     // var players = $('#playerForm').serializeArray();
//     // for(i in players){
//     //     console.log(players[i]);
//         $("#checker").text($("#playerForm").serialize());
//     //}
//     return false;
//     $(GameStart == true);
// });

  $("#playerForm").submit(function(event){
    event.preventDefault(); // will prevent from refreshing the page and lose jquery functions.
    player1 = $("#pl1").val();
    player2 = $("#pl2").val();
    player3 = $("#pl3").val();

    $("#checker").html("Here are my players " + player1 +sp+ player2 +sp+ player3);

  });






// if (GameStart == true){
//   console.log( "GameStart is ON!" );//check this in inspect page
//   $("#welcomeMsg").show();
//   $("#checker").show();
//
//
// }



});
