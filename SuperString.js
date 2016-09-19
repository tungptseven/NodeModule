/**
 * Created by tungpt on 19/09/2016.
 */
"use strict";
module.exports = {
    invert: function(str) {
        var result = "";
        for (var i = str.length - 1; i >= 0; i--) {
            result += str.charAt(i);
        }
        return result;
    },

    camelCase: function(str) {
        var result = "";
        var prevChar = undefined;
        for (var i = 0; i < str.length; i++) {
            var currentChar = str.charAt(i);
            if (i == 0 || prevChar == " ") {
                result += currentChar.toUpperCase();
            } else {
                result += currentChar;
            }
            prevChar = currentChar;
        }
        return result;
    },

    longestWord: function(string) {
            var str = string.split(" ");
            var longest = 0;
            var word = null;
            for (var i = 0; i < str.length; i++) {
                if (longest < str[i].length) {
                    longest = str[i].length;
                    word = str[i];
                }
            }
            return word;
    }
};