const AboutPageBuilder = function () {
    const content = document.querySelector("#content");

    const stage = document.createElement("div");
    stage.classList.add("main-stage");

    // About tab heading
    const aboutTitleContainer = document.createElement("div");
    const aboutTitle = document.createElement("h2");
    aboutTitleContainer.classList.add("title-container");
    aboutTitle.classList.add("tag-line");
    aboutTitle.textContent = "About";
    aboutTitleContainer.appendChild(aboutTitle);
    stage.appendChild(aboutTitleContainer);

    // Info Container
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

    content.appendChild(stage);
};

export { AboutPageBuilder };