'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Code2, 
  Smartphone, 
  Package, 
  Globe, 
  Headphones, 
  Database,
  Cloud,
  Shield
} from 'lucide-react'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const services = [
    {
      icon: Code2,
      title: 'Custom Software Development',
      description: 'Translate your unique requirements into desired solutions that will propel your business into the future with premium quality and advanced technologies.',
      features: ['Tailored Solutions', 'Advanced Technologies', 'Business Efficiency', 'Cost Savings']
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Digitise your business and processes by developing custom scalable and feature-rich mobile applications for better customer experience.',
      features: ['Cross-Platform', 'Scalable Architecture', 'User Experience', 'Performance Optimized']
    },
    {
      icon: Package,
      title: 'Product Development',
      description: 'Revolutionise your business ideas and let us develop robust and scalable products that drive growth and innovation.',
      features: ['MVP Development', 'Scalable Design', 'Market Ready', 'Innovation Focus']
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'We design and develop aesthetically pleasing and user-friendly websites for any application to increase your online presence.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Modern UI/UX']
    },
    {
      icon: Headphones,
      title: 'Ongoing Support & Maintenance',
      description: 'We assure quality by regularly upgrading infrastructure, monitoring systems, performing security patches, and providing ongoing support.',
      features: ['24/7 Monitoring', 'Security Updates', 'Performance Optimization', 'Technical Support']
    },
    {
      icon: Database,
      title: 'Technology Stack',
      description: 'We work with the latest technologies and frameworks to ensure your solutions are built with modern, scalable, and maintainable code.',
      features: ['Modern Frameworks', 'Cloud Technologies', 'Database Solutions', 'API Development']
    }
  ]

  const techStack = [
    { name: 'React', category: 'Frontend' },
    { name: 'Next.js', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Python', category: 'Backend' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'MongoDB', category: 'Database' },
  ]

  return (
    <section id="services" className="py-16 sm:py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive software solutions that empower your business 
            to stay ahead in the fast-paced digital world.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100 card-hover h-full"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-teal-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">{service.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{service.description}</p>
              <ul className="space-y-1 sm:space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                    <span className="text-xs sm:text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100"
        >
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">Technology Stack</h3>
            <p className="text-sm sm:text-base text-gray-600">We work with cutting-edge technologies to deliver exceptional results</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                className="bg-gray-50 rounded-xl p-3 sm:p-4 text-center card-hover border border-gray-100"
              >
                <div className="font-semibold text-sm sm:text-base text-gray-800 mb-1">{tech.name}</div>
                <div className="text-xs sm:text-sm text-gray-600">{tech.category}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
