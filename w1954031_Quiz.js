// <!--Timer calculation-->

var timer;
var sec = 60;
var SC;
var correctAnswers;
var selectedAnswers = []


window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}


window.onload = function timecount() {
    timer = setInterval(function () {
        sec--;
        if(sec < 6) {
          document.getElementById("timer-header").style.color = "red"
        }
        if (sec == 0) {
            clearTimeout(timer);
            check()
          }
        document.getElementById("timer").innerHTML = sec;
    }, 1000);
      SC = document.getElementById("scoreCard");
      var span = document.getElementsByClassName("close")[0]

      span.onclick = function() {
        SC.style.display = "none";
      }

      window.onclick = function(event) {
        if (event.target == SC) {
          SC.style.display = "none";
        }
      }
      correctAnswers = document.getElementsByClassName("correct")

      document.getElementById("check").onclick = () => check()
      let btn = document.getElementById("restart");
      btn.onclick = () => {
        window.location.reload()
        console.log("runs ");
      }
      btn.style.visibility = 'hidden'
}

function markFalse(elem){
  elem.style.color = "aliceblue"
  elem.style.background = "red"
}

function markTrue(elem){
  elem.style.color = "aliceblue"
  elem.style.background = "#1abc9c"
}

//Answer validation
function check() {
    clearTimeout(timer);
    var correct = 0;
    var score = 0;

    // compute the selected answers
    const matches = document.querySelectorAll(".inner-box input");
    matches.forEach((item) => {
      if(item.checked) selectedAnswers.push(item)
    });


    // for each correct answer
    for (item of correctAnswers) {
        markTrue(item.nextElementSibling)
    }

    //for each of questions --> validate
    selectedAnswers.forEach((item) => {
      if(item.classList.contains("correct")) {
        // answer is corrent
        correct += 1; score += 10;
      }else {
        markFalse(item.nextElementSibling)
      }
    });


var messages = ["EXCELLENT WORK..!", "AWESOME JOB..!" , "GOOD JOB..!" , "NOT BAD,But don't worry..!" ];

let SCData = {
  correct : correct,
  score : score,
  wrong : 10-correct,
}

if (correct == 10) {
    SCData.message = messages[0]
}
else if(correct > 7 ) {
      SCData.message = messages[1]
}
else if (correct > 5) {
      SCData.message = messages[2]
}
else {
      SCData.message = messages[3]
}

SCData.time = 60 - sec;

// setting the data for the
const spans = document.querySelectorAll(".Sc_body span")
for (key in SCData) {
spans.forEach((span) => {
  if(span.id == key) span.innerHTML = SCData[key]
});
}

SC.style.display = "block"

// disable and enable buttons
document.getElementById("check").style.visibility = 'hidden';
document.getElementById("restart").style.visibility = 'visible';

var nodes = document.getElementById("quiz").getElementsByTagName('*');
for(var i = 0; i < nodes.length; i++){
  if(nodes[i].tagName == "BUTTON"){
    nodes[i].disabled = false;

  }else {
      nodes[i].disabled = true;
  }
}


}

