const operators = require("../math/operators");

function evaluate(exp){
    var operatorsQueue=[], factorsQueue = [], postfixString = "", number = "";

    for(let i=0; i<exp.length; i++){
        const element = exp.charAt(i);
        if(parseInt(element)){
            number += parseInt(element);
            factorsQueue.push(element);
        }else{
            const newPrecedence = operators.operatorPrecedence(element)
            if(newPrecedence==-1){
                number += element;
                factorsQueue.push(element);
            } else
            if(operatorsQueue.length >= 1){
                const prevPrecedence = operators.operatorPrecedence(operatorsQueue[operatorsQueue.length - 1]);
                if(newPrecedence == prevPrecedence){
                    var popped = operatorsQueue.pop();
                    postfixString += number + " " + popped +" ";
                    number="";
                    factorsQueue.push(popped);
                    operatorsQueue.push(element);
                }else {
                    postfixString += number + " ";
                    number="";
                    operatorsQueue.push(element);
                }
            }else{
                    postfixString += number + " ";
                    number="";
                    operatorsQueue.push(element);
            }
        }
        
        if(i == exp.length-1){
            postfixString += number;
            while(operatorsQueue.length > 0){
                var popped = operatorsQueue.pop();
                factorsQueue.push(popped);
                postfixString += " " + popped;
            };
        }
    }
    return { postfix: postfixString};
} 


exports.evaluate = evaluate;