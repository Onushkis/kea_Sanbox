// fetche, loope, clone, ændre, appende

fetch("https://kea-alt-del.dk/t7/superheroes/")
  .then((response) => response.json())
  .then((data) => showSuperheros(data));

/* function showSuperheros(superheroes) {
  console.log(superheroes);
  document.querySelector(".superhero_grid h3").textContent =
    superheroes[0].powers;
} */

function showSuperheros(mySuperHeroes) {
  //Loop og call a function ental
  mySuperHeroes.forEach(showSuperhero);
}

function showSuperhero(oneHero) {
    console.log(oneHero);
//clone, ændre, appende
const template = document.querySelector("template").content;
// coppy af template
const copy = template.cloneNode(true);

// hvem er forældre
const parent = document.querySelector(".parent");
console.log(copy);
copy.querySelector(".alias").textContent = oneHero.alias;
/* copy.querySelector(".alias").textContent =
oneHero.alias;
 */

// Real name
copy.querySelector(".realName").textContent = oneHero.realName;


// Origin
copy.querySelector(".origin").textContent = oneHero.origin;

 // Image
copy.querySelector("img").src = oneHero.image; 

/* // Height a number
 copy.querySelector(".height").textContent = oneHero.height; */

 // Active boolien
//  copy.getElementById(".active").innerHTML = Boolean(10 > 9);

// Power Array


parent.appendChild(copy);

}