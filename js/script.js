{
    const calculateResult = (amount, currency) => {
        const CHF = 4.71;
        const EUR = 4.64;
        const USD = 4.25;
        const GBP = 5.23;
        switch (currency) {
            case "CHF":
                return amount / CHF;
            case "EUR":
                return amount / EUR;
            case "USD":
                return amount / USD;
            case "GBP":
                return amount / GBP;

        }
    };

        const updateResult = (amount, currency, result) => {
            const resultElement = document.querySelector(".js-result");
            resultElement.innerHTML = (`${result.toFixed(2)} ${currency}`);
        }
    

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");
        
        const amount = +amountElement.value;
        const currency = currencyElement.value;
        
        const result = calculateResult(amount, currency)
        
        updateResult(amount, currency, result)
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit)
    };

    init()
    
    const reset = () => {
        const reset = document.querySelector(".js-reset")
        reset.addEventListener("click", resultElement.innerHTML = 0)
        }
        
     reset()

}




