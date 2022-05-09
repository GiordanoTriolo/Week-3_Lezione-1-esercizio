var nome=(window.prompt('Inserisci il tuo nome'));
var cognome=(window.prompt('Inserisci il tuo Cognome'));
var eta=(window.prompt('Inserisci la tua eta'));
var citta=(window.prompt('Inserisci la tua citta'));
var email=(window.prompt('Inserisci la tua E-mail'));

window.alert(nome + ' ' + cognome + ', ' + eta + ', ' + citta + ', ' + email);
console.log(nome, cognome, eta, citta,'(',email,')');

document.getElementById('name').innerHTML=nome;
document.getElementById('surname').innerHTML=cognome;
document.getElementById('age').innerHTML=eta;
document.getElementById('city').innerHTML=citta;
document.getElementById('mail').innerHTML=email;
