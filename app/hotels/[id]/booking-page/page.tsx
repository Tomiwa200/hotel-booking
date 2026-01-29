import "./style.css";
import { fetchHotelById, fetchRoomsByHotelId } from "@/app/lib/data";
import BookingForm from "@/app/ui/booking-form";
import { auth } from "@/auth";

 
 export default async function BookingPage(props: {params: Promise<{id : string }>}) {
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
    if (!user_id)  {
      return <div>user not found</div>;
    }

    return (
     <div className="max-w-3xl mx-auto">
      <h1 className="title text-2xl text-center font-bold mb-4">
        Book Your Stay
      </h1>
      <BookingForm  user_id={user_id} hotel={hotel} rooms={rooms}/>
    </div>);
  }