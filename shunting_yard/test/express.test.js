const expressValidator = require("../generals/shuntingYard/expressValidator");

test('Strig Validation', () => {
    expect(expressValidator.evaluate("1+2.5/3*4")).toEqual({postfix:"1 2.5 3 / 4 * +"});
});
