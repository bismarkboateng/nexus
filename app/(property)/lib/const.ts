const initialPropertyValues = {
    // property details
    title: "",
    property_type: "",
    furnished_status: "",
    year_built: 0,
    property_details: "",

    // address
    address: {
        street: "",
        postal_code: "",
        city: "",
        country: "",
    },

    // specifications
    no_of_bedrooms: 0,
    no_of_bathrooms: 0,
    sq_foot: 0,
    parking: "",

    // pricing and availability
    price: 0,
    availability_status: "",
    lease_terms: "",

    // owner information
    owner: {
        name: "",
        contact: "",
    },

    // amenities and features
    nearby_amenities: [],
    utilities_included: [],
    security_features: [], 
    what_this_place_offers:  [],

    // policies
    pet_policy: "",

    // images
    images: [],
};

export default initialPropertyValues;
