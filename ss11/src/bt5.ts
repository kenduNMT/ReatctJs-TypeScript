class Parent {
    protected protectedProperty: string;
    private privateProperty: string;

    constructor(protectedValue: string, privateValue: string) {
        this.protectedProperty = protectedValue;
        this.privateProperty = privateValue;
    }

    public showProperties(): void {
        console.log(`Protected Property: ${this.protectedProperty}`);
        console.log(`Private Property: ${this.privateProperty}`);
    }
}

class Child extends Parent {
    constructor(protectedValue: string, privateValue: string) {
        super(protectedValue, privateValue);
    }

    public displayProperties(): void {
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
