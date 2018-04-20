/*eslint-env browser*/

var nameButton = window.document.getElementById("Name");
var name;
function getName() {
    "use strict";
    name = window.prompt("Enter your Name");
}



nameButton.addEventListener("click", getName());

var output = window.document.getElementById("output");
output.innerHTML = name;