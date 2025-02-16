import { z } from "zod";

const AddressSchema = z.object({
  street: z.string(),
  postal_code: z.string(),
  city: z.string(),
  country: z.string(),
});

const OwnerSchema = z.object({
  name: z.string(),
  contact: z.string(),
});

export const PropertySchema = z.object({
  images: z.array(
    z.object({
      src: z.string().url(),
      id: z.string(),
    })
  ),
  title: z.string(),
  address: AddressSchema,
  no_of_bedrooms: z.string(),
  no_of_bathrooms: z.string(),
  sq_foot: z.string(),
  parking: z.string(),
  price: z.string(),
  property_type: z.string(),
  furnished_status: z.string(),
  year_built: z.string(),
  availability_status: z.string(),
  lease_terms: z.string(),
  owner: OwnerSchema,
  nearby_amenities: z.string(),
  utilities_included: z.string(),
  pet_policy: z.string(),
  security_features: z.string(),
  property_details: z.string(),
  what_this_place_offers: z.string(),
});
