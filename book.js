const firstBook = {
    title:"dienos sviesa",
    autor:"Tokien",
    genre: ["Fantasy", "Drama"],
    pages: 751,
    hasRead:true,
    hasIliustrations:false
}

console.log();firstBook.autor;

const person ={
    "fornavn": "Ona",
    "efternavn":"Girdzijauskaite",
    "email":"onushkis@gmail.com",
    "billede": "./assets/ona.jpg"
}

const destination = document.querySelector("#person");
const fuldNavn = `${person.fornavn} ${person.efternavn}`;
destination.querySelector("h3").textContent = fuldNavn;
destination.querySelector("p").textContent = person.email;
destination.querySelector("img").src = person.billede;