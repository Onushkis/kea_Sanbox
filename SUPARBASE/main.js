//https://laklehsqnfqwxexznorn.supabase.co
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxha2xlaHNxbmZxd3hleHpub3JuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM4MTI1NjYsImV4cCI6MjAwOTM4ODU2Nn0.5laphGUvp7pULepV2VHkQvDMUy8Ws4LfMxl6C42ty2g

fetch("https://laklehsqnfqwxexznorn.supabase.co/rest/v1/brands",{
    method:"GET",
    headers:{
    apikey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxha2xlaHNxbmZxd3hleHpub3JuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM4MTI1NjYsImV4cCI6MjAwOTM4ODU2Nn0.5laphGUvp7pULepV2VHkQvDMUy8Ws4LfMxl6C42ty2g"
}
})
.then(res=>res.json())
.then(showData)

function showData(items){
    console.table(items);
   // items.forEach()
}
//function()