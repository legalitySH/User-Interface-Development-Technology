type equipment={
    category:string,
    price:string,
    name:string,
    availability:boolean
}


const products: equipment[] = [
    {category: 'Sporting Goods', price: '$49.99', name: 'Football', availability: false},
    {category: 'Sporting Goods', price: '$9.99', name: 'Baseball', availability: true},
    {category: 'Sporting Goods', price: '$29.99', name: 'Basketball', availability:true},
    {category: 'Electronics', price: '$99.99', name: 'iPod Touch', availability: false},
    {category: 'Electronics', price: '$399.99', name: 'iPhone 5', availability: true},
    {category: 'Electronics', price: '$199.99', name: 'Nexus 7', availability: false},
    {category: 'Sporting Goods', price: '$29.99', name: 'Basketball', availability:true},
];

export default products;


