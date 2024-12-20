const MenuPageBuilder = function () {
    const content = document.querySelector("#content");

    const stage = document.createElement("div");
    stage.classList.add("main-stage");

    // Menu tab heading
    const menuTitleContainer = document.createElement("div");
    const menuTitle = document.createElement("h2");
    menuTitleContainer.classList.add("menu-title-container");
    menuTitle.classList.add("tag-line");
    menuTitle.textContent = "Menu";
    menuTitleContainer.appendChild(menuTitle);
    stage.appendChild(menuTitleContainer);

    // Menu Items
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    const foods = [
        {
            name: "Bangusilog",
            price: "$15.99",
            description: "Marinated milkfish. Served with egg and garlic rice."
        },
        {
            name: "Tapsilog",
            price: "$15.99",
            description: "Thinly sliced marinated beef chuck roll in garlic, salt, pepper, and vinegar. Served with egg and garlic rice."
        },
        {
            name: "Cornsilog",
            price: "$15.99",
            description: "Corn beef. Served with egg and garlic rice."
        },
        {
            name: "Porksilog",
            price: "$14.99",
            description: "Served with egg and garlic rice."
        },
        {
            name: "Tocilog",
            price: "$14.99",
            description: "Thinly sliced marinated pork shoulder in garlic, salt, pepper, and sugar. Served with egg and garlic rice."
        },
        {
            name: "Longsilog",
            price: "$13.99",
            description: "Filipino sweet sausage. Served with egg and garlic rice."
        }
    ];

    for (const food of foods) {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");

        const foodName = document.createElement("h3");
        const foodPrice = document.createElement("p");
        const foodDesc = document.createElement("p");

        foodName.textContent = food.name;
        foodPrice.textContent = food.price;
        foodPrice.classList.add("price");
        foodDesc.textContent = food.description;

        menuItem.appendChild(foodName);
        menuItem.appendChild(foodPrice);
        menuItem.appendChild(foodDesc);

        menuContainer.appendChild(menuItem);
    }
    stage.appendChild(menuContainer);

    content.appendChild(stage);
};

export { MenuPageBuilder };