export class CheatHelper {
  constructor() {
    throw new Error("This is a static class");
  }

  static isCssVariableDefined(variableName) {
    // Get the computed style of the root element
    let style = getComputedStyle(document.documentElement);

    // Get the value of the CSS variable
    let value = style.getPropertyValue("--" + variableName);

    // Check if the value is defined
    return value ? true : false;
  }

  static isCssPropertyDefined(property) {
    for (let i = 0; i < document.styleSheets.length; i++) {
      let styleSheet = document.styleSheets[i];
      let rules = styleSheet.cssRules || styleSheet.rules; // cssRules for modern browsers, rules for IE
      for (let j = 0; j < rules.length; j++) {
        if (rules[j].style[property]) {
          return true;
        }
      }
    }
    return false;
  }

  static isCssClassDefined(className) {
    for (let i = 0; i < document.styleSheets.length; i++) {
      let styleSheet = document.styleSheets[i];
      let rules = styleSheet.cssRules || styleSheet.rules; // cssRules for modern browsers, rules for IE
      for (let j = 0; j < rules.length; j++) {
        if (rules[j].selectorText === "." + className) {
          return true;
        }
      }
    }
    return false;
  }

  static addCssClass(className, css) {
    if (!CheatHelper.isCssClassDefined(className)) {
      let style = document.createElement("style");
      style.textContent = `.${className} { ${css} }`;
      document.head.appendChild(style);
    }
  }

  static addStyle(css) {
    let style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);
  }

  static addCssVariable(variableName, value) {
    if (!CheatHelper.isCssVariableDefined(variableName)) {
      let style = document.createElement("style");
      style.textContent = `:root { --${variableName}: ${value}; }`;
      document.head.appendChild(style);
    }
  }
}
