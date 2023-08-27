fetch("https://api.punkapi.com/v2/beers")
  .then((res) => res.json())
  .then(vis);

const temp = document.querySelector("template").content;
const light = document.querySelector(".light");
const dark = document.querySelector(".dark");

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

    // Alcohol
    if(beer.abv > 5.5){
        klon.querySelector("article").classList.add("strong");
    }
    klon.querySelector("p span").textContent = beer.abv;
    klon.querySelector("p+p span").textContent = beer.ebc;

    // hvis den var over støtre 17 så det var øl mørk
    if(beer.ebc > 17){
        dark.appendChild(klon);
    }else{
        light.appendChild(klon);
    }


    // klon at the end!!!
    dark.appendChild(klon);
  });
}

// genere en element med css

