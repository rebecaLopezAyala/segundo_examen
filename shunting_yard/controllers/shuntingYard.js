const expressionValidator = require("../generals/shuntingYard/expressValidator");

const evaluate = (req, res) =>{
    res.send(req);/*
    const result = expressionValidator.evaluate(req.exp);

    if(result){
        const response = {
            infix:"INFIX_EXPRESSION",
            postfix: "POSTFIX_EXPRESSION",
            result: "VALUE",
            request: req
        }
        res.status(200).send(response);
    }else{
        const response = {
            message: "The expression "+req.exp+" is invalid",
        }
        res.status(400).send(response);
    }

      /*  return user.create({
            name:req.body.name,
            date:req.body.date,
            lifemiles:req.body.lmnumber
        })
        .then(company => res.status(201).send(company))
        .catch(error => res.status(400).send(error))*/
    }

exports.evaluate = evaluate;
