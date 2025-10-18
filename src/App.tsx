import { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Residential from './pages/Residential';
import Commercial from './pages/Commercial';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 font-sans">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 sm:h-20 items-center">
            <div className="flex items-center">
              <Link 
                to="/" 
                className="text-xl sm:text-2xl font-serif font-bold text-gray-900 transition-all duration-300 hover:text-black hover:scale-105"
              >
                Angel Ortiz
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
              <Link
                to="/"
                className={`font-serif font-medium text-base sm:text-lg transition-all duration-500 ${                  
                  location.pathname === '/' 
                    ? 'text-black relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-black' 
                    : 'text-gray-700 hover:text-black'
                }`}
              >
                Home
              </Link>
              <Link
                to="/residential"
                className={`font-serif font-medium text-base sm:text-lg transition-all duration-500 ${                  
                  location.pathname === '/residential' 
                    ? 'text-black relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-black' 
                    : 'text-gray-700 hover:text-black'
                }`}
              >
                Residential
              </Link>
              <Link
                to="/commercial"
                className={`font-serif font-medium text-base sm:text-lg transition-all duration-500 ${                  
                  location.pathname === '/commercial' 
                    ? 'text-black relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-black' 
                    : 'text-gray-700 hover:text-black'
                }`}
              >
                Commercial
              </Link>
            </div>
            
            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-black focus:outline-none transition-colors p-1"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200 animate-fadeIn">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-3 rounded-md text-base sm:text-lg font-serif font-medium w-full text-left ${                  
                  location.pathname === '/' 
                    ? 'text-black bg-gray-50' 
                    : 'text-gray-700 hover:bg-gray-50 hover:text-black'
                }`}
              >
                Home
              </Link>
              <Link
                to="/residential"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-3 rounded-md text-base sm:text-lg font-serif font-medium w-full text-left ${                  
                  location.pathname === '/residential' 
                    ? 'text-black bg-gray-50' 
                    : 'text-gray-700 hover:bg-gray-50 hover:text-black'
                }`}
              >
                Residential
              </Link>
              <Link
                to="/commercial"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-3 rounded-md text-base sm:text-lg font-serif font-medium w-full text-left ${                  
                  location.pathname === '/commercial' 
                    ? 'text-black bg-gray-50' 
                    : 'text-gray-700 hover:bg-gray-50 hover:text-black'
                }`}
              >
                Commercial
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="pt-16 sm:pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/residential" element={<Residential />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/residential/:slug" element={<ProjectDetail />} />
          <Route path="/commercial/:slug" element={<ProjectDetail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App