module.exports = {
  "extends": "stylelint-config-standard",
  "plugins": [
    "stylelint-scss",
    "stylelint-selector-bem-pattern"
  ],
  "rules": {
    "selector-nested-pattern": "^&",
    "indentation": 2,
    "no-descending-specificity": null,
    "no-eol-whitespace": null,
    "declaration-empty-line-before": null,
    "value-keyword-case": null,
    "plugin/selector-bem-pattern": {
      "componentName": "[A-Z]+",
      "componentSelectors": {
        "initial": "^\\.{componentName}(?:-[a-z]+)?$",
        "combined": "^\\.combined-{componentName}-[a-z]+$"
      },
      "utilitySelectors": "^\\.util-[a-z]+$"
    }
  }
}
