import { pascalCase } from "change-case";

export function safeType(type) {
  const typesMap = {
    integer: "number",
    file: "File",
  };
  return typesMap[type] ?? type;
}

export function getRefTarget(ref) {
  const cleanRef = ref.replaceAll(/\/?#\//g, "").split("/");
  return pascalCase(cleanRef[cleanRef.length - 1]);
}
export function cleanText(text) {
  return text.replaceAll(/\**\/\**/g, "");
}
export function getRefs(object, key = "$ref") {
  var values = [];

  function _getRefs(object, key) {
    Object.keys(object).forEach(function (k) {
      if (k === key) {
        values.push(object[k]);
      }
      if (object[k] && typeof object[k] === "object") {
        values = values.concat(getRefs(object[k], key));
      }
    });
    return values;
  }
  return [...new Set(_getRefs(object, key))];
}

export function safeJs(word) {
  const reservedWords = [
    "break",
    "byte",
    "case",
    "catch",
    "char",
    "class",
    "const",
    "continue",
    "debugger",
    "default",
    "delete",
    "do",
    "double",
    "else",
    "enum",
    "eval",
    "export",
    "extends",
    "false",
    "final",
    "finally",
    "float",
    "for",
    "function",
    "goto",
    "if",
    "implements",
    "import",
    "in",
    "instanceof",
    "int",
    "interface",
    "let",
    "long",
    "native",
    "new",
    "null",
    "package",
    "private",
    "protected",
    "public",
    "return",
    "short",
    "static",
    "super",
    "switch",
    "synchronized",
    "this",
    "throw",
    "throws",
    "transient",
    "true",
    "try",
    "typeof",
    "var",
    "void",
    "volatile",
    "while",
    "with",
    "yield",
  ];
  return reservedWords.includes(word) ? `_${word}` : word;
}

export const getArrayType = (schema) =>
  `${safeType(schema.items.type) || getRefTarget(schema.items.$ref)}[]`;
