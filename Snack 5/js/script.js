
const numOdd = [];
const numUser = [];

const num1 = parseInt(prompt('Inserisci un numero!'));
const num2 = parseInt(prompt('Inserisci un numero!'));
const num3 = parseInt(prompt('Inserisci un numero!'));
const num4 = parseInt(prompt('Inserisci un numero!'));
const num5 = parseInt(prompt('Inserisci un numero!'));
const num6 = parseInt(prompt('Inserisci un numero!'));

numUser.push(num1);
numUser.push(num2);
numUser.push(num3);
numUser.push(num4);
numUser.push(num5);
numUser.push(num6);

console.log(numUser);

for (let i = 0; i < numUser.lenght; i++) {
  if (numUser[i] % 2 !== 0) {
    numOdd.push(numUser[i]);
    console.log(numOdd);
    console.log(numUser);
  }
  
}

console.log(numOdd);