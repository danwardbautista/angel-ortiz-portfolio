import { Link } from 'react-router-dom';
import architectPortrait from '../assets/profile.jpg';
import residentialProjectImage from '../assets/residential/Antipolo_project/Antipolo_Proj2.webp';
import commercialProjectImage from '../assets/commercial/bettys_iloilo/Bettys_Iloilo_Restaurant_1.webp';

const Home = () => {
  // Define featured projects with actual images
  const residentialProject = {
    name: "Antipolo Project",
    image: residentialProjectImage,
    description: "A harmonious blend of contemporary design and natural elements, creating a sanctuary that celebrates both luxury and comfort.",
    year: "2024"
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
      <section className="pt-16 sm:pt-20 pb-16 sm:pb-24 md:pb-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center relative">
            <div className="space-y-6 sm:space-y-8 z-10 animate-fadeInUp order-2 lg:order-1">
              <div className="relative">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-gray-900 leading-tight">
                  Angel Ortiz
                  <span className="block text-2xl sm:text-3xl md:text-4xl font-light text-black mt-2 font-sans">Architect & Designer</span>
                </h1>
                <div className="absolute -bottom-2 sm:-bottom-4 left-0 w-16 sm:w-24 h-0.5 sm:h-1 bg-black transition-all duration-1000 group-hover:w-24 sm:group-hover:w-32"></div>
              </div>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl italic animate-delay-200">
                "Crafting spaces that harmonize form and function through meticulous attention to detail and innovative design solutions."
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 mt-6 sm:mt-8 md:mt-12">
                <Link 
                  to="/residential"
                  className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-black text-white font-serif font-medium text-base sm:text-lg rounded-lg hover:bg-gray-800 transition-all duration-500 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
                >
                  Residential Works
                </Link>
                <Link 
                  to="/commercial"
                  className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-gray-800 text-white font-serif font-medium text-base sm:text-lg rounded-lg hover:bg-black transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:scale-105"
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
                  <span className="text-white text-xs sm:text-sm font-medium">NYC</span>
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
              A curated collection of residential and commercial architectural masterpieces
            </p>
            <div className="mt-4 sm:mt-6 animate-delay-400">
              <div className="inline-block w-16 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-black to-transparent"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:gap-12 animate-fadeInUp">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
              {/* Residential Featured */}
              <div className="group relative overflow-hidden rounded-2xl shadow-2xl shadow-gray-200 transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 aspect-[4/5] sm:aspect-auto">
                <img
                  src={residentialProject.image}
                  alt={residentialProject.name}
                  className="w-full h-64 sm:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-4 sm:p-6 md:p-8 md:transform md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-700">
                  <div className="transition-all duration-500 md:delay-200 opacity-100 md:group-hover:opacity-100 md:opacity-0 w-full">
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">{residentialProject.name}</h3>
                    <p className="text-gray-300 mt-2 font-serif text-sm sm:text-base">Residential Design | {residentialProject.year}</p>
                    <p className="text-gray-200 mt-2 sm:mt-4 text-sm sm:text-base">{residentialProject.description}</p>
                    <Link to="/residential" className="mt-3 sm:mt-4 md:mt-6 inline-block px-4 py-2 sm:px-6 sm:py-3 bg-black text-white font-serif text-sm sm:text-base rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
                      Explore Project
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Commercial Featured */}
              <div className="group relative overflow-hidden rounded-2xl shadow-2xl shadow-gray-200 transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 aspect-[4/5] sm:aspect-auto">
                <img
                  src={commercialProject.image}
                  alt={commercialProject.name}
                  className="w-full h-64 sm:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-4 sm:p-6 md:p-8 md:transform md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-700">
                  <div className="transition-all duration-500 md:delay-200 opacity-100 md:group-hover:opacity-100 md:opacity-0 w-full">
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">{commercialProject.name}</h3>
                    <p className="text-gray-300 mt-2 font-serif text-sm sm:text-base">Commercial Design | {commercialProject.year}</p>
                    <p className="text-gray-200 mt-2 sm:mt-4 text-sm sm:text-base">{commercialProject.description}</p>
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
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gray-900">About Angel Ortiz</h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed transition-all duration-300 hover:pl-3 sm:hover:pl-4 border-l-3 sm:border-l-4 border-black pl-3 sm:pl-4">
                A passionate architectural designer with 2 years of professional experience, Angel Ortiz brings fresh perspectives and innovative
                solutions to every project. Her work seamlessly blends modern aesthetics with functional design, creating spaces that are both
                beautiful and livable.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed transition-all duration-300 hover:pl-3 sm:hover:pl-4 border-l-3 sm:border-l-4 border-black pl-3 sm:pl-4">
                Angel graduated with a Bachelor of Science in Architecture from the Technological Institute of the Philippines.
                Her commitment to sustainable design and attention to detail has made her a trusted partner for residential and commercial
                projects throughout the region.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8 md:mt-10 animate-delay-400">
                <div className="space-y-3 sm:space-y-4 transition-all duration-500 hover:scale-[1.02] sm:hover:scale-105">
                  <h4 className="text-lg sm:text-xl font-serif font-bold text-black">Philosophy</h4>
                  <p className="text-gray-600 text-sm sm:text-base">Designing with purpose, creating spaces that evolve with life.</p>
                </div>
                <div className="space-y-3 sm:space-y-4 transition-all duration-500 hover:scale-[1.02] sm:hover:scale-105">
                  <h4 className="text-lg sm:text-xl font-serif font-bold text-black">Approach</h4>
                  <p className="text-gray-600 text-sm sm:text-base">Sustainable, elegant, and functional solutions.</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 animate-fadeInRight">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-4 sm:p-6 shadow-lg flex flex-col items-center text-center transition-transform duration-500 hover:scale-105 sm:hover:scale-110 hover:-translate-y-1 sm:hover:-translate-y-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-black">2+</div>
                <div className="text-gray-600 mt-2 text-sm sm:text-base">Years Experience</div>
              </div>
              <div className="bg-gradient-to-br from-gray-200 to-gray-100 rounded-xl p-4 sm:p-6 shadow-lg flex flex-col items-center text-center transition-transform duration-500 hover:scale-105 sm:hover:scale-110 hover:-translate-y-1 sm:hover:-translate-y-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-black">20+</div>
                <div className="text-gray-600 mt-2 text-sm sm:text-base">Projects Completed</div>
              </div>
              <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl p-4 sm:p-6 shadow-lg flex flex-col items-center text-center transition-transform duration-500 hover:scale-105 sm:hover:scale-110 hover:-translate-y-1 sm:hover:-translate-y-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-black">16</div>
                <div className="text-gray-600 mt-2 text-sm sm:text-base">Unique Designs</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;