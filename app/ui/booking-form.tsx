'use client';

import Link from "next/link";
import { Room, SingleHotel } from "../lib/definitions";
import bookHotel, { State } from "../lib/action";
import { useActionState } from "react";

export default function BookingForm({
  hotel,
  rooms,
  user_id
}: {
  hotel: SingleHotel;
  rooms: Room[];
  user_id: string;
}) 
{
  const bookHotelWithUserId = bookHotel.bind(null, user_id);
  const initialState: State = { message: null, errors: {} };
   const [state, formAction, isPending] = useActionState(bookHotelWithUserId, initialState);
  return ( 
    <form action={formAction}>
      <div className="border border-gray-100 p-6 rounded-lg  shadow-md">
      <div className="mb-4">
        <h4 className="label mb-2 block text-sm font-medium">Hotel Name</h4>
        <select
          id="hotel"
          name="hotelId"
          className="peer block input-field w-full  cursor-pointer rounded-sm  py-2 pl-10 text-sm font-medium "
          defaultValue={hotel.id}
        >
          <option value={hotel.id}>
            {hotel.name}, {hotel.location}
          </option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="room" className="label mb-2 block text-sm font-medium">
          Choose a Room Type
        </label>
        <select
          id="room"
          name="roomId"
          className="peer block w-full cursor-pointer rounded-md input-field py-2 pl-10 text-sm text-gray-600 "
          defaultValue={""}
           aria-describedby="customer-error"
        >
          <option value="" disabled>
            Select a room type
          </option>

          {rooms.map((room) => (
            <option key={room.id} value={room.id}>
              {room.name}, ${room.price}
            </option>
          ))}
        </select>
           <div id="customer-error" aria-live="polite" aria-atomic="true">
        {state.errors?.room_id &&
          state.errors.room_id .map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
      </div>
      </div>
      <div>
        <label htmlFor="start_date" className=" label font-medium mb-2">
          Start From
        </label>
        <input
          id="start_date"
          name="start_date"
          type="date"
          className="w-full mb-2 text-gray-600  p-2 rounded-md input-field"
          required
        />
      </div>
      <div>
        <label htmlFor="end_date" className=" label font-medium mb-2">
          Ends By
        </label>
        <input
          id="end_date"
          name="end_date"
          type="date"
          className="w-full text-gray-600 p-2 rounded-md input-field"
          required
        />
      </div>
      
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/"
          className="inline-block form-btn-cancel  mt-6 px-4 py-2 font-bold rounded-sm"
        >
          Cancel
        </Link>
        <button
          type="submit"
          className="block form-btn mt-6 px-4 py-2 font-bold rounded-sm hover:opacity-60 aria-disabled:cursor-not-allowed aria-disabled:opacity-50 "
          aria-disabled={isPending}
        >
          Confirm
        </button>
        
      </div>
     {state.message &&
         (
            <p className="mt-2 text-sm text-red-500" >
              {state.message}
            </p>
         )}
         </div>
    </form>
  );
}
