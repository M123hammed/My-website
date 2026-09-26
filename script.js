const paragraph = document.querySelector("p");

paragraph. textContent = "I am learning web development";

const button = document.querySelector("button");

button.addEventListener("click", function() {
    alert("Thank you for contacting me");
});

const heading = document.querySelector("h1");
heading.textContent = "Welcome to my website";

paragraph.style.color = "red";

heading.style.color = "green";

document.body.style.backgroundColor = "lightblue";

const themeButton =
document.querySelector("#themeButton");

themeButton.addEventListener("click", function() {
    document.body.style.backgroundColor = "black";
});