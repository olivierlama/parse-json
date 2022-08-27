import { CONSTANTS } from "./constants.js";

export function lex_string(string) {
  let json_string = "";

  if (string[0] === CONSTANTS.JSON_QUOTE) {
    string = string.slice(1);
  } else {
    return ["None", string];
  }
  let c;
  for (const i in string) {
    c = string[i];
    if (c === CONSTANTS.JSON_QUOTE) {
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

export function lex_number(string) {
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
  let rest = string.slice(json_number.length);

  if (json_number.length === 0) {
    return ["None", string];
  }
  if (json_number.includes(".")) {
    return ["float:" + json_number, rest];
  }

  return ["int:" + json_number, rest];
}

export function lex_bool(string) {
  const string_len = string.length;

  if (
    string_len >= CONSTANTS.TRUE_LEN &&
    string.slice(0, CONSTANTS.TRUE_LEN) === "true"
  )
    return ["True", string.slice(CONSTANTS.TRUE_LEN)];
  else if (
    string_len >= CONSTANTS.FALSE_LEN &&
    string.slice(0, CONSTANTS.FALSE_LEN) === "false"
  ) {
    return ["False", string.slice(CONSTANTS.FALSE_LEN)];
  }
  return ["None", string];
}

export function lex_null(string) {
  const string_len = string.length;

  if (
    string_len >= CONSTANTS.NULL_LEN &&
    string.slice(0, CONSTANTS.NULL_LEN) === "null"
  ) {
    return ["True", string.slice(CONSTANTS.NULL_LEN, CONSTANTS.NULL_LEN)];
  }
  return ["None", string];
}

export function lex(string) {
  let tokens = [];
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
    let c = string[0];
    const TAB_JSON_SYNTAX = Object.values(CONSTANTS.JSON_SYNTAX);
    if (CONSTANTS.JSON_WHITESPACE.includes(c)) {
      // Ignore whitespace
      string = string.slice(1);
    } else if (TAB_JSON_SYNTAX.includes(c)) {
      tokens.push(c);
      string = string.slice(1);
    } else {
      throw "Unexpected character: {}" + c;
    }
  }
  return tokens;
}
