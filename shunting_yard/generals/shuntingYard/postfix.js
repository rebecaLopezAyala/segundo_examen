const operators = require("../math/operators");

function postFixValidator(express){
   var newArr = express.split(" ");
   var elementsArr = [], result = -1;
    
   newArr.forEach(item=>{
    if(operators.operatorPrecedence(item) != -1){
        const operator = operators.symbolToOperator(item);
        if(operator){
            const a = elementsArr.pop();
            const b = elementsArr.pop();
            result = makeOperation( a, b, operator);
            elementsArr.push(makeOperation( a, b, operator));
        }else{
            return false;
        }
    }else{
        elementsArr.push(parseFloat(item));
    }
   });
   return result;
}

function makeOperation(a, b, operator){
   return operator(a,b);
}

exports.postFixValidator = postFixValidator;