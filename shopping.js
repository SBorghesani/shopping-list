const shoppingList = [
    {
        id: 1,
        name: "Milk",
        price: 4.99,
        quantityNeeded: 1,
        tempControl: true
    },
    {
        id: 2,
        name: "Bread",
        price: 9.99,
        quantityNeeded: 1,
        tempControl: false
    },
    {
        id: 3,
        name: "Laundry Detergent",
        price: 13.99,
        quantityNeeded: 2,
        tempControl: false
    },
]

const addItemToShoppingList = (shoppingListObject) => {
    const lastIndex = shoppingList.length - 1;
    const currentLastItem = shoppingList[lastIndex];
    const maxId = currentLastItem.id;
    const idForNewItem = maxId + 1;

    shoppingListObject.id = idForNewItem;
    shoppingListObject.dateCreated = Date();
    shoppingList.push(shoppingListObject);
}

const rice = {
    name: "Rice",
    price: 8.99,
    quantityNeeded: 1,
    tempControl: false
}

addItemToShoppingList(rice);


for (const item of shoppingList) {
    if (item.price > 8){
        console.log(item);
    }
}

// console.log(shoppingList);
