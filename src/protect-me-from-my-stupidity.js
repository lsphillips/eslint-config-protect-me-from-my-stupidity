import globals from 'globals';
import importPlugin from 'eslint-plugin-import';
import promisePlugin from 'eslint-plugin-promise';
import stylisticPlugin from '@stylistic/eslint-plugin-js';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export default function protectMeFromMyStupidity ()
{
	return [
		{
			name : 'protect-me-from-my-stupidity',

			files : [
				'**/*.@(mjs|cjs|js|jsx)'
			],

			languageOptions : {
				ecmaVersion   : 'latest',
				sourceType    : 'module',
				parserOptions : {
					ecmaFeatures : {
						impliedStrict : true
					}
				}
			},

			plugins : {
				'@stylistic/js' : stylisticPlugin,
				'import'        : importPlugin,
				'promise'       : promisePlugin
			},

			rules : {
				'for-direction'                                  : 'error',
				'getter-return'                                  : 'error',
				'no-await-in-loop'                               : 'off',
				'no-compare-neg-zero'                            : 'error',
				'no-cond-assign'                                 : 'off',
				'no-console'                                     : 'off',
				'no-constant-condition'                          : 'error',
				'no-control-regex'                               : 'warn',
				'no-debugger'                                    : 'error',
				'no-dupe-args'                                   : 'error',
				'no-duplicate-case'                              : 'error',
				'no-empty'                                       : 'error',
				'no-empty-character-class'                       : 'warn',
				'no-ex-assign'                                   : 'error',
				'no-extra-boolean-cast'                          : 'error',
				'no-func-assign'                                 : 'error',
				'no-inner-declarations'                          : 'error',
				'no-invalid-regexp'                              : 'error',
				'no-irregular-whitespace'                        : 'error',
				'no-obj-calls'                                   : 'error',
				'no-prototype-builtins'                          : 'error',
				'no-regex-spaces'                                : 'warn',
				'no-sparse-arrays'                               : 'error',
				'no-template-curly-in-string'                    : 'warn',
				'no-unexpected-multiline'                        : 'error',
				'no-unreachable'                                 : 'error',
				'no-unsafe-finally'                              : 'error',
				'no-unsafe-negation'                             : 'error',
				'use-isnan'                                      : 'error',
				'valid-typeof'                                   : 'error',
				'accessor-pairs'                                 : 'warn',
				'array-callback-return'                          : 'error',
				'block-scoped-var'                               : 'error',
				'class-methods-use-this'                         : 'off',
				'complexity'                                     : 'off',
				'consistent-return'                              : 'error',
				'curly'                                          : 'error',
				'dot-notation'                                   : 'off',
				'eqeqeq'                                         : ['error', 'smart'],
				'guard-for-in'                                   : 'error',
				'no-alert'                                       : 'error',
				'no-caller'                                      : 'error',
				'no-case-declarations'                           : 'error',
				'no-div-regex'                                   : 'off',
				'no-else-return'                                 : 'off',
				'no-empty-function'                              : 'error',
				'no-empty-pattern'                               : 'error',
				'no-eq-null'                                     : 'off',
				'no-eval'                                        : 'error',
				'no-extend-native'                               : 'error',
				'no-extra-bind'                                  : 'error',
				'no-extra-label'                                 : 'off',
				'no-fallthrough'                                 : 'error',
				'no-global-assign'                               : 'error',
				'no-implicit-coercion'                           : 'error',
				'no-implicit-globals'                            : 'error',
				'no-implied-eval'                                : 'error',
				'no-invalid-this'                                : 'error',
				'no-iterator'                                    : 'error',
				'no-labels'                                      : 'off',
				'no-lone-blocks'                                 : 'error',
				'no-loop-func'                                   : 'error',
				'no-magic-numbers'                               : 'off',
				'no-multi-str'                                   : 'error',
				'no-new'                                         : 'error',
				'no-new-func'                                    : 'error',
				'no-new-wrappers'                                : 'error',
				'no-octal'                                       : 'error',
				'no-octal-escape'                                : 'error',
				'no-param-reassign'                              : 'error',
				'no-proto'                                       : 'error',
				'no-redeclare'                                   : ['error', { 'builtinGlobals' : true }],
				'no-restricted-properties'                       : 'off',
				'no-return-assign'                               : 'error',
				'no-script-url'                                  : 'error',
				'no-self-assign'                                 : 'error',
				'no-self-compare'                                : 'error',
				'no-sequences'                                   : 'error',
				'no-throw-literal'                               : 'error',
				'no-unmodified-loop-condition'                   : 'error',
				'no-unused-expressions'                          : 'error',
				'no-unused-labels'                               : 'error',
				'no-useless-call'                                : 'error',
				'no-useless-concat'                              : 'error',
				'no-useless-escape'                              : 'error',
				'no-useless-return'                              : 'error',
				'no-void'                                        : 'error',
				'no-warning-comments'                            : 'off',
				'no-with'                                        : 'error',
				'prefer-promise-reject-errors'                   : 'error',
				'radix'                                          : 'error',
				'require-await'                                  : 'off',
				'vars-on-top'                                    : 'off',
				'yoda'                                           : 'error',
				'strict'                                         : ['error', 'safe'],
				'init-declarations'                              : 'off',
				'no-delete-var'                                  : 'error',
				'no-label-var'                                   : 'error',
				'no-restricted-globals'                          : 'off',
				'no-shadow'                                      : 'error',
				'no-shadow-restricted-names'                     : 'error',
				'no-undef'                                       : 'error',
				'no-undef-init'                                  : 'error',
				'no-undefined'                                   : 'error',
				'no-unused-vars'                                 : 'error',
				'no-use-before-define'                           : ['error', 'nofunc'],
				'camelcase'                                      : 'error',
				'capitalized-comments'                           : 'off',
				'consistent-this'                                : ['error', 'self'],
				'func-name-matching'                             : ['error', { 'includeCommonJSModuleExports' : false }],
				'func-names'                                     : 'error',
				'func-style'                                     : ['error', 'declaration', { 'allowArrowFunctions' : true }],
				'id-denylist'                                    : 'off',
				'id-length'                                      : 'off',
				'id-match'                                       : 'off',
				'max-depth'                                      : ['error', 4],
				'max-lines'                                      : 'off',
				'max-nested-callbacks'                           : ['error', 3],
				'max-params'                                     : ['error', 4],
				'max-statements'                                 : 'off',
				'max-lines-per-function'                         : 'off',
				'new-cap'                                        : 'error',
				'no-array-constructor'                           : 'error',
				'no-bitwise'                                     : 'off',
				'no-continue'                                    : 'error',
				'no-inline-comments'                             : 'off',
				'no-lonely-if'                                   : 'error',
				'no-multi-assign'                                : 'off',
				'no-negated-condition'                           : 'error',
				'no-nested-ternary'                              : 'error',
				'no-plusplus'                                    : 'off',
				'no-restricted-syntax'                           : 'off',
				'no-ternary'                                     : 'off',
				'no-underscore-dangle'                           : 'error',
				'no-unneeded-ternary'                            : 'error',
				'one-var'                                        : 'off',
				'operator-assignment'                            : 'error',
				'sort-keys'                                      : 'off',
				'sort-vars'                                      : 'off',
				'unicode-bom'                                    : 'error',
				'arrow-body-style'                               : 'off',
				'constructor-super'                              : 'error',
				'no-class-assign'                                : 'error',
				'no-const-assign'                                : 'error',
				'no-dupe-class-members'                          : 'error',
				'no-duplicate-imports'                           : 'error',
				'no-restricted-imports'                          : 'off',
				'no-this-before-super'                           : 'error',
				'no-useless-rename'                              : 'warn',
				'no-var'                                         : 'error',
				'object-shorthand'                               : 'error',
				'prefer-arrow-callback'                          : 'off',
				'prefer-const'                                   : 'off',
				'prefer-destructuring'                           : 'off',
				'prefer-numeric-literals'                        : 'error',
				'prefer-rest-params'                             : 'error',
				'prefer-spread'                                  : 'error',
				'prefer-template'                                : 'off',
				'require-yield'                                  : 'error',
				'sort-imports'                                   : 'off',
				'symbol-description'                             : 'warn',
				'require-unicode-regexp'                         : 'off',
				'no-misleading-character-class'                  : 'error',
				'no-async-promise-executor'                      : 'error',
				'require-atomic-updates'                         : 'error',
				'no-useless-catch'                               : 'error',
				'prefer-named-capture-group'                     : 'off',
				'default-case'                                   : 'error',
				'default-param-last'                             : 'error',
				'grouped-accessor-pairs'                         : ['error', 'getBeforeSet'],
				'max-classes-per-file'                           : 'off',
				'no-constructor-return'                          : 'error',
				'no-dupe-else-if'                                : 'error',
				'no-dupe-keys'                                   : 'error',
				'no-import-assign'                               : 'error',
				'no-setter-return'                               : 'error',
				'no-useless-computed-key'                        : 'error',
				'no-useless-constructor'                         : 'error',
				'prefer-exponentiation-operator'                 : 'error',
				'prefer-object-spread'                           : 'error',
				'prefer-regex-literals'                          : 'error',
				'default-case-last'                              : 'error',
				'no-loss-of-precision'                           : 'error',
				'no-restricted-exports'                          : 'off',
				'no-useless-backreference'                       : 'error',
				'no-promise-executor-return'                     : 'error',
				'no-unreachable-loop'                            : 'error',
				'no-nonoctal-decimal-escape'                     : 'error',
				'no-unsafe-optional-chaining'                    : ['error', { 'disallowArithmeticOperators' : true }],
				'no-unused-private-class-members'                : 'error',
				'prefer-object-has-own'                          : 'error',
				'no-constant-binary-expression'                  : 'error',
				'logical-assignment-operators'                   : 'off',
				'no-empty-static-block'                          : 'error',
				'no-new-native-nonconstructor'                   : 'error',
				'no-object-constructor'                          : 'error',
				'no-useless-assignment'                          : 'error',
				'import/default'                                 : 'off',
				'import/dynamic-import-chunkname'                : 'off',
				'import/export'                                  : 'error',
				'import/exports-last'                            : 'off',
				'import/extensions'                              : 'off',
				'import/first'                                   : 'error',
				'import/group-exports'                           : 'off',
				'import/max-dependencies'                        : ['error', { 'max' : 20 }],
				'import/named'                                   : 'error',
				'import/namespace'                               : 'error',
				'import/newline-after-import'                    : 'error',
				'import/no-absolute-path'                        : 'error',
				'import/no-amd'                                  : 'error',
				'import/no-anonymous-default-export'             : 'off',
				'import/no-commonjs'                             : 'off',
				'import/no-cycle'                                : ['error', { 'commonjs' : true }],
				'import/no-default-export'                       : 'off',
				'import/no-deprecated'                           : 'off',
				'import/no-duplicates'                           : 'error',
				'import/no-dynamic-require'                      : 'error',
				'import/no-extraneous-dependencies'              : 'error',
				'import/no-internal-modules'                     : 'off',
				'import/no-mutable-exports'                      : 'error',
				'import/no-named-as-default-member'              : 'error',
				'import/no-named-as-default'                     : 'error',
				'import/no-named-default'                        : 'error',
				'import/no-named-export'                         : 'off',
				'import/no-namespace'                            : 'off',
				'import/no-nodejs-modules'                       : 'off',
				'import/no-relative-parent-imports'              : 'off',
				'import/no-restricted-paths'                     : 'off',
				'import/no-self-import'                          : 'error',
				'import/no-unassigned-import'                    : 'off',
				'import/no-unresolved'                           : 'off',
				'import/no-useless-path-segments'                : 'error',
				'import/no-webpack-loader-syntax'                : 'error',
				'import/order'                                   : ['error', { 'groups' : ['builtin', 'external', 'internal'] }],
				'import/prefer-default-export'                   : 'off',
				'import/unambiguous'                             : 'off',
				'import/no-unused-modules'                       : 'off',
				'import/no-relative-packages'                    : 'off',
				'import/no-import-module-exports'                : 'error',
				'import/consistent-type-specifier-style'         : 'off',
				'import/no-empty-named-blocks'                   : 'error',
				'promise/catch-or-return'                        : ['error', { 'allowFinally' : true }],
				'promise/no-return-wrap'                         : 'error',
				'promise/param-names'                            : 'error',
				'promise/always-return'                          : 'off',
				'promise/no-native'                              : 'off',
				'promise/no-nesting'                             : 'warn',
				'promise/no-promise-in-callback'                 : 'off',
				'promise/no-callback-in-promise'                 : 'off',
				'promise/avoid-new'                              : 'off',
				'promise/no-new-statics'                         : 'error',
				'promise/no-return-in-finally'                   : 'error',
				'promise/valid-params'                           : 'error',
				'promise/prefer-await-to-then'                   : 'off',
				'promise/prefer-await-to-callbacks'              : 'off',
				'promise/no-multiple-resolved'                   : 'error',
				'promise/spec-only'                              : 'error',
				'promise/prefer-catch'                           : 'error',
				'@stylistic/js/no-extra-parens'                  : 'off',
				'@stylistic/js/no-extra-semi'                    : 'error',
				'@stylistic/js/dot-location'                     : ['error', 'property'],
				'@stylistic/js/no-floating-decimal'              : 'error',
				'@stylistic/js/no-multi-spaces'                  : 'off',
				'@stylistic/js/array-bracket-newline'            : ['error', 'consistent'],
				'@stylistic/js/array-bracket-spacing'            : 'error',
				'@stylistic/js/array-element-newline'            : ['error', 'consistent'],
				'@stylistic/js/block-spacing'                    : 'error',
				'@stylistic/js/brace-style'                      : ['error', 'allman'],
				'@stylistic/js/wrap-iife'                        : 'error',
				'@stylistic/js/comma-dangle'                     : 'error',
				'@stylistic/js/comma-spacing'                    : 'error',
				'@stylistic/js/comma-style'                      : 'error',
				'@stylistic/js/computed-property-spacing'        : 'error',
				'@stylistic/js/eol-last'                         : 'error',
				'@stylistic/js/func-call-spacing'                : 'error',
				'@stylistic/js/function-paren-newline'           : ['error', 'consistent'],
				'@stylistic/js/implicit-arrow-linebreak'         : 'off',
				'@stylistic/js/indent'                           : ['error', 'tab', { 'SwitchCase' : 1, 'ignoredNodes' : ['TemplateLiteral *'] }],
				'@stylistic/js/jsx-quotes'                       : 'error',
				'@stylistic/js/key-spacing'                      : ['error', { 'beforeColon' : true, 'afterColon' : true, 'mode' : 'minimum' }],
				'@stylistic/js/keyword-spacing'                  : 'error',
				'@stylistic/js/linebreak-style'                  : 'off',
				'@stylistic/js/lines-around-comment'             : 'off',
				'@stylistic/js/lines-between-class-members'      : ['error', 'always', { 'exceptAfterSingleLine' : true }],
				'@stylistic/js/max-len'                          : 'off',
				'@stylistic/js/max-statements-per-line'          : 'error',
				'@stylistic/js/multiline-ternary'                : 'off',
				'@stylistic/js/new-parens'                       : 'error',
				'@stylistic/js/newline-per-chained-call'         : 'off',
				'@stylistic/js/no-mixed-operators'               : 'error',
				'@stylistic/js/no-mixed-spaces-and-tabs'         : ['error', 'smart-tabs'],
				'@stylistic/js/no-multiple-empty-lines'          : ['error', { 'max' : 1 }],
				'@stylistic/js/no-tabs'                          : 'off',
				'@stylistic/js/no-trailing-spaces'               : 'error',
				'@stylistic/js/no-whitespace-before-property'    : 'error',
				'@stylistic/js/nonblock-statement-body-position' : 'error',
				'@stylistic/js/object-curly-newline'             : ['error', { 'consistent' : true }],
				'@stylistic/js/object-curly-spacing'             : ['error', 'always'],
				'@stylistic/js/object-property-newline'          : 'off',
				'@stylistic/js/one-var-declaration-per-line'     : 'off',
				'@stylistic/js/operator-linebreak'               : 'off',
				'@stylistic/js/padding-line-between-statements'  : 'off',
				'@stylistic/js/quote-props'                      : ['error', 'consistent'],
				'@stylistic/js/quotes'                           : ['error', 'single'],
				'@stylistic/js/semi'                             : 'error',
				'@stylistic/js/semi-spacing'                     : 'error',
				'@stylistic/js/semi-style'                       : 'error',
				'@stylistic/js/space-before-blocks'              : 'error',
				'@stylistic/js/space-before-function-paren'      : 'error',
				'@stylistic/js/space-in-parens'                  : 'error',
				'@stylistic/js/space-infix-ops'                  : 'error',
				'@stylistic/js/space-unary-ops'                  : 'error',
				'@stylistic/js/spaced-comment'                   : 'off',
				'@stylistic/js/switch-colon-spacing'             : ['error', { 'before' : true, 'after' : true }],
				'@stylistic/js/template-tag-spacing'             : ['error', 'always'],
				'@stylistic/js/wrap-regex'                       : 'off',
				'@stylistic/js/arrow-parens'                     : 'off',
				'@stylistic/js/arrow-spacing'                    : 'error',
				'@stylistic/js/generator-star-spacing'           : 'error',
				'@stylistic/js/no-confusing-arrow'               : 'error',
				'@stylistic/js/padded-blocks'                    : 'off',
				'@stylistic/js/rest-spread-spacing'              : 'error',
				'@stylistic/js/template-curly-spacing'           : 'off',
				'@stylistic/js/yield-star-spacing'               : ['error', 'both'],
				'@stylistic/js/function-call-argument-newline'   : 'off',
				'@stylistic/js/function-call-spacing'            : 'error',
				'@stylistic/js/multiline-comment-style'          : ['error', 'separate-lines'],
				'@stylistic/js/line-comment-position'            : 'off'
			}
		},
		{
			name : 'protect-me-from-my-stupidity/and/commonjs',

			files : [
				'**/*.cjs'
			],

			languageOptions : {
				sourceType : 'script',
				globals : {
					...globals.commonjs
				}
			},

			rules : {
				'strict' : ['error', 'global']
			}
		},
		{
			name : 'protect-me-from-my-stupidity/and/jsx',

			files : [
				'**/*.jsx'
			],

			languageOptions : {
				parserOptions : {
					ecmaFeatures : {
						jsx : true
					}
				}
			}
		},
		{
			name : 'protect-me-from-my-stupidity/but/let-me-write-stupid-tests',

			files : [
				'**/*.@(test|spec).@(mjs|cjs|js|jsx)'
			],

			rules : {
				'no-invalid-this'       : 'off',
				'no-unused-expressions' : 'off',
				'func-names'            : 'off',
				'max-nested-callbacks'  : 'off'
			}
		}
	];
}
