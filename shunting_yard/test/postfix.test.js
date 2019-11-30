const postfix = require("../generals/shuntingYard/postfix");

test('Postfix String evaluation', () => {
    expect(postfix.postFixValidator("1 2.5 3 / 4 * +")).toBe(5.8);
});
