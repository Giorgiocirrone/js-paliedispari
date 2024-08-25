/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
Dichiariamo chi ha vinto.
BONUS
usare il più possibile il DOM, sia per raccogliere i dati che per stampare il risultato
Consigli del giorno
1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
Buon lavoro e buon divertimento! :slightly_smiling_face:

*/


/*chiedere all'utente di inserire una parola e capire se la parola è palindroma  */


/*

Fase di preparazione Palindroma 



*/


//funzione palindroma mi deve dare un booleano is-inizio


function isPalindroma(word) {


    //preparo un flag 

    let result = false;


    //capovolgo la parola

    const reverseWord = word.split('').reverse().join('');
    //verificare se è identico 

    if (resulElement === word) {

        result = true;

    }

    return result;

    //-ciclino for 
    //-creo una stringa vuota per la parola capovolta 
    //-aggiungo ogni lettera 






    //controllo se la parola capovoltà è uguale a prima 


}









//preparazione 
const form = document.getElementById('palindroma-form');
const wordField = document.getElementById('word');

const resulElement = document.getElementById('result');



//dichiarazione delle funzioni 

form.addEventListener('submit', function (event) {
    //blocco l'invio
    event.preventDefault();
    //raccolgo i dati 

    const word = wordField.value.trim();

    isPalindroma('ciccio');






})
