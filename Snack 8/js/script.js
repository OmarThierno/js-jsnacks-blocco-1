const userNum = parseInt(prompt('Inserisci un numero!'));

const num = [];
let sum = 0;

if (userNum > 999 && userNum < 9999) {
  for (let i = 0; i < userNum.toString().length; i++) {
    console.log(userNum)
    num.push(userNum.toString()[i]);
  }
  console.log(num)
  for (let i = 0; i < num.length; i++) {
    sum += parseInt(num[i]);
  }
  console.log(sum);
} else {
  console.log('inserisci un numero di quatro cifre')
}
