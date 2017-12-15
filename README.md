# Protect Me From My Stupidity

[![Available from NPM](https://img.shields.io/npm/v/eslint-config-protect-me-from-my-stupidity.svg?maxAge=900)](https://www.npmjs.com/package/eslint-config-protect-me-from-my-stupidity)

[![Built using Travis](https://img.shields.io/travis/lsphillips/ProtectMeFromMyStupidity/master.svg?maxAge=900)](https://travis-ci.org/lsphillips/ProtectMeFromMyStupidity)

An opinionated configuration for ESLint that shall protect you from your stupidity when writing JavaScript.

## Usage

Add this to your ESLint configuration.

``` json
{
	"extends" : "protect-me-from-my-stupidity"
}
```

However, if you don't care for code style rules, you can add this to your ESLint configuration instead:

``` json
{
	"extends" : "protect-me-from-my-stupidity/but-let-me-look-stupid"
}
```

## Parser

This project configures ESLint to parse JavaScript with the following in mind:

- All features up to ECMAScript 2017 are enabled.
- JSX is enabled.
- Modules, as defined by ECMAScript 2015, are enabled.

**Note:** This project makes no assumption about your JavaScript environment, you must configure that yourself. See https://eslint.org/docs/user-guide/configuring#specifying-environments.

## Plugins

This project draws the line at JavaScript. Therefore it will not take a stance on frameworks like React or transpilers like TypeScript.

This project currently includes configuration for the following plugins:

- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
- [eslint-plugin-promise](https://www.npmjs.com/package/eslint-plugin-promise)

## Development

This project doesn't have much of a build process. It does have a couple of tests though; which you can run like so:

``` sh
npm test
```

## Disclaimer

If you get offended by my use of the word **stupid**. It is just a joke.
