// Create Home page
const createHomePage = () => {
    
    const homePage = document.createElement("div");
    homePage.classList.add("welcome");
    
    const restaurantImg = document.createElement("div");
    restaurantImg.classList.add("restaurant-img");
    homePage.appendChild(restaurantImg);

    // Photo inside Resstaurant-image div
    const restaurantPhoto = document.createElement("img");
    restaurantPhoto.src = "/dist/images/josip-ivankovic-YEJnoRg-8mg-unsplash.jpg";
    restaurantPhoto.classList.add("restaurant-photo");
    restaurantImg.appendChild(restaurantPhoto);

    // Info Section
    const restaurantInfo = document.createElement("div");
    restaurantInfo.classList.add("restaurant-info");
    homePage.appendChild(restaurantInfo);

    // Elements inside the info section
    const h1Text = document.createElement("h1");
    h1Text.classList.add("h1-info");
    h1Text.textContent = `Welcome to Snack-It-Up. We offer the best Snacks in town.`;
    restaurantInfo.appendChild(h1Text);

    const pInfo = document.createElement("p");
    pInfo.classList.add("p-info");
    pInfo.textContent = `We've got a plethora of Snacky foods to choose from. Make your order and we'll have it delivered to you`;
    restaurantInfo.appendChild(pInfo);

    return homePage;
}

const loadHome = () => {
    const main = document.querySelector("#main");
    main.textContent = "";
    main.appendChild(createHomePage());
}

export default loadHome;