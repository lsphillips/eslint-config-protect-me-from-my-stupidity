import {
	describe,
	it
} from 'node:test';
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

describe('andFromWritingStupidNodeApplications', function ()
{
	['js', 'cjs', 'mjs'].forEach(function (fileExtension)
	{
		describe(`for .${fileExtension} files`, function ()
		{
			it('shall configure all the rules of the `node` plugin', function ()
			{
				// Setup.
				const rules = [
					...getNodePluginRules()
				];

				// Act.
				const config = resolveConfigForFile(
					andFromWritingStupidNodeApplications, `example.${fileExtension}`
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
					andFromWritingStupidNodeApplications, `example.${fileExtension}`
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
					andFromWritingStupidNodeApplications, `example.${fileExtension}`
				);

				// Assert.
				assertNoUnrecognizedRulesInConfig(config, rules);
			});

			it('shall allow the usage of the Node.js globals', function ()
			{
				// Act.
				const config = resolveConfigForFile(
					andFromWritingStupidNodeApplications, `example.${fileExtension}`
				);

				// Assert.
				assertNoIncorrectGlobalsInConfig(config, globals.node);
			});
		});
	});
});
