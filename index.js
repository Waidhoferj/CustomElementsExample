import Tile from "./tile.js";

//Custom Elements can be added programmatically as well. The last two cards of the set are added in code.

/**
 * Employee information for the webpage
 */
class Person {
  constructor(name, photo, description) {
    this.name = name;
    this.photo = photo;
    this.description = description;
  }
}
//The holding element for all of the employee cards.
const grid = document.querySelector(".grid");

//All of the employees for the page. This can be pulled directly from a server.
const people = [
  new Person("James Baker", "person-3.png", "Develops the apps."),
  new Person("Andy Smith", "person-4.png", "Designs the interfaces.")
];
//Displaying all of this info is straightforward with Custom Elements.
for (let person of people) {
  //Get information from person
  const { name, photo, description } = person;
  //Instantiate tile
  const tile = new Tile(name, photo, description);
  //Set description
  const paragraph = document.createElement("p");
  paragraph.innerText = description;
  paragraph.slot = "description";
  //Add description to tile
  tile.appendChild(paragraph);
  grid.appendChild(tile);

  const text = "x";
  let frontIndex;
  let rearIndex;

  setInterval(() => {
    frontIndex++;
    rearIndex++;
    paragraphElement.innerText = text.slice(frontIndex, rearIndex);
  }, 2000);
}
