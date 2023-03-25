const createContactPage = () => {
    const contactPage  = document.createElement("div");
    contactPage.classList.add("contact-page");

    // Contact Page Heading
    const contactHeading = document.createElement("h1");
    contactHeading.textContent = "Contact Us"
    contactHeading.classList.add("contact-heading");
    contactPage.appendChild(contactHeading);

    // Opening Hours section
    const openingHours = document.createElement("div");
    openingHours.classList.add("opening-hours");
    contactPage.appendChild(openingHours);

    // Opening Hours Elements
    // Week-days
    const weekdays = document.createElement("p");
    weekdays.textContent = `Monday - Friday : 9AM - 9PM`;
    weekdays.classList.add("weekdays");
    openingHours.appendChild(weekdays);

    // Weekends
    const weekends = document.createElement("p");
    weekends.textContent = `Saturdays - Sunday : 10AM - 11PM`;
    openingHours.appendChild(weekends);
    weekends.classList.add("weekends");

    //====>>> Contact Us section
    const contactUs = document.createElement("div");
    contactUs.classList.add("contact-us");
    contactPage.appendChild(contactUs);

    // Contact Us elements
    const phone = document.createElement("p");
    phone.textContent = `📞 012 345 6789'`
    phone.classList.add("phone-number");
    contactUs.appendChild(phone);

    // Contact page address
    const address = document.createElement("p");
    address.textContent = `'🏠 House 69 javaScript Asylum, EcmaScript Building, Planet-Earth'`
    address.classList.add("address");
    contactUs.appendChild(address);

    return contactPage;
}

// Load Contact Page
const loadContact = () => {
    const main = document.querySelector("#main");
    main.textContent = " ";
    main.appendChild(createContactPage());
}

export default loadContact;