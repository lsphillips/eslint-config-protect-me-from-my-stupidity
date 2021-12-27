'use strict';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const table                                                = require('text-table');
const { red, green }                                       = require('colors');
const { getCoreRules, getPluginRules, getConfiguredRules } = require('./support/rule-loader');

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

async function getLoadedRules (plugins, usingCore = true)
{
	const rules = usingCore ? [...(
		await getCoreRules()
	)] : [];

	for (const plugin of plugins)
	{
		rules.push(...(
			await getPluginRules(plugin)
		));
	}

	return rules;
}

function isRuleDeprecated (rule)
{
	return rule.meta?.deprecated;
}

function getUnrecognizedRules (loaded, configured)
{
	const allowed = loaded
		.map(rule => rule.name);

	return configured.filter(rule => !allowed.includes(rule));
}

function getDeprecatedRules (loaded, configured)
{
	return loaded
		.filter(rule => isRuleDeprecated(rule) && configured.includes(rule.name))
		.map(rule => rule.name);
}

function getUnconfiguredRules (loaded, configured)
{
	return loaded
		.filter(rule => !isRuleDeprecated(rule) && !configured.includes(rule.name))
		.map(rule => rule.name);
}

async function test ({
	config, all = false, core = false, plugins = []
})
{
	const loaded     = await getLoadedRules(plugins, core);
	const configured = await getConfiguredRules(`eslint-config-${config}`);

	const problems = [
		...getUnrecognizedRules(loaded, configured).map(rule => [
			rule, 'Rule is not recognized.'
		]),
		...getDeprecatedRules(loaded, configured).map(rule => [
			rule, 'Rule is now deprecated.'
		])
	];

	if (all)
	{
		problems.push(...getUnconfiguredRules(loaded, configured).map(rule => [
			rule, 'Rule is loaded, but is not configured.'
		]));
	}

	if (problems.length > 0)
	{
		console.log(red('✘'), config, '\n\n', table(problems), '\n');

		return false;
	}

	console.log(green('✓'), config, '\n\n');

	return true;
}

async function validate (configurations)
{
	let passed = true;

	for (const configuration of configurations)
	{
		passed = await test(configuration) && passed;
	}

	process.exit( // eslint-disable-line no-process-exit
		passed ? 0 : -1
	);
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

validate([
	{
		config  : 'protect-me-from-my-stupidity',
		all     : true,
		core    : true,
		plugins : ['promise', 'import']
	},
	{
		config  : 'protect-me-from-my-stupidity/but/let-me-write-stupid-tests',
		all     : false,
		core    : true,
		plugins : ['promise', 'import']
	},
	{
		config  : 'protect-me-from-my-stupidity/but/let-my-code-look-stupid',
		all     : false,
		core    : true,
		plugins : ['promise', 'import']
	},
	{
		config  : 'protect-me-from-my-stupidity/and/from-writing-stupid-node-applications',
		all     : true,
		core    : false,
		plugins : ['node']
	},
	{
		config  : 'protect-me-from-my-stupidity/but/let-my-node-applications-look-stupid',
		all     : false,
		core    : false,
		plugins : ['node']
	},
	{
		config  : 'protect-me-from-my-stupidity/and/from-writing-stupid-vue-components',
		all     : true,
		core    : false,
		plugins : ['vue']
	},
	{
		config  : 'protect-me-from-my-stupidity/but/let-my-vue-components-look-stupid',
		all     : false,
		core    : false,
		plugins : ['vue']
	}
])
	.catch(error =>
	{
		console.error(error);
	});
