//ALL CANVAS CODE HERE

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

  var points; //to be used for the voting form

  var toggler = 0; //for player names
  var round = 1;
  var roundtoggler = -1;
  var votetoggler = 0;
  // var player9 = "";
  // var player10 = "";

  //var GameStart = null;

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
        $("#veryOdd").show();
        $("#Start").show();

    });


    $("#Start").click(function(event) {
        $("#Start").hide();
        OddManOut = players[Math.floor(Math.random() * players.length)];    //GET 1 PLAYER OUT OF THE LOOP

        //TESTER
        $("#veryOdd").text("ODD MAN is: " + OddManOut + " Word is: " + JSON.Food[word]).css("background-color", "red");

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
      $("#Title").show().text("Voting Session: " + players[votetoggler] + " Pick the odd man!");
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
     votetoggler +=1;
     Vote.push($('#Selection').val());


    //////////////////////////////////////// Scoring players if they guess odd man out -- Will need global var for OddManOut
    //  if(Vote[votetoggler] == OddManOut)
    //  {
    //     Score[votetoggler].value = Score[votetoggler] + 40;
    //  }
    ///////////////////////////////////////


    // var obj = jQuery.parseJSON('Vote');
     // var len = Vote.length,
     //     i;
     //
     // for (i = 0; i < len; i++)
     //     Vote[i] && Vote.push(Vote[i]); // copy non-empty values to the end of the array
     //
     // Vote.splice(0, len); // cut the array and leave only the non-empty values

     //conditional statement here



     if(votetoggler == players.length){
       for (var i = 0; i < Vote.length; i++) {
         //var votes = Vote[i] + cs;
         $("#Title").show("slow").text("Players have voted for: "  + Vote[i] + Vote[0]+cs+Vote[1]+cs+Vote[2]);
         $("#Votingform").hide();
         $("#cf3").show("slow").text("Odd Man Reveal");
        }
     }
     else{
       $("#Title").show("slow");
     }

   }); //Vote submission

   $("#cf3").click(function(){
     var count = 0;
     count+=1;
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
     if($('#Guess').val() == JSON.Food[word]){
       $("#Title").show("slow").text("Congrats you have guessed the word!");
       $("#Points").show("slow").text("Points +40");

     }
     else{
       $("#Title").show("slow").text("Sorry, better luck next time!" + cs + "word was: " + JSON.Food[word]);
     }
     $("#cf5").show().text("Go to LeaderBoard");
   }); //guess submission

   $("#cf5").click(function(){

   }); //confirmation 5



      //Voting ROUND
      //var Numplayers = players.length;
      //$('#VoteCompanion').show().text('Voting for player:' + players[votetoggler]);
      // if (toggler + 1 == players.length) { // fixed the loop count
      //     $("#Next").hide();
      //     $("#QuestionRound").show();
      // }
      // else {
      //     $("#Next").show().text("click & pass to " + players[toggler + 1])
      // }
    //$("#votingForm").submit(function(event){


       // for (i = 0; i < players[i].length; i++) {
       //     if (player[i].value != "") {
       //         //document.getElementById('vt' + i).innerHTML = players[i].value;
       //         $('#ItemCompanion').text(players[i]);
       //     }
       //     else {
       //         //document.getElementById('vt' + i).hidden = true;
       //         $('#ItemCompanion').text("else");
       //     }
       //   }
     //});

        //functions for the voting section

        // $("VotingRound").click(function() {
        //
        //     var Numplayers = players.length;
        //     $('#ItemCompanion').text('Voting for player:' + players[votetoggler]);


        //   $("#votingForm").submit(function(event){


        //     for (i = 0; i < players[i].length; i++) {
        //         if (player[i].value != "") {
        //             //document.getElementById('vt' + i).innerHTML = players[i].value;
        //             $('#ItemCompanion').text(players[i]);
        //
        //
        //         } else {
        //             //document.getElementById('vt' + i).hidden = true;
        //             $('#ItemCompanion').text("else");
        //         }
        //     }
        // });





        //CALLUM CODE


        //functions for the word guessing

        // $("WordGuess").click(function() {
        //
        //     for (i = 0; i < 4; i++) {
        //         //Generates random value to be used to pick from the word pool
        //         rnd = (Math.random() * 10);
        //         JSON.Food[rnd];
        //
        //         //document.getElementById('wg' + i).innerHTML = players[i].value;
        //
        //
        //
        //     }
        //
        //
        // });






    // $("#votebtn").click(function() {
    //     $("#votebtn").hide();
    //     $("#votingForm").show("slow");

    // });

    // $("#votingForm").submit(function(event) {


    //     for (i = 0; i < players.length; i++) {
    //         if (player[i].value != "") {
    //             document.getElementById('vt' + i).innerHTML = player[i].value;
    //         } else {
    //             document.getElementById('vt' + i).hidden = true;
    //         }
    //     }

    // });


}); //SCRIPT END
