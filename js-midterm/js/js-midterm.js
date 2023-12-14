document.querySelector("#clock").addEventListener("click", timeToPhone);
document.querySelector("#reset").addEventListener("click", resetBtn);
document.querySelector("#submit").addEventListener("click", celebrate);

// document.querySelector("#backspace").addEventListener("click", backspace);

// reference the phone number locally, not over in json because it is hard to write to the file. Would basically be a database.
let href = "0";

let phoneNumber = "";
// Adapted from base code: https://www.w3schools.com/js/tryit.asp?filename=tryjs_timing_clock
function startTime() {
  const today = new Date();
  let h = today.getHours();
  href = h;
  let m = today.getMinutes();
  let s = today.getSeconds();

  m = checkTime(m);
  s = checkTime(s);

  let alarmMinutes = 60 - m;
  let alarmSeconds = 60 - s;

  document.getElementById("alarm").innerHTML =
    alarmMinutes + " min " + alarmSeconds + " sec";
  document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}
// end of adapted code.

function resetBtn() {
  alert("Your Phone Number has been reset");
  phoneNumber = "";
  var currentNumber = document.getElementById("phone");

  currentNumber.textContent = "Phone Number Goes Here";
}
// function backspace(){
//   var currentNumber = document.getElementById("phone");
//   currentNumber.textContent.length -= 1;
// }

// function backspace() {
//   var currentNumber = document.getElementById("phone");

//   // Check if the phone number is not empty
//   if (phoneNumber.length > 0) {
//     // Shorten the length by 1 digit
//     var shortenedNumber = currentNumber.replace(/.$/,"");

//   }
//   currentNumber.textContent = shortenedNumber;
//   console.log(currentNumber);
//   console.log(shortenedNumber);
// }

//add a button to max the number to 10

//add a timer for the next hour

function timeToPhone() {
  console.log(phoneNumber);
  phoneNumber += href;
  console.log(phoneNumber);

  var currentNumber = document.getElementById("phone");

  currentNumber.textContent = phoneNumber;

  if (phoneNumber.length === 10) {
    alert("You have 10 digits! Hit submit if you are done!");
  } else if (phoneNumber.length > 10) {
    alert("ToO LoNG");
  }
}

//pulled from Balls In class assignment
function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

//adapted from code from chatGPT
function celebrate() {
  if (phoneNumber.length < 10) {
    alert("You do not have enough digits");
    return;
  } else if (phoneNumber.length > 10) {
    alert("ToO LoNG");
    return;
  } else if(phoneNumber.length === 10){
    const confettiContainer = document.createElement("div");
    confettiContainer.classList.add("confetti-container");

    for (let i = 0; i < 100; i++) {
      const confetti = document.createElement("div");
      confetti.classList.add("confetti");
      confetti.style.left = Math.random() * window.innerWidth + "px";
      confetti.style.animationDuration = Math.random() * 1 + 0.5 + "s";
      confetti.style.backgroundColor = randomRGB();
      confettiContainer.appendChild(confetti);
    }

    document.body.appendChild(confettiContainer);

    // Remove confetti after animation duration
    setTimeout(() => {
      document.body.removeChild(confettiContainer);
    }, 1500);
  }
}
