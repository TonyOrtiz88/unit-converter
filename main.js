// select input field 
var input = document.querySelector("#input");

//Select unit selection 
var unit = document.querySelector("#unit")

//catch user input and unit change
input.addEventListener("input", convert);
unit.addEventListener("input", convert);

function convert () {

//get value of user input 
var value = input.value;
var unitValue = unit.value;
var output = document.querySelector("#output");

//show output when there is a value
if(value !== "") {
    output.style.display = "block";
} else {
    output.style.display = "none";
}

//check unit type
switch(unitValue) {
    case "grams":
        convertGrams(value)
        break;
    case "ounces":
        break;
    case "lbs":
        convertLbs(value);
        break;
    case "kilograms":
        break;
    case "inches":
        break;
    case "meters":
        break;
    case "miles":

}

//Grams
document.querySelector("#gram").textContent = value * 453.592;

//Kilograms
document.querySelector("#kilogram").textContent = value * 453.592 / 1000;

//Ounces
document.querySelector("#ounce").textContent = value * 16;

}

var card1 = document.querySelector("#card-1");
var card2 = document.querySelector("#card-2");
var card3 = document.querySelector("#card-3");

function convertLbs(value) {
card1.querySelector("h5").textContent = "Grams:"
card2.querySelector("h5").textContent = "Kilorams:"
card3.querySelector("h5").textContent = "Ounces:"

card1.querySelector("div").textContent = value * 453.592
card2.querySelector("div").textContent = value * 453.592 / 1000
card3.querySelector("div").textContent = value * 16
}
function convertGrams(value) {
    card1.querySelector("h5").textContent = "Kilograms:"
    card2.querySelector("h5").textContent = "Ounces:"
    card3.querySelector("h5").textContent = "Lbs:"
    
    card1.querySelector("div").textContent = value * 1000;
    card2.querySelector("div").textContent = value * 0.035274;
    card3.querySelector("div").textContent = value * 0.00220462;