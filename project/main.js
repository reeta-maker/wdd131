const seasons = [
{
name: "Spring",
icon: "🌸",
activities: ["Cherry blossom viewing", "Flower parks", "Spring festivals"]
},
{
name: "Summer",
icon: "☀️",
activities: ["Summer festivals", "Fireworks", "Beach activities"]
},
{
name: "Autumn",
icon: "🍁",
activities: ["Autumn leaf viewing", "Hiking", "Seasonal food"]
},
{
name: "Winter",
icon: "❄️",
activities: ["Winter illuminations", "Snow activities", "Hot springs"]
}
];

const favoriteForm = document.querySelector("#favorite-form");
const favoriteMessage = document.querySelector("#favorite-message");

function displayFavorite(favorite) {
if (!favorite) {
return;
}

favoriteMessage.innerHTML = `
<h2>${favorite.name}, your favorite is ${favorite.season} ${favorite.icon}!</h2>
<p>You chose <strong>${favorite.activity}</strong>.</p>
<p>We hope you enjoy this experience in Japan!</p>
`;
}

function saveFavorite(event) {
event.preventDefault();

const name = document.querySelector("#visitor-name").value.trim();
const seasonName = document.querySelector("#season").value;
const activity = document.querySelector("#activity").value;

const selectedSeason = seasons.find(
(season) => season.name === seasonName
);

if (name && selectedSeason && activity) {
const favorite = {
name: name,
season: selectedSeason.name,
icon: selectedSeason.icon,
activity: activity
};

localStorage.setItem("japanFavorite", JSON.stringify(favorite));

displayFavorite(favorite);
favoriteForm.reset();
} else {
favoriteMessage.innerHTML = `
<p>Please complete all fields before saving your favorite.</p>
`;
}
}

function loadFavorite() {
const savedFavorite = localStorage.getItem("japanFavorite");

if (savedFavorite) {
const favorite = JSON.parse(savedFavorite);
displayFavorite(favorite);
}
}

if (favoriteForm) {
favoriteForm.addEventListener("submit", saveFavorite);
loadFavorite();
}