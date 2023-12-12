//from w3 schools/
document.querySelector("#clock").addEventListener("click", timeToPhone);
document.querySelector("#reset").addEventListener("click", resetBtn);
document.querySelector("#backspace").addEventListener("click", backspace);

// reference the phone number locally, not over in json because it is hard to write to the file. Would basically be a database. 
let href = "0";

let phoneNumber = "";

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

  document.getElementById("alarm").innerHTML = alarmMinutes + ":" + alarmSeconds;
  document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}


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

      if(phoneNumber.length === 10){
        alert("You have 10 digits! Hit submit if you are done!");
      }
      else if(phoneNumber.length > 10){
        alert("ToO LoNG");
      }

}
