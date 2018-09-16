/***** DECLARATIONS *****/

// Defaults
let content = '';
let errMsg = "Please do not leave blank, ";
let checkColor = false;
let checkSize = false;

// Error messages
const errName = document.getElementById("errName");
const errEmail = document.getElementById("errEmail");
const errAddress1 = document.getElementById("errAddress1");
const errCity = document.getElementById("errCity");
const errState = document.getElementById("errState");

// Form 
const form = document.querySelector("form");
const inputs = document.getElementsByTagName('input');

//Shirt sizes
const smallSize = document.getElementById("small");
const mediumSize = document.getElementById("medium");
const largeSize = document.getElementById("large");

//Shirt colors
const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
const black = document.getElementById("black");

// Shipping info
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const address1 = document.getElementById("address1");
const address2 = document.getElementById("address2");
const city = document.getElementById("city");
const state = document.getElementById("state");
const zipcode = document.getElementById("zipcode");
const country = document.getElementById("country");
const size = document.getElementsByName("size");
const color = document.getElementsByName("color");

//Order summary section
const orderSum = document.getElementsByClassName("orderSummary");
const orders = document.getElementById("orderSum");


/***** EVENT LISTENERS *****/

// For validations
document.getElementById("fullname").addEventListener("blur", nameValidate);
document.getElementById("email").addEventListener("blur", emailValidate);
document.getElementById("address1").addEventListener("blur", address1Validate);
document.getElementById("address2").addEventListener("blur", address2Validate);
document.getElementById("city").addEventListener("blur", cityValidate);
document.getElementById("state").addEventListener("blur", stateValidate);
document.getElementById("zipcode").addEventListener("blur", zipcodeValidate);
document.getElementById("country").addEventListener("click", countryValidate);

// For shipping info 
document.getElementById("small").addEventListener("click", autoFill, false);
document.getElementById("medium").addEventListener("click", autoFill, false);
document.getElementById("large").addEventListener("click", autoFill, false);
document.getElementById("green").addEventListener("click", autoFill, false);
document.getElementById("red").addEventListener("click", autoFill, false);
document.getElementById("black").addEventListener("click", autoFill, false);
document.getElementById("blue").addEventListener("click", autoFill, false);
document.getElementById("fullname").addEventListener("input", autoFill, false);
document.getElementById("address1").addEventListener("input", autoFill, false);
document.getElementById("city").addEventListener("input", autoFill, false);
document.getElementById("state").addEventListener("input", autoFill, false);
document.getElementById("zipcode").addEventListener("input", autoFill, false);

// To submit form
form.addEventListener("submit", e=>
{
    e.preventDefault();
    selectValidate();
});


/*** CONDITIONAL ***/

// To check and get most recent shipping info
if(!localStorage == null) {
    populateStorage();
    }
else {
    fullname.value = localStorage.getItem("fullname");
    document.getElementById("shipping-name").innerHTML = fullname.value;
    
    email.value = localStorage.getItem("email");
    
    address1.value = localStorage.getItem("address1");
    address2.value = localStorage.getItem("address2")
    document.getElementById("shipping-address1").innerHTML = address1.value + " " + address2.value;
    
    city.value = localStorage.getItem("city");
    state.value = localStorage.getItem("state");
    zipcode.value = localStorage.getItem("zipcode");
    document.getElementById("shipping-location").innerHTML = city.value + ", " + state.value + " " + zipcode.value; 
    
    country.value = localStorage.getItem("country");
}

/***** FUNCTIONS *****/

// To validate size and color has been selected before submitting order
function selectValidate() {
    
    for (var i = 0; i < inputs.length; i++) {
        if(inputs[i].name == 'size' && inputs[i].checked) {
            checkSize=true;
        }
        else if(inputs[i].name == 'color' && inputs[i].checked) {
            checkColor=true;
        }
    }
    
    if(!checkSize) {
        errOrder.innerHTML = "Please select a size!";
        return false;
    }
    else {
        errOrder.innerHTML = "";
    }
    
    if(!checkColor) {
        errOrder.innerHTML = "Please select a color!";
        return false;
    }
    else {
        errOrder.innerHTML = "";
    }
    
    orderSummary();
}

