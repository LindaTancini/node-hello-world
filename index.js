// se l'utente passa l'argomento:
if (process.argv[2]) {
  console.log(process.argv[2]); // allora stampiamo il suo valore
  // sennò
} else {
  console.log("Hello Boolean"); // stampiamo Hello Boolean
}

// con operatore OR
// console.log(process.argv[2] || "Hello Boolean");

// con operatore ?? (operatore di coalescenza nulla)  Restituisce il primo valore non nullo (null) e non indefinito (undefined) tra gli operandi.
// console.log(process.argv[2] ?? "Hello Boolean");
