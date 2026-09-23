const temples = [
{
templeName: "Aba Nigeria",
location: "Aba, Nigeria",
dedicated: "2005, August, 7",
area: 11500,
imageUrl:
"https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-5087-main.jpg"
},

{
templeName: "Manti Utah",
location: "Manti, Utah, United States",
dedicated: "1888, May, 21",
area: 74792,
imageUrl:
"https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple/manti-utah-temple-40551-main.jpg"
},

{
templeName: "Payson Utah",
location: "Payson, Utah, United States",
dedicated: "2015, June, 7",
area: 96630,
imageUrl:
"https://churchofjesuschristtemples.org/assets/img/temples/payson-utah-temple/payson-utah-temple-62834-main.jpg"
},

{
templeName: "Yigo Guam",
location: "Yigo, Guam",
dedicated: "2020, May, 2",
area: 6861,
imageUrl:
"https://churchofjesuschristtemples.org/assets/img/temples/yigo-guam-temple/yigo-guam-temple-26495-main.jpg"
},

{
templeName: "Washington D.C.",
location: "Kensington, Maryland, United States",
dedicated: "1974, November, 19",
area: 156558,
imageUrl:
"https://churchofjesuschristtemples.org/assets/img/temples/washington-d.c.-temple/washington-d.c.-temple-14992-main.jpg"
},

{
templeName: "Lima Perú",
location: "Lima, Perú",
dedicated: "1986, January, 10",
area: 9600,
imageUrl:
"https://churchofjesuschristtemples.org/assets/img/temples/lima-peru-temple/lima-peru-temple-12721-main.jpg"
},

{
templeName: "Mexico City Mexico",
location: "Mexico City, Mexico",
dedicated: "1983, December, 2",
area: 116642,
imageUrl:
"https://churchofjesuschristtemples.org/assets/img/temples/mexico-city-mexico-temple/mexico-city-mexico-temple-4060-main.jpg"
},

{
templeName: "Salt Lake Utah",
location: "Salt Lake City, Utah, United States",
dedicated: "1893, April, 6",
area: 253015,
imageUrl:
"https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
},

{
templeName: "Tokyo Japan",
location: "Tokyo, Japan",
dedicated: "1980, October, 27",
area: 52038,
imageUrl:
"https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340-main.jpg"
},

{
templeName: "Rome Italy",
location: "Rome, Italy",
dedicated: "2019, March, 10",
area: 41010,
imageUrl:
"https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"
}

];

const templeGrid = document.querySelector(".temple-grid");

function displayTemples(templeList) {
    templeGrid.innerHTML = "";

    templeList.forEach((temple) => {
        const card = document.createElement("figure");

        card.innerHTML = `
        <figcaption>
        <h2>${temple.templeName}</h2>
        <p>Location: ${temple.location}</p>
        <p>Dedicated: ${temple.dedicated}</p>
        <p>Area: ${temple.area.toLocaleString()} sq ft</p>
        </figcaption>
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        `;

        templeGrid.appendChild(card);
    });
}

displayTemples(temples);

// Filter buttons
const homeLink = document.querySelector("#home");
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");

// Home - display all temples
homeLink.addEventListener("click", (event) => {
event.preventDefault();
displayTemples(temples);
});

// Old - temples dedicated before 1900
oldLink.addEventListener("click", (event) => {
event.preventDefault();

const oldTemples = temples.filter((temple) => {
const year = Number(temple.dedicated.split(",")[0]);
return year < 1900;
});

displayTemples(oldTemples);
});

// New - temples dedicated after 2000
newLink.addEventListener("click", (event) => {
event.preventDefault();

const newTemples = temples.filter((temple) => {
const year = Number(temple.dedicated.split(",")[0]);
return year > 2000;
});

displayTemples(newTemples);
});

// Large - temples larger than 90,000 square feet
largeLink.addEventListener("click", (event) => {
event.preventDefault();

const largeTemples = temples.filter((temple) => {
return temple.area > 90000;
});

displayTemples(largeTemples);
});

// Small - temples smaller than 10,000 square feet
smallLink.addEventListener("click", (event) => {
event.preventDefault();

const smallTemples = temples.filter((temple) => {
return temple.area < 10000;
});

displayTemples(smallTemples);
});

//Current year
const currentYear=
document.querySelector("#currentyear");
currentYear.textContent=new
Date().getFullYear();

//Last modified date
const lastModified=
document.querySelector("#lastmodified");
lastModified.textContent=`Last Modification: ${document.lastModified}`;
