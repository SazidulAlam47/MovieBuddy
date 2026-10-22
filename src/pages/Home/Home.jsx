import Header from '../../components/shared/Header';
import Hero from './Hero';

const Home = () => {
  return (
    <div className="relative w-full bg-[#0b1226] text-white flex flex-col items-center p-3 sm:p-5 lg:p-7 min-h-screen">
      <div className="relative w-full max-w-[1440px] flex-1 flex flex-col">
        <Header />
        <main className="flex-1 flex flex-col">
          <Hero />
        </main>
      </div>
    </div>
  );
};

export default Home;
