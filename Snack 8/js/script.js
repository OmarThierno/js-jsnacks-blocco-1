const num1 = parseInt(prompt('Inserisci un numero!'));
const num2 = parseInt(prompt('Inserisci un numero!'));
const num3 = parseInt(prompt('Inserisci un numero!'));
const num4 = parseInt(prompt('Inserisci un numero!'));

let sum = 0;

if (!isNaN(num1) && num1 > 0 && !isNaN(num2) && num2 > 0 && !isNaN(num3) && num3 > 0 && !isNaN(num4) && num4 > 0) {
  sum += num1;
  sum += num2;
  sum += num3;
  sum += num4;
  
  console.log(sum);
} else {
  console.log('non sono accettati numeri negativi!')
}