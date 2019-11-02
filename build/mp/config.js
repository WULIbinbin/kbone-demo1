module.exports = {
	"origin": "https://test.miniprogram.com",
	"entry": "/test/aaa",
	"router": {
		"index": [
			{
				"regexp": "^\\/index(?:\\/)?$",
				"options": "i"
			}
		],
		"searchResult": [
			{
				"regexp": "^\\/pages\\/searchResult\\/searchResult(?:\\/)?$",
				"options": "i"
			}
		],
		"profile": [
			{
				"regexp": "^\\/pages\\/profile\\/profile(?:\\/)?$",
				"options": "i"
			}
		]
	},
	"runtime": {
		"subpackagesMap": {},
		"tabBarMap": {
			"/pages/index/index": true,
			"/pages/profile/index": true
		},
		"usingComponents": {}
	},
	"pages": {
		"index": {},
		"searchResult": {},
		"home": {},
		"profile": {}
	},
	"redirect": {
		"notFound": "index",
		"accessDenied": "index"
	},
	"optimization": {
		"domSubTreeLevel": 5,
		"elementMultiplexing": true,
		"textMultiplexing": true,
		"commentMultiplexing": true,
		"domExtendMultiplexing": true,
		"styleValueReduce": 5000,
		"attrValueReduce": 5000
	}
}