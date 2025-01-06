import globals from 'globals';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export default function andFromWritingStupidWebApplications (files = [
	'**/*.@(mjs|cjs|js|jsx)'
])
{
	return [
		{
			name : 'protect-me-from-my-stupidity/and/from-writing-stupid-web-applications',

			files,

			languageOptions : {
				globals : {
					...globals.browser
				}
			}
		}
	];
}
