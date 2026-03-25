

import Link from "next/link";
import { Hotel } from "../lib/definitions";
import Image from "next/image";
export default function HotelCard({hotels}:{hotels : Hotel[]}) {
       
  return (
    <>
      {hotels.map((hotel) => (
        <div
          key={hotel.id}
          className="hotel-card bg-white rounded-lg shadow hover:shadow-lg transition"
        >
          <img
            src={hotel.image_url}
            alt={hotel.name}
            className="h-48  w-full object-cover rounded-t-lg"
          />
          <div className="details-box p-4">
            <h2 className="font-semibold text-lg">{hotel.name}</h2>
            <p className="text-gray-600">{hotel.location}</p>
            <Link
              href={`/hotels/${hotel.id}/hotel-details`}
              className="btn mt-6 block w-4/5 text-white text-center mx-auto rounded-md px-4 py-2 hover:underline"
            >
              View Details →
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
