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
  var GameStart = null;
  var FOOD = {list: [
      {name: "greggs"},
      {name: "tea"},
      {name: "coffee"},
      {name: "biscuits"},
      {name: "Fish&Chips"},
      {name: "Pasty"},
      {name: "Meat Pie"},
      {name: "Bagel"},
      {name: "Sausage Roll"},
      {name: "English Breakfast"}]};

  //var players = [];

  $("#playerForm").hide(); // u can use a class to hide all context!
  $("#welcomeMsg").hide();
  $(".hidden").hide()

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
    event.preventDefault(); // will prevent from refreshing the page and lose JS functions.
    player1 = $("#pl1").val();
    player2 = $("#pl2").val();
    player3 = $("#pl3").val();//use loop for less code and more players

    $("#checker").html("Here are my players:<br> "
    + player1 + "<br>"+ player2 + "<br>" + player3);
    $("#playerForm").hide("slow");
    $("#startBtn").show("slow");

  });


  $("#startBtn").click(function(event){
    event.preventDefault();
    $("#checker").html("Hello World");
    $("#startBtn").hide("slow");
    //var obj = jQuery.parseJSON( '{ "name": "John" }' );
    //$("#ITEM").html( FOOD.list[3]).show();

    //DISPLAY PLAYER NAMES FIRST
    $("#ITEM").show();
 });










});
