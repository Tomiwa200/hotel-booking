import { fetchBookingsByUserId } from "@/app/lib/data";
import { auth } from "@/auth";
import "./style.css";
import { RemoveBookingButton } from "@/app/ui/remove-booking-btn";
import Link from "next/link";

export default async function Bookings() {
  const session = await auth();
  const user_id = session?.user?.id;

  if (!user_id) {
    return (
      <div className="text-center">
        <p className="text-lg text-gray-600">
          Please log in to view your bookings.
        </p>
      </div>
    );
  }

  const bookings = await fetchBookingsByUserId(user_id);

  return (
    <div className="items-container min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className=" title text-4xl font-bold text-gray-900">My Bookings</h1>
          <p className="text-gray-600 mt-1">
            Manage and view all your hotel reservations
          </p>
        </div>
        {bookings && bookings.length > 0 ? (
          <div className="grid gap-6">
            {bookings.map((booking) => (
              <div className="bg-white rounded-lg shadow-lg ">
                <img
                  src={booking.image_url}
                  alt={booking.hotel_name}
                  className=" h-40 w-full object-cover rounded-t-lg"
                />
                
                <div className="p-4 mb-2">
                <h2 className="title font-bold text-xl">{booking.hotel_name}</h2>
                <p className=" font-bold text-gray-600 ">{booking.hotel_location}</p>
               </div>
              
               <div className="room-container flex items-center gap-12">
                <div className="p-4">
                <p className=" title font-bold text-xl text-gray-600 ">{booking.room_name}</p>
                <p className=" font-bold text-lg text-gray-600 "> Max Guests: {booking.room_max_guests}</p>
                <p className="font-bold text-lg text-gray-600">Price: ${booking.room_price}/ Per night</p>
               </div>

               <div className="details">
                   
                   <p className="font-bold text-gray-600">Check In: {new Date(booking.start_date).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric'
                            })}</p>
                   <p className="font-bold text-gray-600">Check Out: {new Date(booking.end_date).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric'
                            })}</p>
               </div>
               </div>
               <div className="p-4">
                <RemoveBookingButton id={booking.booking_id} />
               </div>
              </div>
            ))}
          </div>
        ) : (
            <div className="text-center py-20 ">
              <p className="font-bold text-2xl mb-2">No bookings yet</p>
              <Link href="/hotels" className=" nav-btn p-2 rounded-lg mt-2">
               Explore Hotels
              </Link>
            </div>
        )}
      </div>
    </div>
  );
}
