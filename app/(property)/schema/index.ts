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
  no_of_bedrooms: z.number().int().positive(),
  no_of_bathrooms: z.number().int().positive(),
  sq_foot: z.number().int().positive(),
  parking: z.string(),
  price: z.number().positive(),
  property_type: z.string(),
  furnished_status: z.string(),
  year_built: z.number().int().positive(),
  availability_status: z.string(),
  lease_terms: z.string(),
  owner: OwnerSchema,
  nearby_amenities: z.array(z.string()),
  utilities_included: z.array(z.string()),
  pet_policy: z.string(),
  security_features: z.array(z.string()),
  property_details: z.string(),
  what_this_place_offers: z.array(z.string()),
});
