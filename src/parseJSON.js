// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // take in string, test what type of object/value we're getting from first char
  json = json.trim();
  if (json[0] === '"') {
    if (json[json.length - 1] !== '"') {
      throw SyntaxError('Invalid string! :(');
    }
    return json.slice(1, json.length - 1);
  } else if (typeof Number(json[0]) === 'number' || (json[0] === '-' && typeof Number(json[1]) === 'number')) {
    return json[0] === '-' ? -Number(json.slice(1)) : Number(json);
  } else if (json === 'null') {
    return null;
  } else if (json[0] === '[') {
    if (json[json.length - 1] !== ']') {
      throw SyntaxError('Invalid array! :(');
    }
  }
};

// "ashdfjasdfjaksdf;akdlfj)", {}

// stack = []
