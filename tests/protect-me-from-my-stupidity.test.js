'use strict';

// --------------------------------------------------------

const test          = require('tape');
const { CLIEngine } = require('eslint');

// --------------------------------------------------------

test('the `protect-me-from-my-stupidity` configuration is valid', function (t)
{
	let engine = new CLIEngine(
	{
		configFile : 'protect-me-from-my-stupidity.js'
	});

	let code = `function main ()
{
	return 'hello world';
}

main();
`;

	t.equal(
		engine.executeOnText(code).errorCount, 0
	);

	t.end();
});
