const prompt = require('prompt-sync')()

const diasString = prompt ('Quantos dias você viveu?');
const dias = Number (diasString);

const anos = ((dias/365));
const meses = ((dias%365)/30);
const dias1 = ((dias%365)%30);

console.log(`você viveu ${Math.floor(anos)} anos, ${Math.floor (meses)}meses e ${dias1} dias`);
