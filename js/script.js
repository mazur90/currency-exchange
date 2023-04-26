let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let CHF = 4.71;
let EUR = 4.64;
let USD = 4.25;
let GBP = 5.23;

amountElement.focus();

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    let amount = +amountElement.value;
    let currency = currencyElement.value;
    switch (currency) {
        case "CHF":
            result = amount / CHF;
            break;
        case "EUR":
            result = amount / EUR;
            break;
        case "USD":
            result = amount / USD;
            break;
        case "GBP":
            result = amount / GBP;
            break;
    }

    resultElement.innerHTML = (`${result.toFixed(2)} ${currency}`);
});