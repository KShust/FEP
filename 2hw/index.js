const operator = prompt("Enter the function (+, -, *, /):");
const num1 = Number(prompt("Enter the first number:"));
const num2 = Number(prompt("Enter the second number:"));

var result;

if (isNaN(num1) || isNaN(num2)) {
    alert("Invalid input");
} else {
    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
    if (num2 === 0) {
        alert("Cannot divide by zero");
    } else {
        result = num1 / num2;
    }
    } else {
    alert("Invalid operator");
    }
}

if (result !== undefined) {
    let summary = "Summary: " + num1 + operator + num2 + "=" + result;

    alert(summary);
}