"use strict";

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

module.exports =
{
	"parserOptions" :
	{
		"ecmaVersion" : 13,
		"sourceType"  : "module"
	},

	"overrides" :
	[
		{
			"files" : "**/*.cjs",

			"parserOptions" :
			{
				"sourceType" : "script"
			},

			"env" :
			{
				"commonjs" : true
			}
		}
	],

	"plugins" :
	[
		"import",
		"promise"
	],

	"rules" :
	{
		"for-direction"                      : "error",
		"getter-return"                      : "error",
		"no-await-in-loop"                   : "off",
		"no-compare-neg-zero"                : "error",
		"no-cond-assign"                     : "error",
		"no-console"                         : "off",
		"no-constant-condition"              : "error",
		"no-control-regex"                   : "warn",
		"no-debugger"                        : "error",
		"no-dupe-args"                       : "error",
		"no-duplicate-case"                  : "error",
		"no-empty"                           : "error",
		"no-empty-character-class"           : "warn",
		"no-ex-assign"                       : "error",
		"no-extra-boolean-cast"              : "error",
		"no-extra-parens"                    : "off",
		"no-extra-semi"                      : "error",
		"no-func-assign"                     : "error",
		"no-inner-declarations"              : "error",
		"no-invalid-regexp"                  : "error",
		"no-irregular-whitespace"            : "error",
		"no-obj-calls"                       : "error",
		"no-prototype-builtins"              : "error",
		"no-regex-spaces"                    : "warn",
		"no-sparse-arrays"                   : "error",
		"no-template-curly-in-string"        : "warn",
		"no-unexpected-multiline"            : "error",
		"no-unreachable"                     : "error",
		"no-unsafe-finally"                  : "error",
		"no-unsafe-negation"                 : "error",
		"use-isnan"                          : "error",
		"valid-typeof"                       : "error",
		"accessor-pairs"                     : "warn",
		"array-callback-return"              : "error",
		"block-scoped-var"                   : "error",
		"class-methods-use-this"             : "off",
		"complexity"                         : "off",
		"consistent-return"                  : "error",
		"curly"                              : "error",
		"dot-location"                       : ["error", "property"],
		"dot-notation"                       : "off",
		"eqeqeq"                             : "error",
		"guard-for-in"                       : "error",
		"no-alert"                           : "error",
		"no-caller"                          : "error",
		"no-case-declarations"               : "error",
		"no-div-regex"                       : "off",
		"no-else-return"                     : "off",
		"no-empty-function"                  : "error",
		"no-empty-pattern"                   : "error",
		"no-eq-null"                         : "error",
		"no-eval"                            : "error",
		"no-extend-native"                   : "error",
		"no-extra-bind"                      : "error",
		"no-extra-label"                     : "off",
		"no-fallthrough"                     : "error",
		"no-floating-decimal"                : "error",
		"no-global-assign"                   : "error",
		"no-implicit-coercion"               : "error",
		"no-implicit-globals"                : "error",
		"no-implied-eval"                    : "error",
		"no-invalid-this"                    : "error",
		"no-iterator"                        : "error",
		"no-labels"                          : "off",
		"no-lone-blocks"                     : "error",
		"no-loop-func"                       : "error",
		"no-magic-numbers"                   : "off",
		"no-multi-spaces"                    : "off",
		"no-multi-str"                       : "error",
		"no-new"                             : "error",
		"no-new-func"                        : "error",
		"no-new-wrappers"                    : "error",
		"no-octal"                           : "error",
		"no-octal-escape"                    : "error",
		"no-param-reassign"                  : "error",
		"no-proto"                           : "error",
		"no-redeclare"                       : ["error", { "builtinGlobals" : true }],
		"no-restricted-properties"           : "off",
		"no-return-assign"                   : "error",
		"no-return-await"                    : "error",
		"no-script-url"                      : "error",
		"no-self-assign"                     : "error",
		"no-self-compare"                    : "error",
		"no-sequences"                       : "error",
		"no-throw-literal"                   : "error",
		"no-unmodified-loop-condition"       : "error",
		"no-unused-expressions"              : "error",
		"no-unused-labels"                   : "error",
		"no-useless-call"                    : "error",
		"no-useless-concat"                  : "error",
		"no-useless-escape"                  : "error",
		"no-useless-return"                  : "error",
		"no-void"                            : "error",
		"no-warning-comments"                : "off",
		"no-with"                            : "error",
		"prefer-promise-reject-errors"       : "error",
		"radix"                              : "error",
		"require-await"                      : "off",
		"vars-on-top"                        : "off",
		"wrap-iife"                          : "error",
		"yoda"                               : "error",
		"strict"                             : ["error", "safe"],
		"init-declarations"                  : "off",
		"no-delete-var"                      : "error",
		"no-label-var"                       : "error",
		"no-restricted-globals"              : "off",
		"no-shadow"                          : "error",
		"no-shadow-restricted-names"         : "error",
		"no-undef"                           : "error",
		"no-undef-init"                      : "error",
		"no-undefined"                       : "error",
		"no-unused-vars"                     : "error",
		"no-use-before-define"               : ["error", "nofunc"],
		"array-bracket-newline"              : ["error", "consistent"],
		"array-bracket-spacing"              : "error",
		"array-element-newline"              : ["error", "consistent"],
		"block-spacing"                      : "error",
		"brace-style"                        : ["error", "allman"],
		"camelcase"                          : "error",
		"capitalized-comments"               : "off",
		"comma-dangle"                       : "error",
		"comma-spacing"                      : "error",
		"comma-style"                        : "error",
		"computed-property-spacing"          : "error",
		"consistent-this"                    : ["error", "self"],
		"eol-last"                           : "error",
		"func-call-spacing"                  : "error",
		"func-name-matching"                 : ["error", { "includeCommonJSModuleExports" : false }],
		"func-names"                         : "error",
		"func-style"                         : ["error", "declaration", { "allowArrowFunctions" : true }],
		"function-paren-newline"             : ["error", "consistent"],
		"id-denylist"                        : "off",
		"id-length"                          : "off",
		"id-match"                           : "off",
		"implicit-arrow-linebreak"           : "off",
		"indent"                             : ["error", "tab", { "SwitchCase" : 1 }],
		"jsx-quotes"                         : "error",
		"key-spacing"                        : ["error", { "beforeColon" : true, "afterColon" : true, "mode" : "minimum" }],
		"keyword-spacing"                    : "error",
		"linebreak-style"                    : "off",
		"lines-around-comment"               : "off",
		"lines-between-class-members"        : "error",
		"max-depth"                          : ["error", 3],
		"max-len"                            : "off",
		"max-lines"                          : "off",
		"max-nested-callbacks"               : ["error", 3],
		"max-params"                         : ["error", 4],
		"max-statements"                     : "off",
		"max-lines-per-function"             : "off",
		"max-statements-per-line"            : "error",
		"multiline-comment-style"            : "off",
		"multiline-ternary"                  : "off",
		"new-cap"                            : "error",
		"new-parens"                         : "error",
		"newline-per-chained-call"           : "off",
		"no-array-constructor"               : "error",
		"no-bitwise"                         : "off",
		"no-continue"                        : "error",
		"no-inline-comments"                 : "off",
		"no-lonely-if"                       : "error",
		"no-mixed-operators"                 : "error",
		"no-mixed-spaces-and-tabs"           : ["error", "smart-tabs"],
		"no-multi-assign"                    : "off",
		"no-multiple-empty-lines"            : ["error", { "max" : 1 }],
		"no-negated-condition"               : "error",
		"no-nested-ternary"                  : "error",
		"no-new-object"                      : "error",
		"no-plusplus"                        : "off",
		"no-restricted-syntax"               : "off",
		"no-tabs"                            : "off",
		"no-ternary"                         : "off",
		"no-trailing-spaces"                 : "error",
		"no-underscore-dangle"               : "error",
		"no-unneeded-ternary"                : "error",
		"no-whitespace-before-property"      : "error",
		"nonblock-statement-body-position"   : "error",
		"object-curly-newline"               : ["error", { "consistent" : true }],
		"object-curly-spacing"               : ["error", "always"],
		"object-property-newline"            : "off",
		"one-var"                            : "off",
		"one-var-declaration-per-line"       : "off",
		"operator-assignment"                : "error",
		"operator-linebreak"                 : "off",
		"padding-line-between-statements"    : "off",
		"quote-props"                        : ["error", "consistent"],
		"quotes"                             : ["error", "single"],
		"semi"                               : "error",
		"semi-spacing"                       : "error",
		"semi-style"                         : "error",
		"sort-keys"                          : "off",
		"sort-vars"                          : "off",
		"space-before-blocks"                : "error",
		"space-before-function-paren"        : "error",
		"space-in-parens"                    : "error",
		"space-infix-ops"                    : "error",
		"space-unary-ops"                    : "error",
		"spaced-comment"                     : "off",
		"switch-colon-spacing"               : ["error", { "before" : true, "after" : true }],
		"template-tag-spacing"               : ["error", "always"],
		"unicode-bom"                        : "error",
		"wrap-regex"                         : "off",
		"arrow-body-style"                   : "off",
		"arrow-parens"                       : "off",
		"arrow-spacing"                      : "error",
		"constructor-super"                  : "error",
		"generator-star-spacing"             : "error",
		"no-class-assign"                    : "error",
		"no-confusing-arrow"                 : "error",
		"no-const-assign"                    : "error",
		"no-dupe-class-members"              : "error",
		"no-duplicate-imports"               : "error",
		"no-new-symbol"                      : "error",
		"no-restricted-imports"              : "off",
		"no-this-before-super"               : "error",
		"no-useless-rename"                  : "warn",
		"no-var"                             : "error",
		"object-shorthand"                   : "error",
		"padded-blocks"                      : "off",
		"prefer-arrow-callback"              : "off",
		"prefer-const"                       : "off",
		"prefer-destructuring"               : "off",
		"prefer-numeric-literals"            : "error",
		"prefer-rest-params"                 : "error",
		"prefer-spread"                      : "error",
		"prefer-template"                    : "off",
		"require-yield"                      : "error",
		"rest-spread-spacing"                : "error",
		"sort-imports"                       : "off",
		"symbol-description"                 : "warn",
		"template-curly-spacing"             : "off",
		"yield-star-spacing"                 : ["error", "both"],
		"require-unicode-regexp"             : "off",
		"no-misleading-character-class"      : "error",
		"no-async-promise-executor"          : "error",
		"require-atomic-updates"             : "error",
		"no-useless-catch"                   : "error",
		"prefer-named-capture-group"         : "off",
		"function-call-argument-newline"     : "off",
		"default-case"                       : "error",
		"default-param-last"                 : "error",
		"grouped-accessor-pairs"             : ["error", "getBeforeSet"],
		"line-comment-position"              : "off",
		"max-classes-per-file"               : "off",
		"no-constructor-return"              : "error",
		"no-dupe-else-if"                    : "error",
		"no-dupe-keys"                       : "error",
		"no-import-assign"                   : "error",
		"no-setter-return"                   : "error",
		"no-useless-computed-key"            : "error",
		"no-useless-constructor"             : "error",
		"prefer-exponentiation-operator"     : "error",
		"prefer-object-spread"               : "off",
		"prefer-regex-literals"              : "error",
		"default-case-last"                  : "error",
		"no-loss-of-precision"               : "error",
		"no-restricted-exports"              : "off",
		"no-useless-backreference"           : "error",
		"no-promise-executor-return"         : "error",
		"no-unreachable-loop"                : "error",
		"no-nonoctal-decimal-escape"         : "error",
		"no-unsafe-optional-chaining"        : ["error", { "disallowArithmeticOperators" : true }],
		"no-unused-private-class-members"    : "error",
		"prefer-object-has-own"              : "error",
		"import/default"                     : "off",
		"import/dynamic-import-chunkname"    : "off",
		"import/export"                      : "error",
		"import/exports-last"                : "off",
		"import/extensions"                  : "off",
		"import/first"                       : "error",
		"import/group-exports"               : "off",
		"import/max-dependencies"            : ["error", { "max" : 20 }],
		"import/named"                       : "error",
		"import/namespace"                   : "error",
		"import/newline-after-import"        : "error",
		"import/no-absolute-path"            : "error",
		"import/no-amd"                      : "error",
		"import/no-anonymous-default-export" : "off",
		"import/no-commonjs"                 : "off",
		"import/no-cycle"                    : ["error", { "commonjs" : true }],
		"import/no-default-export"           : "off",
		"import/no-deprecated"               : "off",
		"import/no-duplicates"               : "error",
		"import/no-dynamic-require"          : "error",
		"import/no-extraneous-dependencies"  : "error",
		"import/no-internal-modules"         : "off",
		"import/no-mutable-exports"          : "error",
		"import/no-named-as-default-member"  : "error",
		"import/no-named-as-default"         : "error",
		"import/no-named-default"            : "error",
		"import/no-named-export"             : "off",
		"import/no-namespace"                : "off",
		"import/no-nodejs-modules"           : "off",
		"import/no-relative-parent-imports"  : "off",
		"import/no-restricted-paths"         : "off",
		"import/no-self-import"              : "error",
		"import/no-unassigned-import"        : "off",
		"import/no-unresolved"               : ["error", { "commonjs" : true }],
		"import/no-useless-path-segments"    : "error",
		"import/no-webpack-loader-syntax"    : "error",
		"import/order"                       : ["error", { "groups" : ["builtin", "external", "internal"] }],
		"import/prefer-default-export"       : "off",
		"import/unambiguous"                 : "off",
		"import/no-unused-modules"           : "off",
		"import/no-relative-packages"        : "off",
		"import/no-import-module-exports"    : "error",
		"promise/catch-or-return"            : "error",
		"promise/no-return-wrap"             : "error",
		"promise/param-names"                : "error",
		"promise/always-return"              : "off",
		"promise/no-native"                  : "off",
		"promise/no-nesting"                 : "warn",
		"promise/no-promise-in-callback"     : "off",
		"promise/no-callback-in-promise"     : "off",
		"promise/avoid-new"                  : "off",
		"promise/no-new-statics"             : "error",
		"promise/no-return-in-finally"       : "error",
		"promise/valid-params"               : "error",
		"promise/prefer-await-to-then"       : "error",
		"promise/prefer-await-to-callbacks"  : "off"
	}
};