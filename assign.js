// VARIABLES

function showVariables(){
    let name = "Shreya";
    let age = 20;
    let city = "Nagpur";

    document.getElementById("variableOutput").innerHTML =
    "Name : " + name + "<br>" +
    "Age : " + age + "<br>" +
    "City : " + city;

}

// DATATYPES

function showDatatypes(){
    let name = "Shreya";
    let age = 20;
    let isStudent = true;

    document.getElementById("datatypeOutput").innerHTML =
    "Datatype of Name : " + typeof(name) + "<br>" +
    "Datatype of Age : " + typeof(age) + "<br>" +
    "Datatype of Student : " + typeof(isStudent);
}

// PRODUCT DETAILS

function showProduct(){
    let productName = "Headphones";
    let price = 1500;
    let quantity = 2;

    let total = price * quantity;

    document.getElementById("productOutput").innerHTML =
    "Product Name : " + productName + "<br>" +
    "Price : " + price + "<br>" +
    "Quantity : " + quantity + "<br>" +
    "Total Price : " + total;
}

// OPERATORS

function showOperators(){
    let a=Number(document.getElementById("firstnumber").value)
    let b=Number(document.getElementById("secondnumber").value)

    document.getElementById("operatorOutput").innerHTML =
    "Addition : " + (a + b) + "<br>" +
    "Subtraction : " + (a - b) + "<br>" +
    "Multiplication : " + (a * b) + "<br>" +
    "Division : " + (a / b);
}

// CONDITIONS

function checkAge(){
    let age=Number(document.getElementById("ageinput").value);

    if(age >= 18){
        document.getElementById("conditionOutput").innerHTML =
        "Person is Adult";
    }

    else{
        document.getElementById("conditionOutput").innerHTML =
        "Person is Minor";
    }

}


function checkNumber(){
    let number=Number(document.getElementById("numberinput").value);

    if(number % 2 == 0){
        document.getElementById("conditionOutput").innerHTML =
        "Number is Even";
    }

    else{
        document.getElementById("conditionOutput").innerHTML =
        "Number is Odd";
    }

}


function checkResult(){
    let marks=Number(document.getElementById("marksinput").value);

    if(marks >= 35){
        document.getElementById("conditionOutput").innerHTML =
        "Pass";
    }

    else{
        document.getElementById("conditionOutput").innerHTML =
        "Fail";
    }

}


function findGreater(){
    let number1=Number(document.getElementById("fristnumber").value);
    let number2=Number(document.getElementById("secondnumber").value);

    if(num1 > num2){
        document.getElementById("conditionOutput").innerHTML =
        num1 + " is Greater";
    }

    else{
        document.getElementById("conditionOutput").innerHTML =
        num2 + " is Greater";
    }

}

function checkValue(){
    let value=Number(document.getElementById("valueinput").value);

    if(value > 0){
        document.getElementById("conditionOutput").innerHTML =
        "Positive Number";
    }

    else if(value < 0){
        document.getElementById("conditionOutput").innerHTML =
        "Negative Number";
    }

    else{
        document.getElementById("conditionOutput").innerHTML =
        "Zero";
    }

}


// LOOPS

function printNumbers(){
    let output = "";

    for(let i = 1; i <= 10; i++){

        output += i + " ";
    }

    document.getElementById("loopOutput").innerHTML =
    output;

}


function printEven(){
    let output = "";

    for(let i = 1; i <= 20; i++){

        if(i % 2 == 0){

            output += i + " ";

        }

    }

    document.getElementById("loopOutput").innerHTML =
    output;
}


function printTable(){
    let output = "";

    for(let i = 1; i <= 10; i++){

        output += "5 * " + i + " = " + (5*i) + "<br>";

    }

    document.getElementById("loopOutput").innerHTML =
    output;

}


function reverseNumbers(){
    let output = "";

    for(let i = 10; i >= 1; i--){

        output += i + " ";

    }

    document.getElementById("loopOutput").innerHTML =
    output;
}
    


function findSum(){
    let sum = 0;

    for(let i = 1; i <= 10; i++){

        sum += i;

    }

    document.getElementById("loopOutput").innerHTML =
    "Sum = " + sum;

}



// FUNCTIONS

function showGreeting(){
    function greet(){

        return "Welcome Students";

    }

    document.getElementById("functionOutput").innerHTML =
    greet();

}


function showAddition(){
    function add(a,b){

        return a + b;

    }

    document.getElementById("functionOutput").innerHTML =
    "Addition = " + add(10,20);
}


function showEvenOdd(){
    function checkEven(number){

        if(number % 2 == 0){
            return "Even Number";
        }

        else{
            return "Odd Number";
        }

    }

    document.getElementById("functionOutput").innerHTML =
    checkEven(7);
}

// EVENTS
function showAlert(){

    alert("Button Clicked!");

}


function changeBackground(){

    document.body.style.background =
    "#1e1b4b";

}


function changeText(){

    document.getElementById("eventHeading").innerHTML =
    "Text Changed Successfully";

}

// DOM
function changeHeading(){

    document.getElementById("domHeading").innerHTML =
    "JavaScript is Fun";

}


function changeColor(){

    document.getElementById("domHeading").style.color =
    "#22c55e";

}


