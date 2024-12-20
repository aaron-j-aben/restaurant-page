const MenuPageBuilder = function () {
    const content = document.querySelector("#content");

    const stage = document.createElement("div");
    stage.classList.add("main-stage");

    const menuTitleContainer = document.createElement("div");
    const menuTitle = document.createElement("h2");
    menuTitleContainer.classList.add("menu-title-container");
    menuTitle.classList.add("tag-line");
    menuTitle.textContent = "Menu";
    menuTitleContainer.appendChild(menuTitle);
    stage.appendChild(menuTitleContainer);

    content.appendChild(stage);
};

export { MenuPageBuilder };