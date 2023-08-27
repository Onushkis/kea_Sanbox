// vælge alle prikkerne
const prikker = document.querySelectorAll(" section div");
// gøre dem klibare
prikker.forEach(prik=>prik.addEventListener("click", skifterFarve));



// lave en function der skifter farver på den prik der klikkes på
function skifterFarve(){
    // console.log(this);
    // this.style.backgroundColor= "blue";

    //added a class blue
    this.classList.toggle("blue");

}