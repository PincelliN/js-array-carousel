//Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal. Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile. Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.


// creiamo la nostra variabile con l'array
const ImgArrayScreen = ["img/01.webp ", "img/02.webp","img/03.webp","img/04.webp","img/05.webp",];

//creo una variabile legata al indice
let index = 0;

// creo l'immagine 
let ImgBox = (document.getElementById("ImgScreen").innerHTML = `
<div><i class="fa-solid fa-arrow-up"></i> </div>
<img class="view" src=${ImgArrayScreen}></img>
 <div><i class="fa-solid fa-arrow-down"></i></div>
`);
// variabile bottone
let Next = document.querySelector(".fa-arrow-up");
//creo un avento
Next.addEventListener("click",function ()
 { //aumento indice di 1 per click
    index++;
    //detto la condizione ceh se indice è maggiore della lunghezza dell'array il valore risultera 0
    if (index>=ImgArrayScreen.length) {
        index=0
    }
    //creo una variabile con il nuove elemento del array
    let ImgScreen =ImgArrayScreen[index];
    console.log(index);
//vado a sostituire il vecchio valore scr con quello nuovo
document.querySelector(".Mainimg img").src=ImgScreen;
})
 // creo la  variabile per l'immagine precedente
  let Previous = document.querySelector(".fa-arrow-down");
  Previous.addEventListener("click",function () {
   //riduco  di uno il valore del index
    index--;
    // se il valore di index va sotto allo 0 lo riporto al valore massimo possibile
    if (index < 0) {
      index = ImgArrayScreen.length - 1;
    }
    let ImgScreen = ImgArrayScreen[index];
    //vado a sostituire il vecchio valore scr con quello nuovo
    document.querySelector(".Mainimg img").src = ImgScreen;
  })

