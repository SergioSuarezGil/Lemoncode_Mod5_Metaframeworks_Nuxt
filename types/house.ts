export interface HouseReview {
  id: string;
  date: string;
  author: string;
  comment: string;
  rating: number;
}

export interface House {
  id: string;
  name: string;
  description: string;
  address: string;
  city: string;
  country: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  beds: number;
  price: number;
  image: string;
  amenities: string[];
  reviews: HouseReview[];
}
