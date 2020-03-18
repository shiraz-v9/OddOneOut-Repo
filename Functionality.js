$(document).ready(function(){
  var sp = " ";
  var br = "<br />"; //use this for spacing
  var cs = ", ";
  var player1 = "";
  var player2 = "";
  var player3 = "";
  var player4 = "";
  var player5 = "";
  var player6 = "";
  var player7 = "";
  var player8 = "";

  var p1vote, p2vote, p3vote, p4vote, p5vote, p6vote, p7vote, p8vote = "";

  var players = [];
  var Vote = [];
  var Score = [0,0,0,0,0,0,0,0];
  var word ="";
  var OddManOut = "";
  var RandomGuy = "";
  var TotPlayers = players.length;

  var misguess = 0; //renamed first to misguess and second to word guess
  var wordguess = 0;

  var points; //to be used for the voting form

  var toggler = 0; //for player names
  var round = 1;
  var roundtoggler = -1;
  var votetoggler = -1;
  // var player9 = "";
  // var player10 = "";



  var JSON = jQuery.parseJSON('{"Food":["greggs", "tea", "coffee","biscuits","Fish&Chips","Pasty","Meat Pie","Bagel","Sausage Roll","English Breakfast" ]}');

  var DATA = jQuery.parseJSON('{"Questions":["Would you eat this food cold?","What meal would you have this food on?","Would you eat this if it sat out on the counter for a week?","Could you make it through the week only eating this?","Say what you like about this item?","How much would you pay for this food?","Where would you buy this from?","What would you have this with?","Say what you dislike about this item?","Would you give this food to your dog?"]}');


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


    $("#playbtn").click(function() {
        $("#p1").hide();
        $("#p2").hide();
        $("#p3").hide();
        $("#playbtn").hide();
        $("#playerForm").show("slow");
    });



    $("#playerForm").submit(function(event) {
        event.preventDefault(); // will prevent from refreshing the page and lose JS functions.
        player1 = $("#pl1").val();
        player2 = $("#pl2").val();
        player3 = $("#pl3").val();
        player4 = $("#pl4").val();
        player5 = $("#pl5").val();
        player6 = $("#pl6").val();
        player7 = $("#pl7").val();
        player8 = $("#pl8").val();


        players.push(player1, player2, player3, player4, player5, player6, player7, player8);
        //REMOVE EMPTY VALUES FROM players
        var len = players.length,
            i;

        for (i = 0; i < len; i++)
            players[i] && players.push(players[i]); // copy non-empty values to the end of the array

        players.splice(0, len); // cut the array and leave only the non-empty values

        //Display my players name on screen
        $("#checker").html(players.join(br));

        $("#playerForm").hide("slow");

        $("#startBtn").show("slow");

    });

    var $toggle = -1;
    $('#add').click(function() {
        $toggle += 1;
        if ($toggle == 0) {
            $("#pl4").show();

        } else if ($toggle == 1) {
            $("#pl5").show();
        } else if ($toggle == 2) {
            $("#pl6").show();
        } else if ($toggle == 3) {
            $("#pl7").show();
        } else if ($toggle == 4) {
            $("#pl8").show();
            $("#add").hide();
            // }else if ($toggle == 5){$("#pl9").show();
            // }else if ($toggle == 6){$("#pl10").show();
        }

    });


    $("#startBtn").click(function(event) {
        event.preventDefault();
        $("#startBtn").hide("slow");
        var y = "Active Players: " + players.length;
        $("#checker").html(y);

        //DISPLAY PLAYER NAMES FIRST
        word = Math.floor(Math.random() * 10);
        $("#ITEM").text(JSON.Food[word]); // USE RAND
        //$("#veryOdd").show();
        $("#Start").show();

    });


    $("#Start").click(function(event) {
      $("#checker").hide();
        $("#Start").hide();
        RandomGuy = Math.floor(Math.random() * players.length);

        OddManOut = players[RandomGuy];    //GET 1 PLAYER OUT OF THE LOOP



        //TESTER
        //$("#veryOdd").text("ODD MAN is: " + OddManOut + " Word is: " + JSON.Food[word]).css("background-color", "red");
        $("#veryOdd").show().text("Word Round"); // Used as title
        //SHOW THE WORD ROUND
        $('#PlayerSelection').text("Pass the device to " + players[toggler]);

        $('#cf1').show(100);
        $('#cf1').text("I confirm to be " + players[toggler]);


        $("#cf1").click(function() {

            $('#PlayerSelection').hide();
            $('#cf1').hide();



            if (players[toggler] == OddManOut) {
                $('#ItemCompanion').text("You're out of the loop. Try to get the word from your opponent answers");
                $('#ItemCompanion').show();
                $("#ITEM").hide();
            }
            else {
                $('#ItemCompanion').text("Here is the Word:");
                $('#ItemCompanion').show();
                $("#ITEM").show("slow");
            }

            //QUESTION ROUND
            if (toggler + 1 == players.length) { // fixed the loop count
                $("#Next").hide();
                $("#QuestionRound").show();
            }
            else {
                $("#Next").show().text("click & pass to " + players[toggler + 1])
            }
        }); //confirmation

        //Next player
        $("#Next").click(function() {
            toggler += 1;
            $("#Next").hide();
            $('#ItemCompanion').hide();
            $("#ITEM").hide();
            $('#PlayerSelection').text("Pass the device to " + players[toggler]);
            $('#cf1').show(100);
            $('#cf1').text("I confirm to be " + players[toggler]);


        });

        //all players know the word. Questions needs to be asked
        $("#QuestionRound").click(function() {
          $("#cf1").hide();
          $("#QuestionRound").hide();
          $("#ITEM").hide("slow");
          $("#veryOdd").show().text("Question Round");
          //$('#Title').show().text("Question Round"); //MOVE THIS TO ACTIVE PLAYERS
          $('#ItemCompanion').show().text("Pass the device to " + players[0]);
          $('#cf2').show().text("I confirm to be " + players[0]);

        });

   //all players know the word. Questions needs to be asked
   $("#cf2").click(function(){

     roundtoggler+=1;
     round+=1;
     $("#cf2").hide();
     $('#ItemCompanion').hide();
     $("#ITEM").hide("slow");
     $("#QuestionRound").hide();
     $('#PlayerSelection').show().text("Hey " + players[roundtoggler] + ", Answer this out loud:");
     $('#ItemCompanion').show("slow").text(DATA.Questions[round]);


     //All players answered proceed to voting
     if (roundtoggler +1 == players.length) {//Last person answers and then voting sess.
       $(".questions").show();
       $("#Answer").hide();
       $("#Vote").show();
     }
     else{
       $("#Answer").show().text("Answer and pass to " + players[roundtoggler + 1]);
     }

   });



 });//start


   $("#Answer").click(function(){
     $(".questions").hide();
     $("#cf2").show().text("I confirm I am " + players[roundtoggler + 1]);
     $("#Answer").hide();
     });


    $("#Vote").click(function(){//Insert voting code
      $(".questions").hide();

      $("#veryOdd").text("Voting Round");
      $("#Title").show().text(players[votetoggler + 1] + " Pick the odd man!");
      $("#Vote").hide();


    $("#Votingform").show();
    var select = document.getElementById("Selection"),
                   arr = players;

           for(var i = 0; i < arr.length; i++)
           {
               var option = document.createElement("OPTION"),
                   txt = document.createTextNode(arr[i]);
               option.appendChild(txt);
               option.setAttribute("value",arr[i]);
               select.insertBefore(option,select.lastChild);
           }
     }); //VOTE btn

   $("#Votingform").submit(function(event) {
     event.preventDefault();

     if($('#Selection').val() != players[votetoggler + 1])
     {
        votetoggler +=1;
        Vote.push($('#Selection').val());

        if ($('#Selection').val() == OddManOut){
          Score[votetoggler] = Score[votetoggler] + 20; //set player score if guessed
        }
        else if(players[votetoggler] != OddManOut){
          //Score[votetoggler] = "0";
          //Score[6] = "10";
          misguess = misguess + 10;
          //Score[RandomGuy] = "10";
        }



      if(votetoggler+1 == players.length){
        for (var i = 0; i < Vote.length; i++) {
          //var votes = Vote[i] + cs;
          $("#veryOdd").text("Results");
          $("#Title").show("slow").text("Players have voted for: "  + Vote);
          $("#Votingform").hide();
          $("#cf3").show().text("Odd Man Reveal");
          }
      }

      else{
        $("#veryOdd").text("Voting Round");
        $("#Title").show("slow").text( players[votetoggler + 1] + " Pick the odd man!");
        $("#Selection").show();
      }
    }
    else
    {
      $("#Title").show().text("Please do not vote for your self!");
    }
   }); //Vote submission

   $("#cf3").click(function(){
     var count = 0;
     count+=1;
     $("#Title").hide();
     $("#veryOdd").hide();
     $("#Reveal").show().text("And the odd man is...");
     $("#Revealcompanion").show("slow").text(OddManOut);
     if (count == 1){
       $("#cf3").hide();
       $("#cf4").show().text("Word Guess");
     }
   }); //confirmation 3

   $("#cf4").click(function(){
     $(".reveal").hide();
     $("#cf4").hide();
     $("#Title").show("slow").text(OddManOut + cs+ "Guess the secret word to get points!")
     $("#Guessform").show();

     var select = document.getElementById("Guess"),
                    arr = JSON.Food;

            for(var i = 0; i < arr.length; i++)
            {
                var option = document.createElement("OPTION"),
                    txt = document.createTextNode(arr[i]);
                option.appendChild(txt);
                option.setAttribute("value",arr[i]);
                select.insertBefore(option,select.lastChild);
            }
   }); //confirmation 4

   $("#Guessform").submit(function(event) {
     event.preventDefault();
     $(".guess").hide();
     if($('#Guess').val() == JSON.Food[word]){
       $("#Title").show("slow").text("Congrats you have guessed the word!");
       $("#Points").show("slow").text("Points +30");
       //Score[7] = "30"; //set odd man's score
       wordguess = 30;
       var value = misguess + wordguess;
       Score[RandomGuy] = value; //incrementing values for odd guy
     }
     else{
       $("#Title").show("slow").text("Sorry, better luck next time!" + cs + "word was: " + JSON.Food[word]);
     }
     $("#cf5").show().text("Go to LeaderBoard");
   }); //guess submission

   $("#cf5").click(function(){
     $(".punti").hide();
     //$("#Title").show().text(Vote +cs+ Score);
     //$(".scoring").show().text(Score);
     $("#sc1").show().text(players[0] +cs+"you scored: " + Score[0]);
     $("#sc2").show().text(players[1] +cs+"you scored: " + Score[1]);
     $("#sc3").show().text(players[2] +cs+"you scored: " + Score[2]);

     // $("#sc4").text(players[3] +cs+"you scored: " + Score[3]);
     // $("#sc5").text(players[4] +cs+"you scored: " + Score[4]);
     // $("#sc6").text(players[5] +cs+"you scored: " + Score[5]);
     // $("#sc7").text(players[6] +cs+"you scored: " + Score[6]);
     // $("#sc8").text(players[7] +cs+"you scored: " + Score[7]);


     switch (players.length -1) {
      case 3:
        $("#sc4").show().text(players[3] +cs+"you scored: " + Score[3]);
        break;
      case 4:
        $("#sc4").show().text(players[3] +cs+"you scored: " + Score[3]);
        $("#sc5").show().text(players[4] +cs+"you scored: " + Score[4]);
        break;
      case 5:
        $("#sc4").show().text(players[3] +cs+"you scored: " + Score[3]);
        $("#sc5").show().text(players[4] +cs+"you scored: " + Score[4]);
        $("#sc6").show().text(players[5] +cs+"you scored: " + Score[5]);
        break;
      case 6:
        $("#sc4").show().text(players[3] +cs+"you scored: " + Score[3]);
        $("#sc5").show().text(players[4] +cs+"you scored: " + Score[4]);
        $("#sc6").show().text(players[5] +cs+"you scored: " + Score[5]);
        $("#sc7").show().text(players[6] +cs+"you scored: " + Score[6]);
        break;
      case 7:
        $("#sc4").show().text(players[3] +cs+"you scored: " + Score[3]);
        $("#sc5").show().text(players[4] +cs+"you scored: " + Score[4]);
        $("#sc6").show().text(players[5] +cs+"you scored: " + Score[5]);
        $("#sc7").show().text(players[6] +cs+"you scored: " + Score[6]);
        $("#sc8").show().text(players[7] +cs+"you scored: " + Score[7]);
        break;
        //default: $(".all").show();

     }

   }); //confirmation 5


}); //SCRIPT END
