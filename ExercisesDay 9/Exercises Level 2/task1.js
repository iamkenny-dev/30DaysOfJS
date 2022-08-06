// Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))

const priced = products.map((price) => price.price).filter(Number).reduce((acc, cur) => acc + cur);
console.log(priced);
