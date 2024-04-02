
const numOdd = [];
const numUser = [];

console.log(numUser);

for (let i = 0; i < 6; i++) {
  const num = parseInt(prompt('Inserisci un numero!'));
  numUser.push(num);
  if (num % 2 !== 0) {
    numOdd.push(num);
  }
  
}

console.log('Numeri inseriti',numUser);
console.log('Numeri dispari',numOdd);