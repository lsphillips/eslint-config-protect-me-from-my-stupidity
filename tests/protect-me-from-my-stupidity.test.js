import {
	describe,
	it
} from 'node:test';
import assert from 'node:assert';
import globals from 'globals';
import protectMeFromMyStupidity from 'eslint-config-protect-me-from-my-stupidity';
import {
	getCoreRules,
	getImportPluginRules,
	getPromisePluginRules,
	getStylisticRules
} from './support/eslint-utils.js';
import {
	resolveConfigForFile,
	assertNoMissingRulesInConfig,
	assertNoDeprecatedRulesInConfig,
	assertNoUnrecognizedRulesInConfig,
	assertNoIncorrectGlobalsInConfig
} from './support/config-utils.js';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

describe('protectMeFromMyStupidity', function ()
{
	['js', 'cjs', 'mjs', 'jsx'].forEach(function (fileExtension)
	{
		describe(`for .${fileExtension} files`, function ()
		{
			it('shall configure all core rules and all the rules of the `import`, `promise` and `@stylistic` plugins', async function ()
			{
				// Setup.
				const rules = [
					...(
						await getCoreRules()
					),
					...getImportPluginRules(),
					...getPromisePluginRules(),
					...getStylisticRules()
				];

				// Act.
				const config = resolveConfigForFile(
					protectMeFromMyStupidity(), `example.${fileExtension}`
				);

				// Assert.
				assertNoMissingRulesInConfig(config, rules);
			});

			it('shall not configure any deprecated rules', async function ()
			{
				// Setup.
				const rules = [
					...(
						await getCoreRules()
					),
					...getImportPluginRules(),
					...getPromisePluginRules(),
					...getStylisticRules()
				];

				// Act.
				const config = resolveConfigForFile(
					protectMeFromMyStupidity(), `example.${fileExtension}`
				);

				// Assert.
				assertNoDeprecatedRulesInConfig(config, rules);
			});

			it('shall not configure any unrecognized rules', async function ()
			{
				// Setup.
				const rules = [
					...(
						await getCoreRules()
					),
					...getImportPluginRules(),
					...getPromisePluginRules(),
					...getStylisticRules()
				];

				// Act.
				const config = resolveConfigForFile(
					protectMeFromMyStupidity(), `example.${fileExtension}`
				);

				// Assert.
				assertNoUnrecognizedRulesInConfig(config, rules);
			});

			it('shall be parsed using the latest ECMAScript version', function ()
			{
				// Act.
				const config = resolveConfigForFile(
					protectMeFromMyStupidity(), `example.${fileExtension}`
				);

				// Assert.
				assert.strictEqual(config.languageOptions.ecmaVersion, 'latest');
			});

			it('shall be parsed where global strict mode is implied', function ()
			{
				// Act.
				const config = resolveConfigForFile(
					protectMeFromMyStupidity(), `example.${fileExtension}`
				);

				// Assert.
				assert.strictEqual(config.languageOptions.parserOptions.ecmaFeatures.impliedStrict, true);
			});

			['test', 'spec'].forEach(function (testFileExtension)
			{
				describe(`for ${testFileExtension}.${fileExtension} files`, function ()
				{
					[
						'no-invalid-this',
						'no-unused-expressions',
						'func-names',
						'max-nested-callbacks'
					]
						.forEach(function (rule)
						{
							it(`shall disable the ${rule} rule`, function ()
							{
								// Act.
								const config = resolveConfigForFile(
									protectMeFromMyStupidity(), `example.${testFileExtension}.${fileExtension}`
								);

								// Assert.
								assert.strictEqual(config.rules[rule], 'off');
							});
						});
				});
			});
		});
	});

	it('shall treat .js files like ESM modules', function ()
	{
		// Act.
		const config = resolveConfigForFile(
			protectMeFromMyStupidity(), 'example.js'
		);

		// Assert.
		assert.strictEqual(config.languageOptions.sourceType, 'module');
	});

	it('shall treat .cjs files like CommonJS modules', function ()
	{
		// Act.
		const config = resolveConfigForFile(
			protectMeFromMyStupidity(), 'example.cjs'
		);

		// Assert.
		assert.strictEqual(config.languageOptions.sourceType, 'script');

		// Assert.
		assertNoIncorrectGlobalsInConfig(config, globals.commonjs);
	});

	it('shall treat .mjs file like ESM modules', function ()
	{
		// Act.
		const config = resolveConfigForFile(
			protectMeFromMyStupidity(), 'example.mjs'
		);

		// Assert.
		assert.strictEqual(config.languageOptions.sourceType, 'module');
	});

	it('shall enable JSX for .jsx files', function ()
	{
		// Act.
		const config = resolveConfigForFile(
			protectMeFromMyStupidity(), 'example.jsx'
		);

		// Assert.
		assert.strictEqual(config.languageOptions.parserOptions.ecmaFeatures.jsx, true);
	});
});
