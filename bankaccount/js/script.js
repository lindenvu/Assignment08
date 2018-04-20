/*eslint-env browser*/

var nameButton = window.document.getElementById("Name");
var output = window.document.getElementById("output");



nameButton.addEventListener(
    "click",
    function () {
        "use strict";
        var name = window.prompt("Enter your Name");
        output.innerHTML = name;
    }
);


