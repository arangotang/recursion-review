var getChildrenClasses = function(element, className) {
  var classyChildren = [];
  element.childNodes.forEach(function(child) {
    if (child.classList.includes(className)) {
      classyChildren.push(child);
    }
    if (child.hasChildNodes()) {
      classyChildren.concat(getChildrenClasses(child))
    }
  })
  return classyChildren;
}

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var classyElements = [];

  if (document.body.classList.includes(className)) {
    classyElements.push(document.body);
  }

  return classyElements.concat(getChildrenClasses(document.body, className));

  // todo: fix spec file, refresh and go through test website


};
