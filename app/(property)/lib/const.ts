const initialPropertyValues = {
    // property details
    title: "",
    property_type: "",
    furnished_status: "",
    year_built: "",
    property_details: "",

    // address
    address: {
        street: "",
        postal_code: "",
        city: "",
        country: "",
    },

    // specifications
    no_of_bedrooms: "",
    no_of_bathrooms: "",
    sq_foot: "",
    parking: "",

    // pricing and availability
    price: "",
    availability_status: "",
    lease_terms: "",

    // owner information
    owner: {
        name: "",
        contact: "",
    },

    // amenities and features
    nearby_amenities: "",
    utilities_included: "",
    security_features: "", 
    what_this_place_offers:  "",

    // policies
    pet_policy: "",

    // images
    images: [],
};

export default initialPropertyValues;
