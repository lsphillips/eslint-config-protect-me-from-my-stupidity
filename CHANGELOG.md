# Changelog

The format is based on [Keep a Changelog](http://keepachangelog.com/) and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html). You can view the Semantic Versioning policy for this project [here](https://github.com/lsphillips/ProtectMeFromMyStupidity#semantic-versioning).

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
