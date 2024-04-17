const sum = require('../utils/suma');

test('sumar 1 mas 2', () => {

    expect(sum(1,2)).toBe(3);
})

test('sumar a mas b', () => {

    expect(sum(-5,-2)).toBe(-7);
})

