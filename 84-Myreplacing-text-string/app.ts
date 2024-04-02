//replacing text in a string
function replaceJSwithTS(sentence: string){
    return sentence.replace(/JavaScript/g, "TypeScript");
}
console.log(replaceJSwithTS(`"I love JavaScript and JavaScript is very usefull!"`));