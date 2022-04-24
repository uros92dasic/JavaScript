//random number gen (roll the dice)
let x;
let y;
let z;

document.getElementById("rollButton").onclick = function(){
    x = Math.floor(Math.random() * 6) + 1;
    y = Math.floor(Math.random() * 6) + 1;
    z = Math.floor(Math.random() * 6) + 1;

    document.getElementById("xLabel").innerHTML = x;
    document.getElementById("yLabel").innerHTML = y;
    document.getElementById("zLabel").innerHTML = z;
}

//counter
let count = 0;

document.getElementById("decreaseButton").onclick = function(){
    count-=1;
    document.getElementById("countLabel").innerHTML = count;
}
document.getElementById("resetButton").onclick = function(){
    count=0;
    document.getElementById("countLabel").innerHTML = count;
}
document.getElementById("increaseButton").onclick = function(){
    count+=1;
    document.getElementById("countLabel").innerHTML = count;
}

//hypotenuse
let a;
let b;
let c;

document.getElementById("submitButton").onclick = function(){
    a = document.getElementById("aTextBox").value;
    a = Number(a);

    b = document.getElementById("bTextBox").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    document.getElementById("cLabel").innerHTML = "Side C: "+c;
}

//NumberGuessingGame
const answer = Math.floor(Math.random() * 10 + 1);
let guesses = 0;

document.getElementById("submitBtn").onclick = function(){
    let guess = document.getElementById("guessField").value;
    guesses += 1;

    if(guess == answer){
        alert(`${answer} is the number! It took you ${guesses} guesses.`);
    }
    else if(guess < answer){
        alert("Too small!");
    }
    else{
        alert("Too large!");
    }
}

//temperature
document.getElementById("tempBtn").onclick = function(){
    let temp;
    if(document.getElementById("cButton").checked){
        temp = document.getElementById("textBox").value;
        temp = Number(temp);
        temp = toCelsius(temp);
        document.getElementById("tempLabel").innerHTML = temp + "°C";
    }
    else if(document.getElementById("fButton").checked){
        temp = document.getElementById("textBox").value;
        temp = Number(temp);
        temp = toFahrenheit(temp);
        document.getElementById("tempLabel").innerHTML = temp + "°F";
    }
    else{
        document.getElementById("tempLabel").innerHTML = "Select a unit..."
    }
}

function toCelsius(temp){
    return (temp - 32) * (5/9);
}

function toFahrenheit(temp){
    return temp * 9 / 5 + 32;
}