import { useParams } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { projects } from '../data/projects';
import ImageViewer from '../components/ImageViewer';

// Import all images to make them available in the bundle
import antipoloProject from '../assets/residential/Antipolo_project/Antipolo_Proj2.webp';
import antipoloProjectDIS from '../assets/residential/Antipolo_project/DIS_Antipolo_Proj.webp';
import bacoorProject1 from '../assets/residential/bacoor_proj/Bacoor_proj_1.webp';
import bacoorProject2 from '../assets/residential/bacoor_proj/Bacoor_proj_2.webp';
import bacoorProject3 from '../assets/residential/bacoor_proj/Bacoor_proj_3.webp';
import bacoorProject4 from '../assets/residential/bacoor_proj/DIS_Bacoor_proj_4.webp';
import bacoorProject5 from '../assets/residential/bacoor_proj/Bacoor_proj_5.webp';
import corinthianExecutive1 from '../assets/residential/corinthian_executive/corinthian_executive_proj_1.webp';
import corinthianExecutive2 from '../assets/residential/corinthian_executive/corinthian_executive_proj_2.webp';
import corinthianExecutive3 from '../assets/residential/corinthian_executive/corinthian_executive_proj_3.webp';
import corinthianExecutive4 from '../assets/residential/corinthian_executive/DIS_corinthian_executive_proj_4.webp';
import corinthianExecutive5 from '../assets/residential/corinthian_executive/corinthian_executive_proj_5.webp';
import corinthianExecutive7 from '../assets/residential/corinthian_executive/corinthian_executive_proj_7.1.webp';
import corinthianExecutive9 from '../assets/residential/corinthian_executive/corinthian_executive_proj_9.webp';
import filinvest1 from '../assets/residential/filinvest/filinvest_proj_1.webp';
import filinvest2 from '../assets/residential/filinvest/filinvest_proj_2.webp';
import filinvest3 from '../assets/residential/filinvest/DIS_filinvest_proj_3.webp';
import laspinas1 from '../assets/residential/laspinas_project/Las_pinas_apartment_1.webp';
import laspinas2 from '../assets/residential/laspinas_project/DIS_Las_pinas_apartment_2.webp';
import luxuryDining1 from '../assets/residential/luxury_dining/luxurydining1.webp';
import luxuryDining2 from '../assets/residential/luxury_dining/DIS_luxurydining2.webp';
import restHouse1 from '../assets/residential/rest_house_living_area/resth_2.webp';
import restHouse2 from '../assets/residential/rest_house_living_area/resth_3.webp';
import restHouse3 from '../assets/residential/rest_house_living_area/DIS_resth_1.webp';
import tropical1 from '../assets/residential/tropical_design_house/Tropical_design_Exterior_perspective_3_-_Photo.webp';
import tropical2 from '../assets/residential/tropical_design_house/DIS_Tropical_design_Exterior_perspective_1_-_Photo.webp';
import bettys1 from '../assets/commercial/bettys_iloilo/Bettys_Iloilo_Restaurant_1.webp';
import bettys2 from '../assets/commercial/bettys_iloilo/Bettys_Iloilo_Restaurant_2.webp';
import bettys3 from '../assets/commercial/bettys_iloilo/Bettys_Iloilo_Restaurant_3.webp';
import bettys4 from '../assets/commercial/bettys_iloilo/Bettys_Iloilo_Restaurant_4.webp';
import bettys5 from '../assets/commercial/bettys_iloilo/Bettys_Iloilo_Restaurant_5.webp';
import bettysDIS from '../assets/commercial/bettys_iloilo/DIS_Bettys_Iloilo_Restaurant_ex1.webp';
import cafeTropica1 from '../assets/commercial/cafe_tropica/cafe_tropica_1.webp';
import cafeTropica2 from '../assets/commercial/cafe_tropica/cafe_tropica_3.webp';
import cafeTropicaDIS from '../assets/commercial/cafe_tropica/DIS_cafe_tropica_2.webp';
import hCafe1 from '../assets/commercial/h_cafe/Hcafe_1.webp';
import hCafe2 from '../assets/commercial/h_cafe/Hcafe_2.webp';
import hCafe3 from '../assets/commercial/h_cafe/Hcafe_3.webp';
import hCafeDIS from '../assets/commercial/h_cafe/DIS_Hcafe_ex1.webp';
import hCafeEx2 from '../assets/commercial/h_cafe/Hcafe_ex2.webp';
import heirloomkiosk from '../assets/commercial/kiosks_and_inline/heirloomkiosk_1.webp';
import kiosksL from '../assets/commercial/kiosks_and_inline/pares_parekoy_inline_l.webp';
import kiosksR from '../assets/commercial/kiosks_and_inline/pares_parekoy_inline_right.webp';
import kiosksDIS from '../assets/commercial/kiosks_and_inline/DIS_heirloom_kiosks_2.webp';
import kiosksFront from '../assets/commercial/kiosks_and_inline/DIS_pares_parekoy_front.webp';
import localRestaurant1 from '../assets/commercial/local_restaurant/Local_restaurant_d3.webp';
import localRestaurant2 from '../assets/commercial/local_restaurant/Local_restaurant_dr1.webp';
import localRestaurantDIS from '../assets/commercial/local_restaurant/DIS_Local_restaurant_2.webp';
import maq1 from '../assets/commercial/maq/DIS_MAQ_1.webp';
import maq2 from '../assets/commercial/maq/MAQ_2.webp';
import maq3 from '../assets/commercial/maq/MAQ_5.webp';
import maq4 from '../assets/commercial/maq/MAQ_6_.webp';
import ohLove1 from '../assets/commercial/Oh_love/oh_love.webp';
import ohLove2 from '../assets/commercial/Oh_love/oh_love_ka.webp';
import ohLove3 from '../assets/commercial/Oh_love/oh_love_ka1.webp';
import ohLoveDIS from '../assets/commercial/Oh_love/DIS_.webp';
import prettySalon1 from '../assets/commercial/pretty_salon/pretty1.webp';
import prettySalon2 from '../assets/commercial/pretty_salon/pretty2.webp';
import prettySalon3 from '../assets/commercial/pretty_salon/pr2.webp';
import prettySalonDIS from '../assets/commercial/pretty_salon/DIS_pretty10.webp';

