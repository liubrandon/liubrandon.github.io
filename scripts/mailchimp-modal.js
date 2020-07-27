var modal = document.getElementById("subscribeModal");

// Get the button that opens the modal
var btn = document.getElementById("subscribeButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the button which submits email to mailchimp
var mailchimpBtn = document.getElementById("mc-embedded-subscribe");

var emailField = document.getElementById("mce-EMAIL");


// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
  emailField.focus();
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// when user subscribes, close modal
mailchimpBtn.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
