# Protect Me From My Stupidity

[![Available from NPM](https://img.shields.io/npm/v/eslint-config-protect-me-from-my-stupidity.svg?maxAge=900)](https://www.npmjs.com/package/eslint-config-protect-me-from-my-stupidity)

An opinionated configuration for ESLint that shall protect you from your stupidity when writing JavaScript.

## Usage

Add this to your ESLint configuration.

``` json
{
  "extends" : "protect-me-from-my-stupidity"
}
```

However, if you don't care for code style rules, you can add this to your ESLint configuration:

``` json
{
  "extends" : [
    "protect-me-from-my-stupidity",
    "protect-me-from-my-stupidity/but-let-my-code-look-stupid"
  ]
}
```

Finally, when you are writing tests, you can loosen the rules by adding this to your ESLint configuration:

``` json
{
  "extends" : [
    "protect-me-from-my-stupidity",
    "protect-me-from-my-stupidity/but-let-me-write-stupid-tests"
  ]
}
```

## Parser

This project configures ESLint to parse JavaScript with the following in mind:

- All features up to ECMAScript 2018 are enabled.
- JSX is enabled.
- Modules, as defined by ECMAScript 2015, are enabled.
- Global strict mode is enabled.

**Note:** This project makes no assumption about your JavaScript environment, you must configure that yourself. See https://eslint.org/docs/user-guide/configuring#specifying-environments.

## Plugins

This project draws the line at JavaScript. Therefore it will not take a stance on frameworks like React or transpilers like TypeScript.

This project currently includes configuration for the following plugins:

- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
- [eslint-plugin-promise](https://www.npmjs.com/package/eslint-plugin-promise)

**Note:** You will have to install the above plugins yourself as they are peer dependencies.

## Semantic Versioning

This project follows a semantic versioning policy that aims not to surprise you:

### Patch release

- Updating an existing rule that will result in ESLint reporting fewer errors.

### Minor release

- Updating an existing rule that will result in ESLint reporting more errors.
- Adding a new rule.

### Major release

- Removing support for an old version of ESLint.
- Adding support for a new plugin.
- Removing support for an old version of an existing plugin.
- Adding a new configuration.

**Note:** It is advised that you only take patch versions using [tilde ranges](https://docs.npmjs.com/misc/semver#tilde-ranges-123-12-1).

## Getting started

This project is available through the Node Package Manager (NPM), so you can install it like so:

``` sh
npm install eslint-config-protect-me-from-my-stupidity
```

## Disclaimer

Finally, if you get offended by my use of the word **stupid**. It is just a joke.
