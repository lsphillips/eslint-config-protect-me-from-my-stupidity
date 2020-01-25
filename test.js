'use strict';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const { CLIEngine }  = require('eslint');
const table          = require('text-table');
const { red, green } = require('colors');

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function getPluginFromRuleName (rule)
{
	const [
		plugin
	] = rule.split('/');

	return plugin === rule ? 'core' : plugin;
}

function getLoadedRules (config, allowedSets)
{
	return [
		...new CLIEngine(config).getRules()
	]
		.filter(([rule, definition]) => allowedSets.includes(
			getPluginFromRuleName(rule)
		) && !definition.meta.deprecated)

		.map(([rule]) => rule);
}

function getRequiredRules (rules, loaded)
{
	const message = 'Rule is loaded, but is not configured.';

	return loaded

		.filter(rule => !rules[rule])

		.map(rule => [
			rule, message
		]);
}

function getDisallowedRules (rules, loaded)
{
	const message = 'Rule has been removed, deprecated or belongs to a disallowed set.';

	return Object.keys(rules)

		.filter(rule => !loaded.includes(rule))

		.map(rule => [
			rule, message
		]);
}

function test ({
	configuration, onlyRuleSets = [], includeAllRules = true
})
{
	const config = require(`eslint-config-${configuration}`); // eslint-disable-line global-require, import/no-dynamic-require

	const loaded = getLoadedRules(config, onlyRuleSets);

	let problems = [
		...getDisallowedRules(config.rules, loaded)
	];

	if (includeAllRules)
	{
		problems = [
			...getRequiredRules(config.rules, loaded), ...problems
		];
	}

	if (problems.length)
	{
		console.log(
			red('✘'), configuration, '\n'
		);

		console.log(
			table(problems), '\n'
		);

		return false;
	}

	console.log(
		green('✓'), configuration, '\n'
	);

	return true;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const passed =
[
	{
		configuration   : 'protect-me-from-my-stupidity',
		includeAllRules : true,
		onlyRuleSets    : ['core', 'promise', 'import']
	},
	{
		configuration   : 'protect-me-from-my-stupidity/but/let-me-write-stupid-tests',
		includeAllRules : false,
		onlyRuleSets    : ['core', 'promise', 'import']
	},
	{
		configuration   : 'protect-me-from-my-stupidity/but/let-my-code-look-stupid',
		includeAllRules : false,
		onlyRuleSets    : ['core', 'promise', 'import']
	},
	{
		configuration   : 'protect-me-from-my-stupidity/and/from-writing-stupid-vue-components',
		includeAllRules : true,
		onlyRuleSets    : ['vue']
	},
	{
		configuration   : 'protect-me-from-my-stupidity/but/let-my-vue-components-look-stupid',
		includeAllRules : false,
		onlyRuleSets    : ['vue']
	}

].reduce((passing, config) => test(config) && passing, true);

process.exit( // eslint-disable-line no-process-exit
	passed ? 0 : -1
);
