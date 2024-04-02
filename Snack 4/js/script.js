const nameIvited = ['Marco', 'Marcia', 'Omar', 'Luca'];

const userName = prompt('Qual\' è il tuo nome?');

let result = false;

for (let i = 0; i < nameIvited.length; i++) {
  if (userName === nameIvited[i]) {
    result = true;
  }
}

if (result) {
  console.log('Sei invitato alla festa del Gatsby!')
} else {
  console.log('Ci dispiace informarla che purtroppo non troviamo il suo nome nella lista dei invitati')
}
