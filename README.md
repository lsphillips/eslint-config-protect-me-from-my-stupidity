# `eslint-config-protect-me-from-my-stupidity`

[![Available from NPM](https://img.shields.io/npm/v/eslint-config-protect-me-from-my-stupidity.svg?maxAge=900)](https://www.npmjs.com/package/eslint-config-protect-me-from-my-stupidity)
[![Built using GitHub Action](https://github.com/lsphillips/eslint-config-protect-me-from-my-stupidity/actions/workflows/build.yml/badge.svg?branch=master)](https://github.com/lsphillips/eslint-config-protect-me-from-my-stupidity/actions)

A very opinionated configuration for ESLint that shall protect you from your stupidity when writing JavaScript.

## Usage

Use this in your ESLint configuration file, like so:

``` js
import protectMeFromMyStupidity from 'eslint-config-protect-me-from-my-stupidity';

export default [
  ...protectMeFromMyStupidity
];
```

This configuration configures all core rules, as of `9.13.0`, and all the rules for the following plugins (which are peer dependencies):

| Plugin                  | Minimum Version |
| ----------------------- | :-------------: |
| `eslint-plugin-promise` | `7.1.0`         |
| `eslint-plugin-import`  | `2.31.0`        |

This configuration configure ESLint to parse as the the latest version of ECMAScript and to treat all `.js` and `.mjs` files as ES modules and `.cjs` files as CommonJS modules.

### Configuration extensions

In addition to the base configuration you can use configuration extensions, these are available as seperate exports.

| Name | Export                                      | Required Plugins           | Description                                             |
| ---- | ------------------------------------------- | :------------------------: | ------------------------------------------------------- |
| Node | `and/from-writing-stupid-vue-components`    | `eslint-plugin-vue@9.29.1` | Introduces additional rules for `.vue` component files. |
| Vue  | `and/from-writing-stupid-node-applications` | `eslint-plugin-n@17.13.2`  | Introduces additional rules for Node.js code files.     |

The plugins required by the configuration extensions are optional peer dependencies and are only required if you use the corresponding extension.

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
npm install eslint-config-protect-me-from-my-stupidity --save-dev
```

## Disclaimer

Finally, if you get offended by my use of the word **stupid**. It is just a joke.
