(function() {
  $("#space").mousemove(function(e) {
    // Everything inside these {} here is run when
    // the mouse is moving! This is a "mousemove" event that is triggered
    // when someone moves the mouse over the "body" - which is the entire page.
    // You have the current position here as e.clientX and e.clientY
    // Here we change the css of #gun to match the mouse position.
    $("#emoji").css("left", e.clientX + "px");
    $("#emoji").css("top", e.pageY + "px");
  })


/*
  $(document).ready(showLetter);
var imgsArray = ["A1", "C1", "F1", "J1", "K1", "L1", "S1", "Ñ1"];

function generateRandomForArray() {
    var num = Math.floor(Math.random() * 8);
    return num;
}

function generateRandom() {
    var num = Math.floor(Math.random() * 400);
    return num;
}

function showLetter() {
    var letter = imgsArray[generateRandomForArray()];
    $("div").append("<img src='GameHTML5/images/" + letter + ".png'>");
    var left = generateRandom();
    var top = generateRandom();
    $("div").last().css({"position":"absolute","top": top + "px", "left": left + "px"});
} */







  function submitName() {
    namn = $("#namnet").val();
    $("#userNameBox").hide();
    document.getElementById("texten").innerHTML = "Welcome <span style='color:red'>"+namn+"</span>! Keep knocking to find out more...";
    writeDataName(namn);
    $("#space").bind("mousedown", klickfunktion);
    return false;

  }

  var namn;
  $("#namnform").submit(submitName);

  /* $("#namnknapp").click(function() {
    console.log("bajs2");
  });
 */

  var count1 = 0;
  var muspek = "1.png";
  var musenover = "2.png";

  var knack = "knack.mp3";
  var knack1 = "knack1.mp3";
  var knack2 = "knack2.mp3";
  var knack3 = "knack3.mp3";



    var klickfunktion = function() {
    writedatabase();
    count1++;
    console.log(count1);


    if ($("#img").attr("src") == muspek) {
      $("#img").attr("src", musenover);

      var textArray = [
        knack,
        knack1,
        knack2,
        knack3
      ];
      var randomNumber = Math.floor(Math.random() * textArray.length);


      var snd = new Audio(textArray[randomNumber]);
      snd.play();
      setTimeout(function() {
        $("#img").attr("src", muspek);
      }, 230);

    }
    if (count >= 5000 && count < 9999) {                  // HÄR KOMMER STORA CHECKPOINTSEN!!!
      $("#space").css("background-image", "url('door1.png')");
    }
    else if (count >= 10000 && count < 29999) {
      $("#space").css("background-image", "url('door2.png')");
    }
    else if (count >= 30000 && count < 49999) {
      $("#space").css("background-image", "url('door3.png')");
    }
    else if (count >= 50000 && count < 999999) {
      $("#space").css("background-image", "url('door4.png')");
    }
    else if (count >= 100000 && count < 199999) {
      $("#space").css("background-image", "url('door5.png')");
    }
    else if (count >= 200000 && count < 499999) {
      $("#space").css("background-image", "url('door6.png')");
    }
    else if (count >= 500000 && count < 599999) {
      $("#space").css("background-image", "url('door7.png')");
    }
    else if (count >= 600000 && count < 699999) {
      $("#space").css("background-image", "url('door8.png')");
    }
    else if (count >= 700000 && count < 799999) {
      $("#space").css("background-image", "url('door9.png')");
    }
    else if (count >= 800000 && count < 999999) {
      $("#space").css("background-image", "url('door10.png')");
    }
    else if (count >= 1000000) {
      $("#space").css("background-image", "url('door11.png')");
      var sndfinal = new Audio("finale.mp3");
      sndsaber.play();
    }


    if (count1 == 2) {

      document.getElementById("texten").innerHTML = "Who's there?";
      $("#userNameBox").show();
      $("#namnet").focus().on("blur", function() {
      $(this).focus()


      });
      $("#space").unbind("mousedown");

    }
    else if (count1 == 14) {
      document.getElementById("texten").innerHTML = "This is Carl and Sophia...";
      document.getElementById("annat").innerHTML = "<img src='carlsophia.JPG' style='height:40vh'></img>";
    }
    else if (count1 == 22) {
      document.getElementById("texten").innerHTML = "We study in a school called <span style='color:#22ccae'>Hyper</span> <span style='color:#e9226e'>Island</span> (google it!)...";
      document.getElementById("annat").innerHTML = "<img style='display:none'></img>";
    }
    else if (count1 == 30) {
      document.getElementById("texten").innerHTML = "We made this website as a part of our education.";

    }
    else if (count1 ==39) {
      document.getElementById("texten").innerHTML = "But...";

    }
    else if (count1 == 47) {
      document.getElementById("texten").innerHTML = "...we have a mission in mind...<img style='height:4vh;' src='1f60f.png'>";

    }

    else if (count1 == 56) {
      document.getElementById("texten").innerHTML = ".....drumroll.....";

    }
    else if (count1 == 64) {
      document.getElementById("texten").innerHTML = "We want to get an invitation to the mysterious <span style='color:#4688f1'>G</span><span style='color:#e8453c'>O</span><span style='color:#f9bb2d'>O</span><span style='color:#4688f1'>G</span><span style='color:#3aa757'>L</span><span style='color:#e8453c'>E</span>PLEX... ";


    }
    else if (count1 == 73) {


    document.getElementById("annat").innerHTML = "<img src='plex1.png' style='height:40vh'></img>";
      }
    else if (count1 == 83) {

    document.getElementById("annat").innerHTML = "<img src='plex2.png' style='height:40vh'></img>";
        }

    else if (count1 == 93) {


    document.getElementById("annat").innerHTML = "<img src='plex3.png' style='height:40vh'></img>";
          }
    else if (count1 == 103) {
      document.getElementById("texten").innerHTML = "...all inclusive! <img style='height:4vh;' src='http://emojione.com/wp-content/uploads/assets/emojis/1f46f.svg'>";

    }
    else if (count1 == 113) {
      document.getElementById("annat").innerHTML = "<img style='display:none'></img>";
      document.getElementById("texten").innerHTML = "We will then document our journey and how it actually is there";

    }

    else if (count1 == 123) {
      document.getElementById("texten").innerHTML = "But how do we do this? How do one communicate with a large company like they are?";

    }


    else if (count1 == 133) {


    document.getElementById("texten").innerHTML = "We decided to bring Google down to earth. (Google...earth)";




                }
    else if (count1 == 143) {


    document.getElementById("texten").innerHTML = "and simply knock on their office door...";

    }
    else if (count1 == 153) {
        document.getElementById("texten").innerHTML = "...together with you.";
    }
    else if (count1 == 35) {

      $("#infoKnocks").css("display", "inline");



  }

  else if (count1 == 163) {


  document.getElementById("texten").innerHTML = "We want 1 million knocks. If we do not hear from them by then, we will...";

}
  else if (count1 == 173) {

 document.getElementById("annat").innerHTML = "<img src='http://i2.kym-cdn.com/entries/icons/original/000/012/073/7686178464_fdc8ea66c7.jpg' style='height:40vh'></img>";

  }
  else if (count1 == 180) {

document.getElementById("annat").innerHTML = "<img style='display:none'></img>";
  document.getElementById("texten").innerHTML = "We want 1 million knocks. If we do not hear from them by then, we will...";

}
  else if (count1 == 183) {


  document.getElementById("texten").innerHTML = "...send them a stinky fish in a box!";

}
else if (count1 == 193) {

document.getElementById("annat").innerHTML = "<img src='stinkyfish.png' style='height:40vh'></img>";

}
else if (count1 == 203) {

document.getElementById("annat").innerHTML = "<img style='display:none'></img>";
document.getElementById("texten").innerHTML = "But who would not open the door if you knock on it a million times?";

}

else if (count1 == 213) {


document.getElementById("texten").innerHTML = "We believe dreams are real.";

}


else if (count1 == 223) {


document.getElementById("texten").innerHTML = "You already knocked over 200 times...let's do this!";

}





    else if (count1 == 320) {     //LIGHTSABER!!!!!

        muspek = "saber2.png";
        musenover = "saber1.png";
        knack = "lightsaberhit1.mp3";
        knack1 = "lightsaberhit2.mp3";
        knack2 = "lightsaberhit3.mp3";
        knack3 = "lightsaberhit3.mp3";
        var sndsaber = new Audio("lightsaberstep2.mp3");
        sndsaber.play();

        var sndsaberon = new Audio("lightsaberon.mp3");
        sndsaberon.play();



    }

    else if (count1 == 214) {     //DYLAN

        var sndknocking = new Audio("bobdylan.mp3");
        sndknocking.play();
}

    else if (count1 == 365) {
                                      // LIGHTSABER OFF
        muspek = "1.png";
        musenover = "2.png";
        knack = "knack.mp3";
        knack1 = "knack1.mp3";
        knack2 = "knack2.mp3";
        knack3 = "knack3.mp3";

        var sndsaberoff = new Audio("lightsaberoff.mp3");
        sndsaberoff.play();



    }


    else if (count1 == 47) {
      $("#img").attr("src", "2trump.png"); // trump kommer in
      var sndsmash = new Audio("smash.mp3");
      sndsmash.play();
    }
    else if (count1 == 48) {

      $("#img").attr("src", "2trump.png"); // trump kommer in
      var sndsmash = new Audio("smash.mp3");
      sndsmash.play();
    }
    else if (count1 == 49) {

      $("#img").attr("src", "2trump.png"); // trump kommer in
      var sndsmash = new Audio("smash.mp3");
      sndsmash.play();
    }
    else if (count1 == 50) {

      $("#img").attr("src", "2trump.png"); // trump kommer in
      var sndsmash = new Audio("smash.mp3");
      sndsmash.play();
    }
    else if (count1 == 51) {

      $("#img").attr("src", "2trump.png"); // trump kommer in
      var sndsmash = new Audio("smash.mp3");
      sndsmash.play();
    }
    else if (count1 == 52) {

      $("#img").attr("src", "2trump.png"); // trump kommer in
      var sndsmash = new Audio("smash.mp3");
      sndsmash.play();
    }

    else if (count1 == 380) {
      var sndcreek = new Audio("closedoor.mp3");
      sndcreek.play();

    }

    else if (count1 == 300) {
      document.getElementById("texten").innerHTML = "<span style='color:red'>You just knocked 300 times!</span>";

      var sndlevelup = new Audio("supermariolevelup.mp3");
      sndlevelup.play();

    }

    else if (count1 == 270) {
      document.getElementById("texten").innerHTML = "Psst... Don't forget to share this website so Google knows that we exist!";


    }

    else if (count1 == 500) {
      document.getElementById("texten").innerHTML = "<span style='color:red'>You just knocked 500 times! Damn you are good.</span>";
      document.getElementById("annat").innerHTML = "<img src='http://i.giphy.com/fpXxIjftmkk9y.gif' style='height:40vh'></img>";

      var sndlevelup = new Audio("supermariolevelup.mp3");
      sndlevelup.play();
    }
    else if (count1 == 520) {
      document.getElementById("annat").innerHTML = "<img style='display:none'></img>";
      document.getElementById("texten").innerHTML = "Did you know the current record is for knocks is <span style='color:red'>2540</span> times. Piece of cake huh?</span>";

    }

    else if (count1 == 650) {
      document.getElementById("texten").innerHTML = "<span style='color:red'>You just knocked 650 times!! The force is strong in you...</span>";
      document.getElementById("annat").innerHTML = "<img src='http://i.giphy.com/l46Co02tWrtd0Oq4g.gif' style='height:40vh'></img>";

      var sndlevelup = new Audio("supermariolevelup.mp3");
      sndlevelup.play();
    }


    else if (count1 == 340) {
                        // KATTEN!!!!
        $("#space").css("background-image", "url('dooropen.png')");
        var sndno = new Audio("no.mp3");
        sndno.play();

            setTimeout(function(){
              $("#space").css("background-image", "url('doori1.png')");
            }, 1300);




    }


  };
  $("#space").bind("mousedown", klickfunktion);



})();


// <script type="text/javascript">
//     function changeImage(a) {
//         document.getElementById("img").src = a;
//
//     }
// </script>
// onclick='changeImage("dolly.png");
