// ESERCIZI JAVASCRIPT 12/07/2023


// ES-01


// DEFINIZIONE DELLE VARIABILI CONTENENTE I NUMERI 

let numero1 = 6;
let numero2 = 12;
let numero3 = 87;
let numero4 = 52;
let numero5 = 23;



// CALCOLO DELLA SOMMA

let somma = numero1 + numero2 + numero3 + numero4 + numero5;



// CALCOLO DELLA MEDIA

let media = somma / 5;



// CREAZIONE DELLA FRASE DA STAMPARE

let frase = `La somma tra i numeri equivale a ${somma} e la media risulta ${media}`;



// STAMPA DELLA FRASE SU CONSOLE

console.log(frase);


// ES-02


// Anno corrente e anno di nascita
let annoCorrente = 2023;
let annoNascita = 1994;



// Calcolo dell'età
let eta = annoCorrente - annoNascita;



// Anni necessari per raggiungere i 100
let anniMancanti = 100 - eta;



// Creazione della frase da stampare
let frase = `Hai ${eta} anni e ti mancano ${anniMancanti} anni per compierne 100`;



// Stampa della frase nella console
console.log(frase);



// ES-03


// Dati
let totaleGatti = 44;
let gattiPerFila = 6;



// Calcolo del numero di file
let fileGatti = Math.ceil(totaleGatti / gattiPerFila);



// Calcolo dei gatti mancanti per completare una nuova fila
let gattiMancanti = (fileGatti * gattiPerFila) - totaleGatti;



// Calcolo dell'avanzo
let avanzo = gattiPerFila - gattiMancanti;



// Creazione della frase da stampare
let frase = `Ci sono ${fileGatti} file di gatti e ne mancano ${gattiMancanti} per una nuova fila, con un avanzo di ${avanzo}`;




// Stampa della frase nella console
console.log(frase);



// ES-04


let anni = 25;

let y = 100-anni


console.log(`Hai ${anni} anni e te ne mancano ancora ${y} per arrivare a 100`);



// ES-05


false || (23 === '23') && (null != 'null') && !isNaN('Ciao')



// ES-06


let a = 10;
let b = -2;
let c = 31;
let d = 22;
let e = 15;
let f = -6;
let g = 7;

let temperature = [a, b, c, d, e, f, g];

let temperaturaPiuCalda = Math.max(...temperature);
let temperaturaPiuFredda = Math.min(...temperature);

console.log(`La temperatura piu' calda e' ${temperaturaPiuCalda} e quella piu' fredda ${temperaturaPiuFredda}`);

