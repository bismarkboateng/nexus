export type PropertyType = {
    images: {
      src: string;
      id: string;
    }[];
    title: string;
    address: {
      street: string;
      postal_code: string;
      city: string;
      country: string;
    };
    no_of_bedrooms: number;
    no_of_bathrooms: number;
    sq_foot: number;
    parking: string;
    price: number;
    property_type: string;
    furnished_status: string;
    year_built: number;
    availability_status: string;
    lease_terms: string;
    owner: {
      name: string;
      contact: string;
    };
    nearby_amenities: string[];
    utilities_included: string[];
    pet_policy: string;
    security_features: string[];
    property_details: string;
    what_this_place_offers: string[];
  };
  