const expressionValidator = require("../generals/shuntingYard/expressValidator");
const postfix = require("../generals/shuntingYard/postfix");

const evaluate = (req, res) =>{
    const result = expressionValidator.evaluate(req.body.exp);
    const resultValidated = postfix.postFixValidator(result.postfix);

    if(result && resultValidated){
        const response = {
            infix:req.body.exp,
            postfix: result.postfix,
            result: resultValidated
        }
        res.status(200).send(response);
    }else if(!resultValidated){
        
            const response = {
                message: "The expression "+req.body.exp+" is invalid",
            }
            res.status(400).send(response);
    }
    }

exports.evaluate = evaluate;
