var getChildrenClasses = function(element, className) {
  var classyChildren = [];
  element.childNodes.forEach(function(child) {
    if (child.classList && child.classList.contains(className)) {
      classyChildren.push(child);
    }

    classyChildren = classyChildren.concat(getChildrenClasses(child, className));

  })
  return classyChildren;
}

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var classyElements = [];

  if (document.body.classList && document.body.classList.contains(className)) {
    classyElements.push(document.body);
  }

  classyElements = classyElements.concat(getChildrenClasses(document.body, className));

  return classyElements;
};
