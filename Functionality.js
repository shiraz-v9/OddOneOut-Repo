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
  var br = "<br>"; //use this for spacing
  var GameStart = null;
  var open = false;

  var obj = jQuery.parseJSON('{ "name":"greggs", "name":"tea", "name":"coffee"}');


  // var FOOD = {list: [
  //     {name: "greggs"},
  //     {name: "tea"},
  //     {name: "coffee"},
  //     {name: "biscuits"},
  //     {name: "Fish&Chips"},
  //     {name: "Pasty"},
  //     {name: "Meat Pie"},
  //     {name: "Bagel"},
  //     {name: "Sausage Roll"},
  //     {name: "English Breakfast"}]};



  $("#playerForm").hide(); // u can use a class to hide all context!
  $("#welcomeMsg").hide();
  $(".hidden").hide()

  // hide & show the navbar in mobile viewport only
  // $("#icon").click(function(){
  //   // $(".navbar").css{"visibility", "visible"};
  //   $(".navbar").toggle(500);
  // });

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
    player4 = $("#pl4").val();
    player5 = $("#pl5").val();
    player6 = $("#pl6").val();
    player7 = $("#pl7").val();
    player8 = $("#pl8").val();
    $("#checker").html("Here are my players:<br> "
    + player1 + br + player2 + br + player3 +
    br + player4 + br + player5 + br +
    player6 + br + player7 + br + player8);
    $("#playerForm").hide("slow");
    $("#startBtn").show("slow");

  });


  $("#startBtn").click(function(event){
    event.preventDefault();
    var x="Conutndown Here";
    // setInterval(function() {
    // x--;}
    $("#checker").html(x);
    $("#startBtn").hide("slow");
    //var obj = jQuery.parseJSON( '{ "name": "John" }' );
    //$("#ITEM").html( FOOD.list[3]).show();

    //DISPLAY PLAYER NAMES FIRST
    $("#ITEM").show();
    //var x = ;
    $("#ITEM").text(obj.name);
    // var myJSON = JSON.stringify(FOOD);//plain string not needed.
    // $("#ITEM").text(myJSON);
 });



 var $toggle = -1;
 $('#add').click(function(){
    $toggle += 1;
     if($toggle == 0){
         $("#pl4").show();

      }else if ($toggle == 1){$("#pl5").show();
      }else if ($toggle == 2){$("#pl6").show();
      }else if ($toggle == 3){$("#pl7").show();
      }else if ($toggle == 4){$("#pl8").show();
      // }else if ($toggle == 5){$("#pl9").show();
      // }else if ($toggle == 6){$("#pl10").show();
      }

 });









});
