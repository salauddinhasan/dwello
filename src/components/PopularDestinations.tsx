// src/components/PopularDestinations.tsx
import Link from "next/link";

const destinations = [
  {
    id: 1,
    city: "Dhaka",
   image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    properties: 120,
    description: "The vibrant capital city"
  },
  {
    id: 2,
    city: "Chittagong",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    properties: 85,
    description: "Port city with scenic hills"
  },
  {
    id: 3,
    city: "Sylhet",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    properties: 64,
    description: "Land of tea gardens"
  },
  {
    id: 4,
    city: "Cox's Bazar",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    properties: 92,
    description: "World's longest sea beach"
  }
];

const PopularDestinations = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900">
            Popular Destinations
          </h2>
          <p className="text-gray-500 mt-2">
            Explore the most loved places across Bangladesh
          </p>
        </div>

        {/* Destination Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <Link 
              key={destination.id}
              href={`/explore?location=${destination.city}`}
              className="group relative h-80 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              {/* Image */}
              <img 
                src={destination.image} 
                alt={destination.city}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-1">
                  {destination.city}
                </h3>
                <p className="text-sm text-white/80 mb-1">
                  {destination.description}
                </p>
                <p className="text-sm font-medium text-white">
                  {destination.properties} properties
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PopularDestinations;