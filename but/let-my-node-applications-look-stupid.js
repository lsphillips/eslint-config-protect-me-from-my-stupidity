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
		"node/callback-return"                 : "off",
		"node/no-mixed-requires"               : "off",
		"node/exports-style"                   : "off",
		"node/file-extension-in-import"        : "off",
		"node/global-require"                  : "off",
		"node/prefer-global/buffer"            : "off",
		"node/prefer-global/console"           : "off",
		"node/prefer-global/process"           : "off",
		"node/prefer-global/text-decoder"      : "off",
		"node/prefer-global/text-encoder"      : "off",
		"node/prefer-global/url-search-params" : "off",
		"node/prefer-global/url"               : "off"
	}
};
