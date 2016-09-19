/**
 * Created by tungpt on 19/09/2016.
 */
'use strict';
module.exports.a = function() {
    "use strict";
    console.log('a called');
};

module.exports.b = function() {
    "use strict";
    console.log('b called');
};


module.exports.sayHelloInJapanese = function() {
    console.log('Konhichiwa');
};

module.exports.sayHelloInGerman = function() {
    console.log('Gutentag');
};

module.exports.Person = class {
    constructor(name) {
        this.name = name;
    }
    sayName(){
        console.log(this.name);
    }
};