// Found this solution on w3schools:

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var button = document.getElementsByClassName("button");

// Open modal on button
btn.onclick = function () {
  modal.style.display = "block";
}

//Close the modal on x
span.onclick = function () {
  modal.style.display = "none";
}

// Close when user clicks outside of modal
window.onclick = function (event) {
  if (event.target == modal) {
    this.modal.style.display = "none";
  }
}