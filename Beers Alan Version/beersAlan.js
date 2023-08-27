fetch("https://api.punkapi.com/v2/beers")
  .then((res) => res.json())
  .then(vis);

const temp = document.querySelector("template").content;
const parent = document.querySelector("section");

function vis(data) {
  data.forEach((beer) => {
    const klon = temp.cloneNode(true);
    klon.querySelector("h3").textContent = beer.name;
    klon.querySelector("img").src = beer.image_url;

    // Hvis der er en twist så hvis dem
    if (beer.method.twist) {
      klon.querySelector("article").classList.add("twisted");
      // add a class if there is twist
      klon.querySelector("details span").textContent = beer.method.twist;
    }
    klon.querySelector("p span").textContent = beer.abv;
    klon.querySelector("p+p span").textContent = beer.ebc;

    // klon at the end!!!
    parent.appendChild(klon);
  });
}

// Hvis der er en twist så hvis dem
