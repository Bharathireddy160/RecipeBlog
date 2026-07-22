const params =
new URLSearchParams(
window.location.search
);

const id =
parseInt(params.get("id"));

const recipe =
recipes.find(r => r.id === id);

const detail =
document.getElementById(
"recipeDetail"
);

detail.innerHTML = `

<h1>${recipe.title}</h1>

<img src="${recipe.image}">

<h2>Ingredients</h2>

<ul>
${recipe.ingredients
.map(item =>
`<li>${item}</li>`)
.join("")}
</ul>

<br>

<h2>Preparation Steps</h2>

<p>${recipe.steps}</p>

`;