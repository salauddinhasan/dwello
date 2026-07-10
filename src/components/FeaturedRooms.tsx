// src/components/FeaturedRooms.tsx
import Link from "next/link";

const rooms = [
  {
    id: 1,
    title: "Luxury Apartment in Gulshan",
    location: "Gulshan, Dhaka",
    price: 2500,
    rating: 4.8,
    reviews: 124,
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    type: "Entire apartment",
  },
  {
    id: 2,
    title: "Cozy Studio near Banani Lake",
    location: "Banani, Dhaka",
    price: 1800,
    rating: 4.6,
    reviews: 89,
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    type: "Private room",
  },
  {
    id: 3,
    title: "Beach View Bungalow",
    location: "Cox's Bazar",
    price: 3500,
    rating: 4.9,
    reviews: 256,
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    type: "Entire villa",
  },
  {
    id: 4,
    title: "Tea Garden Cottage",
    location: "Sylhet",
    price: 1500,
    rating: 4.7,
    reviews: 67,
    image:
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    type: "Entire cottage",
  },
];

const FeaturedRooms = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Featured Rooms</h2>
            <p className="text-gray-500 mt-2">
              Handpicked stays for your next trip
            </p>
          </div>
          <Link
            href="/explore"
            className="hidden sm:block text-sm font-medium text-rose-500 hover:text-rose-600 transition"
          >
            View all rooms →
          </Link>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {rooms.map((room) => (
            <Link
              key={room.id}
              href={`/room/${room.id}`}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <span className="absolute top-3 left-3 bg-white text-gray-900 text-xs font-medium px-2 py-1 rounded-full">
                  {room.type}
                </span>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-gray-900 truncate">
                    {room.title}
                  </h3>
                  <span className="flex items-center gap-1 text-sm">
                    ⭐ {room.rating}
                  </span>
                </div>

                <p className="text-sm text-gray-500 mb-2">{room.location}</p>

                <div className="flex items-center justify-between">
                  <p className="text-sm">
                    <span className="font-semibold text-gray-900">
                      ${room.price}
                    </span>
                    <span className="text-gray-500"> / night</span>
                  </p>
                  <p className="text-xs text-gray-400">
                    {room.reviews} reviews
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile View All Link */}
        <Link
          href="/explore"
          className="sm:hidden block text-center text-sm font-medium text-rose-500 hover:text-rose-600 transition mt-8"
        >
          View all rooms →
        </Link>
      </div>
    </section>
  );
};

export default FeaturedRooms;
