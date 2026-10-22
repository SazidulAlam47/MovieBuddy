import Hero from "./Hero";
import FeaturedSection from "./FeaturedSection";

const Home = () => {
    return (
        <main className="w-full flex-1 flex flex-col">
            <Hero />
            <FeaturedSection />
        </main>
    );
};

export default Home;