// To validate name and save
function nameValidate() {
        if(fullname.value == "") {
        errName.innerHTML = errMsg + "example: John Smith";
        fullname.focus();
    }
    else {
        errName.innerHTML = "";
    }
    
    populateStorage();
    
}

// To validate email and save
function emailValidate() {
    const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value);
    if(email.value == "") {
        errEmail.innerHTML = errMsg + "example: egaringo@gmail.com";
        email.focus();
    }
    else if(!valid) {
        errEmail.innerHTML = "Wrong format, example: egaringo@gmail.com";
        email.focus();
    }
    else {
        errEmail.innerHTML = "";
    }
    
    populateStorage();
}

// To validate address 1 and save
function address1Validate() {
    if(address1.value == "") {
        errAddress1.innerHTML = errMsg + "example: 123 Street";
        address1.focus();
    }
    else{
        errAddress1.innerHTML = "";
    }
    populateStorage();
}

// To save
function address2Validate() {
    populateStorage();
}

// To validate city and save
function cityValidate() {
    if(city.value == "") {
        errCity.innerHTML = errMsg + "example: New York";
        city.focus();
    }
    else {
        errCity.innerHTML = "";
    }

    populateStorage();
}

// To validate state and save
function stateValidate() {
    if(state.value == "") {
        errState.innerHTML = errMsg + "example: NY";
        state.focus();
    }
    else {
        errState.innerHTML = "";
    }
    
    populateStorage();
}

// To validate zipcode and save
function zipcodeValidate(){
    if(isNaN(zipcode.value) || zipcode.value.length < 5 || zipcode.value.length > 9) {
        errZipcode.innerHTML = "Please enter between 5 to 9 numbers";
        zipcode.focus();
    }
    else {
        errZipcode.innerHTML = "";
    }
    
    populateStorage();
}

function countryValidate() {

    populateStorage();
}

// Shipping info - AUTOFILL
function autoFill() {
    if(smallSize.checked == true) {
        content = smallSize.value;
        document.getElementById("size").innerHTML = content;
    }
    else if(mediumSize.checked == true) {
        content = mediumSize.value;
        document.getElementById("size").innerHTML = content;
    }
    else if(largeSize.checked == true) {
        content = largeSize.value;
        document.getElementById("size").innerHTML = content;
    }
    
    if(green.checked == true) {
            content = green.value;
            document.getElementById("color").innerHTML = content;
        }
        else if(red.checked == true) {
            content = red.value;
            document.getElementById("color").innerHTML = content;
        }
        else if(black.checked == true) {
            content = black.value;
            document.getElementById("color").innerHTML = content;
        }
        else if(blue.checked == true) {
            content = blue.value;
            document.getElementById("color").innerHTML = content;
        }
    
    content = document.getElementById("fullname").value;
    document.getElementById("shipping-name").innerHTML = content;

    content = document.getElementById("address1").value + " " + document.getElementById("address2").value;
    document.getElementById("shipping-address1").innerHTML = content;

    content = document.getElementById("city").value + ", " + document.getElementById("state").value + " " + document.getElementById("zipcode").value;
    
    document.getElementById("shipping-location").innerHTML = content;
}

