define([], function() {

return {
	"version" : 2.0,
"platforms" : {
	"iphone" : {
		"name" : "iPhone",
		"type" : "ios",
		"copyright" : "Copyright © 2015 Apple Inc. All rights reserved"
	},
	"ipad" : {
		"name" : "iPad",
		"type" : "ios",
		"copyright" : "Copyright © 2015 Apple Inc. All rights reserved"
	},
	"watch" : {
		"name" : "Apple WATCH",
		"type" : "ios",
		"copyright" : "Copyright © 2015 Apple Inc. All rights reserved"
	}
},
"versions" : {
	"ios" : [
		{ "version" : 3.0 },
		{ "version" : 4.3 },
		{ "version" : 5.0 },
		{ "version" : 6.0 },
		{ "version" : 7.0 },
		{ "version" : 8.0 },
		{ "version" : 8.2 }
	],
	"mac" : [
		{ "version" : 10.10, 	"name" : "Yosemite"},
		{ "version" : 10.9, 	"name" : "Mavericks"},
		{ "version" : 10.8,		"name" : "Lion"},
		{ "version" : 10.7,		"name" : "Snow Leopard"},
		{ "version" : 10.6,		"name" : "Leopard"},
		{ "version" : 10.5,		"name" : "Lion"}
	]
},
"fonts" : [
	{ "family_name" : "Academy Engraved LET",
		"faces" : [
				{
					"font_face" 	: "AcademyEngravedLetPlain",
					"platforms"		: {
						"iphone" 		: {"version" : 5.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "Al Nile",
		"faces" : [
				{
					"font_face" 	: "AlNile-Bold",
					"platforms"		: {
						"iphone" 		: {"version" : 7.0},
						"ipad"			: {"version" : 7.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "AlNile",
					"platforms"		: {
						"iphone" 		: {"version" : 7.0},
						"ipad"			: {"version" : 7.0},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "American Typewriter",
		"faces" : [
				{
					"font_face" 	: "AmericanTypewriter",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "AmericanTypewriter-Bold",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "AmericanTypewriter-Condensed",
					"platforms"		: {
						"iphone" 		: {"version" : 5.0},
						"ipad"			: {"version" : 5.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "AmericanTypewriter-CondensedBold",
					"platforms"		: {
						"iphone" 		: {"version" : 5.0},
						"ipad"			: {"version" : 5.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "AmericanTypewriter-CondensedLight",
					"platforms"		: {
						"iphone" 		: {"version" : 5.0},
						"ipad"			: {"version" : 5.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "AmericanTypewriter-Light",
					"platforms"		: {
						"iphone" 		: {"version" : 5.0},
						"ipad"			: {"version" : 5.0},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "Apple Color Emoji",
		"faces" : [
				{
					"font_face" 	: "AppleColorEmoji",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "Apple SD Gothic Neo",
		"faces" : [
				{
					"font_face" 	: "AppleSDGothicNeo-Thin",
					"platforms"		: {
						"iphone" 		: {"version" : 7.0},
						"ipad"			: {"version" : 7.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "AppleSDGothicNeo-Light",
					"platforms"		: {
						"iphone" 		: {"version" : 7.0},
						"ipad"			: {"version" : 7.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "AppleSDGothicNeo-Regular",
					"platforms"		: {
						"iphone" 		: {"version" : 7.0},
						"ipad"			: {"version" : 7.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "AppleSDGothicNeo-Medium",
					"platforms"		: {
						"iphone" 		: {"version" : 7.0},
						"ipad"			: {"version" : 7.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "AppleSDGothicNeo-SemiBold",
					"platforms"		: {
						"iphone" 		: {"version" : 7.0},
						"ipad"			: {"version" : 7.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "AppleSDGothicNeo-Bold",
					"platforms"		: {
						"iphone" 		: {"version" : 7.0},
						"ipad"			: {"version" : 7.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "AppleSDGothicNeo-Medium",
					"platforms"		: {
						"iphone" 		: {"version" : 4.3},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "Arial",
		"faces" : [
				{
					"font_face" 	: "ArialMT",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Arial-BoldItalicMT",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Arial-BoldMT",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Arial-ItalicMT",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "Arial Hebrew",
		"faces" : [
				{
					"font_face" 	: "ArialHebrew",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "ArialHebrew-Bold",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "ArialHebrew-Light",
					"platforms"		: {
						"iphone" 		: {"version" : 8.0},
						"ipad"			: {"version" : 8.0},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "Arial Rounded MT Bold",
		"faces" : [
				{
					"font_face" 	: "ArialRoundedMTBold",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "Avenir",
		"faces" : [
				{
					"font_face" 	: "Avenir-Black",
					"platforms"		: {
						"iphone" 		: {"version" : 6.0},
						"ipad"			: {"version" : 6.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Avenir-BlackOblique",
					"platforms"		: {
						"iphone" 		: {"version" : 6.0},
						"ipad"			: {"version" : 6.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Avenir-Book",
					"platforms"		: {
						"iphone" 		: {"version" : 6.0},
						"ipad"			: {"version" : 6.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Avenir-BookOblique",
					"platforms"		: {
						"iphone" 		: {"version" : 6.0},
						"ipad"			: {"version" : 6.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Avenir-Heavy",
					"platforms"		: {
						"iphone" 		: {"version" : 6.0},
						"ipad"			: {"version" : 6.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Avenir-HeavyOblique",
					"platforms"		: {
						"iphone" 		: {"version" : 6.0},
						"ipad"			: {"version" : 6.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Avenir-Light",
					"platforms"		: {
						"iphone" 		: {"version" : 6.0},
						"ipad"			: {"version" : 6.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Avenir-LightOblique",
					"platforms"		: {
						"iphone" 		: {"version" : 6.0},
						"ipad"			: {"version" : 6.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Avenir-Medium",
					"platforms"		: {
						"iphone" 		: {"version" : 6.0},
						"ipad"			: {"version" : 6.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Avenir-MediumOblique",
					"platforms"		: {
						"iphone" 		: {"version" : 6.0},
						"ipad"			: {"version" : 6.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Avenir-Oblique",
					"platforms"		: {
						"iphone" 		: {"version" : 6.0},
						"ipad"			: {"version" : 6.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Avenir-Roman",
					"platforms"		: {
						"iphone" 		: {"version" : 6.0},
						"ipad"			: {"version" : 6.0},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "Avenir Next",
		"faces" : [
				{
					"font_face" 	: "AvenirNext-Bold",
					"platforms"		: {
						"iphone" 		: {"version" : 6.0},
						"ipad"			: {"version" : 6.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "AvenirNext-BoldItalic",
					"platforms"		: {
						"iphone" 		: {"version" : 6.0},
						"ipad"			: {"version" : 6.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "AvenirNext-DemiBold",
					"platforms"		: {
						"iphone" 		: {"version" : 6.0},
						"ipad"			: {"version" : 6.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "AvenirNext-DemiBoldItalic",
					"platforms"		: {
						"iphone" 		: {"version" : 6.0},
						"ipad"			: {"version" : 6.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "AvenirNext-Heavy",
					"platforms"		: {
						"iphone" 		: {"version" : 6.0},
						"ipad"			: {"version" : 6.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "AvenirNext-HeavyItalic",
					"platforms"		: {
						"iphone" 		: {"version" : 6.0},
						"ipad"			: {"version" : 6.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "AvenirNext-Italic",
					"platforms"		: {
						"iphone" 		: {"version" : 6.0},
						"ipad"			: {"version" : 6.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "AvenirNext-Medium",
					"platforms"		: {
						"iphone" 		: {"version" : 6.0},
						"ipad"			: {"version" : 6.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "AvenirNext-MediumItalic",
					"platforms"		: {
						"iphone" 		: {"version" : 6.0},
						"ipad"			: {"version" : 6.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "AvenirNext-Regular",
					"platforms"		: {
						"iphone" 		: {"version" : 6.0},
						"ipad"			: {"version" : 6.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "AvenirNext-UltraLight",
					"platforms"		: {
						"iphone" 		: {"version" : 6.0},
						"ipad"			: {"version" : 6.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "AvenirNext-UltraLightItalic",
					"platforms"		: {
						"iphone" 		: {"version" : 6.0},
						"ipad"			: {"version" : 6.0},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "Avenir Next Condensed",
		"faces" : [
				{
					"font_face" 	: "AvenirNextCondensed-Bold",
					"platforms"		: {
						"iphone" 		: {"version" : 6.0},
						"ipad"			: {"version" : 6.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "AvenirNextCondensed-BoldItalic",
					"platforms"		: {
						"iphone" 		: {"version" : 6.0},
						"ipad"			: {"version" : 6.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "AvenirNextCondensed-DemiBold",
					"platforms"		: {
						"iphone" 		: {"version" : 6.0},
						"ipad"			: {"version" : 6.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "AvenirNextCondensed-DemiBoldItalic",
					"platforms"		: {
						"iphone" 		: {"version" : 6.0},
						"ipad"			: {"version" : 6.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "AvenirNextCondensed-Heavy",
					"platforms"		: {
						"iphone" 		: {"version" : 6.0},
						"ipad"			: {"version" : 6.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "AvenirNextCondensed-HeavyItalic",
					"platforms"		: {
						"iphone" 		: {"version" : 6.0},
						"ipad"			: {"version" : 6.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "AvenirNextCondensed-Italic",
					"platforms"		: {
						"iphone" 		: {"version" : 6.0},
						"ipad"			: {"version" : 6.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "AvenirNextCondensed-Medium",
					"platforms"		: {
						"iphone" 		: {"version" : 6.0},
						"ipad"			: {"version" : 6.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "AvenirNextCondensed-MediumItalic",
					"platforms"		: {
						"iphone" 		: {"version" : 6.0},
						"ipad"			: {"version" : 6.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "AvenirNextCondensed-Regular",
					"platforms"		: {
						"iphone" 		: {"version" : 6.0},
						"ipad"			: {"version" : 6.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "AvenirNextCondensed-UltraLight",
					"platforms"		: {
						"iphone" 		: {"version" : 6.0},
						"ipad"			: {"version" : 6.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "AvenirNextCondensed-UltraLightItalic",
					"platforms"		: {
						"iphone" 		: {"version" : 6.0},
						"ipad"			: {"version" : 6.0},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "Bangla Sangam MN",
		"faces" : [
				{
					"font_face" 	: "BanglaSangamMN",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "BanglaSangamMN-Bold",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "Baskerville",
		"faces" : [
				{
					"font_face" 	: "Baskerville",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Baskerville-Bold",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Baskerville-BoldItalic",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Baskerville-Italic",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Baskerville-SemiBold",
					"platforms"		: {
						"iphone" 		: {"version" : 5.0},
						"ipad"			: {"version" : 5.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Baskerville-SemiBoldItalic",
					"platforms"		: {
						"iphone" 		: {"version" : 5.0},
						"ipad"			: {"version" : 5.0},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "Bodoni Ornaments",
		"faces" : [
				{
					"font_face" 	: "BodoniOrnamentsITCTT",
					"platforms"		: {
						"iphone" 		: {"version" : 5.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "Bodoni 72",
		"faces" : [
				{
					"font_face" 	: "BodoniSvtyTwoITCTT-Bold",
					"platforms"		: {
						"iphone" 		: {"version" : 5.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "BodoniSvtyTwoITCTT-Book",
					"platforms"		: {
						"iphone" 		: {"version" : 5.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "BodoniSvtyTwoITCTT-BookIta",
					"platforms"		: {
						"iphone" 		: {"version" : 5.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "Bodoni 72 Oldstyle",
		"faces" : [
				{
					"font_face" 	: "BodoniSvtyTwoOSITCTT-Bold",
					"platforms"		: {
						"iphone" 		: {"version" : 5.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "BodoniSvtyTwoOSITCTT-Book",
					"platforms"		: {
						"iphone" 		: {"version" : 5.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "BodoniSvtyTwoOSITCTT-BookIt",
					"platforms"		: {
						"iphone" 		: {"version" : 5.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "BodoniSvtyTwoSCITCTT-Book",
					"platforms"		: {
						"iphone" 		: {"version" : 5.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "Bradley Hand",
		"faces" : [
				{
					"font_face" 	: "BradleyHandITCTT-Bold",
					"platforms"		: {
						"iphone" 		: {"version" : 6.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "Chalkboard SE",
		"faces" : [
				{
					"font_face" 	: "ChalkboardSE-Bold",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "ChalkboardSE-Light",
					"platforms"		: {
						"iphone" 		: {"version" : 5.0},
						"ipad"			: {"version" : 5.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "ChalkboardSE-Regular",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "Chalkduster",
		"faces" : [
				{
					"font_face" 	: "Chalkduster",
					"platforms"		: {
						"iphone" 		: {"version" : 5.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "Cochin",
		"faces" : [
				{
					"font_face" 	: "Cochin",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Cochin-Bold",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Cochin-BoldItalic",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Cochin-Italic",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "Copperplate",
		"faces" : [
				{
					"font_face" 	: "Copperplate",
					"platforms"		: {
						"iphone" 		: {"version" : 5.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Copperplate-Bold",
					"platforms"		: {
						"iphone" 		: {"version" : 5.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Copperplate-Light",
					"platforms"		: {
						"iphone" 		: {"version" : 5.0},
						"ipad"			: {"version" : 5.0},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "Courier",
		"faces" : [
				{
					"font_face" 	: "Courier",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Courier-Bold",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Courier-BoldOblique",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Courier-Oblique",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "Courier New",
		"faces" : [
				{
					"font_face" 	: "CourierNewPS-BoldItalicMT",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "CourierNewPS-BoldMT",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "CourierNewPS-ItalicMT",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "CourierNewPSMT",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "DB LCD Temp",
		"faces" : [
				{
					"font_face" 	: "DBLCDTempBlack",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0, "depricated" : 6.0},
						"ipad"			: {"version" : 4.3, "depricated" : 6.0},
						"watch"			: {"version" : 8.0, "depricated" : 6.0}
					}
				}
		]
	},
	{ "family_name" : "DIN Alternate",
		"faces" : [
				{
					"font_face" 	: "DINAlternate-Bold",
					"platforms"		: {
						"iphone" 		: {"version" : 7.0},
						"ipad"			: {"version" : 7.0},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "DIN Condensed",
		"faces" : [
				{
					"font_face" 	: "DINCondensed-Bold",
					"platforms"		: {
						"iphone" 		: {"version" : 7.0},
						"ipad"			: {"version" : 7.0},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "Damascus",
		"faces" : [
				{
					"font_face" 	: "DamascusBold",
					"platforms"		: {
						"iphone" 		: {"version" : 7.0},
						"ipad"			: {"version" : 7.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Damascus",
					"platforms"		: {
						"iphone" 		: {"version" : 7.0},
						"ipad"			: {"version" : 7.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "DamascusLight",
					"platforms"		: {
						"iphone" 		: {"version" : 8.0},
						"ipad"			: {"version" : 8.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "DamascusMedium",
					"platforms"		: {
						"iphone" 		: {"version" : 7.0},
						"ipad"			: {"version" : 7.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "DamascusSemiBold",
					"platforms"		: {
						"iphone" 		: {"version" : 7.0},
						"ipad"			: {"version" : 7.0},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "Devanagari Sangam MN",
		"faces" : [
				{
					"font_face" 	: "DevanagariSangamMN",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "DevanagariSangamMN-Bold",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "Didot",
		"faces" : [
				{
					"font_face" 	: "Didot",
					"platforms"		: {
						"iphone" 		: {"version" : 5.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Didot-Bold",
					"platforms"		: {
						"iphone" 		: {"version" : 5.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Didot-Italic",
					"platforms"		: {
						"iphone" 		: {"version" : 5.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "Diwan Mishafi",
		"faces" : [
				{
					"font_face" 	: "DiwanMishafi",
					"platforms"		: {
						"iphone" 		: {"version" : 7.0},
						"ipad"			: {"version" : 7.0},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "Euphemia UCAS",
		"faces" : [
				{
					"font_face" 	: "EuphemiaUCAS",
					"platforms"		: {
						"iphone" 		: {"version" : 6.0},
						"ipad"			: {"version" : 6.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "EuphemiaUCAS-Bold",
					"platforms"		: {
						"iphone" 		: {"version" : 6.0},
						"ipad"			: {"version" : 6.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "EuphemiaUCAS-Italic",
					"platforms"		: {
						"iphone" 		: {"version" : 6.0},
						"ipad"			: {"version" : 6.0},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "Farah",
		"faces" : [
				{
					"font_face" 	: "Farah",
					"platforms"		: {
						"iphone" 		: {"version" : 7.0},
						"ipad"			: {"version" : 7.0},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "Futura",
		"faces" : [
				{
					"font_face" 	: "Futura-CondensedExtraBold",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Futura-CondensedMedium",
					"platforms"		: {
						"iphone" 		: {"version" : 5.0},
						"ipad"			: {"version" : 5.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Futura-Medium",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Futura-MediumItalic",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "Geeza Pro",
		"faces" : [
				{
					"font_face" 	: "GeezaPro",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "GeezaPro-Bold",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "Georgia",
		"faces" : [
				{
					"font_face" 	: "Georgia",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Georgia-Bold",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Georgia-BoldItalic",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Georgia-Italic",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "Gill Sans",
		"faces" : [
				{
					"font_face" 	: "GillSans",
					"platforms"		: {
						"iphone" 		: {"version" : 5.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "GillSans-Bold",
					"platforms"		: {
						"iphone" 		: {"version" : 5.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "GillSans-BoldItalic",
					"platforms"		: {
						"iphone" 		: {"version" : 5.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "GillSans-Italic",
					"platforms"		: {
						"iphone" 		: {"version" : 5.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "GillSans-Light",
					"platforms"		: {
						"iphone" 		: {"version" : 5.0},
						"ipad"			: {"version" : 5.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "GillSans-LightItalic",
					"platforms"		: {
						"iphone" 		: {"version" : 5.0},
						"ipad"			: {"version" : 5.0},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "Gujarati Sangam MN",
		"faces" : [
				{
					"font_face" 	: "GujaratiSangamMN",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "GujaratiSangamMN-Bold",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "Gurmukhi MN",
		"faces" : [
				{
					"font_face" 	: "GurmukhiMN",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "GurmukhiMN-Bold",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "Heiti SC",
		"faces" : [
				{
					"font_face" 	: "STHeitiSC-Light",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "STHeitiSC-Medium",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "Heiti TC",
		"faces" : [
				{
					"font_face" 	: "STHeitiTC-Light",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "STHeitiTC-Medium",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "Helvetica",
		"faces" : [
				{
					"font_face" 	: "Helvetica",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Helvetica-Bold",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Helvetica-BoldOblique",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Helvetica-Light",
					"platforms"		: {
						"iphone" 		: {"version" : 5.0},
						"ipad"			: {"version" : 5.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Helvetica-LightOblique",
					"platforms"		: {
						"iphone" 		: {"version" : 5.0},
						"ipad"			: {"version" : 5.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Helvetica-Oblique",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "Helvetica Neue",
		"faces" : [
				{
					"font_face" 	: "HelveticaNeue",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "HelveticaNeue-Bold",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "HelveticaNeue-BoldItalic",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "HelveticaNeue-CondensedBlack",
					"platforms"		: {
						"iphone" 		: {"version" : 5.0},
						"ipad"			: {"version" : 5.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "HelveticaNeue-CondensedBold",
					"platforms"		: {
						"iphone" 		: {"version" : 5.0},
						"ipad"			: {"version" : 5.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "HelveticaNeue-Italic",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "HelveticaNeue-Light",
					"platforms"		: {
						"iphone" 		: {"version" : 5.0},
						"ipad"			: {"version" : 5.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "HelveticaNeue-LightItalic",
					"platforms"		: {
						"iphone" 		: {"version" : 5.0},
						"ipad"			: {"version" : 5.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "HelveticaNeue-Medium",
					"platforms"		: {
						"iphone" 		: {"version" : 5.0},
						"ipad"			: {"version" : 5.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "HelveticaNeue-MediumItalic",
					"platforms"		: {
						"iphone" 		: {"version" : 7.0},
						"ipad"			: {"version" : 7.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "HelveticaNeue-UltraLight",
					"platforms"		: {
						"iphone" 		: {"version" : 5.0},
						"ipad"			: {"version" : 5.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "HelveticaNeue-UltraLightItalic",
					"platforms"		: {
						"iphone" 		: {"version" : 5.0},
						"ipad"			: {"version" : 5.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "HelveticaNeue-Thin",
					"platforms"		: {
						"iphone" 		: {"version" : 7.0},
						"ipad"			: {"version" : 7.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "HelveticaNeue-ThinItalic",
					"platforms"		: {
						"iphone" 		: {"version" : 7.0},
						"ipad"			: {"version" : 7.0},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "Hiragino Kaku Gothic ProN",
		"faces" : [
				{
					"font_face" 	: "HiraKakuProN-W3",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "HiraKakuProN-W6",
					"platforms"		: {
						"iphone" 		: {"version" : 5.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "Hiragino Mincho ProN",
		"faces" : [
				{
					"font_face" 	: "HiraMinProN-W3",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "HiraMinProN-W6",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "Hoefler Text",
		"faces" : [
				{
					"font_face" 	: "HoeflerText-Black",
					"platforms"		: {
						"iphone" 		: {"version" : 5.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "HoeflerText-BlackItalic",
					"platforms"		: {
						"iphone" 		: {"version" : 5.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "HoeflerText-Italic",
					"platforms"		: {
						"iphone" 		: {"version" : 5.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "HoeflerText-Regular",
					"platforms"		: {
						"iphone" 		: {"version" : 5.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "Iowan Old Style",
		"faces" : [
				{
					"font_face" 	: "IowanOldStyle-Bold",
					"platforms"		: {
						"iphone" 		: {"version" : 7.0},
						"ipad"			: {"version" : 7.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "IowanOldStyle-BoldItalic",
					"platforms"		: {
						"iphone" 		: {"version" : 7.0},
						"ipad"			: {"version" : 7.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "IowanOldStyle-Italic",
					"platforms"		: {
						"iphone" 		: {"version" : 7.0},
						"ipad"			: {"version" : 7.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "IowanOldStyle-Roman",
					"platforms"		: {
						"iphone" 		: {"version" : 7.0},
						"ipad"			: {"version" : 7.0},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "Kailasa",
		"faces" : [
				{
					"font_face" 	: "Kailasa",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Kailasa-Bold",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "Kannada Sangam MN",
		"faces" : [
				{
					"font_face" 	: "KannadaSangamMN",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "KannadaSangamMN-Bold",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "KhmerSangamMN",
		"faces" : [
				{
					"font_face" 	: "KhmerSangamMN",
					"platforms"		: {
						"iphone" 		: {"version" : 8.0},
						"ipad"			: {"version" : 8.0},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "KohinoorDevanagari",
		"faces" : [
				{
					"font_face" 	: "KohinoorDevanagari-Book",
					"platforms"		: {
						"iphone" 		: {"version" : 8.0},
						"ipad"			: {"version" : 8.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "KohinoorDevanagari-Light",
					"platforms"		: {
						"iphone" 		: {"version" : 8.0},
						"ipad"			: {"version" : 8.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "KohinoorDevanagari-Medium",
					"platforms"		: {
						"iphone" 		: {"version" : 8.0},
						"ipad"			: {"version" : 8.0},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "LaoSangamMN",
		"faces" : [
				{
					"font_face" 	: "LaoSangamMN",
					"platforms"		: {
						"iphone" 		: {"version" : 8.0},
						"ipad"			: {"version" : 8.0},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "Malayalam Sangam MN",
		"faces" : [
				{
					"font_face" 	: "MalayalamSangamMN",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "MalayalamSangamMN-Bold",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "Marion",
		"faces" : [
				{
					"font_face" 	: "Marion-Bold",
					"platforms"		: {
						"iphone" 		: {"version" : 5.0},
						"ipad"			: {"version" : 5.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Marion-Italic",
					"platforms"		: {
						"iphone" 		: {"version" : 5.0},
						"ipad"			: {"version" : 5.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Marion-Regular",
					"platforms"		: {
						"iphone" 		: {"version" : 5.0},
						"ipad"			: {"version" : 5.0},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "Menlo",
		"faces" : [
				{
					"font_face" 	: "Menlo-BoldItalic",
					"platforms"		: {
						"iphone" 		: {"version" : 7.0},
						"ipad"			: {"version" : 7.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Menlo-Regular",
					"platforms"		: {
						"iphone" 		: {"version" : 7.0},
						"ipad"			: {"version" : 7.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Menlo-Bold",
					"platforms"		: {
						"iphone" 		: {"version" : 7.0},
						"ipad"			: {"version" : 7.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Menlo-Italic",
					"platforms"		: {
						"iphone" 		: {"version" : 7.0},
						"ipad"			: {"version" : 7.0},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "Marker Felt",
		"faces" : [
				{
					"font_face" 	: "MarkerFelt-Thin",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "MarkerFelt-Wide",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "Noteworthy",
		"faces" : [
				{
					"font_face" 	: "Noteworthy-Bold",
					"platforms"		: {
						"iphone" 		: {"version" : 5.0},
						"ipad"			: {"version" : 5.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Noteworthy-Light",
					"platforms"		: {
						"iphone" 		: {"version" : 5.0},
						"ipad"			: {"version" : 5.0},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "Optima",
		"faces" : [
				{
					"font_face" 	: "Optima-Bold",
					"platforms"		: {
						"iphone" 		: {"version" : 5.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Optima-BoldItalic",
					"platforms"		: {
						"iphone" 		: {"version" : 5.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Optima-ExtraBlack",
					"platforms"		: {
						"iphone" 		: {"version" : 5.0},
						"ipad"			: {"version" : 5.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Optima-Italic",
					"platforms"		: {
						"iphone" 		: {"version" : 5.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Optima-Regular",
					"platforms"		: {
						"iphone" 		: {"version" : 5.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "Oriya Sangam MN",
		"faces" : [
				{
					"font_face" 	: "OriyaSangamMN",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "OriyaSangamMN-Bold",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "Palatino",
		"faces" : [
				{
					"font_face" 	: "Palatino-Bold",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Palatino-BoldItalic",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Palatino-Italic",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Palatino-Roman",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "Papyrus",
		"faces" : [
				{
					"font_face" 	: "Papyrus",
					"platforms"		: {
						"iphone" 		: {"version" : 5.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Papyrus-Condensed",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 5.0},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "Party LET",
		"faces" : [
				{
					"font_face" 	: "PartyLetPlain",
					"platforms"		: {
						"iphone" 		: {"version" : 5.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{"family_name" : "San Francisco",
	"faces" : [
		{
			"font_face" 	: "SanFranciscoDisplay-Black",
			"platforms"		: {
				"watch"		: {"version" : 8.2}
			}
		},
		{
			"font_face" 	: "SanFranciscoDisplay-Bold",
			"platforms"		: {
				"watch"		: {"version" : 8.2}
			}
		},
		{
			"font_face" 	: "SanFranciscoDisplay-Heavy",
			"platforms"		: {
				"watch"		: {"version" : 8.2}
			}
		},
		{
			"font_face" 	: "SanFranciscoDisplay-Light",
			"platforms"		: {
				"watch"		: {"version" : 8.2}
			}
		},
		{
			"font_face" 	: "SanFranciscoDisplay-Medium",
			"platforms"		: {
				"watch"		: {"version" : 8.2}
			}
		},
		{
			"font_face" 	: "SanFranciscoDisplay-Regular",
			"platforms"		: {
				"watch"		: {"version" : 8.2}
			}
		},
		{
			"font_face" 	: "SanFranciscoDisplay-Semibold",
			"platforms"		: {
				"watch"		: {"version" : 8.2}
			}
		},
		{
			"font_face" 	: "SanFranciscoDisplay-Thin",
			"platforms"		: {
				"watch"		: {"version" : 8.2}
			}
		},
		{
			"font_face" 	: "SanFranciscoDisplay-Ultralight",
			"platforms"		: {
				"watch"		: {"version" : 8.2}
			}
		},
		{
			"font_face" 	: "SanFranciscoRounded-Black",
			"platforms"		: {
				"watch"		: {"version" : 8.2}
			}
		},
		{
			"font_face" 	: "SanFranciscoRounded-Bold",
			"platforms"		: {
				"watch"		: {"version" : 8.2}
			}
		},
		{
			"font_face" 	: "SanFranciscoRounded-Heavy",
			"platforms"		: {
				"watch"		: {"version" : 8.2}
			}
		},
		{
			"font_face" 	: "SanFranciscoRounded-Light",
			"platforms"		: {
				"watch"		: {"version" : 8.2}
			}
		},
		{
			"font_face" 	: "SanFranciscoRounded-Medium",
			"platforms"		: {
				"watch"		: {"version" : 8.2}
			}
		},
		{
			"font_face" 	: "SanFranciscoRounded-Regular",
			"platforms"		: {
				"watch"		: {"version" : 8.2}
			}
		},
		{
			"font_face" 	: "SanFranciscoRounded-Semibold",
			"platforms"		: {
				"watch"		: {"version" : 8.2}
			}
		},
		{
			"font_face" 	: "SanFranciscoRounded-Thin",
			"platforms"		: {
				"watch"		: {"version" : 8.2}
			}
		},
		{
			"font_face" 	: "SanFranciscoRounded-Ultralight",
			"platforms"		: {
				"watch"		: {"version" : 8.2}
			}
		},
		{
			"font_face" 	: "SanFranciscoText-Bold",
			"platforms"		: {
				"watch"		: {"version" : 8.2}
			}
		},
		{
			"font_face" 	: "SanFranciscoText-BoldG1",
			"platforms"		: {
				"watch"		: {"version" : 8.2}
			}
		},
		{
			"font_face" 	: "SanFranciscoText-BoldG2",
			"platforms"		: {
				"watch"		: {"version" : 8.2}
			}
		},
		{
			"font_face" 	: "SanFranciscoText-BoldG3",
			"platforms"		: {
				"watch"		: {"version" : 8.2}
			}
		},
		{
			"font_face" 	: "SanFranciscoText-BoldItalic",
			"platforms"		: {
				"watch"		: {"version" : 8.2}
			}
		},
		{
			"font_face" 	: "SanFranciscoText-BoldItalicG1",
			"platforms"		: {
				"watch"		: {"version" : 8.2}
			}
		},
		{
			"font_face" 	: "SanFranciscoText-BoldItalicG2",
			"platforms"		: {
				"watch"		: {"version" : 8.2}
			}
		},
		{
			"font_face" 	: "SanFranciscoText-BoldItalicG3",
			"platforms"		: {
				"watch"		: {"version" : 8.2}
			}
		},
		{
			"font_face" 	: "SanFranciscoText-Heavy",
			"platforms"		: {
				"watch"		: {"version" : 8.2}
			}
		},
		{
			"font_face" 	: "SanFranciscoText-HeavyItalic",
			"platforms"		: {
				"watch"		: {"version" : 8.2}
			}
		},
		{
			"font_face" 	: "SanFranciscoText-Light",
			"platforms"		: {
				"watch"		: {"version" : 8.2}
			}
		},
		{
			"font_face" 	: "SanFranciscoText-LightItalic",
			"platforms"		: {
				"watch"		: {"version" : 8.2}
			}
		},
		{
			"font_face" 	: "SanFranciscoText-Medium",
			"platforms"		: {
				"watch"		: {"version" : 8.2}
			}
		},
		{
			"font_face" 	: "SanFranciscoText-MediumItalic",
			"platforms"		: {
				"watch"		: {"version" : 8.2}
			}
		},
		{
			"font_face" 	: "SanFranciscoText-Regular",
			"platforms"		: {
				"watch"		: {"version" : 8.2}
			}
		},
		{
			"font_face" 	: "SanFranciscoText-RegularG1",
			"platforms"		: {
				"watch"		: {"version" : 8.2}
			}
		},
		{
			"font_face" 	: "SanFranciscoText-RegularG2",
			"platforms"		: {
				"watch"		: {"version" : 8.2}
			}
		},
		{
			"font_face" 	: "SanFranciscoText-RegularG3",
			"platforms"		: {
				"watch"		: {"version" : 8.2}
			}
		},
		{
			"font_face" 	: "SanFranciscoText-RegularItalic",
			"platforms"		: {
				"watch"		: {"version" : 8.2}
			}
		},
		{
			"font_face" 	: "SanFranciscoText-RegularItalicG1",
			"platforms"		: {
				"watch"		: {"version" : 8.2}
			}
		},
		{
			"font_face" 	: "SanFranciscoText-RegularItalicG2",
			"platforms"		: {
				"watch"		: {"version" : 8.2}
			}
		},
		{
			"font_face" 	: "SanFranciscoText-RegularItalicG3",
			"platforms"		: {
				"watch"		: {"version" : 8.2}
			}
		},
		{
			"font_face" 	: "SanFranciscoText-Semibold",
			"platforms"		: {
				"watch"		: {"version" : 8.2}
			}
		},
		{
			"font_face" 	: "SanFranciscoText-SemiboldItalic",
			"platforms"		: {
				"watch"		: {"version" : 8.2}
			}
		},
		{
			"font_face" 	: "SanFranciscoText-Thin",
			"platforms"		: {
				"watch"		: {"version" : 8.2}
			}
		},
		{
			"font_face" 	: "SanFranciscoText-ThinItalic",
			"platforms"		: {
				"watch"		: {"version" : 8.2}
			}
		},
	]
},
	{ "family_name" : "Savoye Let Plain",
		"faces" : [
				{
					"font_face" 	: "SavoyeLetPlain",
					"platforms"		: {
						"iphone" 		: {"version" : 7.0},
						"ipad"			: {"version" : 7.0},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "Sinhala Sangam MN",
		"faces" : [
				{
					"font_face" 	: "SinhalaSangamMN",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "SinhalaSangamMN-Bold",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "Snell Roundhand",
		"faces" : [
				{
					"font_face" 	: "SnellRoundhand",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "SnellRoundhand-Black",
					"platforms"		: {
						"iphone" 		: {"version" : 5.0},
						"ipad"			: {"version" : 5.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "SnellRoundhand-Bold",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "Superclarendon",
		"faces" : [
				{
					"font_face" 	: "Superclarendon-Regular",
					"platforms"		: {
						"iphone" 		: {"version" : 7.0},
						"ipad"			: {"version" : 7.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Superclarendon-BoldItalic",
					"platforms"		: {
						"iphone" 		: {"version" : 7.0},
						"ipad"			: {"version" : 7.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Superclarendon-Light",
					"platforms"		: {
						"iphone" 		: {"version" : 7.0},
						"ipad"			: {"version" : 7.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Superclarendon-BlackItalic",
					"platforms"		: {
						"iphone" 		: {"version" : 7.0},
						"ipad"			: {"version" : 7.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Superclarendon-Italic",
					"platforms"		: {
						"iphone" 		: {"version" : 7.0},
						"ipad"			: {"version" : 7.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Superclarendon-LightItalic",
					"platforms"		: {
						"iphone" 		: {"version" : 7.0},
						"ipad"			: {"version" : 7.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Superclarendon-Bold",
					"platforms"		: {
						"iphone" 		: {"version" : 7.0},
						"ipad"			: {"version" : 7.0},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Superclarendon-Black",
					"platforms"		: {
						"iphone" 		: {"version" : 7.0},
						"ipad"			: {"version" : 7.0},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "Symbol",
		"faces" : [
				{
					"font_face" 	: "Symbol",
					"platforms"		: {
						"iphone" 		: {"version" : 6.0},
						"ipad"			: {"version" : 6.0},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "Tamil Sangam MN",
		"faces" : [
				{
					"font_face" 	: "TamilSangamMN",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "TamilSangamMN-Bold",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "Telugu Sangam MN",
		"faces" : [
				{
					"font_face" 	: "TeluguSangamMN",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "TeluguSangamMN-Bold",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "Thonburi",
		"faces" : [
				{
					"font_face" 	: "Thonburi",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Thonburi-Bold",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Thonburi-Light",
					"platforms"		: {
						"iphone" 		: {"version" : 8.0},
						"ipad"			: {"version" : 8.0},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "Times New Roman",
		"faces" : [
				{
					"font_face" 	: "TimesNewRomanPS-BoldItalicMT",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "TimesNewRomanPS-BoldMT",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "TimesNewRomanPS-ItalicMT",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "TimesNewRomanPSMT",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "Trebuchet MS",
		"faces" : [
				{
					"font_face" 	: "Trebuchet-BoldItalic",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "TrebuchetMS",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "TrebuchetMS-Bold",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "TrebuchetMS-Italic",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "Verdana",
		"faces" : [
				{
					"font_face" 	: "Verdana",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Verdana-Bold",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Verdana-BoldItalic",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				},
				{
					"font_face" 	: "Verdana-Italic",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "Zapf Dingbats",
		"faces" : [
				{
					"font_face" 	: "ZapfDingbatsITC",
					"platforms"		: {
						"iphone" 		: {"version" : 5.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	},
	{ "family_name" : "Zapfino",
		"faces" : [
				{
					"font_face" 	: "Zapfino",
					"platforms"		: {
						"iphone" 		: {"version" : 3.0},
						"ipad"			: {"version" : 4.3},
						"watch"			: {"version" : 8.2}
					}
				}
		]
	}
]};

});
