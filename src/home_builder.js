import PIIcon from "./philippines-flag-circle.png";

const HomePageBuilder = function() {
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

    // Restaurant Description
    const restDescContainer = document.createElement("div");
    const restDesc = document.createElement("p");
    restDescContainer.classList.add("rest-desc");
    
    restDesc.textContent = "Experience the diverse flavors of the islands of the Philippines \
    present in breakfast, lunch, and dinner foods.";

    restDescContainer.appendChild(restDesc);
    stage.appendChild(restDescContainer);

    // Add tab content to page
    content.appendChild(stage);
};

export { HomePageBuilder };