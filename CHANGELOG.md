# Changelog

The format is based on [Keep a Changelog](http://keepachangelog.com/) and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html). You can view the Semantic Versioning policy for this project [here](https://github.com/lsphillips/eslint-config-protect-me-from-my-stupidity#semantic-versioning).

## 14.0.0 - 2025-03-07

### Added

- Switched the `vue/no-import-compiler-macros` rule on in the Vue configuration extension; disallowing the importing of compiler macros.
- Switched the `vue/no-implicit-coercion` rule on in the Vue configuration extension matching the `no-implicit-coercion` rule in the base configuration.

### Changed

- Updated the minimum required `eslint` version to `9.21.0`.
- Updated the minimum required `@stylistic/eslint-plugin-js` version to `4.2.0`.
- Updated the minimum required `eslint-plugin-vue` version to `10.0.0`.
- Updated the minimum required `eslint-plugin-n` version to `17.16.2`.
- Switched the `no-continue` rule off in the base configuration; allowing the use of the `continue` statement.

### Removed

- Removed configuration for the `vue/no-v-for-template-key`, `vue/no-v-model-argument`, `vue/valid-model-definition` and `vue/valid-v-bind-sync` rules from the Vue configuration extension as they are deprecated.

## 13.0.1 - 2025-02-09

### Changed

- Updated the `@stylistic/js/indent` rule configuration in the base configuration to ensure that multiline variable declarations are ignored.
- Switched the `no-useless-assignment` rule off in the base configuration.
- Updated the `n/hashbang` rule configuration in the Node configuration extension to ignore unpublished files.

## 13.0.0 - 2025-02-08

### Changed

- Updated the minimum required `eslint` version to `9.20.0`.
- Updated the minimum required `@stylistic/eslint-plugin-js` version to `3.1.0`.

## 12.0.1 - 2025-01-07

### Changed

- Updated the `promise/catch-or-return` rule in the base configuration to allow the use of the `finally()` method.

## 12.0.0 - 2025-01-07

### Added

- Introduced the Web (`and/from-writing-stupid-web-applications`) configuration extension.
- Switched the `promise/prefer-catch` rule on in the base configuration.
- Switched the `vue/slot-name-casing` rule on in the Vue configuration extension, enforcing slot names to be kebab-case.
- Switched the `vue/restricted-component-names` rule off in the Vue configuration extension.

### Changed

- Updated the base configuration to enable the JSX language feature for `.jsx` files.
- Updated the base configuration to enable implied global strict mode.
- Updated the base configuration and the configuration extensions to be a function. The configuration extensions enable developers to specify their own file matching patterns.
- Updated the minimum required `eslint` version to `9.17.0`.
- Updated the minimum required `eslint-plugin-promise` version to `7.2.1`.
- Updated the minimum required `eslint-plugin-vue` version to `9.32.0`.
- Updated the minimum required `eslint-plugin-n` version to `17.15.1`.
- Updated the minimum required `@stylistic/eslint-plugin-js` version to `2.12.1`.

## 11.1.0 - 2024-11-12

### Added

- Switched the `vue/prefer-use-template-ref` rule on in the Vue configuration extension.

### Changed

- Updated the minimum required `eslint` version to `9.15.0`.
- Updated the minimum required `eslint-plugin-vue` version to `9.31.0`.
- Updated the minimum required `@stylistic/eslint-plugin-js` version to `2.11.0`.

## 11.0.0 - 2024-11-22

### Added

- Switched the `no-useless-assignment` and `promise/spec-only` rules on in the base configuration.
- Switched the `n/prefer-node-protocol` rules on in the Node configuration extension.
- Switched the `vue/no-deprecated-delete-set` and `vue/require-default-export` rules on in the Vue configuration extension.
- Switched the `vue/max-props` and `vue/max-template-depth` rules off in the Vue configuration extension.

### Changed

- Moved to the new flat configuration system.
- Updated the minimum required `eslint` version to `9.13.0`.
- Updated the minimum required `eslint-plugin-promise` version to `7.1.0`.
- Updated the minimum required `eslint-plugin-vue` version to `9.29.1`.
- Updated the minimum required `eslint-plugin-import` version to `2.31.0`.
- Updated the minimum required `@stylistic/eslint-plugin-js` version to `2.9.0`.
- Replaced `eslint-plugin-node`, as it's no longer maintained, with `eslint-plugin-n`. The minimum required version is `17.13.2`.
- Replaced the `line-comment-position` rule with the `@stylistic/js/line-comment-position` rule in the base configuration.
- Replaced the `multiline-comment-style` rule with the `@stylistic/js/multiline-comment-style` rule in the base configuration.
- Replaced the `n/shebang` rule with the `n/hashbang` rule in the Node configuration extension.
- Switched the `import/no-unresolved` rule off in the base configuration.

### Removed

- Removed the `but/let-my-code-look-stupid`, `but/let-my-vue-components-look-stupid` and `but/let-my-node-applications-look-stupid` configuration extensions.
- Removed the `but/let-me-write-stupid-tests` configuration extension, these rule overrides are now included in the base configuration for all `.spec.{js,cjs,mjs}` and `.test.{js, cjs, mjs}` files.

## 10.1.1 - 2024-05-26

The package repository has moved and it's now reflected in the package metadata; this version contains no functionality changes.

## 10.1.0 - 2024-02-25

### Added

- Switched the `vue/enforce-style-attribute`, `vue/no-restricted-v-on` and `vue/require-explicit-slots` rules off.

### Changed

- Updated the minimum required `eslint` version to `8.57.0`.
- Updated the minimum required `eslint-plugin-vue` version to `9.22.0`.

## 10.0.0 - 2024-01-08

### Added

- Switched the `vue/no-unused-emit-declarations` rule on, ensuring that all emit declarations are used.
- Switched the `vue/v-if-else-key` rule on, ensuring that repeated components rendered within the same conditional scope have a key assigned to them.
- The `@stylistic/eslint-plugin-js` is now a required peer dependency. This now powers the stylistic rules previously defined by `eslint`.

### Changed

- Updated the `max-depth` rule configuration, increasing the maximum allowed depth to `4`.
- Updated the minimum required `eslint` version to `8.56.0`.
- Updated the minimum required `eslint-plugin-import` version to `2.29.1`.
- Updated the minimum required `eslint-plugin-vue` version to `9.19.2`.

## 9.5.1 - 2023-10-08

### Added

- Switched the `no-object-constructor` rule on. This replaces the deprecated `no-new-object` rule; disallowing the use of the `Object` constructor.

### Removed

- Removed configuration for the `no-new-object` rule as it is now deprecated.

## 9.5.0 - 2023-09-03

### Added

- Switched the `vue/max-lines-per-block` and `vue/no-use-v-else-with-v-for` rules off.
- Switched the `vue/block-order` rule on to enforce the same order enforced by the removed `vue/component-tags-order` rule configuration.
- Switched the `vue/no-console` rule on, enforcing the same rules as the `no-console` rule in template expressions.
- Switched the `vue/no-deprecated-model-definition` rule on, disallowing the usage of the deprecated `model` component option.
- Switched the `vue/no-ref-object-reactivity-loss` rule on to disallow ref usage that will result in lose of reactivity.
- Switched the `vue/no-setup-props-reactivity-loss` rule on, disallowing usage of props during component setup that would will result in lose of reactivity.
- Switched the `vue/require-macro-variable-name` rule on, enforcing the default macro variable names.
- Switched the `vue/require-typed-object-prop` rule on, enforcing type declarations for non-primitive object props.
- Switched the `vue/require-typed-ref` rule on to ensure a generic type parameter is provided to `ref()` and `shallowRef()` when no initial value is provided.

### Removed

- Removed configuration for the `no-return-await` rule as it is now deprecated.
- Removed configuration for the `vue/component-tags-order`, `vue/no-setup-props-destructure` and `vue/no-ref-object-destructure` rules as they are now deprecated.

## 9.4.0 - 2023-06-04

### Added

- Switched the `vue/no-root-v-if` rule off.
- Switched the `vue/prefer-define-options` rule on to prefer using the `defineOptions()` macro instead of the default export. This rule is switched off when using the `protect-me-from-my-stupidity/but/let-my-vue-components-look-stupid` configuration.
- Switched the `vue/valid-define-options` rule on to ensure the usage of the `defineOptions()` macro is correct.

### Changed

- Made the `eslint-plugin-vue` and `eslint-plugin-node` peer dependencies optional.

## 9.3.0 - 2023-02-26

### Added

- Switched the `vue/padding-lines-in-component-definition` and `import/consistent-type-specifier-style` rules off.
- Switched the `import/no-empty-named-blocks` rule on to ensure there are no empty named import blocks.
- Configured the `vue/array-element-newline` rule to match the `array-element-newline` rule.

### Changed

- Updated the minimum required `eslint` version to `8.35.0`.
- Updated the minimum required `eslint-plugin-import` version to `2.27.5`.
- Updated the minimum required `eslint-plugin-vue` version to `9.9.0`.

## 9.2.0 - 2022-12-04

### Added

- Switched the `logical-assignment-operators` rule off.
- Switched the `no-empty-static-block` rule on, but it is switched off in the `protect-me-from-my-stupidity/but/let-my-code-look-stupid` configuration.
- Switched the `no-new-native-nonconstructor` rule on to ensure `Symbol` and `BigInt` instances are not being created using the `new` operator.
- Switched the `promise/no-multiple-resolved` rule on to ensure there are no code paths that may lead to a promise being resolved multiple times.
- Switched the `vue/define-emits-declaration` and `vue/define-emits-declaration` rules off.
- Configured the `vue/multiline-ternary` rule to match the `multiline-ternary` rule.
- Switched the `vue/no-ref-object-destructure` on to ensure you don't destructure reference objects that leads to losing reactivity.
- Switched the `vue/no-required-prop-with-default` on to ensure that required props don't have a default value, as it's redundant.
- Switched the `vue/padding-line-between-tags` and `vue/require-prop-comment` rules off.
- Switched the `vue/v-on-handler-style` on to only allow the use of method handlers with inline handlers where applicable. This is switched off in the `protect-me-from-my-stupidity/but/let-my-code-look-stupid` configuration.

### Removed

- Removed configuration for the `vue/v-on-function-call` rule, as it's now deprecated.

## 9.1.1 - 2022-09-01

### Changed

- Switched the `no-eq-null` rule off.
- Updated the `eqeqeq` rule to not apply in cases where it is not necessary, including with comparisons involving `null`.
- Switched the `vue/no-v-model-argument` rule off.
- Updated the `vue/component-api-style` rule to only allow the use of the `options` API or the `composition` API in setup scripts.

## 9.1.0 - 2022-08-31

### Changed

- Updated the minimum required `eslint` version to `8.23.0`.
- Updated the minimum required `eslint-plugin-promise` version to `6.0.1`.
- Updated the minimum required `eslint-plugin-vue` version to `9.4.0`.

### Fixed

- Switched the `vue/block-lang` rule off.

## 9.0.0 - 2022-07-01

### Changed

- Updated the minimum required `eslint` version to `8.18.0`.
- Updated the minimum required `eslint-plugin-import` version to `8.26.0`.
- Updated the minimum required `eslint-plugin-vue` version to `9.1.1`.
- Switched the `no-constant-binary-expression` rule on; disallowing expressions where the operator doesn't affect the value.
- Switched the `vue/define-macros-order`, `vue/no-restricted-html-elements` and `vue/prefer-prop-type-boolean-first` rules off.
- Switched the `vue/match-component-import-name` rule on; ensuring that the component registration matches the component import name.
- Switched the `vue/valid-attribute-name` and `vue/valid-model-definition` rules on; ensuring attribute names and model definitions are valid.

### Removed

- Removed configuration for the `vue/no-invalid-model-keys` and `vue/script-setup-uses-vars` rules, as they are now deprecated.

## 8.1.1 - 2022-04-20

### Changed

- Updated the `indent` rule to not be enforced in string literals.

## 8.1.0 - 2022-03-29

### Changed

- Updated the minimum required `eslint` version to `8.12.0`.
- Updated the minimum required `eslint-plugin-vue` version to `8.5.0`.
- Updated the minimum required `eslint-plugin-import` version to `2.25.4`.
- Switched the `no-cond-assign`, `promise/prefer-await-to-then` and `vue/no-undef-components` rules off.
- The `lines-between-class-members` rule is no longer applied to single lines.
- Switched the `vue/prefer-import-from-vue` rule on to ensure all imports come from the `vue` module.
- Switched the `vue/prefer-true-attribute-shorthand` rule on to prefer boolean attribute shorthands. This is switched off in the `protect-me-from-my-stupidity/but/let-my-vue-components-look-stupid` configuration.
- Switched the `vue/object-shorthand` and `vue/quote-props` rules on to enforce their base `eslint` counterpart in template expressions.

## 8.0.0 - 2021-12-27

### Added

- Switched the `no-unused-private-class-members` rule on to ensure all private class properties are not left unused.
- Switched the `prefer-object-has-own` rule on to ensure `Object.hasOwn()` is used instead of `Object.prototype.hasOwnProperty.call()`.
- Switched the `import/no-import-module-exports` rule on to prevent mixing import declarations with CommonJS exports.
- Switched the `vue/block-lang` rule on to ensure a script's language is configured explicitly to `js`.
- Switched the `vue/component-api-style` rule on to only allow the Composition and Options API to be utilised.
- Switched the `vue/component-options-name-casing` rule on to ensure all components are referenced using kebab-case.
- Switched the `vue/no-child-content` rule on to prevent a component's child content from being overwritten by content modifying attributes.
- Switched the `vue/no-computed-properties-in-data` rule on to prevent the use of computed properties during component data initialization.
- Switched the `vue/no-export-in-script-setup` rule on to prevent setup scripts from exporting.
- Switched the `vue/no-expose-after-await` rule on to ensure all properties are exposed synchronously.
- Switched the `vue/no-reserved-props` rule on to prevent props being defined with names reserved by Vue.
- Switched the `vue/no-this-in-before-route-enter` rule on to prevent the use of `this` in the `beforeRouteEnter` router guard.
- Switched the `vue/no-undef-properties` rule on to prevent the use of props that are not explicitly defined.
- Switched the `vue/no-use-computed-property-like-method` rule on to ensure computed properties are not used as functions.
- Switched the `vue/no-v-text` rule on to prevent the use of the `v-text` attribute.
- Switched the `vue/prefer-separate-static-class` rule on to ensure static classes and dynamic classes are assigned using separate `class` attributes.
- Switched the `vue/valid-define-emits` and `vue/valid-define-props` rules on to ensure all `defineEmits` and `defineProps` compiler macros are valid.
- Switched the `vue/valid-v-memo` rule on to ensure all `v-memo` directives are valid.

### Changed

- Updated the ECMAScript version to `13` (2022).
- Updated the minimum required `eslint` version to `8.5.0`.
- Updated the minimum required `eslint-plugin-import` version to `5.25.3`.
- Updated the minimum required `eslint-plugin-promise` version to `6.0.0`.
- Updated the minimum required `eslint-plugin-vue` version to `8.2.0`.
- The `no-loss-of-precision` rule is now applied to expressions in Vue component templates.
- The `no-unused-vars` rule now correctly detects usage of setup script variables in Vue component templates.
- Switched the `import/default` rule off as it was resulting in too many false positives.

## 7.2.2 - 2021-05-16

### Changed

- Removed unnecessary files from the package making it more lightweight.

## 7.2.1 - 2021-05-15

### Changed

- Updated the `.cjs` file override to ensure the `commonjs` environment is enabled.

## 7.2.0 - 2021-05-15

### Changed

- All configuration sets are now explicit module entry points.

## 7.1.2 - 2021-05-11

### Changed

- Switched the `node/no-unsupported-features/es-builtins`, `node/no-unsupported-features/es-syntax` and `node/no-unsupported-features/node-builtins` rules off.

## 7.1.1 - 2021-05-11

### Fixed

- Fixed a misconfiguration where files with the `.js` extension are not treated as ES modules.

## 7.1.0 - 2021-05-11

### Added

- Introduced an override that ensures files with the `.cjs` extension are not treated as ES modules.

## 7.0.0 - 2021-05-08

### Added

- Switched the `no-unsafe-optional-chaining` rule on to prohibit the use of optional chaining where `undefined` is not allowed, this includes arithmetic operations.
- Switched the `vue/no-unused-refs` rule on to ensure all defined refs are utilised.
- Switched the `vue/no-invalid-model-keys` rule on to ensure component `model` definitions are correct.
- Switched the `vue/valid-next-tick` and `vue/next-tick-style` rules on to ensure correct `vm.$nextTick` and `Vue.nextTick` usage, this includes prohibiting the use of the callback style in favour of the promise style.
- Switched the `vue/html-button-has-type` on, prohibiting buttons from not having an explicit type.
- Switched the `vue/no-restricted-block`, `vue/no-restricted-call-after-await`, `vue/no-restricted-custom-event` and `vue/no-restricted-props` rules off.
- Switched the `vue/new-line-between-multi-line-property` and `vue/v-on-event-hyphenation` style rules on. They are switched off when using the `protect-me-from-my-stupidity/but/let-my-vue-components-look-stupid` configuration.

### Changed

- Updated the minimum required `eslint` version to `7.26.0`.
- Updated the minimum required `eslint-plugin-promise` version to `5.1.0`.
- Updated the minimum required `eslint-plugin-vue` version to `7.9.0`.

## 6.0.0 - 2020-11-29

### Added

- Introduced `eslint-plugin-node` as a new optional plugin dependency.
- Introduced new rule configurations for writing Node applications: `protect-me-from-my-stupidity/and/from-writing-stupid-node-applications` and `protect-me-from-my-stupidity/but/let-my-node-applications-look-stupid`.
- Switched the `no-nonoctal-decimal-escape` rule on to prohibit the use of non-octal decimal escape sequences.

### Changed

- Updated the ECMAScript version to `12` (2021).
- Updated the minimum required `eslint` version to `7.12.1`.
- Updated the minimum required `eslint-plugin-import` version to `2.22.1`.
- Updated the minimum required `eslint-plugin-promise` version to `4.2.1`.
- Updated the minimum required `eslint-plugin-vue` version to `7.1.0`.

### Removed

- JSX is no longer enabled in the parser options.
- Removed all Node.js related rules that were deprecated in ESLint v7.0.

## 5.1.0 - 2020-01-28

### Changed

- Stopped defining the parser in the `protect-me-from-my-stupidity/and/from-writing-stupid-vue-components` configuration.

## 5.0.0 - 2020-01-25

### Added

- Switched the `default-case` rule on to prohibit `switch` statements without a `default` clause.
- Switched the `default-param-last` rule on to enforce that defaults are only defined for tail parameters.
- Switched the `grouped-accessor-pairs` rule on to enforce that getter/setter pairs are defined adjacently with the getter defined first.
- Switched the `no-constructor-return` rule to to prohibit `return` statements in constructors.
- Switched the `no-dupe-else-if` rule on to prohibit duplicate conditions in `if-else-if` chains.
- Switched the `no-dupe-keys` rule on to prohibit duplicate keys in object definitions.
- Switched the `no-import-assign` rule on to prohibit import bindings being assigned.
- Switched the `no-setter-return` rule on to prohibit setters from returning a value.
- Switched the `no-useless-computed-key` rule on to prohibit pointless computed keys.
- Switched the `no-useless-constructor` rule on to prohibit constructors that do nothing.
- Switched the `prefer-exponentiation-operator` rule to enforce the use of the `**` operator instead of `Math.pow()`.
- Switched the `prefer-regex-literals` rule on to prohibit the use of the `RegExp` constructor for non-dynamic regular expressions.
- Introduced new rule configurations for writing Vue components: `protect-me-from-my-stupidity/and/from-writing-stupid-vue-components` and `protect-me-from-my-stupidity/but/let-my-vue-components-look-stupid`.

### Changed

- Switched the `spaced-comment`, `padded-blocks`, `line-comment-position`, `max-classes-per-file`, `prefer-object-spread`, `import/group-exports` and `promise/no-callback-in-promise` rules off in the `protect-me-from-my-stupidity` configuration.
- Updated the ECMAScript version to `11` (2020).
- Moved the `protect-me-from-my-stupidity/but-let-me-write-stupid-tests` configuration to `protect-me-from-my-stupidity/but/let-me-write-stupid-tests`.
- Moved the `protect-me-from-my-stupidity/but-let-my-code-look-stupid` configuration to `protect-me-from-my-stupidity/but/let-my-code-look-stupid`.
- Switched the `arrow-spacing` and `dot-location` rules off in the `protect-me-from-my-stupidity/but/let-my-code-look-stupid` configuration.

### Removed

- Removed the `valid-jsdoc`, `no-catch-shadow` and `require-jsdoc` deprecated rules.

## 4.0.0 - 2019-09-02

### Added

- Switched the new `no-useless-catch` rule on to prohibit catch blocks that just rethrow the error.
- Switched the new `prefer-named-capture-group`, `function-call-argument-newline` and `import/no-unused-modules` rules off.

### Changed

- Switched the `max-len` rule off.
- Switched the `max-nested-callbacks` rule off in the `protect-me-from-my-stupidity/but-let-me-write-stupid-tests` configuration.

## 3.2.0 - 2019-04-27

### Changed

- Updated the `array-element-newline` rule to just enforce consistency.

## 3.1.3 - 2018-12-14

### Changed

- Switched the `import/no-anonymous-default-export` rule off.

## 3.1.2 - 2018-11-29

### Changed

- Updated the `strict` rule to only disallow strict mode directives when it is considered unsafe.
- Strict mode is no longer implied in the parser options.

## 3.1.1 - 2018-10-29

### Changed

- Updated the `import/order` rule to enforce the following import order:
  1. Builtin Node.js modules.
  2. External modules.
  3. Internal modules.
  4. All other modules.
- Switched the `import/no-unassigned-import` rule off.

## 3.1.0 - 2018-10-29

### Changed

- Updated the `quote-props` rule to enforce consistency rather than necessity.
- Switched the `linebreak-style` rule off.

## 3.0.0 - 2018-10-26

### Added

- Switched the new `no-misleading-character-class` rule on to prohibit regular expressions containing characters with multiple code points.
- Switched the new `no-async-promise-executor` rule on to prohibit asynchronous executor functions.
- Switched the new `require-atomic-updates` rule on to help protect from subtle race conditions involving generators and promises.
- Switched the new `max-lines-per-function` and `require-unicode-regexp` rules off.
- Switched the new `import/no-cycle` rule on to prohibit circular dependencies.
- Switched the new `import/no-self-import` rule on to prohibit a module from importing itself.
- Switched the new `import/no-useless-path-segments` rule on to enforce optimal module paths.
- Switched the new `import/dynamic-import-chunkname`, `import/no-default-export`, `import/no-deprecated`, `import/no-named-export` and `import/no-relative-parent-imports` rules off.
- Switched the new `promise/valid-params` rule on to enforce correct usage of all Promise methods.
- Switched the new `promise/no-new-statics` rule on to prohibit the use of the `new` keyword with static Promise methods.

### Changed

- Updated the minimum required `eslint-plugin-import` version to `2.14.0`.
- Updated the minimum required `eslint` version to `5.7.0`.
- Updated the minimum required `eslint-plugin-promise` version to `4.0.0`.
- Updated the `import/order` rule to enforce the following import order:
  1. Builtin Node.js modules.
  2. External modules.
  3. Internal modules.
  4. Modules from a parent directory.
  5. Sibling modules.
- Updated the ECMAScript version to `9` (2018).

### Fixed

- Global strict mode is now enabled in the parser options.

## 2.1.1 - 2018-06-05

### Changed

- Switched the `callback-return`, `require-await`, `no-else-return` and `promise/no-native` rules off.

## 2.1.0 - 2018-04-16

### Changed

- Updated the `indent` rule to enforce indentation for `case` clauses inside `switch` statements.

## 2.0.5 - 2018-04-16

### Changed

- Switched the `operator-linebreak` rule off.

## 2.0.4 - 2018-02-03

### Changed

- Updated the `operator-linebreak` rule to allow line breaks before the operator.
- Updated the `func-name-matching` rule to ignore `module.exports`.

## 2.0.3 - 2018-01-04

### Changed

- Updated the `no-use-before-define` rule to allow functions to be used before they are defined.
- Switched the `prefer-template` rule off.
- Updated the `max-len` rule to allow lines to go up to 120 characters in length.

## 2.0.2 - 2018-01-02

### Changed

- Updated the `array-element-newline` rule to not apply to arrays with less than 5 elements.
- Switched the `no-invalid-this` rule off in the `protect-me-from-my-stupidity/but-let-me-write-stupid-tests` configuration.

## 2.0.1 - 2017-12-27

### Changed

- Configured the `no-mixed-spaces-and-tabs` rule to allow for `smart-tabs`.

### Fixed

- Switched the `implicit-arrow-linebreak` rule off as it clashed with the `brace-style` rule.

## 2.0.0 - 2017-12-20

### Added

- Introduced a new rule configuration for writing tests: `protect-me-from-my-stupidity/but-let-me-write-stupid-tests`.

### Changed

- `protect-me-from-my-stupidity/but-let-me-look-stupid` has been renamed to `protect-me-from-my-stupidity/but-let-my-code-look-stupid`.
- The `max-depth` and `max-nested-callbacks` rules have both been lowered to **3**.
- `protect-me-from-my-stupidity/but-let-my-code-look-stupid` to longer inherits from `protect-me-from-my-stupidity`. You will now have to extend both:
  ```json
  {
    "extends" : [
      "protect-me-from-my-stupidity",
      "protect-me-from-my-stupidity/but-let-my-code-look-stupid"
    ]
  }
  ```
  The same applies to the `protect-me-from-my-stupidity/but-let-me-write-stupid-tests` configuration.

### Fixed

- JSX is now enabled in the parser options.

## 1.0.0 - 2017-12-17

The initial public release.
