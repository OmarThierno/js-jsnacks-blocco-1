const numDiv = 10;
let sum = 0
let average = 0;

for (let i = 1; i <= numDiv; i++) {
  sum += i
}

console.log(sum); 

average = sum / numDiv;
console.log(average)