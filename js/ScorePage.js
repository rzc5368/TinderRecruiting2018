function majorGraphCalculations() {
//*** Card count of each major passed from index.js***
    var totalNumCards = localStorage.getcardTotals;;
    var countIST = localStorage.getcountIST;
    var countCS = localStorage.getcountCyber;
    var countDS = localStorage.getcountDS;
    var countSRA = localStorage.getcountSRA;
//***End Card count of each major passed from index.js***

//***Percentage of each major***
    var istBar = (countIST / totalNumCards) * 100;
    var csBar =  (countCS / totalNumCards) * 100;
    var dsBar =  (countDS / totalNumCards) * 100;
    var sraBar = (countSRA / totalNumCards) * 100;
//***End Percentage of each major***

//*** First four variables store a string of the name of the class for each bar in the graph in each html score page.
//The percentage number is added to the end of the string because there is a class for each percentage***
    var istClassName = "percentage percentage-" + Math.ceil(istBar);
    var csClassName = "percentage percentage-" + Math.ceil(csBar);
    var dsClassName = "percentage percentage-" + Math.ceil(dsBar);
    var sraClassName = "percentage percentage-" + Math.ceil(sraBar);
//***End variables***

//***JQuery to add class. Class name variables will change the value of the graph on the x-axis***
     $('#istBar').addClass(istClassName);
     $('#sraBar').addClass(sraClassName);
     $('#dsBar').addClass(dsClassName);
     $('#csBar').addClass(csClassName);
//***End JQuery***

//***Action Event Listeners. When bar is clicked it will redirect the user to that specific html page according to bar clicked that's associated with that major"
     document.getElementById("istBar").addEventListener("click", function() {
        window.location.href = '/TinderRecruiting2018/ScorePageIST.html' ;
        });
     document.getElementById("sraBar").addEventListener("click", function() {
          window.location.href = '/TinderRecruiting2018/ScorePageSRA.html' ;
        });
     document.getElementById("dsBar").addEventListener("click", function() {
          window.location.href = '/TinderRecruiting2018/ScorePage.html' ;
        });
     document.getElementById("csBar").addEventListener("click", function() {
          window.location.href = '/TinderRecruiting2018/ScorePageCS.html' ;
        });
//***End action Listeners***
}
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
function learnMoreActions() {
     document.getElementById("image1").addEventListener("click", function() {
        window.location.href = 'https://ist.psu.edu/students/engagement/life/clubs_orgs' ;
        });
     document.getElementById("image2").addEventListener("click", function() {
          window.location.href = 'https://ist.psu.edu/students/engagement/life' ;
        });
     document.getElementById("image3").addEventListener("click", function() {
          window.location.href = 'https://ist.psu.edu/education/opps' ;
        });
}