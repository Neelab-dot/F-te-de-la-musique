// Meesgae of first photo :
/*const msg = document.querySelector(".image--1");
msg.addEventListener("mouseenter", function (e) {
  alert("Wow! Your are looking the first photo of our website... 🎸");
}); */

/*const message = document.createElement("div");
message.classList.add("cookie-message");
message.textContent =
  "We use your reviews for improving functionality and analytics of out page!🤗💥";
header.prepend(message); */

const cookieMessage = document.getElementById("cookie-message");
const acceptButton = document.getElementById("accept-cookies");

function checkCookie() {
  let cookieValue = document.cookie.replace(
    /(?:(?:^|.*;)acceptedCookies=([^;]*))?/,
    "$1"
  );
  return cookieValue !== "";
}

if (!checkCookie()) {
  cookieMessage.style.display = "block";
}

acceptButton.addEventListener("click", function () {
  const expires = new Date();
  expires.setDate(expires.getDate() + 30); // Set expiry for 30 days
  document.cookie =
    "acceptedCookies=true; expires=" + expires.toUTCString() + "; path=/";
  cookieMessage.style.display = "none";
});
