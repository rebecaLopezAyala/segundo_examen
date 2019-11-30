const operators = require("../generals/math/operators");


test.each([["+", 2], ["-",2], ["*", 3], ["/", 3]])(
    '%i', (a, expected) => {
      expect(operators.operatorPrecedence(a)).toBe(expected);
    },
  );
