function q1Ans () {
    var x = document.getElementById("question1").value;
    if(x.toLowerCase() == "beyond visual range")
    {
        document.getElementById("answer1").innerHTML = "Correct!";
        document.getElementById('answer1').style.color = 'green';
    }

    else {
        document.getElementById('answer1').style.color = 'red';
        document.getElementById("answer1").innerHTML = "Incorrect!, please read the part I, introduction in the document.";
    }
}

function q2Ans() {
var answerInput2 = document.getElementsByName("q2");
var answer2 = document.getElementById("answer2");
var submitBtn2 = document.getElementById("q2Submit");
for (var i = 0; i < answerInput2.length; i++) {
    if (answerInput2[i].checked) {
        if (answerInput2[i].value === "a") {
            answer2.style.color = 'green';
            answer2.innerHTML = "Correct! There are: Semi-active radar homing and Active radar homing missiles";
        } else {
            answer2.style.color = 'red';
            answer2.innerHTML = "Incorrect, please read the introduction part in the document.";
            document.getElementById("q2Reset").style.display = "inline";
        }
        break;
    }
}
}
function resetQ2() {
var answerInput2 = document.getElementsByName("q2");
var answer2 = document.getElementById("answer2");
for (var i = 0; i < answerInput2.length; i++) {
    answerInput2[i].checked = false;
}
answer2.innerHTML = "";
document.getElementById("q2Reset").style.display = "none";

}

function q3Ans() {
var answerInput3 = document.getElementsByName("q3");
var answer3 = document.getElementById("answer3");
var submitBtn3 = document.getElementById("q3Submit");
for (var i = 0; i < answerInput3.length; i++) {
    if (answerInput3[i].checked) {
        if (answerInput3[i].value === "d") {
            answer3.style.color = 'green';
            answer3.innerHTML = "Correct!";
        } else {
            answer3.style.color = 'red';
            answer3.innerHTML = "Incorrect, please read chapter II in the document.";
            document.getElementById("q3Reset").style.display = "inline";
        }
        break;
    }
}
}
function resetQ3() {
var answerInput = document.getElementsByName("q3");
var answer = document.getElementById("answer3");
for (var i = 0; i < answerInput.length; i++) {
    answerInput[i].checked = false;
}
answer.innerHTML = "";
document.getElementById("q3Reset").style.display = "none";

}

function q4Ans () {
    var x = document.getElementById("question4").value;
    if(x.toLowerCase() == "fire control radar")
    {
        document.getElementById("answer4").innerHTML = "Correct!";
        document.getElementById('answer4').style.color = 'green';
    }

    else {
        document.getElementById('answer4').style.color = 'red';
        document.getElementById("answer4").innerHTML = "Incorrect!, please read the part II, operating AIM-120 in the document.";
    }
}

function q5Ans () {
    var x = document.getElementById("question5").value;
    if(x.toLowerCase() == "radar warning receiver")
    {
        document.getElementById("answer5").innerHTML = "Correct!";
        document.getElementById('answer5').style.color = 'green';
    }

    else {
        document.getElementById('answer5').style.color = 'red';
        document.getElementById("answer5").innerHTML = "Incorrect!, please read the part II, operating AIM-120 in the document.";
    }
}

function q6Ans() {
    // Get the checkboxes for the question
    const q6a = document.getElementById("q6a");
    const q6b = document.getElementById("q6b");
    const q6c = document.getElementById("q6c");
    const q6d = document.getElementById("q6d");
  
    // Check if the user selected AIM-120B and AIM-120C
    if (q6b.checked && q6c.checked && !q6a.checked && !q6d.checked) {
      document.getElementById("answer6").innerHTML = "Correct!";
      document.getElementById("answer6").style.color= "green";
    } else {
      document.getElementById("answer6").innerHTML = "Incorrect!, please read the part II, operating AIM-120 in the document.";
      document.getElementById("answer6").style.color= "red";
      document.getElementById("q6Reset").style.display = "inline";

    }
  }


function resetQ6() {
var answerInput = document.getElementsByName("question6");
var answer = document.getElementById("answer6");
for (var i = 0; i < answerInput.length; i++) {
    answerInput[i].checked = false;
}
answer.innerHTML = "";
document.getElementById("q6Reset").style.display = "none";
}

function q7Ans() {
    // Get the checkboxes for the question
    const q7a = document.getElementById("q7a");
    const q7b = document.getElementById("q7b");
    const q7c = document.getElementById("q7c");
    const q7d = document.getElementById("q7d");
    const q7e = document.getElementById("q7e");
    const q7f = document.getElementById("q7f");
    // Check if the user selected AIM-120B and AIM-120C
    if (q7a.checked && q7c.checked && q7e.checked && !q7b.checked && !q7d.checked && !q7f.checked) {
      document.getElementById("answer7").innerHTML = "Correct!";
      document.getElementById("answer7").style.color= "green";
    } 
    else if(q7f.checked)
    {
        document.getElementById("answer7").innerHTML = "Incorrect!, please read the part II, operating AIM-120 in the document. RWR is to detect contacts, not to access weapons.";
        document.getElementById("answer7").style.color= "red";
        document.getElementById("q7Reset").style.display = "inline";
    }
    
    else {
      document.getElementById("answer7").innerHTML = "Incorrect!, please read the part II, operating AIM-120 in the document.";
      document.getElementById("answer7").style.color= "red";
      document.getElementById("q7Reset").style.display = "inline";

    }
  }

  function resetQ7() {
    var answerInput = document.getElementsByName("question7");
    var answer = document.getElementById("answer7");
    for (var i = 0; i < answerInput.length; i++) {
        answerInput[i].checked = false;
    }
    answer.innerHTML = "";
    document.getElementById("q7Reset").style.display = "none";
    }