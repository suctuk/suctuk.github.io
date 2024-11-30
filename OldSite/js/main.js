const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');
const customEvent = document.getElementById('customevent');
const customVerb = document.getElementById('customverb');
const customAdjective = document.getElementById('customadjective')


let storyText = "\"I can't believe it Bob!\" I remember the last time :insertx: was this excited for the concert. They were practically peeing their pants the last time this happened. Besides us being a bit woozy, :insertx: and I could clearly see :inserty:, and it was crazy. \"Knucklehead, how many times do I have to tell you! :insertz:!\"";

const insertX  = ["Big Daddy", "the pope", "my dad", "your mom", "that guy frank", "the gays", "my math teacher becky", "the devil", "a turtle"];

const insertY = ["the soup kitchen", "the stage", "the man's toilet", "the crowd of children", "the HUUUUUUUUGE banana", "Disneyland", "the White House"];

const insertZ = ["Spontaneously combuste", "Melt into a puddle on the sidewalk", "Turn into a slug and crawl away", "They don't know you like I do", "A majority of them have never done drugs", "The best people know who Shakira is", "I have a rock in my pocket", "Vsauce licked a chair", "I would die for a gallon of spianch"];

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
  if(customEvent.value !== '') {
    const event = customEvent.value;
    newStory = newStory.replaceAll('the concert', event);
  }
  if(customVerb.value !== '') {
    const verb = customVerb.value;
    newStory = newStory.replaceAll('peeing their pants', verb);
  }
  if(customAdjective.value !== '') {
    const adjective = customAdjective.value;
    newStory = newStory.replaceAll('crazy', adjective);
  }

  if(document.getElementById("pg-13").checked) {
    newStory = newStory.replaceAll('this excited', 'flipping shit');
    newStory = newStory.replaceAll('Knucklehead', 'Dipshit');
    newStory = newStory.replaceAll('a bit woozy', 'fuckin wasted');

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}