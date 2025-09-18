'use client';

import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const clients = [
  { name: 'Cornerstone', logo: '/clients/cornerstone.jpeg' },
  { name: 'Cupids Knight', logo: '/clients/CupidsKnight.png' },
  { name: 'Divi', logo: '/clients/Divi-Logo-02.png' },
  { name: 'Duplex', logo: '/clients/duplex.png' },
  { name: 'Everwey Projects', logo: '/clients/EverweyProjects.png' },
  { name: 'Growthpoint', logo: '/clients/growthpoint.png' },
  { name: 'Hello Yes', logo: '/clients/Helloyes.svg' },
  { name: 'Izisombululo', logo: '/clients/Izisombululo.png' },
  { name: 'Neo Next', logo: '/clients/NeoNext.png' },
];

const ClientsCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const scrollStep = 0.5;
    const interval = setInterval(() => {
      if (isHovered) return; // Pause on hover
      
      if (carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth) {
        carousel.scrollLeft = 0;
      } else {
        carousel.scrollLeft += scrollStep;
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isHovered]);

  // Duplicate clients for seamless loop
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-3 sm:py-6 bg-gray-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="text-center mb-3 sm:mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-1 sm:space-x-2 bg-gradient-to-r from-teal-50 to-cyan-50 backdrop-blur-sm rounded-full px-2 sm:px-4 py-1 sm:py-2 mb-2 sm:mb-4 shadow-sm border border-teal-100"
          >
            <div className="w-1 h-1 sm:w-2 sm:h-2 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full"></div>
            <span className="text-xs font-semibold text-teal-700 uppercase tracking-wider">Trusted Partners</span>
          </motion.div>
        </div>
        
        <motion.div 
          className="relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            ref={carouselRef} 
            className="flex gap-6 sm:gap-8 lg:gap-12 overflow-x-auto py-4 sm:py-6 no-scrollbar"
            style={{ 
              scrollBehavior: 'smooth',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {duplicatedClients.map((client, index) => (
              <div 
                key={`${client.name}-${index}`} 
                className="flex-shrink-0 flex items-center justify-center h-16 w-32 sm:h-20 sm:w-40 lg:h-20 lg:w-40 opacity-60 hover:opacity-100 transition-opacity duration-300"
              >
                <Image 
                  src={client.logo} 
                  alt={`${client.name} logo`} 
                  width={100} 
                  height={50} 
                  className="object-contain w-full h-full filter grayscale hover:grayscale-0 transition-all duration-300" 
                />
              </div>
            ))}
          </div>
          
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute top-0 left-0 w-8 sm:w-12 lg:w-16 h-full bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-8 sm:w-12 lg:w-16 h-full bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsCarousel; 