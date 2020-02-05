//ALL CANVAS CODE HERE
$(document).ready(function(){
  var sp = " ";
  var player1 = "";
  var player2 = "";
  var player3 = "";
  var player4 = "";
  var player5 = "";
  var player6 = "";
  var player7 = "";
  var player8 = "";

  var players = [];

  // var player9 = "";
  // var player10 = "";
  var br = "<br>"; //use this for spacing
  //var GameStart = null;

  var JSON = jQuery.parseJSON('{"Food":["greggs", "tea", "coffee","biscuits","Fish&Chips","Pasty","Meat Pie","Bagel","Sausage Roll","English Breakfast" ]}');

  // {"Food":[
  //
  // {"one" : "Would you eat this food cold?"},
  // {"two":"What meal would you have this food on?"},
  // {"three":"Would you eat this if it sat out on the counter for a week?"},
  // {"four":"Would you eat this if it sat out on the counter for a week?"},
  // {"five":"Would you eat this if it sat out on the counter for a week?"},
  // {"six":"Would you eat this if it sat out on the counter for a week?"},
  // {"seven":"Would you eat this if it sat out on the counter for a week?"},
  // {"eight":"Would you eat this if it sat out on the counter for a week?"},
  // {"nine":"Would you eat this if it sat out on the counter for a week?"}
  // ]
  // }
  //
  // "greggs":[
  //   {},
  //   {"Would you give this food to your dog?"},
  //   {"What meal would you have this food on?"},
  //   {"Would you eat this if it sat out on the counter for a week?"},
  //   {"Could you make it through the week only eating this?"},
  //   {"Say what you like about this item?"},
  //   {"How much would you pay for this food?"},
  //   {"Where would you buy this from?"},
  //   {"What would you have this with?"},
  //   {"Say what you dislike about this item?"}
  // ]




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

  // var LOCATIONS = {list: [
  // {name: "London"},
  // {name: "Manchester"},
  // {name: "Big Ben"},
  // {name: "London Eye"},
  // {name: "York"},
  // {name: "Stonehenge"},
  // {name: "Tower of London"},
  // {name: "Chester Zoo"},
  // {name: "Blackpool"}]};


  $("#playerForm").hide(); // u can use a class to hide all context!
  $("#welcomeMsg").hide();
  $(".hidden").hide()

  // hide & show the navbar in mobile viewport only
  // $("#icon").click(function(){
  //   // $(".navbar").css{"visibility", "visible"};
  //   $(".navbar").toggle(500);
  // });

  $("#playbtn").click(function(){
    $("#p1").hide();
    $("#p2").hide();
    $("#p3").hide();
    $("#playbtn").hide();
    $("#playerForm").show("slow");
    $("section").css("background-color", "grey").show("slow");

  });



  $("#playerForm").submit(function(event){
    event.preventDefault(); // will prevent from refreshing the page and lose JS functions.
    player1 = $("#pl1").val();
    player2 = $("#pl2").val();
    player3 = $("#pl3").val();
    player4 = $("#pl4").val();
    player5 = $("#pl5").val();
    player6 = $("#pl6").val();
    player7 = $("#pl7").val();
    player8 = $("#pl8").val();


    players.push(player1 , player2 , player3 , player4, player5, player6, player7, player8);

    //REMOVE EMPTY VALUES FROM players
    var len = players.length, i;

    for(i = 0; i < len; i++ )
    players[i] && players.push(players[i]);  // copy non-empty values to the end of the array

    players.splice(0 , len);  // cut the array and leave only the non-empty values

    //Display my players name on screen
    $("#checker").html(players.join(br));

    $("#playerForm").hide("slow");

    $("#startBtn").show("slow");

  });


  $("#startBtn").click(function(event){
    event.preventDefault();
    $("#startBtn").hide("slow");
    var x="Display active player name here " + players.length;
    $("#checker").html(x);

    // var activePlayers = 0;
    // var i;
    // for (i = 1; i < 8; i++){
    // if (player[i] != ""){
    //     activePlayers += 1;
    //
    //   }
    //}



    //DISPLAY PLAYER NAMES FIRST
    $("#ITEM").show();
    var rnd = Math.floor(Math.random() * 10);
    $("#ITEM").text(JSON.Food[rnd]); // USE RAND
    $("#loadJson").show();
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

  // $("#loadJson").click(function(event){
  //                $.getJSON('foodQuestions.json', function() {
  //                   $('#json').html( greggs + sp + tea+ sp + coffee);
  //                });
  //             });


  // $("#votingForm").submit(function(event){
  //
  //
  //    $("#votingForm").hide("slow");
  //  });


});
