import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

const createHeader = () => {
    const header = document.createElement("header");
    header.classList.add("header");

    const restaurantName = document.createElement("h1");
    restaurantName.classList.add("restaurant-name");
    restaurantName.textContent = `Snack-It-Up`
    header.appendChild(restaurantName);

    // Nav
    const nav = document.createElement("nav");
    nav.classList.add("nav-links");
    header.appendChild(nav);

    // Nav Elements
    // Home Button
    const homeLink = document.createElement("button");
    homeLink.textContent = "Home";
    homeLink.classList.add("link-button");
    nav.appendChild(homeLink);

    // Click Home Page
    homeLink.addEventListener("click", (e) => {
        if(e.target.classList.contains("active")) {
            return;
        } setButtonActive(homeLink);
        loadHome();
    })

    // Menu Button
    const menuLink = document.createElement("button");
    menuLink.textContent = "Menu";
    menuLink.classList.add("link-button");
    nav.appendChild(menuLink);

    // Click Menu Page
    menuLink.addEventListener("click", (e) => {
        if(e.target.classList.contains("active")) {
            return;
        } setButtonActive(menuLink);
        loadMenu();
    })

    // contact Button
    const contactLink = document.createElement("button");
    contactLink.textContent = "Contact";
    contactLink.classList.add("link-button");
    nav.appendChild(contactLink);

    // Click Contact Page
    contactLink.addEventListener("click", (e) => {
        if(e.target.classList.contains('active')) {
            return;
        } setButtonActive(contactLink);
        loadContact();
    })

    return header;
}

const createMain = () => {
    const main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id", "main");

     
    return main;
}

// Create Footer
const createFooter = () => {
    const footer = document.createElement("footer");
    footer.classList.add("footer");

    // Footer Links
    const copyright = document.createElement("a");
    copyright.textContent = `Copyright © ${new Date().getFullYear()} manLikeTheo`;
    footer.appendChild(copyright);

    return footer;
}

// Set Button Link Active
const setButtonActive = (button) => {
    const buttons = document.querySelectorAll(".link-button");
    buttons.forEach(button => {
        if(button !== this){
            button.classList.remove("active");
        }
    });

    button.classList.add("active");
}

// Initialize Website Function
const loadWebsite = () => {
    const content = document.querySelector("#content");
    content.classList.add("content");

    //Add Elements to Content
    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    setButtonActive(document.querySelector(".link-button"));
    loadHome();
}

export default loadWebsite;