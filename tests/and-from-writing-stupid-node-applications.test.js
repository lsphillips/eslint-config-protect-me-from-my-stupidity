import {
	describe,
	it
} from 'node:test';
import assert from 'node:assert';
import globals from 'globals';
import andFromWritingStupidNodeApplications from 'eslint-config-protect-me-from-my-stupidity/and/from-writing-stupid-node-applications';
import {
	getNodePluginRules
} from './support/eslint-utils.js';
import {
	resolveConfigForFile,
	assertNoMissingRulesInConfig,
	assertNoDeprecatedRulesInConfig,
	assertNoUnrecognizedRulesInConfig,
	assertNoIncorrectGlobalsInConfig
} from './support/config-utils.js';

// - - - - - - - - - - - - - - - - - - - - - - -

describe('andFromWritingStupidNodeApplications(files)', function ()
{
	['js', 'cjs', 'mjs'].forEach(function (fileExtension)
	{
		describe(`by default for .${fileExtension} files`, function ()
		{
			it('shall configure all the rules of the `node` plugin', function ()
			{
				// Setup.
				const rules = [
					...getNodePluginRules()
				];

				// Act.
				const config = resolveConfigForFile(
					andFromWritingStupidNodeApplications(), `example.${fileExtension}`
				);

				// Assert.
				assertNoMissingRulesInConfig(config, rules);
			});

			it('shall not configure any deprecated rules', function ()
			{
				// Setup.
				const rules = [
					...getNodePluginRules()
				];

				// Act.
				const config = resolveConfigForFile(
					andFromWritingStupidNodeApplications(), `example.${fileExtension}`
				);

				// Assert.
				assertNoDeprecatedRulesInConfig(config, rules);
			});

			it('shall not configure any unrecognized rules', function ()
			{
				// Setup.
				const rules = [
					...getNodePluginRules()
				];

				// Act.
				const config = resolveConfigForFile(
					andFromWritingStupidNodeApplications(), `example.${fileExtension}`
				);

				// Assert.
				assertNoUnrecognizedRulesInConfig(config, rules);
			});

			it('shall allow the usage of the Node.js globals', function ()
			{
				// Act.
				const config = resolveConfigForFile(
					andFromWritingStupidNodeApplications(), `example.${fileExtension}`
				);

				// Assert.
				assertNoIncorrectGlobalsInConfig(config, globals.node);
			});
		});
	});

	it('when file patterns are provided it shall use those patterns instead', function ()
	{
		const files = [
			'**/*.ts'
		];

		// Act.
		const configs = andFromWritingStupidNodeApplications(files);

		// Assert.
		configs.forEach(config =>
		{
			assert.deepEqual(config.files, files, `Configuration ${config.name} must not be using the default file patterns.`);
		});
	});
});
