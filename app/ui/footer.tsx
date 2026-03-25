export default function Footer() {
  return (
    <>
      <div className="footer p-10 ">
        <div className="text-box  w-[60%] ">
          <h1 className="text-3xl font-bold  text-center">
          HOTELBOOK
        </h1>
        <p className="mt-4  text-white text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt et
          possimus voluptates reiciendis cupiditate laborum quam ad saepe, porro
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis unde aliquid, velit ut doloribus facere nobis. Neque ipsum deserunt deleniti veniam nam expedita. Maiores, culpa minus? Eveniet sapiente impedit quos!
        </p>
        </div>
        
        <p className="copyright text-white text-center">
          &copy; {new Date().getFullYear()} Hotel Booking. All rights reserved.
        </p>
      </div>
    </>
  );
}
