//from w3 schools/
document.querySelector("#clock").addEventListener("click", timeToPhone);
document.querySelector("#reset").addEventListener("click", resetBtn);
// document.querySelector("#backspace").addEventListener("click", backspace);

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
//   currentNumber.textContent = phoneNumber;
// }

function timeToPhone() {
      console.log(phoneNumber);
      phoneNumber += href;
      console.log(phoneNumber);

      var currentNumber = document.getElementById("phone");

      currentNumber.textContent = phoneNumber;



}
