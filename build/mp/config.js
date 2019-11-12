module.exports = {
	"origin": "https://test.miniprogram.com",
	"entry": "/test/aaa",
	"router": {
		"home": [
			{
				"regexp": "^\\/pages\\/home\\/home(?:\\/)?$",
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
			"/pages/home/index": true,
			"/pages/profile/index": true
		},
		"usingComponents": {}
	},
	"pages": {
		"goodsInfo": {},
		"home": {},
		"profile": {},
		"searchResult": {}
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