$(document).ready(function() {

  var animating = false;
  var cardsCounter = 0;
  var cardTotals = 28;
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

   var istTopics = ["Website Development (Ex. Creating websites)",
                                 "Application Development (Ex. Mobile applications are developed)",
                                 "Cloud Computing (Ex. A storage like computing services that holds data and other resources available over the internet)",
                                 "Troubleshooting (Ex. A way to identify and solve technical issues)",
                                 "Human-Centered Design (Ex. Designing for people by involving them in the process)"];

    var sraTopics = ["Puzzle Cracking (Ex. Encoding and decoding messages or solving logic puzzles)",
                              "Cryptology (Ex. Encryption, Ciphers, RSA, Knapsack)",
                               "Mitigation Strategies (Ex. Taking steps to reduce negative impact – like disaster recovery)",
                               "Vulnerability Analysis (Ex. Identifying, quantifying and ranking possible vulnerabilities to threats in a system)",
                               "Risk Assessment (Ex. Identifying potential risks that can cause harm)"];

    var dsTopics = ["Data Analysis (Ex. Reviewing and modeling data to find useful information)",
                             "Applied Mathematics (Ex.  Application of math by different fields such as science, business, and industry)",
                             "Artificial Intelligence (A.I) (Ex. Creation of intelligent machines that work and react like humans)",
                             "Big Data (Ex. Extremely large data sets that can be analyzed to identify trends)",
                             "Data Visualization (Ex. Displaying data in charts, graphs, etc.)"];

    var cyberTopics = ["Digital Crime Solving (Ex. Investigation of criminal activities in digital devices)",
                                "Cyber Threat Analysis (Ex. Identify online vulnerabilities where a cyber-attack could occur)",
                                "Data Privacy (Ex. How data is collected, shared and used)",
                                "IT Infrastructure (Ex. All the technology pieces needed for a business to deliver services or operate/run)",
                                "Ethical Hacking (Ex. Legally identifying weaknesses in information systems to safeguard against cyber criminals)"];

    var istSra = ["Work Preference: Teamwork (Ex. I prefer to work with teams)"]; //

    var istDs = ["Database Management (Ex. Organizing and maintaining data)"]; //

    var istDsSra = ["Business & Tech Applications (Ex. Technology software used by business)"];

    var dsCyber = ["Work Preference: Individual (Ex. I like to work by myself)"]; //

    var sraCyber = ["Malware (Ex. Viruses, Spyware, Worms, etc)"]; //

    var istCyberDs = ["Coding"]; //

    var sraCyberIst = ["Network Security (Ex. Protecting networks against unwanted intruders)"]; //

    var sraCyberDs = ["Analytical Thinking (Ex. Thinking logically to solve problems)"]; //

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

 function countCardSwipes() {

     var example = document.getElementsByClassName("demo__card__we"); // Array of all topics. Index starts with topics from Z-A, A being the last index.
      numOfCards--;

       var checkIst = istTopics.indexOf(example[numOfCards].textContent); // check variables is the index of the topic array. If index is -1 it means it is not within the array.
       console.log(checkIst);
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

 }

 function redirection(){

      if(numOfCards== 0){ // numOfCards == 0 if you want all cards to display

          var max = Math.max(countSRA, countIST, countDS, countCyber); //Gets totals of all 4 majors and gets Max

          if(countSRA == max){
               major+= " Security Risk Analysis";
          }
          if(countIST == max){
              major+= " Information Science & Technology";
          }
          if(countDS == max){
              major+= " Data Sciences";
          }
          if(countCyber == max){
              major+= " Cyber Security";

          }
   //*/ May not need at the moment */
         localStorage.getcountIST = countIST;
         localStorage.getcountCyber = countCyber;
         localStorage.getcountDS = countDS;
         localStorage.getcountSRA = countSRA;
         localStorage.getcardTotals = cardTotals;

           localStorage.getmajor = major;  //*** the index page will redirect to a different html according to the major with the highest score ***

           var chosenMajor =  localStorage.getmajor;

           if(chosenMajor == " Data Sciences"){
               window.location.href = '/ScorePage.html' ;
           }
           else if(chosenMajor == " Information Science & Technology"){

               window.location.href = '/ScorePageIST.html' ;

           }
           else if(chosenMajor == " Security Risk Analysis"){
               window.location.href = '/ScorePageSRA.html' ;
           }
           else if(chosenMajor == " Cyber Security"){
                 window.location.href = '/ScorePageCS.html' ;
           }
           else if((chosenMajor == (" Information Science & Technology Data Sciences"))){
               var majorWindows = ['/ScorePageIST.html','/ScorePage.html' ]
               var randWindow = Math.floor(Math.random() * 2);

               window.location.href = majorWindows[randWindow];

           }
           else if((chosenMajor == " Security Risk Analysis Data Sciences")){
               var majorWindows = ['/ScorePageSRA.html', '/ScorePage.html' ]
               var randWindow = Math.floor(Math.random() * 2);
               window.location.href = majorWindows[randWindow];

           }
           else if((chosenMajor == " Data Sciences Cyber Security")){
               var majorWindows = ['/ScorePageCS.html','/ScorePage.html' ]
               var randWindow = Math.floor(Math.random() * 2);
               window.location.href = majorWindows[randWindow];

           }
           else if((chosenMajor == " Security Risk Analysis Information Science & Technology")){
               var majorWindows = ['/ScorePageIST.html', '/ScorePageSRA.html' ]
               var randWindow = Math.floor(Math.random() * 2);
               window.location.href = majorWindows[randWindow];

           }
           else if((chosenMajor == " Information Science & Technology Cyber Security")){
               var majorWindows = ['/ScorePageIST.html', '/ScorePageCS.html' ]
               var randWindow = Math.floor(Math.random() * 2);
               window.location.href = majorWindows[randWindow];

           }
           else if((chosenMajor == " Security Risk Analysis Cyber Security") ){
               var majorWindows = ['/ScorePageSRA.html', '/ScorePageCS.html' ]
               var randWindow = Math.floor(Math.random() * 2);
               window.location.href = majorWindows[randWindow];

           }
           else if((chosenMajor == " Security Risk Analysis Information Science & Technology Data Sciences")){
                var majorWindows = ['/ScorePageIST.html', '/ScorePageSRA.html','/TinderRecruiting2018/ScorePage.html' ]
                var randWindow = Math.floor(Math.random() * 3);
                window.location.href = majorWindows[randWindow];

            }
           else if((chosenMajor == " Security Risk Analysis Information Science & Technology Cyber Security")){
                var majorWindows = ['/ScorePageIST.html', '/ScorePageSRA.html', '/ScorePageCS.html' ]
                var randWindow = Math.floor(Math.random() * 3);
                window.location.href = majorWindows[randWindow];

            }
           else if((chosenMajor == " Security Risk Analysis Data Sciences Cyber Security")){
               var majorWindows = ['/ScorePageSRA.html', '/ScorePageCS.html','/ScorePage.html' ]
               var randWindow = Math.floor(Math.random() * 3);
               window.location.href = majorWindows[randWindow];

           }
           else if((chosenMajor == " Information Science & Technology Data Sciences Cyber Security")){
               var majorWindows = ['/ScorePageCS.html','/ScorePage.html','/ScorePageIST.html' ]
               var randWindow = Math.floor(Math.random() * 3);
               window.location.href = majorWindows[randWindow];

           }
           else if((chosenMajor == " Security Risk Analysis Information Science & Technology Data Sciences Cyber Security")){
               var majorWindows = ['/ScorePageCS.html','/ScorePage.html','/ScorePageIST.html', '/ScorePageSRA.html' ]
               var randWindow = Math.floor(Math.random() * 3);
               window.location.href = majorWindows[randWindow];

           }

       }
 }

  function release() {

    if (pullDeltaX >= decisionVal) {  // Add points to each major if right swiped
      $card.addClass("to-right");
      countCardSwipes();

    } else if (pullDeltaX <= -decisionVal) {
      $card.addClass("to-left");
      numOfCards--;
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

    console.log(numOfCards);
    redirection();
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

   $("#x").click(function(){
     var cardReject = $(".demo__card")
      cardReject = cardReject[numOfCards -1 ];
      numOfCards--;
            console.log(numOfCards);
            $(cardReject).toggleClass("to-left");
            redirection();
        });

   $("#heart").click(function(){
       var cardLike = $(".demo__card")
       cardLike = cardLike[numOfCards -1 ];
        console.log(numOfCards);
        $(cardLike).toggleClass("to-right");
        countCardSwipes();
         redirection();
    });
});












