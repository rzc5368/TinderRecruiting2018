

$(document).ready(function() {



  var animating = false;
  var cardsCounter = 0;
  var numOfCards = 28;
  var decisionVal = 80;
  var pullDeltaX = 0;
  var deg = 0;
  var $card, $cardReject, $cardLike;

 // count topics by major(s)

  var countIST = 0;     // Information Sciences & Tech ( Design & Dev, Integration & App, People & Org.)
  var countSRA= 0;      // Security Risk Analysis
  var countDS = 0;      // Data Science
  var countCyber = 0;   // Cyber Security

 // selected major variable after right swiping

  var major = "";

  // Major topics

  var rightSwipeTopics =[]; // Array that will contain the topics liked by user

  var istTopics = ["Website Development",
                               "Application Development",
                               "Cloud Computing",
                               "Troubleshooting",
                               "Human-Centered Design"];

  var sraTopics = ["Puzzle Cracking",
                            "Cryptology (ex: Encryption, Ciphers, RSA, Knapsack)",
                             "Mitigation Strategies",
                             "Vulnerability Analysis",
                             "Risk Assessment"];

  var dsTopics = ["Data Analysis",
                           "Applied Mathematics",
                           "Artificial Intelligence (A.I)",
                           "Big Data",
                           "Data Visualization"];

  var cyberTopics = ["Digital Crime Solving",
                              "Cyber Threat Analysis",
                              "Data Privacy",
                              "IT Infrastructure",
                              "Ethical Hacking"];

  var istSra = ["Work Preference: Teamwork"]; //

  var istDs = ["Database Management"]; //

  var istDsSra = ["Business & Tech Applications"];

  var dsCyber = ["Work Preference: Individual"]; //

  var sraCyber = ["Malware (Viruses, Spyware, Worms, etc)"]; //

  var istCyberDs = ["Coding"]; //

  var sraCyberIst = ["Network Security"]; //

  var sraCyberDs = ["Analytical Thinking"]; //




  function pullChange() {
    animating = true;
    deg = pullDeltaX / 10;
    $card.css("transform", "translateX("+ pullDeltaX +"px) rotate("+ deg +"deg)");

    var opacity = pullDeltaX / 100;
    var rejectOpacity = (opacity >= 0) ? 0 : Math.abs(opacity);
    var likeOpacity = (opacity <= 0) ? 0 : opacity;
    $cardReject.css("opacity", rejectOpacity);
    $cardLike.css("opacity", likeOpacity);
  };



  function release() {

    var example = document.getElementsByClassName("demo__card__we"); // Array of all topics. Index starts with topics from Z-A, A being the last index.
    numOfCards--;

    if (pullDeltaX >= decisionVal) {  // Add points to each major if right swiped
      $card.addClass("to-right");

      rightSwipeTopics.push(example[numOfCards].textContent);  // May delete Later if not used (adds all right swipes to list)


      var checkIst = istTopics.indexOf(example[numOfCards].textContent);
      var checkSra = sraTopics.indexOf(example[numOfCards].textContent);
      var checkDs = dsTopics.indexOf(example[numOfCards].textContent);
      var checkCyber = cyberTopics.indexOf(example[numOfCards].textContent);

      var checkIstSra = istSra.indexOf(example[numOfCards].textContent);
      var checkIstDs = istDs.indexOf(example[numOfCards].textContent);
      var checkDsCyber = dsCyber.indexOf(example[numOfCards].textContent);
      var checkSraCyber = sraCyber.indexOf(example[numOfCards].textContent);
      var checkIstCyberDs = istCyberDs.indexOf(example[numOfCards].textContent);
      var checkSraCyberIst = sraCyberIst.indexOf(example[numOfCards].textContent);
      var checkSraCyberDs = sraCyberDs.indexOf(example[numOfCards].textContent);
      var checkIstDsSra = istDsSra.indexOf(example[numOfCards].textContent);

      if(checkIst > -1){
        countIST++;
      }

      if(checkSra > -1){
         countSRA++;
      }

      if(checkDs > -1){
         countDS++;
       }

      if(checkCyber > -1){
         countCyber++;
      }

      if(checkIstSra > -1){
         countIST++;
         countSRA++;
      }

      if(checkIstDs > -1){
         countIST++;
         countDS++;
      }

      if(checkDsCyber > -1){
         countDS++;
         countCyber++;
      }

      if(checkSraCyber > -1){
         countSRA++;
         countCyber++;

      }
      if(checkSraCyberDs > -1){
         countSRA++;
         countCyber++;
         countDS++;
      }

      if(checkSraCyberIst > -1){
         countSRA++;
         countCyber++
         countIST++;
      }

      if(checkIstCyberDs > -1){
         countDS++;
         countCyber++
         countIST++;

      }

      if(checkIstDsSra > -1){
         countDS++;
         countIST++;
         countSRA++;

      }



//   Testing Purposes

//      console.log("IST: " + countIST);
//      console.log("SRA: " + countSRA);
//      console.log("DS: " + countDS);
//      console.log("Cyber: " + countCyber);


//    End Test


    } else if (pullDeltaX <= -decisionVal) {
      $card.addClass("to-left");
    }

    if(numOfCards== 25){

       var max = Math.max(countSRA, countIST, countDS, countCyber);

       if(countSRA == max){
            major+= "Security Risk Analysis";
       }
       if(countIST == max){
           major+= "Information Science & Technology";
       }
       if(countDS == max){
           major+= "Data Analysis";
       }
       if(countCyber == max){
           major+= "Cyber Security";

       }

    localStorage.getmajor = major;

     window.location.href = '/TinderRecruiting2018/ScorePage.html' ;



    }


//*** Original Code. May Delete later if not necessary***

//    if (Math.abs(pullDeltaX) >= decisionVal) {
//      $card.addClass("inactive");
//
//      setTimeout(function() {
//        $card.addClass("below").removeClass("inactive to-left to-right");
//        cardsCounter++;
//        if (cardsCounter === numOfCards) {
//          cardsCounter = 0;
//          $(".demo__card").removeClass("below");
//        }
//      }, 300);
//    }

//*** End of Original Code.***

    if (Math.abs(pullDeltaX) < decisionVal) {
      $card.addClass("reset");
    }

    setTimeout(function() {
      $card.attr("style", "").removeClass("reset")
        .find(".demo__card__choice").attr("style", "");

      pullDeltaX = 0;
      animating = false;
    }, 300);
  };


  $(document).on("mousedown touchstart", ".demo__card:not(.inactive)", function(e) {
    if (animating) return;

    $card = $(this);
    $cardReject = $(".demo__card__choice.m--reject", $card);
    $cardLike = $(".demo__card__choice.m--like", $card);
    var startX =  e.pageX || e.originalEvent.touches[0].pageX;

    $(document).on("mousemove touchmove", function(e) {
      var x = e.pageX || e.originalEvent.touches[0].pageX;
      pullDeltaX = (x - startX);
      if (!pullDeltaX) return;
      pullChange();
    });

    $(document).on("mouseup touchend", function() {
      $(document).off("mousemove touchmove mouseup touchend");
      if (!pullDeltaX) return; // prevents from rapid click events
      release();
    });
  });


});






