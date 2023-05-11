// const { Person } = require("./person");
const dotenv = require("dotenv");
const connectToDataBase = require("./src/database/connect");

dotenv.config();

connectToDataBase();

require("./modules/express");

// const person = new Person("Debora");

// console.log(person.sayMyName());

//imprime os consoles do arquivo Path e Fs
// require("./modules/path");
// require("./modules/fs");

//SERVIDOR HTTP
// require("./modules/http");

//servidor com EXPRESS
