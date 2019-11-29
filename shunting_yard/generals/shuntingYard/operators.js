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

exports.operatorPrecedence = operatorPrecedence;