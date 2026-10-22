import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Movies = () => {
  return (
    <main className="min-h-screen bg-[#0b1226] text-white p-6 sm:p-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-slate-300 hover:text-white text-sm w-fit transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded px-2 py-1"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          <span>Back to Home</span>
        </Link>
        <h1 className="font-serif-heading text-3xl sm:text-4xl font-bold">Movies</h1>
        {/* TODO: movie grid */}
      </div>
    </main>
  );
};

export default Movies;
