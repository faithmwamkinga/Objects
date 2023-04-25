// Given an array of objects, each object representing a person with a
// name and age property, write a function that returns a new array
// containing the names of all people who are 18 years old or older.

function peopleNames(people) {
  const adults=[];
  for (i=0;i<people.length;i++){
    const onePerson= people[i];
    if(people.age>=18){
      adults.push(onePerson.name)
    }
  }
   return adults;
}
const people = [
    { name: 'Alice', age: 17 },
    { name: 'Eunice', age: 22 },
    { name: 'Charlie', age: 14 },
    { name: 'Max', age: 19 },
 ];

const adults = peopleNames(people);
console.log(adults);
peopleNames()


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

// Given an array of objects, where each object represents a student
// with a name and an array of scores, write a function that returns a 
//new array containing the names of all students whose average score 
//is greater than or equal to 85.

function student(students){
  let newStudent=[];
  let total=students.scores+students.scores+students.scores
  let studentAverage=total/students.scores
  for (stud in students){
    if (studentAverage>=85){
      newStudent.push(students.name)
      

    }
    console.log(newStudent)
  }

}
const students = [
  { name: 'John', scores: [90, 80, 85] },
  { name: 'Jane', scores: [95, 92, 88] },
  { name: 'Jim', scores: [70, 80, 75] },
  { name: 'Jill', scores: [85, 90, 84] },
];
student(students)


//Given an object representing a car, with properties for the make, model, year, and a method to
// display the car's information, write a function that takes the car object and adds a new method to 
//the object called age. The age method should return the current age of the car based on the current
// year and the car's year property.


function myCar(){
  
  car.age=20; 
}
const car = {
  make: 'Ford',
  model: 'Ranger',
  year: 2023,
  displayInfo: function() {
    console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
  },
};