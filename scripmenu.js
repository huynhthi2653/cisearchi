document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    const container = document.getElementById('container');
    const menuButton = document.getElementById('menu');
    const links = document.querySelectorAll('a[href^="#"]');

    // Function to handle the scroll event
    function handleScroll() {
        container.classList.remove('menuopen');
        header.classList.toggle('sticky', window.scrollY > 100);
    }

    // Function to handle the menu button click
    function handleMenuButtonClick() {
        header.classList.remove('sticky');
        container.classList.toggle('menuopen');
    }

    // Function to handle anchor link click
    function handleLinkClick(event) {
        event.preventDefault();
        const targetID = this.getAttribute('href');
        const targetElement = document.querySelector(targetID);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Function to close the menu when clicked outside and show the sticky menu
    function handleOutsideClick(event) {
        if (!menuButton.contains(event.target)) {
            container.classList.remove('menuopen');
            header.classList.add('sticky');
        }
    }

    window.addEventListener('scroll', handleScroll);
    menuButton.addEventListener('click', handleMenuButtonClick);
    links.forEach(link => link.addEventListener('click', handleLinkClick));

    // Listen for clicks anywhere in the document
    document.addEventListener('click', handleOutsideClick);
});