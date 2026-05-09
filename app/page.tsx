import Link from "next/link";
import { fetchFeaturedHotels } from "./lib/data";
import FeaturedHotel from "./ui/fearuredHotel";

export default async function Page() {
 const hotels = await fetchFeaturedHotels();
  return (
    <>
          {/*  hero section */}
      <section className=" w-full hero-section p-15 sm:p-50">
        <div className="hero-text text-center">
          <h1 className="text-3xl md:text-5xl text-white font-bold mb-4">
            Book Hotels Seamlessly
          </h1>
          <p className="text-white text-md md:text-lg mb-6">
            Discover hotels and book rooms in minutes.
          </p>
          <Link
            href="/hotels"
            className=" btn inline-block text-white mt-4 py-2 px-3 sm:py-4 sm:px-6 rounded-lg "
          >
            Browse Hotels
          </Link>
        </div>

        <div className="hero-bottom  w-3/5 h-80  flex ">
          <div className="column-1  basis-1/2 p-10 text-center rounded-sm">
            <h4 className="text-white text-3xl font-bold mt-20 mb-2">
              Why Choose Us?
            </h4>
            <p className="text-white">
              We offer the best hotel booking experience with seamless check-in
              and 24/7 customer support.
            </p>
          </div>
          <div className=" column-2 bg-white basis-1/2 p-10 rounded-sm">
            <h4 className="text-white text-6xl font-bold mt-12">40%</h4>
            <h4 className=" text-white text-4xl font-bold mb-2 ">
              Exclusive Deals
            </h4>
            <p className="text-white">
              Get access to exclusive deals and discounts on hotels worldwide.
            </p>
          </div>
        </div>
      </section>
          {/*  Featured Hotels section */}
       <section className="featured sm:w-4/5 mx-auto mt-10 md:mt-60">
            <h2 className="text-xl sm:text-4xl text-center font-bold">Featured Hotels</h2>
        <div className="grid grid-cols-1 p-10 sm:grid-cols-4 gap-6 ">
            {hotels && hotels.length > 0 ? 
            <FeaturedHotel hotels={hotels} /> :
             <p className="font-bold text-2xl lg:4xl">
              No hotel Available
            </p>
            }
        </div>
        
      
      </section> 
             {/*  Promo section */}
      <section className=" p-5 mt-20 ">
      <div className="promo-banner h-80 rounded-lg sm:w-4/5 mx-auto text-center pt-10 sm:pt-20 px-8">
        <h2 className="text-white text-2xl sm:text-4xl font-bold ">
          Special Offers & Deals
        </h2>
        <p className="text-white  mt-4 ">
          Limited time offers on selected hotels. Book now and save up to 40%!
        </p>
        <Link
          href="/hotels"
          className=" btn inline-block text-white mt-8 px-4 sm:px-8 py-2 sm:py-4 rounded-lg sm:font-bold"
        >
          Know More
        </Link>
      </div>
         
      
      </section>
        {/*  Testimonials section */}
      <section className="testimonials sm:w-4/5 mx-auto  p-8 mt-20 mb-10">
         
             <h2 className="text-2xl sm:text-4xl text-center font-bold mb-10">
          What People Says About Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="col shadow-lg rounded-lg p-[30px] flex flex-col sm:flex-row">
            <img
              src="/user2.jpg"
              alt=""
              className="ml-2 mr-6 mb-2 sm:h-[50px] w-[50px] rounded-full"
            />
            <div className="content">
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus minus quos voluptates at laudantium facilis fugiat.
                Illum, mollitia error. Culpa dolor quidem vitae? Dolor ex fugit
                autem. Blanditiis, laudantium saepe.
              </p>
              <h3 className="m-6 text-white font-extrabold">Micheal Dam</h3>
            </div>
          </div>
          <div className="col shadow-lg rounded-lg p-[30px] flex flex-col sm:flex-row">
            <img
              src="/user4.avif"
              alt=""
              className="ml-2 mr-6 mb-2 sm:h-[50px] w-[50px]  rounded-full"
            />
            <div className="content">
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus minus quos voluptates at laudantium facilis fugiat.
                Illum, mollitia error. Culpa dolor quidem vitae? Dolor ex fugit
                autem. Blanditiis, laudantium saepe.
              </p>
              <h3 className="m-6 text-white font-extrabold">
                Christina Kelly
              </h3>
            </div>
          </div>
          <div className="col shadow-lg rounded-lg p-[30px] flex flex-col sm:flex-row">
            <img
              src="/user1.jpg"
              alt=""
              className="ml-2 mr-6 mb-2 sm:h-[50px] w-[50px]  rounded-full"
            />
            <div className="content">
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus minus quos voluptates at laudantium facilis fugiat.
                Illum, mollitia error. Culpa dolor quidem vitae? Dolor ex fugit
                autem. Blanditiis, laudantium saepe.
              </p>
              <h3 className="mt-6 text-white font-extrabold">Frank Flores</h3>
            </div>
          </div>
        </div>
         
        
      </section>
    </>
  );
}
