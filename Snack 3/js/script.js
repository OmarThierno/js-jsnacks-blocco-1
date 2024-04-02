const num1 = parseInt(prompt('Inserisci un numero!'));
const num2 = parseInt(prompt('Inserisci un numero!'));
const num3 = parseInt(prompt('Inserisci un numero!'));
const num4 = parseInt(prompt('Inserisci un numero!'));
const num5 = parseInt(prompt('Inserisci un numero!'));
const num6 = parseInt(prompt('Inserisci un numero!'));
const num7 = parseInt(prompt('Inserisci un numero!'));
const num8 = parseInt(prompt('Inserisci un numero!'));
const num9 = parseInt(prompt('Inserisci un numero!'));
const num10 = parseInt(prompt('Inserisci ultimo numero!'));

let sum = 0;

if (!isNaN(num1) && num1 > 0 && !isNaN(num2) && num2 > 0 && !isNaN(num3) && num3 > 0 && !isNaN(num4) && num4 > 0 && !isNaN(num5) && num5 > 0 && !isNaN(num6) && num6 > 0 && !isNaN(num7) && num7 > 0 && !isNaN(num8) && num8 > 0 && !isNaN(num9) && num9 > 0 && !isNaN(num10) && num10 > 0) {
  sum += num1;
  sum += num2;
  sum += num3;
  sum += num4;
  sum += num5;
  sum += num6;
  sum += num7;
  sum += num8;
  sum += num9;
  sum += num10;
  
  console.log(sum);
} else {
  console.log('non sono accettati numeri negativi!')
}

