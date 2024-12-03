type Inventory = Array<Toy>

type Toy = {
    name: string,
    quantity: number,
    category: string
};

export function organizeInventory(inventory: Inventory): object {
    const categories = {};
    for(const toy of inventory) {
        const {name, quantity, category} = toy;
        if(!(category in categories)){
            categories[category] = {};
        }
        categories[category][name] = (name in categories[category])
            ? categories[category][name] + quantity
            : quantity;
    }
    return categories;
}
