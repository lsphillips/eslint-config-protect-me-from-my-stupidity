# Changelog

The format is based on [Keep a Changelog](http://keepachangelog.com/) and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html). You can view the Semantic Versioning policy for this project [here](https://github.com/lsphillips/ProtectMeFromMyStupidity#semantic-versioning).

## [6.0.0] (2020-11-10)

### Added

- Introduced `eslint-plugin-node` as a new optional plugin dependency.
- Introduced new rule configurations for writing Node applications: `protect-me-from-my-stupidity/and/from-writing-stupid-node-applications` and `protect-me-from-my-stupidity/but/let-my-node-applications-look-stupid`.

### Changed

- Updated the ECMAScript version to `12` (2021).
- Updated the minimum required `eslint` version to `7.12.1`.
- Updated the minimum required `eslint-plugin-import` version to `2.22.1`.
- Updated the minimum required `eslint-plugin-promise` version to `4.2.1`.
- Updated the minimum required `eslint-plugin-vue` version to `7.1.0`.

### Removed

- JSX is no longer enabled in the parser options.
- Removed all Node.js related rules that were deprecated in ESLint v7.0.

## [5.1.0] (2020-01-28)

### Changed

- Stopped defining the parser in the `protect-me-from-my-stupidity/and/from-writing-stupid-vue-components` configuration.

## [5.0.0] (2020-01-25)

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

## [4.0.0] (2019-09-02)

### Added

- Switched the new `no-useless-catch` rule on to prohibit catch blocks that just rethrow the error.
- Switched the new `prefer-named-capture-group`, `function-call-argument-newline` and `import/no-unused-modules` rules off.

### Changed

- Switched the `max-len` rule off.
- Switched the `max-nested-callbacks` rule off in the `protect-me-from-my-stupidity/but-let-me-write-stupid-tests` configuration.

## [3.2.0] (2019-04-27)

### Changed

- Updated the `array-element-newline` rule to just enforce consistency.

## [3.1.3] (2018-12-14)

### Changed

- Switched the `import/no-anonymous-default-export` rule off.

## [3.1.2] (2018-11-29)

### Changed

- Updated the `strict` rule to only disallow strict mode directives when it is considered unsafe.
- Strict mode is no longer implied in the parser options.

## [3.1.1] (2018-10-29)

### Changed

- Updated the `import/order` rule to enforce the following import order:
  1. Builtin Node.js modules.
  2. External modules.
  3. Internal modules.
  4. All other modules.
- Switched the `import/no-unassigned-import` rule off.

## [3.1.0] (2018-10-29)

### Changed

- Updated the `quote-props` rule to enforce consistency rather than necessity.
- Switched the `linebreak-style` rule off.

## [3.0.0] (2018-10-26)

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

## [2.1.1] (2018-06-05)

### Changed

- Switched the `callback-return`, `require-await`, `no-else-return` and `promise/no-native` rules off.

## [2.1.0] (2018-04-16)

### Changed

- Updated the `indent` rule to enforce indentation for `case` clauses inside `switch` statements.

## [2.0.5] (2018-04-16)

### Changed

- Switched the `operator-linebreak` rule off.

## [2.0.4] (2018-02-03)

### Changed

- Updated the `operator-linebreak` rule to allow line breaks before the operator.
- Updated the `func-name-matching` rule to ignore `module.exports`.

## [2.0.3] (2018-01-04)

### Changed

- Updated the `no-use-before-define` rule to allow functions to be used before they are defined.
- Switched the `prefer-template` rule off.
- Updated the `max-len` rule to allow lines to go up to 120 characters in length.

## [2.0.2] (2018-01-02)

### Changed

- Updated the `array-element-newline` rule to not apply to arrays with less than 5 elements.
- Switched the `no-invalid-this` rule off in the `protect-me-from-my-stupidity/but-let-me-write-stupid-tests` configuration.

## [2.0.1] (2017-12-27)

### Changed

- Configured the `no-mixed-spaces-and-tabs` rule to allow for `smart-tabs`.

### Fixed

- Switched the `implicit-arrow-linebreak` rule off as it clashed with the `brace-style` rule.

## [2.0.0] (2017-12-20)

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

## [1.0.0] (2017-12-17)

The initial public release.
