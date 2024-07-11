const km = prompt('Quanti km percorrerai?');
console.log('Km da percorrere:', km);

const age = prompt('Quanti anni hai?');
console.log('Anni:', age);

const prezzoalkm = 0.21;

let prezzofinale=km*prezzoalkm
console.log('prezzo intero:', prezzofinale)


//CONDIZIONI
if (age <= 18) {
    prezzofinale=prezzofinale * 0.8;
    console.log ('Prezzo Scontato Under 18:', prezzofinale);
}
else if (age >= 65) {
    prezzofinale=prezzofinale * 0.6;
    console.log('Prezzo Scontato Over 65:', prezzofinale);
}

document.getElementById('prezzofinale').innerHTML= prezzofinale.toFixed(2);