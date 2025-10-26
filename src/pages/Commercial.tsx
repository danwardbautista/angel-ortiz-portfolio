import { Link } from 'react-router-dom';
import LazyImage from '../components/LazyImage';
import { projects } from '../data/projects';

// Import all images to make them available in the bundle
import bettysIloilo from '../assets/commercial/bettys_iloilo/Bettys_Iloilo_Restaurant_1.webp';
import cafeTropica from '../assets/commercial/cafe_tropica/cafe_tropica_1.webp';
import hCafe from '../assets/commercial/h_cafe/Hcafe_1.webp';
import kiosksInline from '../assets/commercial/kiosks_and_inline/heirloomkiosk_1.webp';
import localRestaurant from '../assets/commercial/local_restaurant/Local_restaurant_d3.webp';
import maq from '../assets/commercial/maq/DIS_MAQ_1.webp';
import ohLove from '../assets/commercial/Oh_love/oh_love_ka.webp';
import prettySalon from '../assets/commercial/pretty_salon/pretty1.webp';

// Create a mapping of image paths to imported images
const imageMap: { [key: string]: string } = {
  '../assets/commercial/bettys_iloilo/Bettys_Iloilo_Restaurant_1.webp': bettysIloilo,
  '../assets/commercial/cafe_tropica/cafe_tropica_1.webp': cafeTropica,
  '../assets/commercial/h_cafe/Hcafe_1.webp': hCafe,
  '../assets/commercial/kiosks_and_inline/heirloomkiosk_1.webp': kiosksInline,
  '../assets/commercial/local_restaurant/Local_restaurant_d3.webp': localRestaurant,
  '../assets/commercial/maq/DIS_MAQ_1.webp': maq,
  '../assets/commercial/Oh_love/oh_love_ka.webp': ohLove,
  '../assets/commercial/pretty_salon/pretty1.webp': prettySalon,
};

const Commercial = () => {
  // Filter commercial projects from centralized data
  const commercialProjects = projects.filter(p => p.category === 'commercial');
  
  // Map images from centralized data to imported images
  const projectsWithImages = commercialProjects.map(project => ({
    ...project,
    image: imageMap[project.image] || project.image
  }));

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-fadeInUp">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900">Commercial Works</h1>
          <p className="mt-4 sm:mt-6 text-lg md:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto italic animate-delay-200">
            Transformative spaces designed for innovation and collaboration
          </p>
          <div className="mt-4 sm:mt-6 animate-delay-400">
            <div className="inline-block w-16 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-black to-transparent"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 animate-fadeInUp">
          {projectsWithImages.map((project, index) => (
            <Link
              to={`/commercial/${project.slug}`}
              key={project.id}
              className="group relative overflow-hidden rounded-2xl shadow-xl shadow-gray-200 transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 sm:hover:-translate-y-3 block"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <LazyImage
                src={project.image}
                alt={project.name}
                className="w-full h-48 sm:h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent flex items-end p-4 sm:p-6 md:p-8 lg:transform lg:translate-y-full lg:group-hover:translate-y-0 transition-transform duration-700">
                <div className="transition-all duration-500 lg:delay-200 opacity-100 lg:group-hover:opacity-100 lg:opacity-0">
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-white">{project.name}</h3>
                  <p className="text-gray-300 mt-1 sm:mt-2 text-sm sm:text-base">{project.type}</p>
                  <button className="mt-2 sm:mt-4 px-4 py-2 sm:px-4 sm:py-2 bg-gray-800 text-white text-sm sm:text-sm font-serif rounded-lg hover:bg-black transition-all duration-300 transform hover:scale-105 cursor-pointer">
                    View Details
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 sm:mt-16 text-center animate-fadeIn">
          <Link 
            to="/" 
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-black text-white font-serif text-base sm:text-lg rounded-lg hover:bg-gray-800 transition-all duration-500 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Commercial;