// Create a mapping of image paths to imported images
const imageMap: { [key: string]: string } = {
  // Residential images - relative paths from data file
  '../assets/residential/Antipolo_project/Antipolo_Proj2.webp': antipoloProject,
  '../assets/residential/Antipolo_project/DIS_Antipolo_Proj.webp': antipoloProjectDIS,
  '../assets/residential/bacoor_proj/Bacoor_proj_1.webp': bacoorProject1,
  '../assets/residential/bacoor_proj/Bacoor_proj_2.webp': bacoorProject2,
  '../assets/residential/bacoor_proj/Bacoor_proj_3.webp': bacoorProject3,
  '../assets/residential/bacoor_proj/DIS_Bacoor_proj_4.webp': bacoorProject4,
  '../assets/residential/bacoor_proj/Bacoor_proj_5.webp': bacoorProject5,
  '../assets/residential/corinthian_executive/corinthian_executive_proj_1.webp': corinthianExecutive1,
  '../assets/residential/corinthian_executive/corinthian_executive_proj_2.webp': corinthianExecutive2,
  '../assets/residential/corinthian_executive/corinthian_executive_proj_3.webp': corinthianExecutive3,
  '../assets/residential/corinthian_executive/DIS_corinthian_executive_proj_4.webp': corinthianExecutive4,
  '../assets/residential/corinthian_executive/corinthian_executive_proj_5.webp': corinthianExecutive5,
  '../assets/residential/corinthian_executive/corinthian_executive_proj_7.1.webp': corinthianExecutive7,
  '../assets/residential/corinthian_executive/corinthian_executive_proj_9.webp': corinthianExecutive9,
  '../assets/residential/filinvest/filinvest_proj_1.webp': filinvest1,
  '../assets/residential/filinvest/filinvest_proj_2.webp': filinvest2,
  '../assets/residential/filinvest/DIS_filinvest_proj_3.webp': filinvest3,
  '../assets/residential/laspinas_project/Las_pinas_apartment_1.webp': laspinas1,
  '../assets/residential/laspinas_project/DIS_Las_pinas_apartment_2.webp': laspinas2,
  '../assets/residential/luxury_dining/luxurydining1.webp': luxuryDining1,
  '../assets/residential/luxury_dining/DIS_luxurydining2.webp': luxuryDining2,
  '../assets/residential/rest_house_living_area/resth_2.webp': restHouse1,
  '../assets/residential/rest_house_living_area/resth_3.webp': restHouse2,
  '../assets/residential/rest_house_living_area/DIS_resth_1.webp': restHouse3,
  '../assets/residential/tropical_design_house/Tropical_design_Exterior_perspective_3_-_Photo.webp': tropical1,
  '../assets/residential/tropical_design_house/DIS_Tropical_design_Exterior_perspective_1_-_Photo.webp': tropical2,
  
  // Commercial images - relative paths from data file
  '../assets/commercial/bettys_iloilo/Bettys_Iloilo_Restaurant_1.webp': bettys1,
  '../assets/commercial/bettys_iloilo/Bettys_Iloilo_Restaurant_2.webp': bettys2,
  '../assets/commercial/bettys_iloilo/Bettys_Iloilo_Restaurant_3.webp': bettys3,
  '../assets/commercial/bettys_iloilo/Bettys_Iloilo_Restaurant_4.webp': bettys4,
  '../assets/commercial/bettys_iloilo/Bettys_Iloilo_Restaurant_5.webp': bettys5,
  '../assets/commercial/bettys_iloilo/DIS_Bettys_Iloilo_Restaurant_ex1.webp': bettysDIS,
  '../assets/commercial/cafe_tropica/cafe_tropica_1.webp': cafeTropica1,
  '../assets/commercial/cafe_tropica/cafe_tropica_3.webp': cafeTropica2,
  '../assets/commercial/cafe_tropica/DIS_cafe_tropica_2.webp': cafeTropicaDIS,
  '../assets/commercial/h_cafe/Hcafe_1.webp': hCafe1,
  '../assets/commercial/h_cafe/Hcafe_2.webp': hCafe2,
  '../assets/commercial/h_cafe/Hcafe_3.webp': hCafe3,
  '../assets/commercial/h_cafe/DIS_Hcafe_ex1.webp': hCafeDIS,
  '../assets/commercial/h_cafe/Hcafe_ex2.webp': hCafeEx2,
  '../assets/commercial/kiosks_and_inline/heirloomkiosk_1.webp': heirloomkiosk,
  '../assets/commercial/kiosks_and_inline/pares_parekoy_inline_l.webp': kiosksL,
  '../assets/commercial/kiosks_and_inline/pares_parekoy_inline_right.webp': kiosksR,
  '../assets/commercial/kiosks_and_inline/DIS_heirloom_kiosks_2.webp': kiosksDIS,
  '../assets/commercial/kiosks_and_inline/DIS_pares_parekoy_front.webp': kiosksFront,
  '../assets/commercial/local_restaurant/Local_restaurant_d3.webp': localRestaurant1,
  '../assets/commercial/local_restaurant/Local_restaurant_dr1.webp': localRestaurant2,
  '../assets/commercial/local_restaurant/DIS_Local_restaurant_2.webp': localRestaurantDIS,
  '../assets/commercial/maq/DIS_MAQ_1.webp': maq1,
  '../assets/commercial/maq/MAQ_2.webp': maq2,
  '../assets/commercial/maq/MAQ_5.webp': maq3,
  '../assets/commercial/maq/MAQ_6_.webp': maq4,
  '../assets/commercial/Oh_love/oh_love.webp': ohLove1,
  '../assets/commercial/Oh_love/oh_love_ka.webp': ohLove2,
  '../assets/commercial/Oh_love/oh_love_ka1.webp': ohLove3,
  '../assets/commercial/Oh_love/DIS_.webp': ohLoveDIS,
  '../assets/commercial/pretty_salon/pretty1.webp': prettySalon1,
  '../assets/commercial/pretty_salon/pretty2.webp': prettySalon2,
  '../assets/commercial/pretty_salon/pr2.webp': prettySalon3,
  '../assets/commercial/pretty_salon/DIS_pretty10.webp': prettySalonDIS,
};

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const [viewerOpen, setViewerOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Extract category from the pathname (either 'residential' or 'commercial')
  const category = location.pathname.split('/')[1];

  // Find the project based on the URL parameters
  const project = projects.find(p => p.category === category && p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
        <div className="text-center">
          <h1 className="text-3xl font-serif font-bold text-gray-900 mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-4">Could not find project: {category}/{slug}</p>
          <Link 
            to="/" 
            className="px-6 py-3 bg-gray-800 text-white font-serif rounded-lg hover:bg-black transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  // Map the project image to the actual imported image
  const projectImage = imageMap[project.image] || project.image;

  // Map gallery images to actual imported images
  const galleryImages = project.gallery?.map(imgPath => imageMap[imgPath] || imgPath) || [];

  const openViewer = (index: number) => {
    setCurrentImageIndex(index);
    setViewerOpen(true);
  };

  const closeViewer = () => {
    setViewerOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <Link 
            to={`/${category}`} 
            className="inline-flex items-center text-gray-600 hover:text-black transition-colors text-base sm:text-lg"
          >
            <span>← Back to {category}</span>
          </Link>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="relative h-64 sm:h-80 md:h-96">
            <img 
              src={projectImage} 
              alt={project.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4 sm:p-6 md:p-8">
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white">{project.name}</h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-200 mt-1 sm:mt-2">{project.type} | {project.year || '2024'}</p>
              </div>
            </div>
          </div>
          
          <div className="p-4 sm:p-6 md:p-8 lg:p-12">
            <div className="prose max-w-3xl mx-auto">
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                {project.description}
              </p>
              
              <div className="mt-6 sm:mt-8 grid grid-cols-1 gap-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-gray-900 mb-3">Project Details</h3>
                  <ul className="space-y-2 text-gray-600">
                    {project.details?.location && <li><span className="font-medium">Location:</span> {project.details.location}</li>}
                    {project.details?.size && <li><span className="font-medium">Size:</span> {project.details.size}</li>}
                    {project.details?.year && <li><span className="font-medium">Year:</span> {project.details.year}</li>}
                    {project.details?.architect && <li><span className="font-medium">Architect:</span> {project.details.architect}</li>}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-gray-900 mb-3">Features</h3>
                  <ul className="space-y-2 text-gray-600">
                    {project.features?.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-black mr-2">•</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            {galleryImages.length > 0 && (
              <div className="mt-8 sm:mt-12">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 mb-4 sm:mb-6">Project Gallery</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {galleryImages.map((galleryImage, index) => (
                    <div
                      key={index}
                      className="aspect-square overflow-hidden rounded-lg cursor-pointer group"
                      onClick={() => openViewer(index)}
                    >
                      <img
                        src={galleryImage}
                        alt={`${project.name} ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Image Viewer */}
            {viewerOpen && (
              <ImageViewer
                images={galleryImages}
                currentIndex={currentImageIndex}
                onClose={closeViewer}
                onNext={nextImage}
                onPrevious={previousImage}
                projectName={project.name}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;