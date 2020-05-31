"use strict";

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

module.exports =
{
	"plugins" :
	[
		"node"
	],

	"rules" :
	{
		"node/handle-callback-err"                   : "error",
		"node/no-callback-literal"                   : "error",
		"node/no-exports-assign"                     : "error",
		"node/no-extraneous-import"                  : "error",
		"node/no-extraneous-require"                 : "error",
		"node/no-missing-import"                     : "error",
		"node/no-missing-require"                    : "error",
		"node/no-new-require"                        : "error",
		"node/no-path-concat"                        : "error",
		"node/no-process-exit"                       : "warn",
		"node/no-unpublished-bin"                    : "error",
		"node/no-unpublished-import"                 : "error",
		"node/no-unpublished-require"                : "error",
		"node/no-unsupported-features/es-builtins"   : "error",
		"node/no-unsupported-features/es-syntax"     : "error",
		"node/no-unsupported-features/node-builtins" : "error",
		"node/process-exit-as-throw"                 : "error",
		"node/shebang"                               : "error",
		"node/no-deprecated-api"                     : "error",
		"node/no-mixed-requires"                     : "error",
		"node/exports-style"                         : ["error", "module.exports"],
		"node/file-extension-in-import"              : "error",
		"node/global-require"                        : "error",
		"node/callback-return"                       : "off",
		"node/no-process-env"                        : "off",
		"node/no-restricted-import"                  : "off",
		"node/no-restricted-require"                 : "off",
		"node/no-sync"                               : "error",
		"node/prefer-global/buffer"                  : "error",
		"node/prefer-global/console"                 : "error",
		"node/prefer-global/process"                 : "error",
		"node/prefer-global/text-decoder"            : "error",
		"node/prefer-global/text-encoder"            : "error",
		"node/prefer-global/url-search-params"       : "error",
		"node/prefer-global/url"                     : "error",
		"node/prefer-promises/dns"                   : "off",
		"node/prefer-promises/fs"                    : "off"
	}
};
