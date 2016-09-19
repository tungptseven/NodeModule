/**
 * Created by tungpt on 19/09/2016.
 */
'use strict';

/*var foo = require('./foo');
console.log('in another module: ', foo.something);

var foo2 = require('./foo2');
foo2.b();

/*const Person = require('./foo2').Person;
 var person = new Person('Cuong');
 person.sayName();*/

const foo2 = require('./foo2');
var person = new foo2.Person('Cuong');
person.sayName();

class Child extends foo2.Person {
    constructor (name, age) {
        super (name);
        this.age = age;
    }
    // Override the someClass method above
    sayName() {
        // This will call someClass.sayName() triggering the old alert
        // Which will just display our name
        super.sayName();

        // This will trigger the new alert which has labels and our age
        console.log('Name:' + this.name + ' Age:' + this.age);
    }
}

var child = new Child('Minh', 11);
child.sayName();