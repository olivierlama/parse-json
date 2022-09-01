//import axios from "axios";
import { lex } from "./app/app-parse-json";
//import jsonFile from "./assets/in.json";
import "./assets/images/favicon-32x32.png";
import "./styles.css";

const form = document.querySelector("form");
const inputJsonInNname = document.querySelector("#json-in-name");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  console.log(formData);
  const file = inputJsonInNname.files[0];
  console.log(file);
  formData.append("json-in-name", file);

  console.log(formData.get("json-in-name"));
  fetch("/test", {
    method: "POST",
    body: formData,
  }).then((rep) => {
    console.log(rep);
  });
});

//const inputJsonInNname = document.querySelector("input");
// inputJsonInNname.addEventListener("change", (event) => {
//   console.log("change", event);

//   const file = event.target.files[0];
//   console.log("change", file);
//   let formData = new FormData();
//   formData.set("file", file);

//   axios
//     .post("http://localhost:4000/", formData, {
//       onUploadProgress: (progressEvent) => {
//         console.log(formData);
//         const percentCompleted = Math.round(
//           (progressEvent.loaded * 100) / progressEvent.total
//         );
//         console.log(`upload process: ${percentCompleted}%`);
//       },
//     })
//     .then((res) => {
//       console.log(res.data);
//       console.log(res.data.url);
//     });
// });
// console.log(inputJsonInNname);

// console.log("Start parsing json file");

// fetch(jsonFile)
//   .then((response) => {
//     response
//       .json()
//       .then((r) => {
//         //console.log(r);
//         console.log("token", lex(JSON.stringify(r)));
//       })
//       .catch((err) => console.log(err));
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// events
