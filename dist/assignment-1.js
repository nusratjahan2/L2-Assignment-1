"use strict";
function formatString(input, toUpper) {
    if (typeof toUpper === "boolean") {
        if (toUpper) {
            return input.toUpperCase();
        }
        else {
            return input.toLowerCase();
        }
    }
    else {
        return input.toLowerCase();
    }
}
console.log(formatString('Hello', true));
