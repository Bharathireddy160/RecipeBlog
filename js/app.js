const container =
document.getElementById("recipeContainer");

function displayRecipes(data){

    container.innerHTML = "";

    data.forEach(recipe => {

        container.innerHTML += `

        <div class="card">

            <img src="${recipe.image}">

            <div class="card-content">

                <h2>${recipe.title}</h2>

                <p>${recipe.short}</p>

                <a href="recipe.html?id=${recipe.id}">
                    View Recipe
                </a>

            </div>

        </div>

        `;
    });
}

displayRecipes(recipes);

document
.getElementById("search")
.addEventListener("keyup", function(){

    const value =
    this.value.toLowerCase();

    const filtered =
    recipes.filter(recipe =>

        recipe.title
        .toLowerCase()
        .includes(value)

    );

    displayRecipes(filtered);

});