// Order summary details
function orderSummary() {
    
hide();
    
let content = "";

content += `<h2 class="orderContent">Order Completed</h2>
            <h3>Order Summary</h3>`;
    
if(smallSize.checked == true)
    {
        if(green.checked == true) {
            content +=
            `<div class="row">
            <p>Lucky Dice Shirt</p>
            <p class="font">${smallSize.value}</p>
            <p class="font">${green.value}</p>
            <p>$20.00</p>
            </div>`;
        }
        if(red.checked == true) {
            content +=
            `<div class="row">
            <p>Lucky Dice Shirt</p>
            <p class="font">${smallSize.value}</p>
            <p class="font">${red.value}</p>
            <p>$20.00</p>
            </div>`;
        }
        if(black.checked==true) {  
            content +=
            `<div class="row">
            <p>Lucky Dice Shirt</p>
            <p class="font">${smallSize.value}</p>
            <p class="font">${black.value}</p>
            <p>$20.00</p>
            </div>`;
        }
        if(blue.checked == true) {  
            content +=
            `<div class="row">
            <p>Lucky Dice Shirt</p>
            <p class="font">${smallSize.value}</p>
            <p class="font">${blue.value}</p>
            <p>$20.00</p>
            </div>`;

        }
    } 
    
    if(mediumSize.checked == true)
    {
        if (green.checked == true) {
            content +=
            `<div class="row">
            <p>Lucky Dice Shirt</p>
            <p class="font">${mediumSize.value}</p>
            <p class="font">${green.value}</p>
            <p>$20.00</p>
            </div>`;
        }
        if (red.checked == true) {
            content +=
            `<div class="row">
            <p>Lucky Dice Shirt</p>
            <p class="font">${mediumSize.value}</p>
            <p class="font">${red.value}</p>
            <p>$20.00</p>
            </div>`;
        }
        if (black.checked == true) {
            content +=
            `<div class="row">
            <p>Lucky Dice Shirt</p>
            <p class="font">${mediumSize.value}</p>
            <p class="font">${black.value}</p>
            <p>$20.00</p>
            </div>`;
        }
        if (blue.checked == true) {
            content +=
            `<div class="row">
            <p>Lucky Dice Shirt</p>
            <p class="font">${mediumSize.value}</p>
            <p class="font">${blue.value}</p>
            <p>$20.00</p>
            </div>`;
        }
    }
    
    if(largeSize.checked == true) 
    {
        if (green.checked == true) {
            content +=
            `<div class="row">
            <p>Lucky Dice Shirt</p>
            <p class="font">${largeSize.value}</p>
            <p class="font">${green.value}</p>
            <p>$20.00</p>
            </div>`;
        }
        if (red.checked == true) {
            content +=
            `<div class="row">
            <p>Lucky Dice Shirt</p>
            <p class="font">${largeSize.value}</p>
            <p class="font">${red.value}</p>
            <p>$20.00</p>
            </div>`;
        }
        if (black.checked == true) {
            content +=
            `<div class="row">
            <p>Lucky Dice Shirt</p>
            <p class="font">${largeSize.value}</p>
            <p class="font">${black.value}</p>
            <p>$20.00</p>
            </div>`;
        }
        if (blue.checked == true) {
            content +=
            `<div class="row">
            <p>Lucky Dice Shirt</p>
            <p class="font">${largeSize.value}</p>
            <p class="font">${blue.value}</p>
            <p>$20.00</p>
            </div>`;
        }
    }
    
    content +=
    `<div class="row free">
     <p>Shipping</p>
     <p>Free</p>
     </div>
     <div class="row">
     <p>Total</p>
     <p>$20.00</p>
     </div>
    <div class="shipping-info">
    <p>Shipping Address</p>
    <div class="shipping-detail">
    <p>${fullname.value}</p>
    <p>${address1.value}, ${address2.value}</p>
    <p>${city.value}, ${state.value} ${zipcode.value}</p>
    </div>
    </div>
    <img id="checkmark" src="img/circle-check.png" alt="Checkmark image for order completion" />`;
    orders.innerHTML = content;
}

// To save shipping details

function populateStorage() {
    
    localStorage.setItem('fullname', fullname.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('address1', address1.value);
    localStorage.setItem('address2', address2.value);
    localStorage.setItem('city', city.value);
    localStorage.setItem('state', state.value);
    localStorage.setItem('zipcode', zipcode.value);
    localStorage.setItem('country', country.value);
}

// To hide ordering page

function hide()
{
    const isHidden = document.getElementById("hideMe");
    isHidden.style.display = "none";
}
