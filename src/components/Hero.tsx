'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Code, Smartphone, Globe, Wrench } from 'lucide-react'

const Hero = () => {
  const icons = [
    { Icon: Code, delay: 0.2 },
    { Icon: Smartphone, delay: 0.4 },
    { Icon: Globe, delay: 0.6 },
    { Icon: Wrench, delay: 0.8 },
  ]

  return (
    <section id="home" className="min-h-screen gradient-bg flex items-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-teal-200 to-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-cyan-200 to-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-teal-50 to-cyan-50 backdrop-blur-sm rounded-full px-6 py-3 mb-8 shadow-lg border border-teal-100"
            >
              <div className="w-6 h-6 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-semibold text-teal-700">Creating magic through technology</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="heading-primary mb-8"
            >
              <span className="gradient-text text-shadow">Professional Software Development</span>
              <br />
              <span className="text-gray-900">Services in South Africa</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-large text-gray-600 mb-10 max-w-2xl lg:max-w-none"
            >
              Leading software development company delivering custom software solutions, 
              mobile app development, and web development services. 100+ projects delivered 
              with 5+ years of expertise in digital transformation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex justify-center lg:justify-start"
            >
              <a href="#contact" className="btn-primary group">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 relative hidden lg:block"
          >
            <div className="relative w-full h-[600px]">
              {/* Floating Icons */}
              {icons.map(({ Icon, delay }, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: delay }}
                  className="absolute card-modern p-6 shadow-lg"
                  style={{
                    top: `${15 + (index * 18)}%`,
                    left: `${5 + (index * 20)}%`,
                    transform: `rotate(${(index - 1.5) * 5}deg)`,
                  }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </motion.div>
              ))}

              {/* Central Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 card-modern p-8 shadow-2xl max-w-sm z-10"
              >
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Sparkles className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Innovation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Transforming ideas into digital reality with cutting-edge technology and creative solutions.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
