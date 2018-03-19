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

/*
String length
function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength - 3) + '...';
        // итоговая длина равна maxlength
    }

    return str;
}*/
alert( truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) );
alert( truncate("Всем привет!", 20) );

function extractCurrencyValue(str) {
    return parseInt(str.slice(1));
}

console.log(extractCurrencyValue("$120"));