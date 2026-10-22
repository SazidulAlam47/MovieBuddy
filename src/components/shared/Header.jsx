import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Film } from 'lucide-react';
import robotMascot from '../../assets/robot.png';

const BRAND_NAME = 'MovieExplorer';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header className="absolute top-0 inset-x-0 z-40 pt-4 sm:pt-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1360px] mx-auto bg-white/[0.08] backdrop-blur-xl border border-white/10 rounded-2xl px-4 sm:px-6 py-2.5 sm:py-3 shadow-lg shadow-black/25">
        <div className="flex items-center justify-between gap-4">
          <Link
            to="/"
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-lg"
          >
            <img
              src={robotMascot}
              alt=""
              aria-hidden="true"
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain select-none transition-transform duration-200 group-hover:scale-105"
            />
            <span className="text-2xl sm:text-[28px] font-bold text-white tracking-tight leading-none font-sans">
              {BRAND_NAME}
            </span>
          </Link>

          <nav
            aria-label="Main"
            className="hidden md:flex items-center gap-6 lg:gap-8 text-[15px] whitespace-nowrap"
          >
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `relative py-2 px-3 flex items-center justify-center font-medium transition-colors duration-150 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  isActive ? 'text-white' : 'text-slate-300 hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <>
                      <span
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[2.5px] bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.95)]"
                        aria-hidden="true"
                      />
                      <div
                        className="absolute inset-x-0 top-0 bottom-0 bg-gradient-to-b from-white/20 via-white/5 to-transparent pointer-events-none rounded-t-sm"
                        style={{
                          clipPath: 'polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)',
                        }}
                        aria-hidden="true"
                      />
                    </>
                  )}
                  Home
                </>
              )}
            </NavLink>

            <NavLink
              to="/movies"
              className={({ isActive }) =>
                `relative py-2 px-3 flex items-center justify-center font-medium transition-colors duration-150 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  isActive ? 'text-white' : 'text-slate-300 hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <>
                      <span
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[2.5px] bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.95)]"
                        aria-hidden="true"
                      />
                      <div
                        className="absolute inset-x-0 top-0 bottom-0 bg-gradient-to-b from-white/20 via-white/5 to-transparent pointer-events-none rounded-t-sm"
                        style={{
                          clipPath: 'polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)',
                        }}
                        aria-hidden="true"
                      />
                    </>
                  )}
                  Movies
                </>
              )}
            </NavLink>
          </nav>

          <div className="hidden md:flex items-center shrink-0">
            <Link
              to="/movies"
              className="inline-flex items-center gap-2 bg-[#1e4e9c] hover:bg-[#2563eb] text-white text-sm font-medium px-5 py-2 rounded-full transition-all duration-200 shadow-md shadow-blue-900/40 hover:shadow-blue-600/50 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-400 whitespace-nowrap cursor-pointer"
            >
              <Film className="w-4 h-4" aria-hidden="true" />
              <span>Movies</span>
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div
            id="mobile-nav-menu"
            className="md:hidden mt-4 pt-4 border-t border-white/10 flex flex-col gap-3 pb-2 transition-all duration-200"
          >
            <nav aria-label="Mobile Navigation" className="flex flex-col gap-1.5">
              <NavLink
                to="/"
                end
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `py-2.5 px-3.5 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                    isActive
                      ? 'bg-white/15 text-white font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/movies"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `py-2.5 px-3.5 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                    isActive
                      ? 'bg-white/15 text-white font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                Movies
              </NavLink>
            </nav>

            <div className="pt-2 border-t border-white/10">
              <Link
                to="/movies"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-[#1e4e9c] hover:bg-[#2563eb] text-white text-sm font-medium py-2.5 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors cursor-pointer"
              >
                <Film className="w-4 h-4" aria-hidden="true" />
                <span>Movies</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
