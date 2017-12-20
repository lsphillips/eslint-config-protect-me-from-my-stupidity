# Changelog

The format is based on [Keep a Changelog](http://keepachangelog.com/) and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html). You can view the Semantic Versioning policy for this project [here](https://github.com/lsphillips/ProtectMeFromMyStupidity#semantic-versioning).

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

## [1.0.0] (2017-12-17)

The initial public release.
