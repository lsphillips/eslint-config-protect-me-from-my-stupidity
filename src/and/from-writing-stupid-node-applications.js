import globals from 'globals';
import nodePlugin from 'eslint-plugin-n';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export default function andFromWritingStupidNodeApplications (files = [
	'**/*.?(m|c)js'
])
{
	return [
		{
			name : 'protect-me-from-my-stupidity/and/from-writing-stupid-node-applications',

			files,

			plugins : {
				'n' : nodePlugin
			},

			languageOptions : {
				globals : {
					...globals.node
				}
			},

			rules : {
				'n/handle-callback-err'                   : 'error',
				'n/no-callback-literal'                   : 'error',
				'n/no-exports-assign'                     : 'error',
				'n/no-extraneous-import'                  : 'error',
				'n/no-extraneous-require'                 : 'error',
				'n/no-missing-import'                     : 'error',
				'n/no-missing-require'                    : 'error',
				'n/no-new-require'                        : 'error',
				'n/no-path-concat'                        : 'error',
				'n/no-process-exit'                       : 'warn',
				'n/no-unpublished-bin'                    : 'error',
				'n/no-unpublished-import'                 : 'error',
				'n/no-unpublished-require'                : 'error',
				'n/no-unsupported-features/es-builtins'   : 'off',
				'n/no-unsupported-features/es-syntax'     : 'off',
				'n/no-unsupported-features/node-builtins' : 'off',
				'n/process-exit-as-throw'                 : 'error',
				'n/hashbang'                              : ['error', { 'ignoreUnpublished' : true }],
				'n/no-deprecated-api'                     : 'error',
				'n/no-mixed-requires'                     : 'error',
				'n/exports-style'                         : ['error', 'module.exports'],
				'n/file-extension-in-import'              : 'error',
				'n/global-require'                        : 'error',
				'n/callback-return'                       : 'off',
				'n/no-process-env'                        : 'off',
				'n/no-restricted-import'                  : 'off',
				'n/no-restricted-require'                 : 'off',
				'n/no-sync'                               : 'error',
				'n/prefer-global/buffer'                  : 'error',
				'n/prefer-global/console'                 : 'error',
				'n/prefer-global/process'                 : 'error',
				'n/prefer-global/text-decoder'            : 'error',
				'n/prefer-global/text-encoder'            : 'error',
				'n/prefer-global/url-search-params'       : 'error',
				'n/prefer-global/url'                     : 'error',
				'n/prefer-promises/dns'                   : 'off',
				'n/prefer-promises/fs'                    : 'off',
				'n/prefer-node-protocol'                  : 'error',
				'n/no-top-level-await'                    : 'off'
			}
		}
	];
}
