import { Link } from 'react-router-dom';
import architectPortrait from '../assets/profile.jpg';
import residentialProjectImage from '../assets/residential/Antipolo_project/Antipolo_Proj2.webp';
import commercialProjectImage from '../assets/commercial/bettys_iloilo/Bettys_Iloilo_Restaurant_1.webp';
import ArchitecturalBackground from '../components/ParticleBackground';
import LazyImage from '../components/LazyImage';

const Home = () => {
  // Define featured projects with actual images
  const residentialProject = {
    name: "Antipolo Project",
    image: residentialProjectImage,
    description: "This project involves an old family home that the client wanted to demolish and rebuild into a modern residence.",
    year: "2025"
  };

  const commercialProject = {
    name: "Betty's Iloilo Restaurant",
    image: commercialProjectImage,
    description: "A transformative approach to commercial space, creating a dynamic environment that fosters innovation and collaboration.",
    year: "2023"
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-16 sm:pt-20 pb-16 sm:pb-24 md:pb-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Architectural Background */}
        <ArchitecturalBackground />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8 z-10 animate-fadeInUp order-2 lg:order-1">
              <div className="relative">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-gray-900 leading-tight">
                  Angel Ortiz
                  <span className="block text-xl sm:text-2xl md:text-3xl font-light text-black mt-2 font-sans">Architectural Designer | AutoCAD Drafter | 3D Visualization Specialist</span>
                </h1>
                <div className="absolute -bottom-2 sm:-bottom-4 left-0 w-16 sm:w-24 h-0.5 sm:h-1 bg-black transition-all duration-1000 group-hover:w-24 sm:group-hover:w-32"></div>
              </div>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl italic animate-delay-200">
                "Versatile by style, driven by your vision."
              </p>

              {/* Social Media Links */}
              <div className="flex items-center gap-4 animate-delay-300">
                <a
                  href="https://www.linkedin.com/in/angel-may-ortiz-/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12"
                  aria-label="LinkedIn Profile"
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 p-[2px] animate-spin-slow transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1">
                    <div className="w-full h-full rounded-full bg-white"></div>
                  </div>
                  <div className="relative flex items-center justify-center w-[calc(100%-4px)] h-[calc(100%-4px)] rounded-full bg-gradient-to-br from-gray-800 to-black text-white shadow-lg hover:shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1 z-10">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-500 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://www.facebook.com/share/1a2EXaEqPG/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12"
                  aria-label="Facebook Page"
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 p-[2px] animate-spin-slow transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1">
                    <div className="w-full h-full rounded-full bg-white"></div>
                  </div>
                  <div className="relative flex items-center justify-center w-[calc(100%-4px)] h-[calc(100%-4px)] rounded-full bg-gradient-to-br from-gray-800 to-black text-white shadow-lg hover:shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1 z-10">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-500 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                </a>
                <a
                  href="mailto:angeld.ortiz26@gmail.com"
                  className="group flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-gray-800 to-black text-white shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 hover:-translate-y-1"
                  aria-label="Email"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-500 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 mt-6 sm:mt-8 md:mt-12">
                <Link
                  to="/residential"
                  className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-black text-white font-serif font-medium text-base sm:text-lg text-center rounded-lg hover:bg-gray-800 transition-all duration-500 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
                >
                  Residential Works
                </Link>
                <Link
                  to="/commercial"
                  className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-gray-800 text-white font-serif font-medium text-base sm:text-lg text-center rounded-lg hover:bg-black transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:scale-105"
                >
                  Commercial Works
                </Link>
              </div>
            </div>
            <div className="relative animate-fadeInLeft order-1 lg:order-2">
              <div className="relative aspect-square sm:aspect-auto sm:h-[400px] lg:h-auto rounded-full overflow-hidden border-4 sm:border-8 border-white shadow-2xl transition-transform duration-1000 hover:scale-[1.02]">
                <img 
                  src={architectPortrait} 
                  alt="Architect Portrait" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-12 sm:w-16 h-12 sm:h-16 bg-black rounded-full flex items-center justify-center animate-pulse">
                  <span className="text-white text-xs sm:text-sm font-medium">QC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 sm:py-20 -mt-16 sm:-mt-20 md:-mt-32 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-fadeInUp">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900">Selected Works</h2>
            <p className="mt-3 sm:mt-4 text-lg md:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto italic animate-delay-200">
              Here's a glimpse of my work—where passion meets creativity and versatility. From minimal to modern, timeless to trendy, each design tells its own story and reflects my love for crafting beautiful spaces.
            </p>
            <div className="mt-4 sm:mt-6 animate-delay-400">
              <div className="inline-block w-16 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-black to-transparent"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:gap-12 animate-fadeInUp">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
              {/* Residential Featured */}
              <div className="group relative overflow-hidden rounded-2xl shadow-2xl shadow-gray-200 transition-all duration-700 hover:shadow-2xl hover:-translate-y-2">
                <LazyImage
                  src={residentialProject.image}
                  alt={residentialProject.name}
                  className="w-full h-64 sm:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent flex items-end p-4 sm:p-6 md:p-8 lg:transform lg:translate-y-full lg:group-hover:translate-y-0 transition-transform duration-700">
                  <div className="transition-all duration-500 lg:delay-200 opacity-100 lg:group-hover:opacity-100 lg:opacity-0 w-full">
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">{residentialProject.name}</h3>
                    <p className="text-gray-300 mt-2 font-serif text-sm sm:text-base">Residential Design | {residentialProject.year}</p>
                    <Link to="/residential" className="mt-3 sm:mt-4 md:mt-6 inline-block px-4 py-2 sm:px-6 sm:py-3 bg-black text-white font-serif text-sm sm:text-base rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
                      Explore Project
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Commercial Featured */}
              <div className="group relative overflow-hidden rounded-2xl shadow-2xl shadow-gray-200 transition-all duration-700 hover:shadow-2xl hover:-translate-y-2">
                <LazyImage
                  src={commercialProject.image}
                  alt={commercialProject.name}
                  className="w-full h-64 sm:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent flex items-end p-4 sm:p-6 md:p-8 lg:transform lg:translate-y-full lg:group-hover:translate-y-0 transition-transform duration-700">
                  <div className="transition-all duration-500 lg:delay-200 opacity-100 lg:group-hover:opacity-100 lg:opacity-0 w-full">
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">{commercialProject.name}</h3>
                    <p className="text-gray-300 mt-2 font-serif text-sm sm:text-base">Commercial Design | {commercialProject.year}</p>
                    <Link to="/commercial" className="mt-3 sm:mt-4 md:mt-6 inline-block px-4 py-2 sm:px-6 sm:py-3 bg-gray-800 text-white font-serif text-sm sm:text-base rounded-lg hover:bg-black transition-all duration-300 transform hover:scale-105">
                      Explore Project
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Elegant Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 animate-fadeIn">
        <div className="border-t border-gray-300 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-50 px-4 sm:px-6">
            <div className="w-12 sm:w-16 h-0.5 sm:h-1 bg-black mx-auto animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-16 sm:py-20 md:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center animate-fadeInUp">
            <div className="space-y-6 sm:space-y-8 animate-delay-200">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gray-900">About Me</h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed transition-all duration-300 hover:pl-3 sm:hover:pl-4 border-l-3 sm:border-l-4 border-black pl-3 sm:pl-4">
                Hi! I'm Angel May Ortiz, an Architectural Designer living in Quezon City, Philippines. I specialize in 3D modeling and rendering using SketchUp, Enscape, and Lumion—turning concepts into realistic visuals that capture both function and beauty.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed transition-all duration-300 hover:pl-3 sm:hover:pl-4 border-l-3 sm:border-l-4 border-black pl-3 sm:pl-4">
                I'm passionate about creating purposeful, timeless spaces that tell stories and reflect each client's lifestyle and individuality.
              </p>
              <div className="space-y-3 sm:space-y-4">
                <p className="text-base sm:text-lg text-gray-600">
                  <strong className="text-black">Email:</strong>{' '}
                  <a href="mailto:angeld.ortiz26@gmail.com" className="text-black hover:underline transition-all duration-300">
                    angeld.ortiz26@gmail.com
                  </a>
                </p>
                <p className="text-base sm:text-lg text-gray-600">
                  <strong className="text-black">LinkedIn:</strong>{' '}
                  <a href="https://www.linkedin.com/in/angel-may-ortiz-/" target="_blank" rel="noopener noreferrer" className="text-black hover:underline transition-all duration-300">
                    Angel Ortiz
                  </a>
                </p>
                <p className="text-base sm:text-lg text-gray-600">
                  <strong className="text-black">Facebook:</strong>{' '}
                  <a href="https://www.facebook.com/share/1a2EXaEqPG/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-black hover:underline transition-all duration-300">
                    Artzyark
                  </a>
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8 md:mt-10 animate-delay-400">
                <div className="space-y-3 sm:space-y-4 transition-all duration-500 hover:scale-[1.02] sm:hover:scale-105">
                  <h4 className="text-lg sm:text-xl font-serif font-bold text-black">Approach</h4>
                  <p className="text-gray-600 text-sm sm:text-base">Versatile and Functional style solution</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 animate-fadeInRight">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-4 sm:p-6 shadow-lg flex flex-col items-center text-center transition-transform duration-500 hover:scale-105 sm:hover:scale-110 hover:-translate-y-1 sm:hover:-translate-y-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-black">4+</div>
                <div className="text-gray-600 mt-2 text-sm sm:text-base">Years in Design</div>
              </div>
              <div className="bg-gradient-to-br from-gray-200 to-gray-100 rounded-xl p-4 sm:p-6 shadow-lg flex flex-col items-center text-center transition-transform duration-500 hover:scale-105 sm:hover:scale-110 hover:-translate-y-1 sm:hover:-translate-y-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-black">1</div>
                <div className="text-gray-600 mt-2 text-sm sm:text-base">Year in Project Management</div>
              </div>
              <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl p-4 sm:p-6 shadow-lg flex flex-col items-center text-center transition-transform duration-500 hover:scale-105 sm:hover:scale-110 hover:-translate-y-1 sm:hover:-translate-y-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-black">50+</div>
                <div className="text-gray-600 mt-2 text-sm sm:text-base">Completed Projects</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;