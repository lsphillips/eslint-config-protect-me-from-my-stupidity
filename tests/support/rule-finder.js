'use strict';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function getUnrecognizedRules (config, loaded)
{
	const allowed = loaded
		.map(rule => rule.name);

	return config.filter(rule => !allowed.includes(rule));
}

function getDeprecatedRules (config, loaded)
{
	return loaded.filter(rule => rule.meta?.deprecated && config.includes(rule.name)).map(rule => rule.name);
}

function getUnconfiguredRules (config, loaded)
{
	return loaded.filter(rule => !rule.meta?.deprecated && !config.includes(rule.name)).map(rule => rule.name);
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

module.exports = { getUnrecognizedRules, getDeprecatedRules, getUnconfiguredRules };
