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

  var istTopics = new Array("Website Development",
                               "Application Development",
                               "Cloud computing",
                               "Troubleshooting",
                               "Human Centered Design");

  var sraTopics = new Array("Puzzle Cracking",
                            "Cryptology / Encryption",
                             "Mitigation Strategies",
                             "Vulnerability Analysis",
                             "Risk assessment");

  var dsTopics = new Array("Data Analysis",
                           "Applied Mathematics",
                           "Artificial Intelligence (AI)",
                           "Big Data",
                           "Data visualization");

  var cyberTopics = new Array("Digital Crime Solving",
                              "Cyber Threat Analysis",
                              "Data privacy",
                              "IT infrastructure",
                              "Ethical Hacking");


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

    if (pullDeltaX >= decisionVal) {
      $card.addClass("to-right");
      countIST++;
    } else if (pullDeltaX <= -decisionVal) {
      $card.addClass("to-left");
    }

    ///// Start of Progress code

    var example = document.getElementById("card_2").textContent;


    if(example == istTopics[1]){
        document.write("success");
    }

    ///// end of in progress code

    if (Math.abs(pullDeltaX) >= decisionVal) {
      $card.addClass("inactive");

      setTimeout(function() {
        $card.addClass("below").removeClass("inactive to-left to-right");
        cardsCounter++;
        if (cardsCounter === numOfCards) {
          cardsCounter = 0;
          $(".demo__card").removeClass("below");
        }
      }, 300);
    }

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

