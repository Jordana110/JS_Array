"use strict";

//====Level 1_3
const name = ["Jaqub", "Boi", "Jordana"];
console.log(name.length);

//==Level1_4

name.push("J", "B", "J");
console.log(name);

//===Level 1_5
console.log(name.pop());
console.log(name);

name.pop();
console.log(name);

//==Level 1_6
name.shift();
console.log(name);

//==Level 1_7
name.unshift("one");
console.log(name);

//==Level 1_8
const reise = ["America", "India", "Italy"];
console.log(reise);

console.log(reise.slice(1));
console.log(reise);

//===Level 1_9
reise.splice(1, 1, "Japan");
console.log(reise);

//===Level 1_10

const text =
      "It's okay, Bender. I like cooking too. Oh, you're a dollar naughtier than most. My fellow Earthicans, as I have explained in my book 'Earth in the Balance', and the much more popular 'Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards.";
let textkomma = text.split(" ");
console.log(textkomma);

textkomma = text.split("");
console.log(textkomma);

textkomma = text.split(",");
console.log(textkomma);
