var ProductType;
(function (ProductType) {
    ProductType[ProductType["boots"] = 0] = "boots";
    ProductType[ProductType["sneakers"] = 1] = "sneakers";
    ProductType[ProductType["sandals"] = 2] = "sandals";
})(ProductType || (ProductType = {}));
class Product {
    constructor(id, size, color, price, discount) {
        this.id = id;
        this.size = size;
        this.color = color;
        this.price = price;
        this.discount = discount;
    }
    get totalCost() {
        return this.price - this.discount;
    }
    set totalCost(value) {
        this._totalCost = this.price - this.discount;
    }
}
class Shoes {
    constructor() {
        this.boots = [];
        this.sneakers = [];
        this.sandals = [];
    }
}
const products = {
    shoes: new Shoes(),
    [Symbol.iterator]() {
        const allProducts = [
            ...this.shoes.boots,
            ...this.shoes.sneakers,
            ...this.shoes.sandals
        ];
        return {
            pointer: 0,
            next() {
                if (this.pointer < allProducts.length) {
                    const result = {
                        done: false,
                        value: allProducts[this.pointer]
                    };
                    this.pointer++;
                    return result;
                }
                else {
                    return { done: true, value: undefined };
                }
            },
        };
    },
    FilterByCost(startCost, endCost) {
        const allProducts = [
            ...this.shoes.boots,
            ...this.shoes.sneakers,
            ...this.shoes.sandals
        ];
        return allProducts.filter((product) => product.price >= startCost && product.price < endCost);
    },
    FilterBySize(size) {
        const allProducts = [
            ...this.shoes.boots,
            ...this.shoes.sneakers,
            ...this.shoes.sandals
        ];
        return allProducts.filter((product) => product.size === size);
    },
    FilterByColor(color) {
        const allProducts = [
            ...this.shoes.boots,
            ...this.shoes.sneakers,
            ...this.shoes.sandals
        ];
        return allProducts.filter((product) => product.color === color);
    },
    AddProduct(type, size, color, cost, discount) {
        const newProduct = new Product(this.shoes.boots.length + this.shoes.sneakers.length + this.shoes.sandals.length + 1, size, color, cost, discount);
        switch (type) {
            case ProductType.sneakers:
                this.shoes.sneakers.push(newProduct);
                break;
            case ProductType.sandals:
                this.shoes.sandals.push(newProduct);
                break;
            case ProductType.boots:
                this.shoes.boots.push(newProduct);
                break;
        }
    }
};
const newProducts = [
    { type: ProductType.sandals, size: 38, color: "brown", cost: 150, discount: 10 },
    { type: ProductType.sneakers, size: 39, color: "blue", cost: 120, discount: 5 },
    { type: ProductType.boots, size: 41, color: "black", cost: 180, discount: 15 },
    { type: ProductType.sandals, size: 37, color: "red", cost: 130, discount: 8 },
    { type: ProductType.sneakers, size: 40, color: "white", cost: 110, discount: 7 },
    { type: ProductType.boots, size: 42, color: "gray", cost: 160, discount: 12 },
    { type: ProductType.sandals, size: 36, color: "green", cost: 140, discount: 10 },
    { type: ProductType.sneakers, size: 38, color: "purple", cost: 125, discount: 6 },
    { type: ProductType.boots, size: 39, color: "brown", cost: 170, discount: 14 },
    { type: ProductType.sandals, size: 40, color: "yellow", cost: 120, discount: 5 },
    { type: ProductType.sneakers, size: 37, color: "orange", cost: 135, discount: 8 },
    { type: ProductType.boots, size: 41, color: "blue", cost: 190, discount: 18 },
    { type: ProductType.sandals, size: 39, color: "pink", cost: 155, discount: 12 },
    { type: ProductType.sneakers, size: 42, color: "black", cost: 145, discount: 10 },
    { type: ProductType.boots, size: 38, color: "white", cost: 200, discount: 20 },
];
for (const product of newProducts) {
    products.AddProduct(product.type, product.size, product.color, product.cost, product.discount);
}
console.log("Продукты:");
for (let product of products) {
    console.log(`id: ${product.id}, size: ${product.size}, color: ${product.color}, price: ${product.price} , discount: ${product.discount} , TOTAL PRICE : ${product.totalCost}`);
}
console.log("Фильтр по цене от 120 до 150:");
let filterByCost = products.FilterByCost(120, 150);
for (let object of filterByCost) {
    console.log(object);
}
console.log("Фильтр по цвету black:");
let filterByColor = products.FilterByColor("black");
for (let object of filterByColor) {
    console.log(object);
}
console.log("Фильтр по размеру 44:");
let filterBySize = products.FilterBySize(40);
for (let object of filterBySize) {
    console.log(object);
}
