//mobile menu toggle
let burgerIcon = document.querySelector("#burger");
let navbarMenu = document.querySelector("#nav-links");

burgerIcon.addEventListener("click", () => {
    navbarMenu.classList.toggle("is-active");
});

//npx @11ty/eleventy --serve