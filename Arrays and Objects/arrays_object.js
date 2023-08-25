const data = {
    header:"busen er kørt",
    description:"Vi når den næsten",
};

const template = document.querySelector("template").content;
console.log(template);

// coppy af template
const copy = template.cloneNode(true);

// ændre indhold
copy.querySelector("h2").textContent = data.header
copy.querySelector("p").textContent = data.description


// copy goes to new div 
const parent = document.querySelector(".grid");
parent.appendChild(copy);

const teachers = ["Martin", "Jonas", "Alan", "Luise"]
//console.log(teachers[2]);

teachers.forEach(doStuff)

function doStuff(teacher){
    console.log(teacher + " snakker for meget");

}

const ninjas =[
    {
        name:"Din",
        power:"Klin"
    },
    {
        name:"Zin",
        power:"BLlin"
    }
];

ninjas.forEach(doStuff);
function doStuff(aNinja){
    console.log(aNinja.name + " has a pover " + aNinja.power);
} 