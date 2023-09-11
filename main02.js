/* ES1: Scrivere un programma che converta un voto numerico (v) in un giudizio seguendo questi parametri:
 se v e’ minore di 18,  stampare in console  “insufficiente”
 se v e’ maggiore uguale a 18 e minore di 21,  stampare in console “sufficiente”
 se v e’ maggiore uguale a 21 e minore di 24,  stampare in console: “buono”
 se v e’ maggiore uguale a 24 e minore di 27, stampare in console: “distinto”
 se v e’ maggiore uguale a 27 e minore uguale 29, stampare in console: “ottimo”
 se v e’ uguale a 30, stampare in console:  “eccellente”
  Esempio:
  let v = 29;
  Output: Ottimo */


let v = 29;

if (v < 18) {
  console.log("Insufficiente");
} else if (v < 21) {
  console.log("Sufficiente");
} else if (v < 24) {
  console.log("Buono");
} else if (v < 27) {
  console.log("Distinto");
} else if (v <= 29) {
  console.log("Ottimo");
} else if (v === 30) {
  console.log("Eccellente");
}



let v = 29;

switch (true) {
  case (v < 18):
    console.log("Insufficiente");
    break;
  case (v < 21):
    console.log("Sufficiente");
    break;
  case (v < 24):
    console.log("Buono");
    break;
  case (v < 27):
    console.log("Distinto");
    break;
  case (v <= 29):
    console.log("Ottimo");
    break;
  case (v === 30):
    console.log("Eccellente");
    break;
}


// ES-02:  Scrivi un programma che dato un numero, let num = 2, stampi la rispettiva tabellina corrispondente.


let num = 2;

for (let i = 1; i <= 10; i++) {
  let risultato = num * i;
  console.log(`${num} x ${i} = ${risultato}`);
}


/* ES-3:Scrivere un programma che converta una temperatura con una delle seguenti descrizioni:
 se temperatura e’ minore di 20, stampare “non ci sono piu’ le mezze stagioni”
 se temperatura e’ maggiore uguale a 30, stampare “lu mare, lu sole, lu ientu”
 se temperatura e’ minore di 30, stampare “mi dia una peroni sudata”
 se temperatura e’ minore di 0, stampare “non e’ tanto il freddo quanto l’umidità’”
 se temperatura e’ minore di -10, stampare “copriti…ancora ti raffreddi”
Cercate di risolvere questo esercizio utilizzando prima if else e poi con switch case. */



let temperatura = 25;

if (temperatura < 20) {
  console.log("Non ci sono più le mezze stagioni");
} else if (temperatura >= 30) {
  console.log("Lu mare, lu sole, lu ientu");
} else if (temperatura < 30) {
  console.log("Mi dia una peroni sudata");
} else if (temperatura < 0) {
  console.log("Non è tanto il freddo quanto l'umidità");
} else if (temperatura < -10) {
  console.log("Copriti... ancora ti raffreddi");
}





let temperatura = 25;

switch (true) {
  case (temperatura < 20):
    console.log("Non ci sono più le mezze stagioni");
    break;
  case (temperatura >= 30):
    console.log("Lu mare, lu sole, lu ientu");
    break;
  case (temperatura < 30):
    console.log("Mi dia una peroni sudata");
    break;
  case (temperatura < 0):
    console.log("Non è tanto il freddo quanto l'umidità");
    break;
  case (temperatura < -10):
    console.log("Copriti... ancora ti raffreddi");
    break;
}


/* ES 4: Scrivere un programma che simuli un distributore di bevande:
 fare in modo che l’utente possa inserire il numero corrispondente alla bevanda, mediante l’istruzione prompt:
 se inserisce 1, seleziona acqua e quindi stampare in console: “E’ stata selezionata l’acqua”
 se inserisce 2, seleziona coca cola e quindi stampare in console: “E’ stata selezionata coca cola”
 se inserisce 3, seleziona birra e quindi stampare in console: “E’ stata selezionata birra”
 se inserisce qualcosa di diverso, il programma dovra’ riproporre la domanda di partenza */


 

let scelta = prompt("Inserisci il numero corrispondente alla bevanda:\n1 - Acqua\n2 - Coca Cola\n3 - Birra");

const acqua=1;
const cocacola=2;
const birra=3;

if (scelta === "1") {
  console.log("E' stata selezionata l'acqua");
} else if (scelta === "2") {
  console.log("E' stata selezionata Coca Cola");
} else if (scelta === "3") {
  console.log("E' stata selezionata la birra");
} else {
  console.log("Scelta non valida. Riprova.");
}


/*Creare un programma che simuli il gioco di Super Mario Bros!
Qui trovate un inizio del programma,  aggiungere il seguito di gioco! */
    // E' stato premuto il tasto 1

 // INIZIO GIOCO
 
 let startGame = prompt(Sei pronto? \n (1) inizia partita \n (2) Esci dal gioco);


    if(startGame == '1') {
        alert('Partita iniziata!');

        // Introduciamo un nemico!
        let enemy = prompt(Attento c'e' un nemico! Premi: \n (1) Salta e corri \n (2) Salta sopra al nemico ed eliminalo);
        switch (enemy) {
            case '1':
                alert(C'e' mancato poco! sei risducito a schivare il tuo primo nemico);
                break;
            case '2':
                alert(Wow! Bravissimo! L'hai fatto fuori!);
                break;
            default:
                alert(Peccato sei stato troppo lento... GAME OVER);
                break;
        }
    } else { // E' stato premuto il tasto 2
        alert(sei uscito dal gioco! Mi spiace che tu non voglia giocare oggi!);
    }





// INIZIO GIOCO
let startGame = prompt("Sei pronto?\n(1) Inizia partita\n(2) Esci dal gioco");

// E' stato premuto il tasto 1
if (startGame === '1') {
    alert('Partita iniziata!');

    // Introduciamo un nemico!
    let enemy = prompt("Attento c'è un nemico! Premi:\n(1) Salta e corri\n(2) Salta sopra al nemico ed eliminalo");
    switch (enemy) {
        case '1':
            alert("C'è mancato poco! Sei riuscito a schivare il tuo primo nemico.");
            break;
        case '2':
            alert("Wow! Bravissimo! Hai eliminato il nemico!");
            // Prosegui con il gioco
            let nextStep = prompt("Vuoi continuare?\n(1) Sì, avanti!\n(2) No, esci dal gioco");
            if (nextStep === '1') {
                // Continua il gioco
                alert("E ora affrontiamo un nuovo ostacolo...");
                // ... continuare con altri passaggi del gioco
            } else {
                alert("Hai deciso di uscire dal gioco. Arrivederci!");
            }
            break;
        default:
            alert("Peccato! Sei stato troppo lento... GAME OVER");
            break;
    }
} else { // E' stato premuto il tasto 2
    alert("Sei uscito dal gioco! Mi spiace che tu non voglia giocare oggi!");
}
