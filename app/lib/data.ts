import postgres from "postgres";
import { BookedHotel, Hotel, Room, SingleHotel, User } from "./definitions";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export async function fetchHotelList() {
  try {
    const hotels = await sql<Hotel[]>`select * from hotels`;
    return hotels;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch hotel data.");
  }
}

export async function fetchHotelById(hotel_id: string) {
  try {
    const hotel = await sql<SingleHotel[]>`SELECT  
       id, name, location, description, image_url
      FROM hotels WHERE hotels.id = ${hotel_id}
       `;

    return hotel[0];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch single hotel.");
  }
}
export async function fetchRoomsByHotelId(hotel_id: string) {
  try {
    const rooms = await sql<Room[]>`SELECT id, name, price,
        max_guests 
     FROM rooms
     where rooms.hotel_id = ${hotel_id}
       `;

    return rooms;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch hotel rooms.");
  }
}

export async function fetchBookingsByUserId(user_id: string) {
  try {
    const hotel = await sql<
      BookedHotel[]
    >`SELECT b.id AS booking_id, b.start_date, b.end_date, b.status, h.image_url, h.name AS hotel_name, h.location AS hotel_location, 
    r.name AS room_name, r.price AS room_price, r.max_guests AS room_max_guests
FROM ((bookings b
INNER JOIN hotels h ON b.hotel_id = h.id)
INNER JOIN rooms r ON b.room_id = r.id)
WHERE b.user_id = ${user_id}`;
return hotel;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch user bookings.");
  }
}

export async function getUserByEmail(email: string)  {
  const user = await sql<User[]>`SELECT * FROM users WHERE email = ${email}`;
  return user[0];
}