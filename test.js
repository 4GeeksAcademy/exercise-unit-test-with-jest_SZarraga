const {sum, fromEuroToDollar, fromYenToPound, fromDollarToYen} = require('./app.js');

test('Adds 14 + 9 to equal 23', () =>{
    let total = sum(14,9);
    expect(total).toBe(23);
});

test('Converts 3.5 euro to dollars', () =>{

    let dollars = fromEuroToDollar(3.5);
    expect(dollars).toBe(3.815);

});

test('Converts 3.5 yen to GBP', () =>{

    let yenAmount = fromYenToPound(3.5);
    expect(yenAmount).toBe(0.0182);

});


test('Converts 3.5 dollar to yen', () =>{

    let dollarAmount = fromDollarToYen(3.5);
    expect(dollarAmount).toBe(518.6101);

});