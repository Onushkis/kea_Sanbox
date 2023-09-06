
// Syntax: element.addEventListener, (event => click or mouseDouwn, funktion, useCapture)
const myP = document.querySelector("#myP");
const myDiv=document.querySelector("#myDiv")

const myP2 = document.querySelector("#myP2");
const myDiv2 =document.querySelector("#myDiv2")

myP.addEventListener("click", function(){
    myDiv.style.background= "lightblue"
}); 
/* myP.onclick = function(){
    myDiv.style.background="red"
}; */

// Change Text

myDiv.addEventListener("click", changeText);
function changeText(){
    myP2.textContent="Acordind to a Cornell publication, the anser is - 700 pounds."
};

// Change Text MOUSE OVER Event

myP.addEventListener("mouseover", function(){
    myDiv.style.background= "yellow"
}); 


