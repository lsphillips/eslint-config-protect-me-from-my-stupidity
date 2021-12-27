'use strict';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const { Linter }                                    = require('eslint');
const { getPluginPackageName, getPluginRulePrefix } = require('./plugin-name-resolver.js');

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

async function getCoreRules ()
{
	return [
		...new Linter().getRules()
	]
		.map(([name, rule]) => ({
			name, meta : rule.meta
		}));
}

async function getPluginRules (plugin)
{
	let rules;

	try
	{
		rules = require( // eslint-disable-line global-require, import/no-dynamic-require
			getPluginPackageName(plugin)
		).rules;
	}
	catch
	{
		throw new Error(`Could not load plugin ${plugin}.`);
	}

	const prefix = getPluginRulePrefix(plugin);

	return Object.keys(rules)
		.map(name => ({
			name : `${prefix}/${name}`, meta : rules[name].meta
		}));
}

async function getConfiguredRules (config)
{
	let rules;

	try
	{
		rules = require(config).rules; // eslint-disable-line global-require, import/no-dynamic-require
	}
	catch
	{
		throw new Error(`Could not load configuration ${config}.`);
	}

	return Object.keys(rules);
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

module.exports = { getCoreRules, getPluginRules, getConfiguredRules };
