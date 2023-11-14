//new quote button stuff

const newBtn = document.querySelector('#js-new-quote').addEventListener('click', getQuote);
const answerBtn = document.querySelector('js-tweet').addEventListener('click', displayAnswer);

const questionTxt = document.querySelector('#js-quote-text');
let answerTxt = document.querySelector('#js-answer-text');

let answer = '';

//API
const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";

async function getQuote() {
  //console.log("Test");

  //safety logic, try is the code we want to try run, catch(err) runs if something goes wrong
  try {
    const response = await fetch(endpoint);
    //if the reponse we get is not 200, then we catch that reponse and throw an error
    if (!response.ok) {
      throw Error(response.statusText);
    }
    //this is the else in case everything works out.
    const json = await response.json();

    // console.log(json['question']); //show the question in the console
    displayQuote(json['question']);
    answer = json['answer'];
    answerTxt.textContent = '';

  } catch (err) {
    console.log(err);
    alert('Failed to fetch new quote');
  }
}


function displayQuote(question){
    // const questionTxt = document.querySelector('#js-quote-text');

    questionTxt.textContent = question; //we are changing the text everytime we run
}

function displayAnswer(answer){
    // const answerTxt = document.querySelector('#js-answer-text');

    answerTxt.textContent = answer; //we are changing the text everytime we run
}


getQuote();