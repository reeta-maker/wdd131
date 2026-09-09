//Hamburger menu
const menuButton=
document.querySelector("#menu");
const navigation=
document.querySelector("nav");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");
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