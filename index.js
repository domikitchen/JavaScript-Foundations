// 🌟🌟🌟 M V P 🌟🌟🌟//

console.log("Mortgage rate calculator!!")


let principal = 200000;
let intrestRate = 0.05;
let years = 30;


function mortgageCalculator(principal, intrestRate, years, creditScore) {
    if (creditScore > 740) {
        intrestRate = intrestRate - 0.005;
    }
    else if (creditScore < 660) {
        intrestRate = intrestRate + 0.005;
    }
    else if (creditScore < 740 && creditScore > 660) {
        intrestRate;
    }
    else {
        console.log("idk how or why you did it, but you broke me...")
    }
    let name = "blank";

    let monthlyInterestRate = (intrestRate / 12);
    
    let periods = (years * 12);

    let numerator = ((monthlyInterestRate) * (Math.pow((1 + (monthlyInterestRate)), periods)));

    let denominator = ((Math.pow((1 + (monthlyInterestRate)), periods)) - 1);
    
    let monthlyRate = (principal * (numerator / denominator)).toFixed(2);

    return monthlyRate;
    //console.log(name + ", your monthly rate is " + monthlyRate);
}

/*mortgageCalculator(principal, intrestRate, years, 550);

mortgageCalculator(100000, 0.05, 30, 780);

mortgageCalculator(principal, intrestRate, years, 680);*/

// 🏡 Task 6: Loops
/* Write a new function called variableInterestRate. This function should be the same as mortgageCalculator, except it should console.log the monthly payment for 10 different interest rates at 0.5% increments plus or minus 2% from the inputted interest rate. Complete these calculations using a for loop.

For example, variableInterestRate(200000, 0.04, 30) should console.log:

"{Name}, with an interest rate of 0.02, your monthly rate is $739"
"{Name}, with an interest rate of 0.025, your monthly rate is $790"
"{Name}, with an interest rate of 0.03, your monthly rate is $843"
"{Name}, with an interest rate of 0.035, your monthly rate is $898"
"{Name}, with an interest rate of 0.04, your monthly rate is $955"
"{Name}, with an interest rate of 0.045, your monthly rate is $1013"
"{Name}, with an interest rate of 0.05, your monthly rate is $1074"
"{Name}, with an interest rate of 0.055, your monthly rate is $1136"
"{Name}, with an interest rate of 0.06, your monthly rate is $1199"
*/

function variableInterestRate() {
    for(i = 0; i < 10; i++) {
        intrestRate = intrestRate + 0.005;

        console.log(name + ", with an intrest rate of " + (intrestRate).toFixed(3) + ", your monthly rate is " + mortgageCalculator(principal, intrestRate, years, 680))
    }
}

variableInterestRate();
// 🌟🌟🌟 STRETCH 🌟🌟🌟//

/* Attempt any of the stretch goals below once you have finished the work above. Remember as always, these may require additional research beyond what you learned today */

/*  🏡 Add  `Property Tax`, `Homeowner's insurance` and `HOA fees` as parameters in your function to calculate total monthly spending on housing */


/* 🏡 Build a calculator function that accepts `monthly payment` and `interest rate` and returns the maximum loan that a person could afford */


/* 🏡 Explore using `window.prompt()` to allow a user to input parameters in the browser */


/* 🏡  Refactor your `variableInterestRate()` function to accept an array of interest rates (make sure to copy and paste as to not lose your work!) */
