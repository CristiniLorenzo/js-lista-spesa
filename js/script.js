// Consegna:
// Data una lista della spesa:
// const list = [
//     'Latte',
//     'Cacao',
//     'Insalata',
//     'Carote',
//     'Pomodori',
//     'Piatti pronti'
// ];
// Stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente.
// Svolgete questo esercizio in 2 versioni: col ciclo for e col ciclo while.
const list = ['Latte','Cacao','Insalata','Carote','Pomodori','Piatti pronti'];

// CON CICLO FOR 

for (let i = 0; i < list.length; i++){
    console.log(list[i])
    let myList = document.getElementById("list").innerHTML += `<li>${list[i]}</li>`;
}

