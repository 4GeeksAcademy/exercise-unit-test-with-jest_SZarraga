const sum = (a,b) => {
    return a + b;
}

console.log(sum(7,3));



let oneEuroIs = {
    "JPY": 161.51, // japan yen
    "USD": 1.09, // us dollar
    "GBP": 0.84, // british pound
}


const fromEuroToDollar = (amount) =>{
    let dollarConversion = amount*oneEuroIs.USD;
    return parseFloat(dollarConversion.toFixed(4));

}
console.log("Euro to Dollar: " + fromEuroToDollar(10));

const fromDollarToYen = (amount) =>{
    let dollarToEuro = amount/oneEuroIs.USD;
    let yenConversion = dollarToEuro*oneEuroIs.JPY;
    return parseFloat(yenConversion.toFixed(4));

}
console.log("Dollar to Yen: "+fromDollarToYen(10));

const fromYenToPound = (amount) =>{
    let yenToEuro = amount/oneEuroIs.JPY;
    let poundConversion = yenToEuro*oneEuroIs.GBP
    return parseFloat(poundConversion.toFixed(4));
}
console.log("Yen to Pound: "+fromYenToPound(10));

module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound };