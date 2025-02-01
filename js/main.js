var menuButton = document.querySelector(".menu-button");
    menuButton.addEventListener('click', function name(params) {
        console.log("Клик по кнопке меню")
        document
        .querySelector(".header-nav")
        .classList.toggle("header-nav--visible");
    });

