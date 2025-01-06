import assert from 'node:assert';
import {
	minimatch
} from 'minimatch';
import merge from 'merge-options';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function isReadonly (value)
{
	return value === 'readonly' || value === false || value === 'readable';
}

function isWritable (value)
{
	return value === 'writeable' || value === true || value === 'writeable';
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export function resolveConfigForFile (configs, file)
{
	const config = {
		rules           : {},
		languageOptions : {}
	};

	for (const { files, rules = {}, languageOptions = {} } of configs)
	{
		if (
			files.some(f => minimatch(file, f))
		)
		{
			config.rules = {
				...config.rules,
				...rules
			};

			config.languageOptions = merge(config.languageOptions, languageOptions);
		}
	}

	return config;
}

export function assertNoMissingRulesInConfig (config, rules)
{
	const missing = [
		...new Set(
			rules.filter(rule => !rule.deprecated).map(rule => rule.name)
		).difference(
			new Set(
				Object.keys(config.rules)
			)
		)
	];

	assert.deepStrictEqual(missing, [], 'Some rules are missing in the configuration.');
}

export function assertNoDeprecatedRulesInConfig (config, rules)
{
	const deprecated = [
		...new Set(
			rules.filter(rule => rule.deprecated).map(rule => rule.name)
		).intersection(
			new Set(
				Object.keys(config.rules)
			)
		)
	];

	assert.deepStrictEqual(deprecated, [], 'Some rules are deprecated in the configuration.');
}

export function assertNoUnrecognizedRulesInConfig (config, rules)
{
	const unrecognized = [
		...new Set(
			Object.keys(config.rules)
		).difference(
			new Set(
				rules.map(rule => rule.name)
			)
		)
	];

	assert.deepStrictEqual(unrecognized, [], 'Some rules are unrecognized in the configuration.');
}

export function assertNoIncorrectGlobalsInConfig (config, globals)
{
	const readonly = Object.keys(globals)
		.filter(global => isReadonly(globals[global]) !== isReadonly(config.languageOptions.globals[global]));

	assert.deepStrictEqual(readonly, [], 'Some globals are not readonly in the configuration.');

	const writable = Object.keys(globals)
		.filter(global => isWritable(globals[global]) !== isWritable(config.languageOptions.globals[global]));

	assert.deepStrictEqual(writable, [], 'Some globals are not writable in the configuration.');

	const off = Object.keys(globals)
		.filter(global => globals[global] === 'off' && config.languageOptions.globals[global] !== 'off');

	assert.deepStrictEqual(off, [], 'Some globals are not disabled in the configuration.');
}
