'use strict';

class listingRegexes {
	this.listingId: /(?<=","listing_id":)[+-]?(?:\d*\.)?\d+/
	this.listingId2:  /(?<=data-hosting_id=")[+-]?(?:\d*\.)?\d+/
	this.location: /(?<=,"scrubbed_location":")([\w ]+)
	this.lat: /(?<="lat":)[+-]?(?:\d*\.)?\d+/
	this.lng: /(?<="lng":)[+-]?(?:\d*\.)?\d+/
	this.rate: /(?<="rate":)[+-]?(?:\d*\.)?\d+/
	this.countryCode: /(?<=,"country_code":)([\w ]+)/}
	this.country: /(?<=airbedandbreakfast:country" content=")([\w ]+)
	this.city: /(?<=","truncated_localized_city":")([\w ]+)
	this.listingTitle: /(?<=<title>)([\w ]+)/
	this.rateType: /(?<=,"rate_type":")([\w ]+)/
	this.currency: /(?<=,"currency":")([\w ]+)/
	this.accommodationPriceIncludesCleaningFee: null
	this.cleaningFee: /(?<=cleaningFee)[+-]?(?:\d*\.)?\d+/
	this.basePriceUSD: /(?<=,"base_price_usd":)[+-]?(?:\d*\.)?\d+/
	this.monthlyPrice: /(?<=,"monthly_price" )[+-]?(?:\d*\.)?\d+/
	this.hostFirstName: null
	this.hostSmartName: null
	this.cleaningFeeAsGuest: null
	this.extraGuestFee: /(?<="extra_guest_fee":{"amount":)[+-]?(?:\d*\.)?\d+/
	this.propertyType: /(?<="Room type:","label_url":null,"value":")([\w  /]+)\w+/
	this.propertyTypeID: /(?<=},"property_type_id":)[+-]?(?:\d*\.)?\d+/
	this.hostOtherPropertyReviewCount: /(?<=,"host_other_property_review_count":)[+-]?(?:\d*\.)?\d+/
    this.noBedrooms: /(?<=Bedrooms">)[+-]?(?:\d*\.)?\d+/
	this.noBeds: /(?<={"class":"double-bed","label":")[+-]?(?:\d*\.)?\d+/
	this.maxNoGuests: /(?<=Guests">)[+-]?(?:\d*\.)?\d+/
	this.noSavedToTravellersWishList:
	this.securityDeposit: null
	this.serviceFeeUSD: /(?<=,"service_fee_usd":)[+-]?(?:\d*\.)?\d+/
	this.cancellationType: /(?<=,"cancellation_policy_label":")([\w ]+)/
	this.weeklyDiscount:  /(?<="weekly_discount":)([\w \d]+)/
	this.weeklyPrice: /(?<=,"weekly_price":)([\w \d]+)/
	this.weekendPrice: /(?<=,"weekend_price":)([\w \d]+)/
	this.description: null
	this.houseRules: null
	this.safetyFeatures: null
	this.availability: null
	this.isSuperhost: null
	this.allowsPets: /(?<=,","allows_pets":")([\w ]+)/
	this.allowsEvents: /(?<=,","allows_events":")([\w ]+)/
	this.last_updated: /(?<=,"last_updated":")([\w ]+)/
	this.min_nights: /(?<="min_nights":)[+-]?(?:\d*\.)?\d+/
	this.allowsChildren: /(?<=,","allows_children":")([\w ]+)/
	this.allowsInfants: /(?<=,","allows_infants":")([\w ]+)/
	this.allowsSmoking: /(?<=,","allows_Smoking":")([\w ]+)/
	this.allowsEvents: /(?<=,","allows_events":")([\w ]+)/
	this.hostCheckInTimeMessage: /(?<="host_check_in_time_message":" )([\w ]+)/
	this.refund: /(?<=,"refund":)([\w ]+)/
	this.summaryTitle: /(?<=},"summaryTitle":")([\w, ]+)/
	this.summaryAddress: /(?<=},"summaryAddress":")([\w, ]+)/
	this.startRating: /(?<=data-star_rating=")[+-]?(?:\d*\.)?\d+/
	this.reviewCount: /(?<=,"review_count":)[+-]?(?:\d*\.)?\d+/
	this.reviewScore: /(?<=,"review_score":)[+-]?(?:\d*\.)?\d+/
	this.reviewAccuracy: /(?<="{"label":"Accuracy","value":)[+-]?(?:\d*\.)?\d+/
    this.reviewCleanliness: /(?<="{"label":"Cleanliness","value":)[+-]?(?:\d*\.)?\d+/
    this.reviewCommunication: /(?<="{"label":"Communication","value":)[+-]?(?:\d*\.)?\d+/
	this.reviewLocation: /(?<="{"label":"Location","value":)[+-]?(?:\d*\.)?\d+/
    this.reviewCheckIn: /(?<="{"label":"Check In","value":)[+-]?(?:\d*\.)?\d+/
    this.reviewValue: /(?<="{"label":"Value","value":)[+-]?(?:\d*\.)?\d+/
	this.hostName: null
	this.hostResponseRate: /(?<="response_rate":{"rate":")[+-]?(?:\d*\.)?\d+%/
	this.hostResponseTime:  /(?<="response_time":")([\w ]+)/
	this.hostVerified: null 
	this.hostId: /(?<=,"id":)(28820321),"is_superhost":/
	this.hostName: /(?<=,"displayUser":{"host_name":")([\w ]+)/
	this.listingCurrency: /(?<=,"listingCurrency":")([\w ]+)/
	this.hostDescription: null
	this.canInstantBook: /(?<=,"can_instant_book":)\w*/
	this.scrubbed_location: /(?<=,"scrubbed_location":")([\w ]+)/
	this.hostProfileCreationDate: /(?<="member_since":")([\w ]+)/
	this.isBusinessReady: /(?<=,"is_business_ready_feature":)([\w ]+)/
	this.long_term_discount_amount_as_guest: /(?<=,"long_term_discount_amount_as_guest":)[+-]?(?:\d*\.)?\d+/
	this.average_booked_price: /(?<=,"average_booked_price":)\w*/
	this.hostProfilePath:  /(?<=,"profile_path":").*
}

module.exports = {
  listingRegexes: listingRegexes
} 
