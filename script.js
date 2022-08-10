
console.log(add(12, 15))
console.log(subtract(12, 15))
console.log(multiply(4, 5))
console.log(divide(22, 3))
console.log(operate(12, "subtract", 10))

function add(numOne, numTwo) {
    let addNum = numOne + numTwo;
    return addNum
}
function subtract(numOne, numTwo) {
    let subNum = numOne - numTwo;
    return subNum
}add
function multiply(numOne, numTwo) {
    let multiNum = numOne * numTwo;
    return multiNum
}
function divide(numOne, numTwo) {
    let diviNum = numOne / numTwo;
    return diviNum
}
function operate(numOne, action, numTwo) {
    if (action === "add") {
        return add(numOne, numTwo)
    }
    if (action == "subtract") {
        return subtract(numOne, numTwo)
    }
    if (action === "multiply") {
        return multiply(numOne, numTwo)
    }
    if (action == "divide") {
        return divide(numOne, numTwo)
    }
}


