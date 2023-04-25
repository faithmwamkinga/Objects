// Given an array of objects, each object representing a person with a
// name and age property, write a function that returns a new array
// containing the names of all people who are 18 years old or older.



// let ages=Object.values(people);
// function peopleNames(people) {
//     const adult=people.filter(human=>human.age>=18);
//     const  namez= adult.map(human=>human.namez);
//     return namez
// }
// const people = [
//     { name: 'Alice', age: 17 },
//     { name: 'Eunice', age: 22 },
//     { name: 'Charlie', age: 14 },
//     { name: 'Max', age: 19 },
//  ];

// let namez=peopleNames(people);
// console.log(namez)
// peopleNames()


// Write a function that takes an array of objects, where each object represents a product with a name, price, and category property.
//  The function should
// return an object that groups the products by their categories, with the category names as keys and the arrays of products as values.
// const products = [
    // { name: 'Laptop', price: 1200, category: 'Electronics' },
    // { name: 'Shirt', price: 25, category: 'Clothing' },
    // { name: 'Headphones', price: 80, category: 'Electronics' },
    // { name: 'Shoes', price: 60, category: 'Clothing' },
//   ];
function myProducts(materials) {
    const aProduct = {};
    for (let i = 0; i < materials.length; i++) {
      const aProduct = myProducts[i].products;
      if (myProducts[aProduct]) {
        myProducts[aProduct].push(products[i]);
      } else {
        myProducts[aProduct] = [products[i]];
      }
    }
    return myProducts;
  }
  const products = [
    { name: 'Laptop', price: 1200, category: 'Electronics' },
    { name: 'Shirt', price: 25, category: 'Clothing' },
    { name: 'Headphones', price: 80, category: 'Electronics' },
    { name: 'Shoes', price: 60, category: 'Clothing' },
  ];
  const productsByCategory = myProducts(products);
console.log(productsByCategory);

    
