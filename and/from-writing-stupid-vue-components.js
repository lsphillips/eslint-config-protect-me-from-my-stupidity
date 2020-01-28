"use strict";

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const { rules } = require("../protect-me-from-my-stupidity");

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

module.exports =
{
	"plugins" :
	[
		"vue"
	],

	"rules" :
	{
		"vue/comment-directive"                         : "error",
		"vue/jsx-uses-vars"                             : "error",
		"vue/no-async-in-computed-properties"           : "error",
		"vue/no-dupe-keys"                              : "error",
		"vue/no-duplicate-attributes"                   : ["error", { "allowCoexistClass" : true, "allowCoexistStyle" : true }],
		"vue/no-parsing-error"                          : "error",
		"vue/no-reserved-keys"                          : "error",
		"vue/no-shared-component-data"                  : "error",
		"vue/no-side-effects-in-computed-properties"    : "error",
		"vue/no-template-key"                           : "error",
		"vue/no-textarea-mustache"                      : "error",
		"vue/no-unused-components"                      : "error",
		"vue/no-unused-vars"                            : "error",
		"vue/no-use-v-if-with-v-for"                    : "error",
		"vue/require-component-is"                      : "error",
		"vue/require-prop-type-constructor"             : "error",
		"vue/require-render-return"                     : "error",
		"vue/require-v-for-key"                         : "error",
		"vue/require-valid-default-prop"                : "error",
		"vue/return-in-computed-property"               : "error",
		"vue/use-v-on-exact"                            : "error",
		"vue/valid-template-root"                       : "error",
		"vue/valid-v-bind"                              : "error",
		"vue/valid-v-cloak"                             : "error",
		"vue/valid-v-else-if"                           : "error",
		"vue/valid-v-else"                              : "error",
		"vue/valid-v-for"                               : "error",
		"vue/valid-v-html"                              : "error",
		"vue/valid-v-if"                                : "error",
		"vue/valid-v-model"                             : "error",
		"vue/valid-v-on"                                : "error",
		"vue/valid-v-once"                              : "error",
		"vue/valid-v-pre"                               : "error",
		"vue/valid-v-show"                              : "error",
		"vue/valid-v-text"                              : "error",
		"vue/attribute-hyphenation"                     : "error",
		"vue/html-closing-bracket-newline"              : "error",
		"vue/html-closing-bracket-spacing"              : "error",
		"vue/html-end-tags"                             : "error",
		"vue/html-indent"                               : ["error", "tab"],
		"vue/html-quotes"                               : ["error", "double"],
		"vue/html-self-closing"                         : ["error", { "html" : { "void" : "always" } }],
		"vue/max-attributes-per-line"                   : "off",
		"vue/multiline-html-element-content-newline"    : "error",
		"vue/mustache-interpolation-spacing"            : "error",
		"vue/name-property-casing"                      : ["error", "kebab-case"],
		"vue/no-multi-spaces"                           : ["error", { "ignoreProperties" : true }],
		"vue/no-spaces-around-equal-signs-in-attribute" : "error",
		"vue/no-template-shadow"                        : "error",
		"vue/prop-name-casing"                          : ["error", "camelCase"],
		"vue/require-default-prop"                      : "error",
		"vue/require-prop-types"                        : "error",
		"vue/singleline-html-element-content-newline"   : "error",
		"vue/v-bind-style"                              : ["error", "shorthand"],
		"vue/v-on-style"                                : ["error", "shorthand"],
		"vue/attributes-order"                          : "off",
		"vue/no-v-html"                                 : "off",
		"vue/order-in-components"                       : "off",
		"vue/this-in-template"                          : "error",
		"vue/array-bracket-spacing"                     : rules["array-bracket-spacing"],
		"vue/arrow-spacing"                             : rules["arrow-spacing"],
		"vue/block-spacing"                             : rules["block-spacing"],
		"vue/brace-style"                               : rules["brace-style"],
		"vue/camelcase"                                 : rules["camelcase"],
		"vue/comma-dangle"                              : rules["comma-dangle"],
		"vue/component-name-in-template-casing"         : ["error", "kebab-case"],
		"vue/dot-location"                              : rules["dot-location"],
		"vue/eqeqeq"                                    : rules["eqeqeq"],
		"vue/key-spacing"                               : rules["key-spacing"],
		"vue/keyword-spacing"                           : rules["keyword-spacing"],
		"vue/match-component-file-name"                 : ["error", { "extensions" : [".vue"], "shouldMatchCase" : true }],
		"vue/no-boolean-default"                        : "error",
		"vue/no-deprecated-scope-attribute"             : "error",
		"vue/no-empty-pattern"                          : rules["no-empty-pattern"],
		"vue/no-restricted-syntax"                      : "off",
		"vue/object-curly-spacing"                      : rules["object-curly-spacing"],
		"vue/require-direct-export"                     : "error",
		"vue/script-indent"                             : ["error", "tab", { "baseIndent" : 1, "switchCase" : 1 }],
		"vue/space-infix-ops"                           : rules["space-infix-ops"],
		"vue/space-unary-ops"                           : rules["space-unary-ops"],
		"vue/v-on-function-call"                        : "error",
		"vue/v-slot-style"                              : "error",
		"vue/valid-v-slot"                              : "error",
		"vue/component-definition-name-casing"          : ["error", "kebab-case"],
		"vue/component-tags-order"                      : ["error", { "order" : ["template", "script", "style"] }],
		"vue/max-len"                                   : "off",
		"vue/no-deprecated-slot-attribute"              : "error",
		"vue/no-deprecated-slot-scope-attribute"        : "error",
		"vue/no-irregular-whitespace"                   : "error",
		"vue/no-reserved-component-names"               : "error",
		"vue/no-static-inline-styles"                   : "off",
		"vue/no-unsupported-features"                   : "off",
		"vue/require-name-property"                     : "error",
		"vue/static-class-names-order"                  : "off",
		"vue/valid-v-bind-sync"                         : "error"
	},

	"overrides" :
	[
		{
			"files" : ["*.vue"],

			"rules" :
			{
				"indent" : "off"
			}
		}
	]
};
