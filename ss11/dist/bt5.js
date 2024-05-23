"use strict";
class Parent {
    constructor(protectedValue, privateValue) {
        this.protectedProperty = protectedValue;
        this.privateProperty = privateValue;
    }
    showProperties() {
        console.log(`Protected Property: ${this.protectedProperty}`);
        console.log(`Private Property: ${this.privateProperty}`);
    }
}
class Child extends Parent {
    constructor(protectedValue, privateValue) {
        super(protectedValue, privateValue);
    }
    displayProperties() {
        console.log(`Accessing protected property from Child class: ${this.protectedProperty}`);
        // console.log(`Accessing private property from Child class: ${this.privateProperty}`); // This will cause an error
    }
}
const parentInstance = new Parent("Protected Value", "Private Value");
parentInstance.showProperties();
// Accessing protected and private properties directly will cause an error
// console.log(parentInstance.protectedProperty); // This will cause an error
// console.log(parentInstance.privateProperty); // This will cause an error
const childInstance = new Child("Child Protected Value", "Child Private Value");
childInstance.displayProperties();
childInstance.showProperties(); // This can still access and show the private property via the Parent class method
