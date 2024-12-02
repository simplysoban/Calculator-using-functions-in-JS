var uNum1 = Number(prompt("Enter a number: "));
var uOperator = prompt("Enter an operator: ");
var uNum2 = Number(prompt("Enter a number: "));

function calc(num1, operator, num2) {
    if (operator == "+") {
        return num1 + num2;
    }
    else if (operator == "-") {
        return num1 - num2;
    }
    else if (operator == "*") {
        return num1 * num2;
    }
    else if (operator == "/") {
        return num1 / num2;
    }
    else {
        return "Invalid Values";
    }
}

alert("Your answer is:" + calc(uNum1, uOperator, uNum2));