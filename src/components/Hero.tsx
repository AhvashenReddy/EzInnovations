'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Code, Smartphone, Globe, Wrench, Zap, Target, Rocket, Shield } from 'lucide-react'

const Hero = () => {
  const icons = [
    { Icon: Code, delay: 0.2, color: 'from-blue-500 to-cyan-500' },
    { Icon: Smartphone, delay: 0.4, color: 'from-purple-500 to-pink-500' },
    { Icon: Globe, delay: 0.6, color: 'from-green-500 to-teal-500' },
    { Icon: Wrench, delay: 0.8, color: 'from-orange-500 to-red-500' },
  ]

  const floatingElements = [
    { Icon: Zap, delay: 0.3, position: { top: '10%', right: '15%' } },
    { Icon: Target, delay: 0.5, position: { top: '70%', right: '10%' } },
    { Icon: Rocket, delay: 0.7, position: { top: '40%', left: '5%' } },
    { Icon: Shield, delay: 0.9, position: { top: '80%', left: '15%' } },
  ]

  return (
    <section id="home" className="min-h-screen gradient-bg flex items-center relative overflow-hidden pt-16 sm:pt-20">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-teal-200 to-cyan-200 rounded-full mix-blend-multiply filter blur-3xl"
        ></motion.div>
        
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.4, 0.2, 0.4]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-cyan-200 to-teal-200 rounded-full mix-blend-multiply filter blur-3xl"
        ></motion.div>
        
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/3 left-1/3 w-64 h-64 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-full mix-blend-multiply filter blur-2xl"
        ></motion.div>

        {/* Geometric shapes */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-20 right-20 w-32 h-32 border-2 border-teal-200/30 rounded-lg"
        ></motion.div>
        
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1.1, 1, 1.1]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute bottom-32 left-32 w-24 h-24 border-2 border-cyan-200/30 rounded-full"
        ></motion.div>

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
            className="absolute w-2 h-2 bg-teal-400 rounded-full"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
          />
        ))}
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[70vh] sm:min-h-[80vh]">
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
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-teal-50 to-cyan-50 backdrop-blur-sm rounded-full px-6 py-3 mb-8 shadow-lg border border-teal-100 hover:shadow-xl transition-all duration-300"
            >
              <motion.div 
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="w-6 h-6 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center"
              >
                <Sparkles className="w-4 h-4 text-white" />
              </motion.div>
              <span className="text-sm font-semibold text-teal-700">Creating magic through technology</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight tracking-tight mb-6 sm:mb-8"
            >
              <motion.span 
                className="gradient-text text-shadow"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                style={{
                  backgroundSize: '200% 200%'
                }}
              >
                Professional Software Development
              </motion.span>
              <br />
              <motion.span 
                className="text-gray-900"
                initial={{ opacity: 0.7 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                Services in South Africa
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-10 max-w-2xl lg:max-w-none leading-relaxed"
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
              <a href="#contact" className="bg-gradient-to-r from-teal-600 to-teal-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold transition-all duration-300 hover:from-teal-700 hover:to-teal-800 hover:shadow-xl hover:scale-105 inline-flex items-center justify-center group">
                Start Your Project
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
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
              {icons.map(({ Icon, delay, color }, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1, 
                    rotate: 0,
                    y: [0, -10, 0]
                  }}
                  transition={{ 
                    duration: 0.8, 
                    delay: delay,
                    y: {
                      duration: 2 + index * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                  className="absolute card-modern p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                  style={{
                    top: `${15 + (index * 18)}%`,
                    left: `${5 + (index * 20)}%`,
                    transform: `rotate(${(index - 1.5) * 5}deg)`,
                  }}
                >
                  <motion.div 
                    className={`w-12 h-12 bg-gradient-to-r ${color} rounded-xl flex items-center justify-center shadow-lg`}
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360,
                      transition: { duration: 0.5 }
                    }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                </motion.div>
              ))}

              {/* Additional floating elements */}
              {floatingElements.map(({ Icon, delay, position }, index) => (
                <motion.div
                  key={`floating-${index}`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: [0.4, 0.8, 0.4],
                    scale: [0.8, 1.2, 0.8],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 0.6, 
                    delay: delay,
                    opacity: {
                      duration: 3 + index * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    },
                    scale: {
                      duration: 2 + index * 0.3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    },
                    rotate: {
                      duration: 8 + index * 2,
                      repeat: Infinity,
                      ease: "linear"
                    }
                  }}
                  className="absolute w-8 h-8 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full flex items-center justify-center shadow-lg"
                  style={position}
                >
                  <Icon className="w-4 h-4 text-white" />
                </motion.div>
              ))}

              {/* Central Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  y: 0
                }}
                transition={{ 
                  duration: 0.8, 
                  delay: 1
                }}
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 card-modern p-8 shadow-2xl max-w-sm z-10 hover:shadow-3xl transition-all duration-300 cursor-pointer"
              >
                <div className="text-center">
                  <motion.div 
                    className="w-20 h-20 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                    animate={{ 
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ 
                      scale: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <Sparkles className="w-10 h-10 text-white" />
                  </motion.div>
                  <motion.h3 
                    className="text-2xl font-bold text-gray-900 mb-3"
                    animate={{ 
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    style={{
                      background: 'linear-gradient(45deg, #0d9488, #0891b2, #0d9488)',
                      backgroundSize: '200% 200%',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    Innovation
                  </motion.h3>
                  <motion.p 
                    className="text-gray-600 leading-relaxed"
                    initial={{ opacity: 0.8 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                  >
                    Transforming ideas into digital reality with cutting-edge technology and creative solutions.
                  </motion.p>
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
