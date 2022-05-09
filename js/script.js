var nome=(window.prompt('Inserisci il tuo nome'));
var cognome=(window.prompt('Inserisci il tuo Cognome'));
var eta=(window.prompt('Inserisci la tua eta'));
var citta=(window.prompt('Inserisci la tua citta'));
var email=(window.prompt('Inserisci la tua E-mail'));

var dati=nome + ' ' + cognome + ', Anni: ' + eta + ', Città: ' + citta + ', ' + email;
window.alert(dati);
console.log(dati);
document.write(dati);


document.getElementById('name').innerHTML=nome;
document.getElementById('surname').innerHTML=cognome;
document.getElementById('age').innerHTML=eta;
document.getElementById('city').innerHTML=citta;
document.getElementById('mail').innerHTML=email;
