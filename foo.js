/**
 * Created by tungpt on 19/09/2016.
 */
var foo2 = require('./foo2');

module.exports = {
    something: 123,

    sayHelloInEnglish: function() {
        console.log("HELLO");
    },

    sayHelloInSpanish: function() {
        console.log("Hola");
        foo2.b();
    }
};