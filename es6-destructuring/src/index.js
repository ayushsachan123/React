// import animals,{ useAnimals } from "./data";
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

// console.log(animals);

// //Destructuring array
// const [cat, dog] = animals;
// console.log(cat);


// //Destructuring  object
// const {name: catName, sound: catSound} = cat;
//console.log(catSound);

//Giving the custoum value
// const {name = "fluffy", sound = "purr"} = cat;
// console.log(name);

//Destructuring Nested Objects
// const {name, sound, feedingRequirements:{food, water}} = cat;
// console.log(food);

// const [animal, makeSound] = useAnimals(cat);
// console.log(animal);
// makeSound();




// CHALLENGE: uncomment the code below and see the car stats rendered

const [honda, tesla] = cars;

const {speedStats: {topSpeed: hondaTopSpeed} } = honda;
const {speedStats: {topSpeed: teslaTopSpeed} } = tesla;

const {coloursByPopularity: [hondaTopColour] } = honda;
const {coloursByPopularity: [teslaTopColour] } = tesla;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Colour</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
