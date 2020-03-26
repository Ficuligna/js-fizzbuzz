
// Fizz Buzz test:
// 1  Scrivi un programma che stampi i numeri da 1 a 100,
    // ma per i multipli di 3 stampi “Fizz” al posto del numero
    // e per i multipli di 5 stampi “Buzz”.
    // Per i numeri che sono sia multipli di 3 che di 5 stampi” FizzBuzz”.
    // BONUS: (ma solo se il resto è fatto)
    // come sempre l’ex potrebbe essere risolto in più varianti, anche poco differenti a livello di codice, ma che comportano ottimizzazioni e variazioni sensibili, quindi prova in altra cartella a fare altre varianti e scrivi descrivendo cosa è cambiato dal precedente, cosa migliora, o semplicemente cambia e perchè;
    // output fatto in pagina e arricchito con CSS, magari animazioni etc. etc.



// creo un ciclo crescente lineare da 1 a 100 con iterazione +1
// ad ogni iterazione stampo il numero corrispondente
// condizione 1: se i % 3 = 0 stampa Fizz
//Condizione 2: se i % 5 = 0 stampa FizzBuzz
// condizione 3: se condizione 1 && condizione 2 == true stampa FizzBuzz



// ---------------------------------- Variante con for --------------------------------------------------

// var x = 1;
// for (var i = 0; i < 100; i++) {
//   x = i + 1;
//   if (x%3 == 0 && x%5 == 0) {
//     x = "FrizzBuzz";
//   }
//   if (x%3 == 0) {
//     x = "Frizz";
//   }
//   if (x%5 == 0) {
//     x = "Buzz";
//   }
//
//   console.log(x);
// }
// ---------------------------------- Variante con while --------------------------------------------------
// var x = 1;
// var output;
// while (x <=100) {
//     if (x%3 == 0 && x%5 == 0) {
//       output = "FrizzBuzz";
//     }else if (x%3 == 0) {
//       output = "Frizz";
//     }else if (x%5 == 0) {
//       output = "Buzz";
//     }else {
//       output = x;
//     }
//     console.log(output);
//   x++
// }

// ---------------------------------- Variante con do-while --------------------------------------------------
// var x = 1;
// var output;
// do {
//   if (x%3 == 0 && x%5 == 0) {
//     output = "FrizzBuzz";
//   }else if (x%3 == 0) {
//     output = "Frizz";
//   }else if (x%5 == 0) {
//     output = "Buzz";
//   }else {
//     output = x;
//   }
//   console.log(output);
// x++
// } while (x <=100);
//--------------------------------------- Segament ----------------------------------------------------------


// for (var i = 0; i < 100; i++) {
//   segament = ["Frizz","Buzz"];
//   if ((i+1)%3 == 0 && (i+1)%5 == 0) {
//     console.log(segament);
//   }else if (!((i+1)%3 == 0 && (i+1)%5 == 0) && (i+1)%3 == 0) {
//     segament[1] = "";
//     console.log(segament);
//   }else if (!((i+1)%3 == 0 && (i+1)%5 == 0) && (i+1)%5 == 0) {
//     segament[0] = "";
//     console.log(segament);
//   }else {
//     segament[1] = "";
//     segament[0] = i+1;
//     console.log(segament);
//   }
// }
// ------------------------------------------SegamentPremium----------------------------------------------------
// for (var i = 0; i < 100; i++) {
//   segament = ["Frizz","Buzz"];
//   if ((i+1)%3 == 0 && (i+1)%5 == 0) {
//     console.log(segament);
//   }else if (!((i+1)%3 == 0 && (i+1)%5 == 0) && (i+1)%3 == 0) {
//     segament.splice(1,1);
//     console.log(segament);
//   }else if (!((i+1)%3 == 0 && (i+1)%5 == 0) && (i+1)%5 == 0) {
//     segament.splice(0,1);
//     console.log(segament);
//   }else {
//     segament.splice(1,1);
//     segament[0] = i+1;
//     console.log(segament);
//   }
// }
