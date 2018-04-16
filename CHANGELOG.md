# Changelog

The format is based on [Keep a Changelog](http://keepachangelog.com/) and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html). You can view the Semantic Versioning policy for this project [here](https://github.com/lsphillips/ProtectMeFromMyStupidity#semantic-versioning).

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
