import { lex } from "./app/app-parse-json";
import jsonFile from "./assets/in.json";
import "./assets/images/favicon-32x32.png";
console.log("Start parsing json file");

//let jsonFile = require("./in/in.json");

console.log(jsonFile);

console.log("jsonfile", jsonFile);
console.log("token", lex(JSON.stringify(jsonFile)));
