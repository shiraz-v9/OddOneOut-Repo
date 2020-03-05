//ALL CANVAS CODE HERE
$(document).ready(function(){
  var sp = " ";
  var br = "<br>"; //use this for spacing
  var player1 = "";
  var player2 = "";
  var player3 = "";
  var player4 = "";
  var player5 = "";
  var player6 = "";
  var player7 = "";
  var player8 = "";

  var players = [];
  var word ="";

  var points; //to be used for the voting form

  var toggler = 0; //for player names
  var round = 1;
  var roundtoggler = -1;
  // var player9 = "";
  // var player10 = "";

  //var GameStart = null;

  var JSON = jQuery.parseJSON('{"Food":["greggs", "tea", "coffee","biscuits","Fish&Chips","Pasty","Meat Pie","Bagel","Sausage Roll","English Breakfast" ]}');

  var DATA = jQuery.parseJSON('{"Questions":["Would you eat this food cold?","What meal would you have this food on?","Would you eat this if it sat out on the counter for a week?","Could you make it through the week only eating this?","Say what you like about this item?","How much would you pay for this food?","Where would you buy this from?","What would you have this with?","Say what you dislike about this item?","Would you give this food to your dog?"]}');







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

  //HIDDEN CLASSES
  $("#playerForm").hide();


  $("#playerForm").hide(); // u can use a class to hide all context!
  $("#votingForm").hide();
  $("#welcomeMsg").hide();
  $(".hidden").hide();


  $("#playbtn").click(function(){
    $("#p1").hide();
    $("#p2").hide();
    $("#p3").hide();
    $("#playbtn").hide();
    $("#playerForm").show("slow");
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


  $("#startBtn").click(function(event){
    event.preventDefault();
    $("#startBtn").hide("slow");
    var y="Active Players: " + players.length;
    $("#checker").html(y);

    //DISPLAY PLAYER NAMES FIRST
    word = Math.floor(Math.random() * 10);
    $("#ITEM").text(JSON.Food[word]); // USE RAND
    $("#veryOdd").show();
    $("#Start").show();

 });





 //CONDITION TO GET 1 PLAYER OUT OF THE LOOP
 $("#Start").click(function(event){
    $("#Start").hide();
   var OddManOut = players[Math.floor(Math.random() * players.length)];

   //TESTER

   $("#veryOdd").text("ODD MAN is: " + OddManOut + " Word is: " + JSON.Food[word]).css("background-color", "red");





  //SHOW THE WORD ROUND

   $('#PlayerSelection').text("Pass the device to " + players[toggler]);

   $('#Confirmation').show(100);
   $('#Confirmation').text("I confirm to be " + players[toggler]);
   //$("#Next").text("click & pass to " + players[1]);

  //}

   $("#Confirmation").click(function(){

     $('#PlayerSelection').hide();
     $('#Confirmation').hide();

     //remove it if doesn't work

     if (players[toggler] == OddManOut) {
       $('#ItemCompanion').text("You're out of the loop. Try to get the word from your opponent answers");
       $('#ItemCompanion').show();
       $("#ITEM").hide();
       //$("#ITEM").show("slow");
      }

       else {
         $('#ItemCompanion').text("Here is the Word:");
         $('#ItemCompanion').show();
         $("#ITEM").show("slow");
       }

    //QUESTION ROUND
    if (toggler +1 == players.length){ // fixed the loop count
      //$("#Next").text("Question Round");
      $("#Next").hide();
      $("#QuestionRound").show();


    }
    else{
      $("#Next").show().text("click & pass to " + players[toggler + 1])
    }
   });//confirmation

   //Player 2 - Next Button
   $("#Next").click(function(){
     toggler += 1;
     $("#Next").hide();
     $('#ItemCompanion').hide();
     $("#ITEM").hide();
     $('#PlayerSelection').text("Pass the device to " + players[toggler]);
     $('#Confirmation').show(100);
     $('#Confirmation').text("I confirm to be " + players[toggler]);
     //$("#Next").text("click & pass to " + players[toggler + 1]);

   });

   //all players know the word. Questions needs to be asked
   $("#QuestionRound").click(function(){
     $("#QuestionRound").hide();


     roundtoggler+=1;
     round+=1;
     $('#ItemCompanion').hide("slow");
     $("#ITEM").hide("slow");
     $("#QuestionRound").hide();
     $('#PlayerSelection').show().text("Hey, " + players[roundtoggler]);
     $('#ItemCompanion').show("slow").text("Answer this out loud " + DATA.Questions[round]);
     $("#Answer").show().text("click and pass to " + players[roundtoggler + 1]);


   });

   $("#Answer").click(function(){
     $("#QuestionRound").show().text("I confirm I am" + players[roundtoggler + 1]);
     $("#Answer").hide();

   });



      //   $("#votingForm").submit(function(event){

      //      for (i = 0; i < players.length; i++) {

      //          <input type = "button" id ="button">player[i]</input>

      //                 $("p").prepend("<b>Prepended text</b>. ");
      //      }

      //    });

 });//start btn


 $("#votebtn").click(function(){
   $("#votebtn").hide();
   $("#votingForm").show("slow");

 });

    $("#votingForm").submit(function(event){


       for (i = 0; i < players.length; i++) {
         if(player[i].value != "")
         {
            document.getElementById('vt'+ i).innerHTML = player[i].value;
         }
         else {
             document.getElementById('vt'+ i).hidden = true;
         }
      }

     });


});
