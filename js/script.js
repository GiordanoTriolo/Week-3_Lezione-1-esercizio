var nome=(window.prompt('Nome'));
var cognome=(window.prompt('Cognome'));
var eta=(window.prompt('Eta'));
var citta=(window.prompt('Citta'));
var email=(window.prompt('Email'));

window.alert(nome + ', ' + cognome + ', ' + eta + ', ' + citta + ', ' + email);
console.log(nome, cognome, eta, citta,'(',email,')');

document.getElementById('name').innerHTML=nome;
document.getElementById('surname').innerHTML=cognome;
document.getElementById('age').innerHTML=eta;
document.getElementById('city').innerHTML=citta;
document.getElementById('mail').innerHTML=email;
