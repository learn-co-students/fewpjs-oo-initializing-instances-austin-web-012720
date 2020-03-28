// Write your code here

class Dog {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
      }

}

let bigFluffyDog1 = new Dog("Buzz", "greatPyrenees");
let bigFluffyDog2 = new Dog("Woody", "labrador");

class Breakfast {
    constructor(name, breed) {
        this.food = name;
        this.drink = breed;
      }

}

class Lunch {
    constructor(name, breed, drink) {
        this.salad = name;
        this.soup = breed;
        this.drink = drink;
      }

}

class Dinner {
    constructor(name, breed, entree, dessert) {
        this.salad = name;
        this.soup = breed;
        this.entree = entree;
        this._dessert = dessert;
      }

}