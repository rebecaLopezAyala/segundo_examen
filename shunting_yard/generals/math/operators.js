function operatorPrecedence(operator){
    var precedence= -1;
    switch(operator){
        case "+":
            precedence = 2;
        break;
        case "-":
                precedence = 2;
            break;
        case "*":
                precedence = 3;
            break;
        case "/":
                precedence = 3;
            break;
    }

    return precedence;
}

function symbolToOperator(symbol) {
    switch (symbol) {
        case '+': return plus;
        case '-': return minus;
        case '*': return multiply;
        case '/': return divide;
        default: return false;
    }
}

function plus(a,b) { 
    return a + b; 
} 
function minus(a,b) { 
    return a - b; 
}
function multiply(a,b) { 
    return a * b; 
}
function divide(a,b) { 
    return a / b; 
}

exports.operatorPrecedence = operatorPrecedence;
exports.symbolToOperator= symbolToOperator;