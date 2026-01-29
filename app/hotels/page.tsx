import { fetchHotelList } from "../lib/data";
import HotelCard from "../ui/hotel-card";
import "./home.css";

  
export default async function Hotels() {
  const hotels = await fetchHotelList();
  
  return (

      <section className="hotel-list grid grid-cols-1 md:grid-cols-3 gap-6 ">
            <HotelCard  hotels= {hotels}/>
      </section>

  );
}
