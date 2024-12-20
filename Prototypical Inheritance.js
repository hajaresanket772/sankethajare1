// Define the Animal constructor function
function Animal() {
    this.type = "Animal";
}

// Add the sound method to Animal.prototype
Animal.prototype.sound = function() {
    console.log("Animal sound");
};

// Define the Dog constructor function, inheriting from Animal
function Dog() {
    Animal.call(this); // Call the parent constructor to inherit properties
}

// Ensure Dog.prototype inherits from Animal.prototype
Dog.prototype = Object.create(Animal.prototype);

// Override the sound method in Dog.prototype to log "Bark"
Dog.prototype.sound = function() {
    console.log("Bark");
};

// Create an instance of Dog called myDog
const myDog = new Dog();

// Call the sound method on myDog
myDog.sound(); // Output: "Bark"
