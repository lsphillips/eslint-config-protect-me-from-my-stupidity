# Protect Me From My Stupidity

[![Available from NPM](https://img.shields.io/npm/v/eslint-config-protect-me-from-my-stupidity.svg?maxAge=900)](https://www.npmjs.com/package/eslint-config-protect-me-from-my-stupidity)
[![Built using Travis](https://img.shields.io/travis/com/lsphillips/ProtectMeFromMyStupidity/master.svg?maxAge=900)](https://travis-ci.com/lsphillips/ProtectMeFromMyStupidity)

An opinionated configuration for ESLint that shall protect you from your stupidity when writing JavaScript.

## Usage

Add this to your ESLint configuration.

``` json
{
  "extends" : "protect-me-from-my-stupidity"
}
```

You can use [configuration extensions](#configuration-extensions) to further cater for more specific scenarios, for example:

``` json
{
  "extends" : [
    "protect-me-from-my-stupidity",
    "protect-me-from-my-stupidity/but/let-my-code-look-stupid"
  ]
}
```

### Configuration extensions

| Configuration                                       | Usage                                                                                                                                    |
| --------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `and/from-writing-stupid-vue-components`            | Introduces additional rules for Vue components. At the moment any Vue 3.0 rules that involve deprecating Vue 2.0 feature are turned off. |
| `and/from-writing-stupid-node-applications`         | Introduces additional rules for Node applications.                                                                                       |
| `but/let-my-code-look-stupid`                       | Stops all code style checks.                                                                                                             |
| `but/let-me-write-stupid-tests`                     | Loosens up some rules for writing test specifications.                                                                                   |
| `but/let-my-vue-components-look-stupid`             | Stops all code style checks for Vue components.                                                                                          |
| `but/let-my-node-applications-look-stupid`          | Stops all code style checks for Node applications.                                                                                       |

## Parser

This project configures ESLint to parse JavaScript with the following in mind by default:

- ECMAScript modules are enabled.
- All features up to ECMAScript 2021 are enabled.

**Note:** This project makes no other assumption about your JavaScript environment, you must configure that yourself. See https://eslint.org/docs/user-guide/configuring#specifying-environments.

## Plugins

This project currently includes configuration for the following plugins:

| Plugin                                                                       | Required dependency                           |
| ---------------------------------------------------------------------------- | --------------------------------------------- |
| [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)   | Yes                                           |
| [eslint-plugin-promise](https://www.npmjs.com/package/eslint-plugin-promise) | Yes                                           |
| [eslint-plugin-vue](https://www.npmjs.com/package/eslint-plugin-vue)         | Only when using `vue` related configuration.  |
| [eslint-plugin-node](https://www.npmjs.com/package/eslint-plugin-node)       | Only when using `node` related configuration. |

**Note:** You will have to install the above plugins yourself as they are peer dependencies.

## Semantic versioning

This project follows a semantic versioning policy that aims not to surprise you.

### Patch release

- Updating an existing rule that will result in ESLint reporting fewer errors.

### Minor release

- Updating an existing rule that will result in ESLint reporting different or more errors.
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
