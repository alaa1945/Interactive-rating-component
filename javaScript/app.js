// Select the card and thankyou divisions
let rating_Card = document.querySelector(".rating-card");
let thankyou_Card = document.querySelector(".thankyou-card");

// Select the Rating div
let rating_Btns = Array.from(document.getElementsByClassName("rating"));
// Select the submit btn
let submit_Btn = document.getElementById("card-Submit-Btn");
let selected_rating = document.getElementById("selected-rating");

// Get the rating value and store it
let rating = 0;
for (let ratingValue of rating_Btns) {
  ratingValue.addEventListener("click", function () {
    rating = Number.parseInt(ratingValue.innerHTML);
  });
}

// hide the rating_Card div and show the thankyou_Card if the user submited his review
submit_Btn.addEventListener("click", function () {
  if (rating == 0) {
    alert("Please select any number!");
  } else {
    selected_rating.innerHTML = rating;
    rating_Card.classList.add("hide");
    thankyou_Card.classList.remove("hide");
  }
});
