let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let CHF = 4.70;
let EUR = 4.63;
let USD = 4.23;
let GBP = 5.26;

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

    resultElement.value = (`${result.toFixed(2)} ${currency}`);
});