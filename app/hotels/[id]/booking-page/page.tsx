import { fetchHotelById, fetchRoomsByHotelId } from "@/app/lib/data";
import BookingForm from "@/app/ui/booking-form";
import { auth } from "@/auth";

export default async function BookingPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const hotel_id = params.id;
  const session = await auth();
  const user_id = session?.user?.id;

  const [hotel, rooms] = await Promise.all([
    fetchHotelById(hotel_id),
    fetchRoomsByHotelId(hotel_id),
  ]);

  if (!hotel || !rooms) {
    return <div>Hotel not found</div>;
  }
  if (!user_id) {
    return <div>user not found</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen p-10">
      <div className="booking-form sm:min-w-xl border border-gray-100 rounded-md shadow-sm">
        <BookingForm user_id={user_id} hotel={hotel} rooms={rooms} />
      </div>
    </div>
  );
}
