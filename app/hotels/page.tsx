import { fetchHotelList } from "../lib/data";
import HotelCard from "../ui/hotel-card";

export default async function Hotels() {
  const hotels = await fetchHotelList();

  return (
    <section className="hotel-list max-w-7xl mx-auto py-20 grid grid-cols-1 md:grid-cols-3 gap-6 ">
      <HotelCard hotels={hotels} />
    </section>
  );
}
