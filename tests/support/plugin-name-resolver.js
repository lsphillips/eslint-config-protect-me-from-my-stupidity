'use strict';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const PluginPrefix = 'eslint-plugin';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function getPluginPackageName (plugin)
{
	if (
		plugin.startsWith('@')
	)
	{
		const match = plugin.match(/^(@[^/]+)(?:\/(.+))?$/);

		if (match !== null)
		{
			let [, scope, module] = match;

			if (module)
			{
				module = module.startsWith(`${PluginPrefix}-`) ? module : `${PluginPrefix}-${module}`;
			}
			else
			{
				module = PluginPrefix;
			}

			return `${scope}/${module}`;
		}
	}

	if (
		plugin.startsWith(`${PluginPrefix}-`)
	)
	{
		return plugin;
	}

	return `${PluginPrefix}-${plugin}`;
}

function getPluginRulePrefix (plugin)
{
	if (
		plugin.startsWith('@')
	)
	{
		const match = plugin.match(/^(@[^/]+)(?:\/(.+))?$/);

		if (match !== null)
		{
			let [, scope, module] = match;

			if (!module || module === PluginPrefix)
			{
				return scope;
			}

			if (module)
			{
				module = module.replace(`${PluginPrefix}-`, '');
			}

			return `${scope}/${module}`;
		}
	}

	return plugin.replace(`${PluginPrefix}-`, '');
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

module.exports = { getPluginPackageName, getPluginRulePrefix };
