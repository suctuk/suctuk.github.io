const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* Declaring the array of image filenames */

const filenames = [
  "./images/pic1.jpg",
  "./images/pic2.jpg",
  "./images/pic3.jpg",
  "./images/pic4.jpg",
  "./images/pic5.jpg",
];

/* Declaring the alternative text for each image file */
const alternative = [
  "Blue Eye photo",
  "wavey rock",
  "purpleand white flowers",
  "Egyptian art",
  "Orange-Brown butterfly",
];

/* Looping through images */

for (let i = 0; i < 5; i++) {
  const newImage = document.createElement("img");
  newImage.setAttribute("src", filenames[i]);
  newImage.setAttribute("alt", alternative[i]);
  thumbBar.appendChild(newImage);

  newImage.addEventListener('click', () =>{
    displayedImage.src = newImage.src;
  });
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () =>{
    const current = btn.getAttribute("class");
    if (current === "dark"){
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    }
    else{
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
});

