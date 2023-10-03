
module.exports = {
  "defaultSeverity": "warning",
  "plugins": ["stylelint-order", "stylelint-prettier"],
  "customSyntax": require('postcss-scss'),
  "ignoreFiles": ["**/*.{js,jsx}"],
  "extends": [
    "stylelint-config-standard-scss",
    "stylelint-config-prettier-scss"
  ],
  "rules": {
    "at-rule-no-unknown": null,
    "declaration-empty-line-before": null,
    "block-no-empty": null,
    "declaration-no-important": true,
    "no-descending-specificity": null,
    "selector-class-pattern": "^(?:(?:o|c|u|t|s|is|has|_|js|qa)-)?[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*(?:__[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:--[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:\\[.+\\])?$",
    "order/order": [
      "dollar-variables",
      "custom-properties",
      { "type": "at-rule", "name": "include" },
      "declarations",
      "rules"
    ],
    "order/properties-order": [
      [
        {
          "groupName": "Position",
          "properties" : [
            "position",
            "top",
            "right",
            "bottom",
            "left",
            "z-index"
          ],
          "order": "flexible"
        },

        {
          "groupName": "Display",
          "properties": [
            "display"
          ],
          "order": "flexible"
        },

        {
          "groupName": "Box",
          "properties": [
            "align-content",
            "align-items",
            "align-self",
            "flex",
            "flex-basis",
            "flex-direction",
            "flex-flow",
            "flex-grow",
            "flex-shrink",
            "flex-wrap",
            "grid",
            "grid-area",
            "grid-auto-columns",
            "grid-auto-flow",
            "grid-auto-rows",
            "grid-column",
            "grid-column-end",
            "grid-column-gap",
            "grid-column-start",
            "grid-gap",
            "grid-row",
            "grid-row-end",
            "grid-row-gap",
            "grid-row-start",
            "grid-template",
            "grid-template-areas",
            "grid-template-columns",
            "grid-template-rows",
            "row-gap",
            "column-gap",
            "gap",
            "justify-content",
            "justify-items",
            "justify-self",
            "order",
            "place-items",
            "place-self"
          ],
          "order": "flexible"
        },

        {
          "groupName": "Columns",
          "properties": [
            "columns",
            "column-gap",
            "column-fill",
            "column-rule",
            "column-span",
            "column-count",
            "column-width"
          ],
          "order": "flexible"
        },

        {
          "groupName": "Tables",
          "properties": [
            "table-layout",
            "empty-cells",
            "caption-side",
            "border-spacing",
            "border-collapse"
          ],
          "order": "flexible"
        },

        {
          "groupName": "Sizing",
          "properties": [
            "height",
            "min-height",
            "max-height",
            "width",
            "min-width",
            "max-width"
          ],
          "order": "flexible"
        },

        {
          "groupName": "Misc 1",
          "properties": [
            "box-sizing",
            "clear",
            "float",
            "overflow",
            "overflow-x",
            "overflow-y",
            "visibility",
            "opacity",
            "clip",
            "zoom"
          ],
          "order": "flexible"
        },

        {
          "groupName": "Margin/Padding",
          "properties": [
            "margin",
            "margin-top",
            "margin-right",
            "margin-bottom",
            "margin-left",
            "margin-block",
            "margin-block-start",
            "margin-block-end",
            "margin-inline",
            "margin-inline-start",
            "margin-inline-end",
            "padding",
            "padding-top",
            "padding-right",
            "padding-bottom",
            "padding-left",
            "padding-block",
            "padding-block-start",
            "padding-block-end",
            "padding-inline",
            "padding-inline-start",
            "padding-inline-end"
          ],
          "order": "flexible"
        },

        {
          "groupName": "Typography",
          "properties": [
            "color",
            "font",
            "font-display",
            "font-effect",
            "font-family",
            "font-kerning",
            "font-language-override",
            "font-size",
            "font-size-adjust",
            "font-stretch",
            "font-style",
            "font-synthesis",
            "font-variant",
            "font-variant-alternates",
            "font-variant-caps",
            "font-variant-east-asian",
            "font-variant-ligatures",
            "font-variant-numeric",
            "font-variant-position",
            "font-weight",
            "font-emphasize",
            "font-emphasize-position",
            "font-emphasize-style",
            "list-style",
            "list-style-position",
            "list-style-type",
            "list-style-image",
            "line-height",
            "word-spacing",
            "letter-spacing",
            "text-align",
            "text-align-last",
            "text-decoration",
            "text-decoration-line",
            "text-decoration-style",
            "text-decoration-color",
            "text-indent",
            "text-justify",
            "text-overflow",
            "text-overflow-ellipsis",
            "text-overflow-mode",
            "text-rendering",
            "text-outline",
            "text-shadow",
            "text-transform",
            "text-wrap",
            "text-emphasis",
            "text-emphasis-color",
            "text-emphasis-style",
            "text-emphasis-position",
            "vertical-align",
            "white-space",
            "word-break",
            "word-spacing",
            "word-wrap",
            "writing-mode",
            "hyphens",
            "src"
          ],
          "order": "flexible"
        },

        {
          "groupName": "Decoration",
          "properties": [
            "border",
            "border-top",
            "border-right",
            "border-bottom",
            "border-left",
            "border-width",
            "border-top-width",
            "border-right-width",
            "border-bottom-width",
            "border-left-width",
            "border-style",
            "border-top-style",
            "border-right-style",
            "border-bottom-style",
            "border-left-style",
            "border-color",
            "border-top-color",
            "border-right-color",
            "border-bottom-color",
            "border-left-color",
            "border-radius",
            "border-top-left-radius",
            "border-top-right-radius",
            "border-bottom-left-radius",
            "border-bottom-right-radius",
            "background",
            "background-color",
            "background-image",
            "background-repeat",
            "background-position",
            "background-size",
            "box-shadow",
            "fill",
            "outline",
            "outline-color",
            "outline-offset",
            "outline-style",
            "outline-width",
            "stroke-width",
            "stroke-linecap",
            "stroke-dasharray",
            "stroke-dashoffset",
            "stroke"
          ],
          "order": "flexible"
        },

        {
          "groupName": "Pseudo-content",
          "properties": [
            "content",
            "quotes"
          ],
          "order": "flexible"
        },

        {
          "groupName": "Effects",
          "properties": [
            "transition",
            "transition-property",
            "transition-duration",
            "transition-timing-function",
            "transition-delay",
            "backface-visibility",
            "perspective",
            "perspective-origin",
            "transform",
            "transform-origin",
            "transform-style"
          ],
          "order": "flexible"
        },

        {
          "groupName": "Animation",
          "properties": [
            "animation",
            "animation-name",
            "animation-duration",
            "animation-play-state",
            "animation-timing-function",
            "animation-delay",
            "animation-iteration-count",
            "animation-direction"
          ],
          "order": "flexible"
        },

        {
          "groupName": "Misc 2",
          "properties": [
            "tab-size",
            "counter-reset",
            "counter-increment",
            "resize",
            "cursor",
            "pointer-events",
            "speak",
            "user-select",
            "nav-index",
            "nav-up",
            "nav-right",
            "nav-down",
            "nav-left"
          ],
          "order": "flexible"
        }
      ],
      {
        "unspecified": "bottomAlphabetical"
      }
    ],
    "prettier/prettier": [true, { "endOfLine": "auto" }]
  }
}