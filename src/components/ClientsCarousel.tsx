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
  { name: 'Hello Yes', logo: '/clients/HelloYes.png' },
  { name: 'Izisombululo', logo: '/clients/Izisombululo.png' },
  { name: 'Neo Next', logo: '/clients/NeoNext.png' },
];

const ClientsCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Only auto-scroll on desktop (screen width > 768px)
    if (window.innerWidth <= 768) return;

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

  // Duplicate clients for seamless loop - many duplicates for mobile scrolling
  const duplicatedClients = [...clients, ...clients, ...clients, ...clients, ...clients];

  return (
    <section className="py-3 sm:py-6 bg-gray-50">
      <div className="w-full px-2 sm:px-6 lg:px-8 overflow-hidden">
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
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            ref={carouselRef} 
            className="flex gap-4 sm:gap-6 lg:gap-8 py-4 sm:py-6 overflow-x-auto hide-scrollbar"
            style={{ 
              WebkitOverflowScrolling: 'touch',
              touchAction: 'pan-x',
              minWidth: '200vw'
            }}
          >
            {duplicatedClients.map((client, index) => (
              <div 
                key={`${client.name}-${index}`} 
                className="flex-shrink-0 flex items-center justify-center h-12 w-24 sm:h-16 sm:w-32 lg:h-16 lg:w-32 opacity-60 hover:opacity-100 transition-opacity duration-300"
              >
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={80}
                  height={40}
                  className="object-contain w-full h-full filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsCarousel; 