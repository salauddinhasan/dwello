import FeaturedRooms from "@/components/FeaturedRooms";
import Hero from "@/components/Hero";
import PopularDestinations from "@/components/PopularDestinations";

export default function Home() {
  return (
    <div>
      <Hero />
      <PopularDestinations />
      <FeaturedRooms />
    </div>
  );
}
