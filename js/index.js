$(document).ready(function() {


  var animating = false;
  var cardsCounter = 0;
  var numOfCards = 28;
  var decisionVal = 80;
  var pullDeltaX = 0;
  var deg = 0;
  var $card, $cardReject, $cardLike;

  // Additional Variables

  var countIST = 0;     // Information Sciences & Tech ( Design & Dev, Integration & App, People & Org.)
  var countSRA= 0;      // Security Risk Analysis
  var countDS = 0;      // Data Science
  var countCyber = 0;   // Cyber Security

  var rightSwipeTopics =[]; // Array that will contain the topics liked by user

  var istTopics = ["Website Development",
                               "Application Development",
                               "Cloud computing",
                               "Troubleshooting",
                               "Human Centered Design"];

  var sraTopics = ["Puzzle Cracking",
                            "Cryptology / Encryption",
                             "Mitigation Strategies",
                             "Vulnerability Analysis",
                             "Risk assessment"];

  var dsTopics = ["Data Analysis",
                           "Applied Mathematics",
                           "Artificial Intelligence (AI)",
                           "Big Data",
                           "Data visualization"];

  var cyberTopics = ["Digital Crime Solving",
                              "Cyber Threat Analysis",
                              "Data privacy",
                              "IT infrastructure",
                              "Ethical Hacking"];




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

    if (pullDeltaX >= decisionVal) {
      $card.addClass("to-right");

      rightSwipeTopics.push(example[numOfCards].textContent);  //adds right swipe topics to array

    } else if (pullDeltaX <= -decisionVal) {
      $card.addClass("to-left");
    }


    ///// Start of Progress code

   // Need to collect only cards swiped


    var condition = false;

    if(condition == false){
    istTopics.forEach(function(element){
        if(example == element){
            //condition = true;
        }
    });

    }

    if(condition == false){
    sraTopics.forEach(function(element){
        if(example == element){
            document.write("yay");
        }
    });

    }
    if(condition == false){
    dsTopics.forEach(function(element){
        if(example == element){
            document.write("yay");
        }
    });
}
    if(condition == false){
    cyberTopics.forEach(function(element){
        if(example == element){
            document.write("yay");
        }
    });

    }

    condition = false;




    ///// end of in progress code

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

