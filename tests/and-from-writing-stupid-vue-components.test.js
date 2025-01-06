import {
	describe,
	it
} from 'node:test';
import assert from 'node:assert';
import andFromWritingStupidVueComponents from 'eslint-config-protect-me-from-my-stupidity/and/from-writing-stupid-vue-components';
import {
	getVuePluginRules,
	getStylisticRules
} from './support/eslint-utils.js';
import {
	resolveConfigForFile,
	assertNoMissingRulesInConfig,
	assertNoDeprecatedRulesInConfig,
	assertNoUnrecognizedRulesInConfig
} from './support/config-utils.js';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

describe('andFromWritingStupidVueComponents(files)', function ()
{
	describe('for .vue files', function ()
	{
		it('shall configure all the rules of the `vue` plugin', function ()
		{
			// Setup.
			const rules = [
				...getVuePluginRules()
			];

			// Act.
			const config = resolveConfigForFile(
				andFromWritingStupidVueComponents(), 'example.vue'
			);

			// Assert.
			assertNoMissingRulesInConfig(config, rules);
		});

		it('shall not configure any deprecated rules', function ()
		{
			// Setup.
			const rules = [
				...getVuePluginRules(),
				...getStylisticRules()
			];

			// Act.
			const config = resolveConfigForFile(
				andFromWritingStupidVueComponents(), 'example.vue'
			);

			// Assert.
			assertNoDeprecatedRulesInConfig(config, rules);
		});

		it('shall not configure any unrecognized rules', function ()
		{
			// Setup.
			const rules = [
				...getVuePluginRules(),
				...getStylisticRules()
			];

			// Act.
			const config = resolveConfigForFile(
				andFromWritingStupidVueComponents(), 'example.vue'
			);

			// Assert.
			assertNoUnrecognizedRulesInConfig(config, rules);
		});

		it('shall disable the @stylistic/js/indent rule', function ()
		{
			// Act.
			const config = resolveConfigForFile(
				andFromWritingStupidVueComponents(), 'example.vue'
			);

			// Assert.
			assert.strictEqual(config.rules['@stylistic/js/indent'], 'off');
		});
	});

	it('when file patterns are provided it shall use those patterns instead', function ()
	{
		const files = [
			'**/*.sfc'
		];

		// Act.
		const configs = andFromWritingStupidVueComponents(files);

		// Assert.
		configs.forEach(config =>
		{
			assert.deepEqual(config.files, files, `Configuration ${config.name} must not be using the default file patterns.`);
		});
	});
});
