const cow = require("./information.js")

let cowsay = require("cowsay");

console.log(cowsay.say({
    text : (`Hello from ${cow.name}!, je viens de ${cow.campus}`)

}));

// text : (`Hello from ${[cow]}!`)