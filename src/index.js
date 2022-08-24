console.log("Start parsing json file");

let jsonFile = require("./in/in.json");
console.log(jsonFile);

const JSON_COMMA = ",";
const JSON_COLON = ":";
const JSON_LEFTBRACKET = "[";
const JSON_RIGHTBRACKET = "]";
const JSON_LEFTBRACE = "{";
const JSON_RIGHTBRACE = "}";
const JSON_QUOTE = '"';

const JSON_WHITESPACE = [" ", "\t", "\b", "\n", "\r"];
const JSON_SYNTAX = [
  JSON_COMMA,
  JSON_COLON,
  JSON_LEFTBRACKET,
  JSON_RIGHTBRACKET,
  JSON_LEFTBRACE,
  JSON_RIGHTBRACE,
];

const FALSE_LEN = "false".length;
const TRUE_LEN = "true".length;
const NULL_LEN = "null".length;

function lex_string(string) {
  let json_string = "";

  if (string[0] === JSON_QUOTE) {
    string = string.slice(1);
  } else {
    return ["None", string];
  }
  let c;
  for (const i in string) {
    c = string[i];
    if (c === JSON_QUOTE) {
      if (i - 1 >= 0 && string[i - 1] === "\\") {
        json_string += c;
      } else {
        return [json_string, string.slice(json_string.length + 1)];
      }
    } else {
      json_string += c;
    }
  }
  throw "Expected end-of-string quote";
}
function lex_number(string) {
  let json_number = "";

  //number_characters = [str(d) for d in range(0, 10)] + ['-', 'e', '.']
  const number_characters = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "-",
    "e",
    ".",
  ];
  let c;
  for (const i in string) {
    c = string[i];
    if (number_characters.includes(c)) {
      json_number += c;
    } else {
      break;
    }
  }
  //rest = string[length(json_number):]
  rest = string.slice(json_number.length);

  if (json_number.length === 0) {
    return ["None", string];
  }
  if (json_number.includes(".")) {
    return ["float:" + json_number, rest];
  }

  return ["int:" + json_number, rest];
}

function lex_bool(string) {
  const string_len = string.length;

  if (string_len >= TRUE_LEN && string.slice(0, TRUE_LEN) === "true")
    return ["True", string.slice(TRUE_LEN)];
  else if (string_len >= FALSE_LEN && string.slice(0, FALSE_LEN) === "false") {
    return ["False", string.slice(FALSE_LEN)];
  }
  return ["None", string];
}

function lex_null(string) {
  const string_len = string.length;

  if (string_len >= NULL_LEN && string.slice(0, NULL_LEN) === "null") {
    return ["True", string.slice(NULL_LEN, NULL_LEN)];
  }
  return ["None", string];
}
function lex(string) {
  tokens = [];
  let ret_array;
  let json_string;

  while (string.length > 0) {
    ret_array = lex_string(string);
    json_string = ret_array[0];
    string = ret_array[1];
    if (json_string !== "None") {
      tokens.push(json_string);
      continue;
    }
    ret_array = lex_number(string);
    json_string = ret_array[0];
    string = ret_array[1];
    if (json_string !== "None") {
      tokens.push(json_string);
      continue;
    }
    ret_array = lex_bool(string);
    json_string = ret_array[0];
    string = ret_array[1];
    if (json_string !== "None") {
      tokens.push(json_bool);
      continue;
    }
    ret_array = lex_null(string);
    json_string = ret_array[0];
    string = ret_array[1];
    if (json_string !== "None") {
      tokens.push(None);
      continue;
    }
    c = string[0];

    if (JSON_WHITESPACE.includes(c)) {
      // Ignore whitespace
      string = string.slice(1);
    } else if (JSON_SYNTAX.includes(c)) {
      tokens.push(c);
      string = string.slice(1);
    } else {
      throw "Unexpected character: {}" + c;
    }
  }
  return tokens;
}
console.log("jsonfile", jsonFile);
console.log("token", lex(JSON.stringify(jsonFile)));
