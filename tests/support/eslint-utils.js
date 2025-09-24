import unsupportedEslintApi from 'eslint/use-at-your-own-risk';
import importPlugin from 'eslint-plugin-import';
import nodePlugin from 'eslint-plugin-n';
import promisePlugin from 'eslint-plugin-promise';
import stylisticPlugin from '@stylistic/eslint-plugin';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function getPluginRules (plugin, prefix)
{
	return Object.keys(plugin.rules)
		.map(name => ({
			name : `${prefix}/${name}`, deprecated : Boolean(plugin.rules[name].meta?.deprecated)
		}));
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export async function getCoreRules ()
{
	const rules = await unsupportedEslintApi.builtinRules;

	return [
		...rules.keys()
	]
		.map(name => ({
			name, deprecated : Boolean(rules.get(name).meta?.deprecated)
		}));
}

export function getImportPluginRules ()
{
	return getPluginRules(importPlugin, 'import');
}

export function getPromisePluginRules ()
{
	return getPluginRules(promisePlugin, 'promise');
}

export function getNodePluginRules ()
{
	return getPluginRules(nodePlugin, 'n');
}

export function getStylisticRules ()
{
	return getPluginRules(stylisticPlugin, '@stylistic');
}
