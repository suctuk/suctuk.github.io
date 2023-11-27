const newBtn = document.querySelector('#js-new-quote').addEventListener('click', getQuote);
const answerBtn = document.querySelector('#js-resources').addEventListener('click', displayResource);

const questionTxt = document.querySelector('#js-quote-text');
let answerTxt = document.querySelector('#js-resource-text');

let type;
let participants;
let price;
let link;

// this is the endpoint for the API that we want to get a reponse from
const endpoint = 'https://www.boredapi.com/api/activity';

async function getQuote() {

    const selectedType = document.getElementById('activityType').value;

   // try -> tries something; if it returns an error, it puts us into the catch block
    try {
        const timestamp = new Date().getTime();
        //const randomParam = Math.random(); // Add a random parameter to try and fix cache issues
        const response = await fetch(`${endpoint}?type=${selectedType}&timestamp=${timestamp}`);
        // if !response.ok is "if the response ISN'T okay (status code 200)"
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();

        console.log(json);
        
        // JSON is a dictionary, which is like a list; we call specific pieces of information out based on the 'key' associated with that value
        displayQuote(json['activity']);
        type = json['type'];
        participants = json['participants'];
        price = json['price'];
        link = json['link'];

        answerTxt.textContent = '';
    }
    catch(err) {
        console.log(err);
        alert('Failed to fetch new quote');
    }
}


// this function shows the question
function displayQuote(question) {
    questionTxt.textContent = question;
}

// this function shows the answer
function displayResource() {
    answerTxt.textContent = 'friends: ' + participants + ' price: ' + price + ' ';
    if (link !== '') {

        const linkButton = document.createElement('button');
        linkButton.textContent = 'Go to Link';

        linkButton.addEventListener('click', function() {
            window.open(link, '_blank');
        });
        answerTxt.appendChild(linkButton);
    } 
}

// we run getQuote once when the script first loads to populate a question
// when the page is loading
getQuote();




// {
//     "activity": "Learn how to beatbox",
//     "type": "recreational",
//     "participants": 1,
//     "price": 0,
//     "link": "https://en.wikipedia.org/wiki/Beatboxing",
//     "key": "8731710",
//     "accessibility": 1
//   }