function majorGraphCalculations() {
//*** Card count of each major passed from index.js***
    var totalNumCards = localStorage.getcardTotals;;
    var countIST = localStorage.getcountIST;
    var countCS = localStorage.getcountCyber;
    var countDS = localStorage.getcountDS;
    var countSRA = localStorage.getcountSRA;
//***End Card count of each major passed from index.js***

//***Percentage of each major***
    var istBar = (countIST / 10) * 100;
    var csBar =  (countCS / 10) * 100;
    var dsBar =  (countDS / 10) * 100;
    var sraBar = (countSRA / 10) * 100;
//***End Percentage of each major***

//***Start Front-end percentage representation on graph***
    var graphPercentageIst = document.querySelector('#istBar');
    var graphPercentageSra = document.querySelector('#sraBar');
    var graphPercentageDs = document.querySelector('#dsBar');
    var graphPercentageCs = document.querySelector('#csBar');


    graphPercentageIst.setAttribute('percentage1', "   " + Math.ceil(istBar) + "%" );
    graphPercentageSra.setAttribute('percentage1', Math.ceil(sraBar) + "%" );
    graphPercentageDs.setAttribute('percentage1', Math.ceil(dsBar) + "%" );
    graphPercentageCs.setAttribute('percentage1', Math.ceil(csBar) + "%" );
//***End Front-end percentage representation on graph***


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
        window.location.href = '/ScorePageIST.html' ;
        });
     document.getElementById("sraBar").addEventListener("click", function() {
          window.location.href = '/ScorePageSRA.html' ;
        });
     document.getElementById("dsBar").addEventListener("click", function() {
          window.location.href = '/ScorePage.html' ;
        });
     document.getElementById("csBar").addEventListener("click", function() {
          window.location.href = '/ScorePageCS.html' ;
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
function learnMoreDsActions() {

    document.getElementById("dsInformation").addEventListener("click", function() {
         window.location.href = 'https://ist.psu.edu/discover-data-scieces-major' ;
         });
}

function learnMoreCsActions() {
     document.getElementById("csInformation").addEventListener("click", function() {
          window.location.href = 'https://ist.psu.edu/discover-cyber-major' ;
        });
}

function learnMoreIstActions() {
     document.getElementById("istInformation").addEventListener("click", function() {
          window.location.href = 'https://ist.psu.edu/discover-ist-major' ;
        });
}

function learnMoreSraActions() {
     document.getElementById("sraInformation").addEventListener("click", function() {
          window.location.href = 'https://ist.psu.edu/discover-sra-major' ;
        });
}

function formActions() {
   document.getElementById("recruitingForm").addEventListener("click", function() {
   window.location.href = 'https://sites.ist.psu.edu/recruiting/form' ;
   });

}