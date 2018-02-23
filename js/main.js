/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
document.getElementById("btnSbm").addEventListener("click", getRandomInt);

function getRandomInt() {
    var min = document.getElementById("firstNumber").value;
    var max = document.getElementById("secondNumber").value;
    var result = Math.floor(Math.random() * (max - min + 1)) + min;
    alert("Your random number is " + result);
}