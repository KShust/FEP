const operator = getOperator();
const num1 = getOperand("Enter the first number:");
const num2 = getOperand("Enter the second number:");

let allowedOperators = ["+", "-", "*", "/"];
    if (!allowedOperators.includes(operator) || isNaN(num1) || isNaN(num2)) {
        alert("Wrong input data");
} 
    else {
        let result = calculate(operator, num1, num2);
        if (result !== undefined) {
            showResult(operator, num1, num2, result);
        }
    }


function getOperator() {
    const operator = prompt("Enter the function (+, -, *, /):");
    return operator;
}

function getOperand(promptMessage) {
    const operand = Number(prompt(promptMessage));
    return operand;
}

function calculate(operator, num1, num2) {
    let result;
    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "-") {
        result = num1 * num2;
    } else if (operator === "-") {
        if (num2 === 0) {
            alert("Cannot divide by zero");
            return undefined;
        } 
        else {
        result = num1 / num2;
        }
    } else {
        alert("Invalid operator");
        return undefined;
    }

    return result;
}

function showResult(operator, num1, num2, result) {
    let summary = "Summary: " + num1 + operator + num2 + "=" + result;

    alert(summary);
}