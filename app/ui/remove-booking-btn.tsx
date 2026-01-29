import { deleteBooking } from "../lib/action";

export function RemoveBookingButton({ id }: { id: string }) {
  const deleteBookingWithId = deleteBooking.bind(null, id);
 
  return (
    <form action={deleteBookingWithId}>
      <button type="submit" className="remove-btn rounded-md border p-2  hover:opacity-60">
        Remove
      </button>
    </form>
  );
}
