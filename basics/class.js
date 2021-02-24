// creating a class
// class ClassName{}
class MyClass{
    // Create a constructor
    constructor(a) {
        // variable for class: class variable
        // this represent the current class
        // this.variable_name = value;
        this.a = a;
    }

    // creating method
    // method_name(a, b){...}
    greet() {
        // Accessing class variable
        // this.variable_name
        console.log(this.a)
    }
}

// Creating an object
// var object_name = new ClassName()
var obj = new MyClass(10)
obj.greet()

// make a class with name Calculator
class Calculator{
    constructor(a, b){
        this.a=a;
        this.b=b;
    }

    add(){
        console.log(this.a+this.b)
    }

    sub(){
        console.log(this.a-this.b)
    }

    mul(){
        console.log(this.a*this.b)
    }

    div(){
        console.log(this.a/this.b)
    }
}

var obj = new Calculator(3,6)
obj.add()
obj.sub()
obj.mul()
obj.div()