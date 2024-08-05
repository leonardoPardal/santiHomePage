const toggleButton = document.querySelector('.navBar-toggle');

// Selects all elements with the class 'navbar-links' and assigns the NodeList to the variable navbarLinks.
const navbarLinks = document.querySelectorAll('.navBar-link');

// Adds a click event listener to the toggleButton element.
toggleButton.addEventListener('click', () => {
    // Iterates through each element in the navbarLinks NodeList.
    navbarLinks.forEach(navbarLink => {
        // Toggles the 'active' class on the current navbarLink element.
        navbarLink.classList.toggle('active');
    });
});
