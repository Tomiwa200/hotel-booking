export type Hotel = {
  id: string;
  name: string;
  location: string;
  description: string;
  image_url: string;
};

export type User = {
  id: string;
  email: string;
  password_hash: string;
  name: string;
};

export type SingleHotel = {
  id: string;
  name: string;
  location: string;
  description: string;
  image_url: string;
};

export type Room = {
  id: string;
  name: string;
  price: number;
  max_guests: number;
};

export type BookedHotel ={
  booking_id : string;
  image_url: string;
  hotel_name: string;
  hotel_location: string;
  room_name: string;
  room_price: number;
  room_max_guests : number;
  start_date: string;
  end_date: string;
  status: string;
}



