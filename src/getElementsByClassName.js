// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here

  //document.body
  //element.childNodes
  //element.classList
  var result = [];
  var getNode = function(node) {
    if (node.classList.contains(className)) {
      result.push(node);
    }
    for (var i = 0; i < node.childNodes.length; i++) {
      if (node.childNodes[i].className !== undefined) {
        getNode(node.childNodes[i]);
      }
    }
  };
  getNode(document.body);
  return result;
};
