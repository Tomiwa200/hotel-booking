import Link from "next/link";
import  "./style.css";
import { fetchHotelById, fetchRoomsByHotelId } from "@/app/lib/data";
import Image from "next/image";

 
export default async function HotelDetails(props: {params: Promise<{id : string }>}) {
    const params = await props.params;
       const hotel_id = params.id;
   
       const [hotel, rooms] = await Promise.all([
           fetchHotelById(hotel_id),
         fetchRoomsByHotelId(hotel_id),
       ]);
     
        if (!hotel || !rooms) {
      return <div>Hotel not found</div>;
    }

  return ( 
     <>
     <div  className="grid md:grid-cols-2 gap-8">
       <img
        src={hotel.image_url}
        alt={hotel.name}
        className="rounded-lg"
      />
      <div>
        <h1 className=" title text-3xl font-bold">{hotel.name}</h1>
        <p className="text-gray-600">{hotel.location}</p>
        <p className="mt-4 text-gray-600">{hotel.description}</p>
        <hr className="title"></hr> 
        <h2 className="title text-xl mt-4 font-semibold">Room Types</h2>
        {rooms?.map((room) => (
          <div key={room.id} className=" p-4 shadow-sm rounded-lg space-y-2 ">
             <h4 className="title text-xl font-bold"> {room.name}</h4>
           <p className="text-gray-600">Price: ${room.price}</p>
            <p className="text-gray-600">Max Guests: {room.max_guests}</p> 
          </div>
        ))}
        <Link
          href={`/hotels/${hotel_id}/booking-page`}
          className="inline-block mt-6 nav-btn text-white px-6 py-3 font-bold rounded hover:opacity-60"
        >
          Book Now
        </Link>
      </div> 
      </div>
      
  </> 
  );
}
