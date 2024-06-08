function menu(){
    const content = document.getElementById("content");
    content.innerText = "";




    const menuSection = document.createElement('div');
    menuSection.classList.add('menu-section');  

    const menu = document.createElement('div');
    menu.classList.add('menu');

    // Create an ordered list
    const ol = document.createElement('ol');

    // List of fast food menu items
    const menuItems = [
        "Cheeseburger",
        "Chicken Nuggets",
        "Fries",
        "Milkshake",
        "Hotdog",
        "Pizza Slice",
        "Taco",
        "Fried Chicken",
        "Fish Sandwich",
        "Mozzarella Sticks"
    ];

    // Add each item to the ordered list
    menuItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ol.appendChild(li);
    });

    // Append the ordered list to the menu
    menu.appendChild(ol);

    menuSection.appendChild(menu);
    content.appendChild(menuSection);
}

export {menu};
