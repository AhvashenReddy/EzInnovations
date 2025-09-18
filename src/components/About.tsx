'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Users, Award, Clock } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const stats = [
    { icon: Target, value: '100+', label: 'Projects Delivered' },
    { icon: Users, value: '50+', label: 'Happy Clients' },
    { icon: Award, value: '5+', label: 'Years Experience' },
    { icon: Clock, value: '24/7', label: 'Support Available' },
  ]

  return (
    <section id="about" className="section-padding bg-gray-50" aria-labelledby="about-heading">
      <div className="section-container">
        <motion.header
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 id="about-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-4 sm:mb-6">
            About <span className="gradient-text">Ez Innovations</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Leading South African software development company with 5+ years experience 
            serving clients across all industries. We specialize in delivering innovative 
            custom software solutions, mobile applications, and web development services 
            that combine creativity with cutting-edge technology.
          </p>
        </motion.header>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="card-modern p-4 sm:p-6 lg:p-8 text-center card-hover group"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">{stat.value}</div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-7"
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Future-proof your business with our services
            </h3>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              The inevitable digital transformation of business models has created many 
              limitations with traditional ways of doing business. We understand that you 
              are motivated by the growing need to do business faster, be more efficient 
              and increase growth.
            </p>
            <div className="space-y-3 sm:space-y-4">
              {[
                "Dedicated to solving complex software engineering problems",
                "Committed to providing exceptional business solutions", 
                "Making a real difference to your business"
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mt-0.5 sm:mt-1 flex-shrink-0">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-sm sm:text-base text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="card-modern p-8 lg:p-10 bg-gradient-to-br from-teal-50 to-cyan-50 border-l-4 border-teal-500">
              <blockquote className="text-2xl lg:text-3xl font-medium text-gray-900 mb-6 leading-relaxed italic">
                &ldquo;Any sufficiently advanced technology is equivalent to magic&rdquo;
              </blockquote>
              <cite className="text-lg text-teal-700 font-semibold">- Sir Arthur C. Clarke</cite>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
