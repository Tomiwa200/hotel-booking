import { fetchHotelList } from "../lib/data";
import HotelCard from "../ui/hotel-card";

export default async function Hotels() {
  const hotels = await fetchHotelList();

  return (
    <section className="flex justify-center items-center min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 sm:py-12">
        <HotelCard hotels={hotels} />
      </div>
      
    </section>
  );
}
