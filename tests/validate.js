'use strict';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const table                                                              = require('text-table');
const { red, green }                                                     = require('colors');
const { getLoadedRules, getConfiguredRules }                             = require('./support/rule-loader.js');
const { getUnrecognizedRules, getDeprecatedRules, getUnconfiguredRules } = require('./support/rule-finder.js');

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

async function output ({
	name, problems
})
{
	const status = problems.length > 0
		? red('✘')
		: green('✓');

	console.log(status, name, '\n');

	if (problems.length > 0)
	{
		console.log(table(problems), '\n');
	}
}

async function test ({
	name, includeAllRules = false, usingCore = false, plugins = []
})
{
	const config = await getConfiguredRules(`eslint-config-${name}`);

	const loaded = await getLoadedRules({
		plugins, usingCore
	});

	const problems =
	[
		...getUnrecognizedRules(config, loaded).map(rule => [
			rule, 'Rule is not recognized.'
		]),

		...getDeprecatedRules(config, loaded).map(rule => [
			rule, 'Rule is now deprecated.'
		])
	];

	if (includeAllRules)
	{
		problems.push(...getUnconfiguredRules(config, loaded).map(rule => [
			rule, 'Rule is loaded, but is not configured.'
		]));
	}

	await output({
		name, problems
	});

	return problems.length === 0;
}

async function validate (configurations)
{
	let passed = true;

	for (const configuration of configurations)
	{
		passed = await test(configuration) && passed;
	}

	process.exit(passed ? 0 : -1); // eslint-disable-line no-process-exit
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

validate([
	{
		name            : 'protect-me-from-my-stupidity',
		includeAllRules : true,
		usingCore       : true,
		plugins         : ['promise', 'import']
	},
	{
		name            : 'protect-me-from-my-stupidity/but/let-me-write-stupid-tests',
		includeAllRules : false,
		usingCore       : true,
		plugins         : ['promise', 'import']
	},
	{
		name            : 'protect-me-from-my-stupidity/but/let-my-code-look-stupid',
		includeAllRules : false,
		usingCore       : true,
		plugins         : ['promise', 'import']
	},
	{
		name            : 'protect-me-from-my-stupidity/and/from-writing-stupid-node-applications',
		includeAllRules : true,
		usingCore       : false,
		plugins         : ['node']
	},
	{
		name            : 'protect-me-from-my-stupidity/but/let-my-node-applications-look-stupid',
		includeAllRules : false,
		usingCore       : false,
		plugins         : ['node']
	},
	{
		name            : 'protect-me-from-my-stupidity/and/from-writing-stupid-vue-components',
		includeAllRules : true,
		usingCore       : false,
		plugins         : ['vue']
	},
	{
		name            : 'protect-me-from-my-stupidity/but/let-my-vue-components-look-stupid',
		includeAllRules : false,
		usingCore       : false,
		plugins         : ['vue']
	}
])
	.catch(error =>
	{
		console.error(error);
	});
