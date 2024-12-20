import PIIcon from "./philippines-flag-circle.png";

const HomePageBuilder = function() {
    const navBar = document.querySelector("header");
    const content = document.querySelector("#content");

    const stage = document.createElement("div");
    stage.classList.add("main-stage");

    // Tag line content
    const tagLineContainer = document.createElement("div");
    const tagLine = document.createElement("h2");
    tagLineContainer.classList.add("tag-line-container");
    tagLine.classList.add("tag-line");
    tagLine.textContent = "The Best of Philippine Cuisine";

    tagLineContainer.appendChild(tagLine);
    stage.appendChild(tagLineContainer);

    // Circular PI Icon
    const piIcon = document.createElement("img");
    piIcon.src = PIIcon;
    piIcon.alt = "Circular Phlippine flag icon";
    piIcon.classList.add("pi-flag-icon");
    stage.appendChild(piIcon);

    // Info container
    const infoContainer = document.createElement("div");
    const address = document.createElement("p");
    const hrsLabel = document.createElement("p");
    infoContainer.classList.add("info-container");
    address.classList.add("address");
    address.innerHTML = "1234 This St<br>Placeville, Country";
    hrsLabel.classList.add("hours-label");
    hrsLabel.textContent = "Hours";

    infoContainer.appendChild(address);
    infoContainer.appendChild(hrsLabel);

    const hours = document.createElement("ul");
    hours.classList.add("hours");

    const monFriLi = document.createElement("li");
    const monFriLabel = document.createElement("span");
    const monFriHours = document.createElement("span");
    monFriLabel.classList.add("day");
    monFriLabel.textContent = "Mon-Fri";
    monFriHours.classList.add("hours");
    monFriHours.textContent = "2PM - 12AM";
    monFriLi.appendChild(monFriLabel);
    monFriLi.appendChild(monFriHours);

    const wkndLi = document.createElement("li");
    const wkndLabel = document.createElement("span");
    const wkndHours = document.createElement("span");
    wkndLabel.classList.add("day");
    wkndLabel.textContent = "Sat-Sun";
    wkndHours.classList.add("hours");
    wkndHours.textContent = "5PM - 2AM";
    wkndLi.appendChild(wkndLabel);
    wkndLi.appendChild(wkndHours);

    hours.appendChild(monFriLi);
    hours.appendChild(wkndLi);

    infoContainer.appendChild(hours);
    stage.appendChild(infoContainer);

    // Add tab content to page
    content.appendChild(stage);
};

export { HomePageBuilder };