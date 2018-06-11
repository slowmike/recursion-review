// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof(obj) === 'number' || obj === null || typeof(obj) === 'boolean') {
    return '' + obj;
  }
  if (typeof(obj) === 'string') {
    return '"' + obj + '"';
  }
  if (Array.isArray(obj)) {
    var temp = []; 
    for (var i = 0; i < obj.length; i++) {
      temp.push(stringifyJSON(obj[i]));
    }
    return '[' + temp.join(',') + ']';
  }
  if (typeof(obj) === 'object') {
    var temp = [];
    for (key in obj) {
      //if(obj[key] !== undefined && typeof(obj[key]) !== 'function') {
      if (obj[key] === undefined || typeof(obj[key]) === 'function') {
        continue;
      }  
      temp.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      //}
    }
    return '{' + temp.join(',') + '}';
  }
};
