//
//function displayMajor() {
//
//    document.getElementById("match").innerHTML = localStorage.getmajor;
//
//};


//function displayMajor() {
//
//    var chosenMajor =  localStorage.getmajor;
//
//    if(chosenMajor == "Data Sciences"){
//        document.getElementById("match").innerHTML = localStorage.getmajor;
//    }
//    else if(chosenMajor == "Information Science & Technology"){
//        document.getElementById("match").innerHTML = localStorage.getmajor;
//
//
//    }
//    else if(chosenMajor == "Security Risk Analysis"){
//         document.getElementById("match").innerHTML = localStorage.getmajor;
//    }
//    else if(chosenMajor == "Cyber Security"){
//          document.getElementById("match").innerHTML = localStorage.getmajor;
//    }
//
//};

function majorGraphCalculations() {

    var totalNumCards = localStorage.getcardTotals;;
    var countIST = localStorage.getcountIST;
    var countCS = localStorage.getcountCyber;
    var countDS = localStorage.getcountDS;
    var countSRA = localStorage.getcountSRA;

    var istBar = (countIST / totalNumCards) * 100;
    var csBar =  (countCS / totalNumCards) * 100;
    var dsBar =  (countDS / totalNumCards) * 100;
    var sraBar = (countSRA / totalNumCards) * 100;

    // ****Testing Purposes.***8
    //    console.log(totalNumCards);
    //    console.log(countDS);
//        console.log(dsBar);
//        console.log(csBar);
//        console.log(istBar);
//        console.log(sraBar);
    // **** End Testing****

    var currentMajorPage = document.getElementById("match").textContent;

    var istClassName = "percentage percentage-" + Math.ceil(istBar);
    var csClassName = "percentage percentage-" + Math.ceil(csBar);
    var dsClassName = "percentage percentage-" + Math.ceil(dsBar);
    var sraClassName = "percentage percentage-" + Math.ceil(sraBar);

    console.log("IST: " + istClassName);
    console.log("CS: " + csClassName);
    console.log("SRA: " + sraClassName);
    console.log("DS: " + dsClassName);

    // ****Testing Purposes.***

//        $('#istBar').addClass(istClassName);
//        $('#sraBar').addClass(sraClassName);
//        $('#dsBar').addClass(dsClassName);
//        $('#csBar').addClass(csClassName);
    // **** End Testing****


//    if(currentMajorPage == "Information Sciences & Technology"){
//
//       $('#istBar').addClass('percentage percentage-95');
//       $('#dsBar').addClass('percentage percentage-1');
//       $('#csBar').addClass('percentage percentage-1');
//       $('#sraBar').addClass('percentage percentage-1');
//
//
//    }
//    if(currentMajorPage == "Data Science"){
//
//       $('#dsBar').addClass('percentage percentage-1');
//    }
//    if(currentMajorPage == "Cyber Security"){
//
//       $('#csBar').addClass('percentage percentage-1');
//    }
//    if(currentMajorPage == "Security Risk Analysis"){
//
//       $('#sraBar').addClass('percentage percentage-1');
//    }



}

