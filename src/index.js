import { lex } from "./app/app-parse-json";
import jsonFile from "./assets/in.json";
import "./assets/images/favicon-32x32.png";
console.log("Start parsing json file");

//let jsonFile = require("./in/in.json");

//console.log(jsonFile);

//console.log("jsonFile", jsonFile);
fetch(jsonFile)
  .then((response) => {
    response
      .json()
      .then((r) => {
        //console.log(r);
        console.log("token", lex(JSON.stringify(r)));
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => {
    console.log(err);
  });
