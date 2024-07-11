


const km = prompt('Quanti km percorrerai?');
console.log('Km da percorrere:', km);

const age = prompt('Quanti anni hai?');
console.log('Anni:', age);

const prezzoalkm = 0.21;

prezzobiglietto=km*prezzoalkm
console.log('prezzo intero:', prezzobiglietto)


//prova
if (age < 18) {
    prezzoscontatounder=prezzobiglietto * 0.8;
    console.log ('Prezzo Scontato Under 18:', prezzoscontatounder);
}
else if (age >= 65) {
    prezzoscontatoover=prezzobiglietto * 0.6;
    console.log('Prezzo Scontato Over 65:', prezzoscontatoover);
}