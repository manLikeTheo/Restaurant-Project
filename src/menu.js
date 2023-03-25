const createMenuPage = () => {
    const menu = document.createElement("div");
    menu.classList.add("menu");


    // Small-chops
    menu.appendChild(createFoodItem(
        "small-chops",
        "Array of tasty snacks for your eating pleasure. Good value for your money too"
    ));

    // Suya
    menu.appendChild(createFoodItem(
        "suya",
        "Smoked meat flavored with hot and chilly spices to spice up your day. Better taken with a cold beverage"
    ));

    // chicken
    menu.appendChild(createFoodItem(
        "chicken",
        "Crispy deep fried chicken to blow your mind. Better taken with a cold beer or any cold beverage of your choice"
    ));

    // Sausage roll
    menu.appendChild(createFoodItem(
        "sausage-roll",
        "Delicious sausage roll. Comes with Chicken or beef sausage. Can be taken in the morning or as a lunchtime snack"
    ));

    // samosa
    menu.appendChild(createFoodItem(
        "samosa",
        "Delicious Samosa rolls with spicy chicken, beef cabbage, carrot and other spicy vegetables added therein"
    ));

    // "doughnuts"
    menu.appendChild(createFoodItem(
        "doughnuts",
        "Delicious fluffy doughnuts made with exquisite dough consistency"
    ));

    // boli
    menu.appendChild(createFoodItem(
        "boli",
        "smoked Plantain snack better taken with pepper sauce or groundnut. Could server as lunchtime snack or brunch"
    ));

    // meat pie
    menu.appendChild(createFoodItem(
        "meat-pie",
        "Nicely baked meat pie to give you that delicious taste you crave at lunchtime. Better taken with a cold beverage or beer"
    ));


    return menu;
}


//Function to create Food item
const createFoodItem = (name, desc) => {
    const foodItem = document.createElement("div");
    foodItem.classList.add("food-item");

    const foodName = document.createElement("h2");
    foodName.textContent = name;

    const foodDescription = document.createElement("p");
    foodDescription.textContent = desc;

    const foodImage = document.createElement("img");
    foodImage.src = `images/food-images/${name.toLowerCase()}.jpg`;
    foodImage.alt = `${name}`;

    // order button
    const order = document.createElement("button");
    order.textContent = "Place Order";
    order.classList.add("order-button");

    foodItem.appendChild(foodImage);
    foodItem.appendChild(foodName);
    foodItem.appendChild(foodDescription);
    foodItem.appendChild(order);

    return foodItem;
};

// Load the menu page
const loadMenu = () => {
    const main = document.querySelector("#main");
    main.textContent = "";
    main.appendChild(createMenuPage());
}

export default loadMenu;