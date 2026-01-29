import Link from "next/link";


export default  function Page() {
  return (
    <div className="welcome-text text-center py-20">
        <h1 className="text-4xl text-gray-600 font-bold mb-4">
          Book Hotels Seamlessly
        </h1>
        <p className="text-gray-600 mb-6">
          Discover hotels and book rooms in minutes.
        </p>
        <Link
          href="/hotels"
          className=" btn text-white px-6 py-3 rounded-lg "
        >
          Browse Hotels
        </Link>
        
      </div>
      
  )
}