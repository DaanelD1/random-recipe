const calendarButton = document.querySelector(".btn-start");
calendarButton.addEventListener("click", (event)=> {
    location.reload();
});


document.addEventListener("DOMContentLoaded", function(){
    console.log("onload");

let url = "https://api.spoonacular.com/recipes/random?apiKey=06cc9052ea6b46109ee5224026b176f5";

    fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {

        let recipe = data.recipes[0];
        let title = recipe.title;
        let imageUrl = recipe.image;
        let ingredients = recipe.extendedIngredients;
        let summary = recipe.summary;
        let instructions = recipe.instructions;
        
        document.querySelector(".main").innerHTML = `
        <h1>${title}</h1>
        <img src="${imageUrl}"/>
        `;


        document.querySelector(".summary").innerHTML = `<p>${summary}</p>`;
        document.querySelector(".instructions").innerHTML = `
            <h2>Instructions</h2>
            ${instructions}
    `;

    let output = "";

    ingredients.forEach(ingredient => {
        output += `<li>${ingredient.name}: ${ingredient.amount}: ${ingredient.unit}</li>`
    });
    
    document.querySelector(".list").innerHTML = output;
});


});