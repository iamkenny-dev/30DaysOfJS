// Find the sum of price of products using only reduce reduce(callback))

const priced = products.reduce((acc, obj) => acc + obj.price, 0);
console.log(priced);
