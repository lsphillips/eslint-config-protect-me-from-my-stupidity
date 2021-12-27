'use strict';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const table          = require('text-table');
const { red, green } = require('colors');

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

async function print (config, problems)
{
	const status = problems.length > 0
		? red('✘')
		: green('✓');

	console.log(status, config, '\n');

	if (problems.length > 0)
	{
		console.log(table(problems), '\n');
	}
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

module.exports = { print };
