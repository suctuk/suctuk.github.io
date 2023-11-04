const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');


let storyText = "I can't believe it Bob! I don't remember the last time :insertx: was this excited for :userinput:. They were practically :userinput: the last time this happened. Besides us being a bit woozy, :insertx: and I could clearly see :userinput:, and it was :inserty:. \"Knucklehead, how many times do I have to tell you! :insertz:\"";

const insertX  = ["Willy the Goblin","Big Daddy","Father Christmas"];

const insertY = ["the soup kitchen", "Disneyland", "the White House"];

const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

randomize.addEventListener('click', result);


// Completing this

function result() {

    let newStory = storyText;
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(':insertx:',xItem);
    newStory = newStory.replaceAll(':inserty:',yItem);
    newStory = newStory.replaceAll(':insertz:',zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Bob', name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14) + ' stone';
    const temperature =  Math.round((94-32)*(5/9)) + ' centigrade';
    newStory = newStory.replaceAll('300 pounds', weight);
    newStory = newStory.replaceAll('94 fahrenheit', temperature);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}