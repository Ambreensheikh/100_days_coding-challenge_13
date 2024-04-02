"use strict";
//replacing text in a string
function replaceJSwithTS(sentence) {
    return sentence.replace(/JavaScript/g, "TypeScript");
}
console.log(replaceJSwithTS(`"I love JavaScript and JavaScript is very usefull!"`));
