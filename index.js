
const dict = (object) => {
	if (!object[Symbol.iterator]) {
		object[Symbol.iterator] = function* () {
			const properties = Object.keys(object);

			for (let prop of properties) {
				yield this[prop];
			}
		};
	}

	return object;
};

const __in__ = (item, object) => {
	for (var key of object) {
		if (object[key] === item) {
			return true;
		}
	}
	return false;
}

const list = (array) => array;

// Transcrypt'ed from Python, 2018-10-01 02:09:55
var __name__ = '__main__';
var location_slug_map = dict ({'ethical-jobs-in-melbourne': '1', 'ethical-jobs-in-sydney-nsw': '3', 'ethical-jobs-in-brisbane-qld': '5', 'ethical-jobs-in-perth-wa': '7', 'ethical-jobs-in-adelaide-sa': '9', 'ethical-jobs-in-canberra': '15', 'ethical-jobs-in-darwin-nt': '13', 'ethical-jobs-in-hobart-tas': '11', 'ethical-jobs-in-victoria': '2', 'ethical-jobs-in-new-south-wales-nsw': '4', 'ethical-jobs-in-queensland-qld': '6', 'ethical-jobs-in-tasmania': '12', 'ethical-jobs-in-the-northern-territory-nt': '14', 'ethical-jobs-in-south-australia': '10', 'ethical-jobs-in-western-australia-wa': '8', 'ethical-jobs-australia-wide': '16', 'international-ethical-jobs': '17'});
var location_vocab_slug_map = dict ({'act': 'ethical-jobs-in-canberra', 'australiawide': 'ethical-jobs-australia-wide', 'international': 'international-ethical-jobs', 'nsw': 'ethical-jobs-in-sydney-nsw', 'nt': 'ethical-jobs-in-darwin-nt', 'qld': 'ethical-jobs-in-queensland-qld', 'regnsw': 'ethical-jobs-in-new-south-wales-nsw', 'regnt': 'ethical-jobs-in-the-northern-territory-nt', 'regqld': 'ethical-jobs-in-queensland-qld', 'regsa': 'ethical-jobs-in-south-australia', 'regtas': 'ethical-jobs-in-tasmania', 'regvic': 'ethical-jobs-in-victoria', 'regwa': 'ethical-jobs-in-western-australia-wa', 'sa': 'ethical-jobs-in-adelaide-sa', 'tas': 'ethical-jobs-in-hobart-tas', 'vic': 'ethical-jobs-in-melbourne', 'wa': 'ethical-jobs-in-perth-wa'});
var location_search_param_map = dict ({});
for (var key of location_vocab_slug_map) {
	var slug = location_vocab_slug_map [key];
	if (__in__ (slug, location_slug_map)) {
		location_search_param_map [key] = location_slug_map [slug];
	}
}
var classification_slug_map = dict ({'administration-jobs': '1', 'advocacy-campaigns-jobs': '2', 'aged-care-seniors-rights-jobs': '3', 'alcohol-other-drugs-aod-jobs': '4', 'animal-welfare-jobs': '5', 'business-development-sales-jobs': '6', 'care-support-services-jobs': '7', 'cooperatives-credit-union-jobs': '8', 'communications-marketing-jobs': '9', 'community-development-jobs': '10', 'conservation-land-management-jobs': '11', 'corporate-social-responsibility-jobs': '12', 'disability-services-jobs': '13', 'early-childhood-child-care-jobs': '14', 'eco-tourism-jobs': '15', 'education-training-jobs': '16', 'environmental-sustainability-jobs': '17', 'executive-senior-management-jobs': '18', 'family-services-jobs': '19', 'fairtrade-organic-jobs': '20', 'finance-accounting-jobs': '21', 'fundraising-jobs': '22', 'glbt-sexual-health-jobs': '23', 'green-architecture-property-jobs': '24', 'green-energy-jobs': '25', 'green-products-services-jobs': '26', 'health-care-allied-health-jobs': '27', 'health-promotion-jobs': '28', 'housing-homelessness-jobs': '29', 'human-resources-hr-employment-services-jobs': '31', 'indigenous-jobs': '32', 'information-communication-technology-jobs': '34', 'international-aid-development-jobs': '33', 'legal-human-rights-jobs': '35', 'management-jobs': '36', 'media-arts-entertainment-jobs': '37', 'medical-research-jobs': '38', 'mental-health-counselling-jobs': '39', 'multiculturalism-diversity-jobs': '40', 'nursing-jobs': '41', 'operations-risk-management-jobs': '42', 'organic-farming-gardening-jobs': '43', 'policy-research-jobs': '44', 'project-management-jobs': '45', 'recycling-waste-management-jobs': '46', 'hospitality-customer-service-jobs': '30', 'social-work-jobs': '47', 'sustainable-transport-jobs': '48', 'trades-services-jobs': '49', 'unions-workers-rights-jobs': '50', 'volunteer-management-jobs': '51', 'womens-organisations-services-jobs': '52', 'youth-jobs': '53'});
var classification_vocab_slug_map = dict ({'administration': 'administration-jobs', 'advocacy': 'advocacy-campaigns-jobs', 'agedcare': 'aged-care-seniors-rights-jobs', 'alcoholandotherdrugs': 'alcohol-other-drugs-aod-jobs', 'animalwelfareandprotection': 'animal-welfare-jobs', 'businessdevelopment': 'business-development-sales-jobs', 'careandsupportservices': 'care-support-services-jobs', 'communicationsandmarketing': 'communications-marketing-jobs', 'communityanddevelopment': 'community-development-jobs', 'conservationandmanagement': 'conservation-land-management-jobs', 'customerservice': 'hospitality-customer-service-jobs', 'coopsandcreditunions': 'cooperatives-credit-union-jobs', 'corporatesocialresponsibility': 'corporate-social-responsibility-jobs', 'disabilityservices': 'disability-services-jobs', 'earlychildhood': 'early-childhood-child-care-jobs', 'ecotourism': 'eco-tourism-jobs', 'educationandtraining': 'education-training-jobs', 'environmentandsustainability': 'environmental-sustainability-jobs', 'executiveseniormanagement': 'executive-senior-management-jobs', 'fairtradeorganicandecoretail': 'fairtrade-organic-jobs', 'familyservices': 'family-services-jobs', 'financeandaccounting': 'finance-accounting-jobs', 'fundraising': 'fundraising-jobs', 'glbt': 'glbt-sexual-health-jobs', 'greenarchitectureandproperty': 'green-architecture-property-jobs', 'greenenergy': 'green-energy-jobs', 'greenproductsandservices': 'green-products-services-jobs', 'hrandemploymentservices': 'human-resources-hr-employment-services-jobs', 'healthcare': 'health-care-health-promotion-jobs', 'housing': 'housing-homelessness-jobs', 'itandcommunicationtechnology': 'information-communication-technology-jobs', 'indigenous': 'indigenous-jobs', 'internationalaidandevelopment': 'international-aid-development-jobs', 'legalandhumanrights': 'legal-human-rights-jobs', 'management': 'management-jobs', 'mediaartsandentertainment': 'media-arts-entertainment-jobs', 'medicalresearch': 'medical-research-jobs', 'mentalhealthandcounselling': 'mental-health-counselling-jobs', 'multiculturalismdiversity': 'multiculturalism-diversity-jobs', 'operationsriskmanagement': 'operations-risk-management-jobs', 'organicfarmingandgardening': 'organic-farming-gardening-jobs', 'policyandresearch': 'policy-research-jobs', 'projectmanagement': 'project-management-jobs', 'recyclingandwastemanagement': 'recycling-waste-management-jobs', 'socialwork': 'social-work-jobs', 'sustainabletransport': 'sustainable-transport-jobs', 'tradesandservices': 'trades-services-jobs', 'unionsandworkersrights': 'unions-workers-rights-jobs', 'volunteermanagement': 'volunteer-management-jobs', 'womensorganisationsandservices': 'womens-organisations-services-jobs', 'youthservices': 'youth-jobs'});
var classification_search_param_map = dict ({});
for (var key of classification_vocab_slug_map) {
	var slug = classification_vocab_slug_map [key];
	if (__in__ (slug, classification_slug_map)) {
		classification_search_param_map [key] = classification_slug_map [slug];
	}
}
var sector_slug_map = dict ({'not-for-profit-jobs': '4', 'social-enterprise-jobs': '5', 'university-higher-education-jobs': '7', 'local-government-jobs': '3', 'volunteer-unpaid-jobs': '6'});
var sector_search_param_map = dict ({'Not For Profit (NFP)': '4', 'Local Government': '3', 'State Government': '6', 'Federal Government': '2', 'Business and Private Sector': '1', 'university': '7'});
var regional_slug_map = dict ({'ethical-jobs-in-geelong': 'geelong', 'ethical-jobs-in-bendigo': 'bendigo', 'ethical-jobs-in-albury-wodonga': 'Albury or Wodonga', 'ethical-jobs-in-ballarat': 'ballarat', 'ethical-jobs-in-gippsland': 'Gippsland or Traralgon', 'ethical-jobs-in-newcastle-hunter-region': 'Newcastle orHunter', 'ethical-jobs-in-wollongong-illawarra-region': 'Wollongong or Illawarra', 'ethical-jobs-in-gosford-central-coast': 'Gosford', 'ethical-jobs-in-cairns': 'Cairns', 'ethical-jobs-in-townsville': 'Townsville', 'ethical-jobs-in-rockhampton': 'Rockhampton', 'ethical-jobs-in-mount-isa': '"Mt Isa"', 'ethical-jobs-in-alice-springs': '"Alice Springs"'});
var regional_search_param_map = dict ({});
var work_type_slug_map = dict ({'fulltime': '3', 'parttime': '5', 'contract': '2', 'casual': '1', 'graduate': '4', 'volunteer': '6'});
var work_type_search_param_map = work_type_slug_map;
var desktop_to_mobile_mapping = dict ({'location': dict ({'slug': location_slug_map, 'query_key': 'locations', 'search_param': location_search_param_map}), 'classification': dict ({'slug': classification_slug_map, 'query_key': 'categories', 'search_param': classification_search_param_map}), 'sector': dict ({'slug': sector_slug_map, 'query_key': 'sectors', 'query_key_alt_slugs': list (['volunteer-unpaid-jobs']), 'query_key_alt': 'workTypes', 'search_param': sector_search_param_map}), 'regional': dict ({'slug': regional_slug_map, 'query_key': 'q', 'search_param': regional_search_param_map}), 'work_type': dict ({'slug': regional_slug_map, 'query_key': 'workTypes', 'search_param': work_type_search_param_map})});

//# sourceMappingURL=res.map

module.exports = {
    location_slug_map: location_slug_map,
    location_vocab_slug_map: location_vocab_slug_map,
    location_search_param_map: location_search_param_map,
    work_type_slug_map: work_type_slug_map,
    classification_slug_map: classification_slug_map,
    classification_vocab_slug_map: classification_vocab_slug_map,
}