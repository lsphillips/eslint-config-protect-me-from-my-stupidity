import {
	describe,
	it
} from 'node:test';
import assert from 'node:assert';
import globals from 'globals';
import andFromWritingStupidWebApplications from 'eslint-config-protect-me-from-my-stupidity/and/from-writing-stupid-web-applications';
import {
	resolveConfigForFile,
	assertNoIncorrectGlobalsInConfig
} from './support/config-utils.js';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

describe('andFromWritingStupidWebApplications(files)', function ()
{
	['js', 'cjs', 'mjs', 'jsx'].forEach(function (fileExtension)
	{
		describe(`by default for .${fileExtension} files`, function ()
		{
			it('shall allow the usage of the browser globals', function ()
			{
				// Act.
				const config = resolveConfigForFile(
					andFromWritingStupidWebApplications(), `example.${fileExtension}`
				);

				// Assert.
				assertNoIncorrectGlobalsInConfig(config, globals.browser);
			});
		});
	});

	it('when file patterns are provided it shall use those patterns instead', function ()
	{
		const files = [
			'**/*.ts'
		];

		// Act.
		const configs = andFromWritingStupidWebApplications(files);

		// Assert.
		configs.forEach(config =>
		{
			assert.deepEqual(config.files, files, `Configuration ${config.name} must not be using the default file patterns.`);
		});
	});
});
