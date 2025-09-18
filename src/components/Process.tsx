'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  FileText, 
  Calendar, 
  Code, 
  TestTube, 
  CheckCircle, 
  Settings,
  RefreshCw,
  Headphones
} from 'lucide-react'

const Process = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const processSteps = [
    {
      icon: FileText,
      title: 'Define Requirements',
      description: 'We interact with you and stakeholders to collect and document your project-specific requirements.',
      step: '01'
    },
    {
      icon: Calendar,
      title: 'Project Planning',
      description: 'Our team of developers, analysts, and project managers delineate scope and derive an appropriate project plan.',
      step: '02'
    },
    {
      icon: Code,
      title: 'Design & Development',
      description: 'Once approved, we proceed with developing and testing your custom software to a working state.',
      step: '03'
    },
    {
      icon: TestTube,
      title: 'Internal Release & Review',
      description: 'We create internal releases for testing by selected users and review by all required stakeholders.',
      step: '04'
    },
    {
      icon: CheckCircle,
      title: 'Implementation',
      description: 'Once approved, the working software is implemented as specified with necessary user training.',
      step: '05'
    },
    {
      icon: Settings,
      title: 'Adjust Requirements',
      description: 'Should adjustments be needed, we define new requirements and the project lifecycle recommences.',
      step: '06'
    },
    {
      icon: Headphones,
      title: 'Support & Maintenance',
      description: 'We provide ongoing maintenance and support for any software solutions we implement.',
      step: '07'
    }
  ]

  return (
    <section id="process" className="section-padding bg-white">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-4 sm:mb-6">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We follow a proven methodology to ensure your project is delivered 
            on time, within budget, and exceeds expectations.
          </p>
        </motion.div>

        {/* Process Steps - Redesigned */}
        <div className="space-y-6 sm:space-y-8 lg:space-y-12 mb-12 sm:mb-16 lg:mb-20">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`grid lg:grid-cols-12 gap-6 sm:gap-8 items-center ${
                index % 2 === 0 ? '' : 'lg:text-right'
              }`}
            >
              {/* Step Content */}
              <div className={`lg:col-span-5 ${index % 2 === 0 ? '' : 'lg:order-2'}`}>
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 justify-center lg:justify-start">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <step.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg shadow-md">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-4 text-center lg:text-left">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed text-center lg:text-left">
                  {step.description}
                </p>
              </div>

              {/* Step Visual */}
              <div className={`lg:col-span-2 flex justify-center ${index % 2 === 0 ? '' : 'lg:order-1'}`}>
                <div className="relative">
                  {/* Connecting Line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-teal-300 to-transparent"></div>
                  )}
                  {/* Step Circle */}
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-full flex items-center justify-center shadow-xl">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <span className="text-teal-600 font-bold text-lg">{step.step}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step Illustration */}
              <div className={`lg:col-span-5 ${index % 2 === 0 ? '' : 'lg:order-3'}`}>
                <div className="card-modern p-8 lg:p-10 bg-gradient-to-br from-teal-50 to-cyan-50 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-3xl flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-10 h-10 text-teal-600" />
                  </div>
                  <div className="text-4xl font-bold text-teal-600 mb-2">{step.step}</div>
                  <div className="text-sm text-teal-700 font-semibold uppercase tracking-wider">
                    Step {step.step}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-3xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our <span className="gradient-text">Process</span>?
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our proven methodology ensures successful project delivery with these key advantages.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: RefreshCw,
                title: "Agile Methodology",
                description: "We use agile development practices to ensure flexibility and rapid delivery.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: CheckCircle,
                title: "Quality Assurance", 
                description: "Every step includes thorough testing and quality checks to ensure excellence.",
                color: "from-teal-500 to-green-500"
              },
              {
                icon: Headphones,
                title: "Continuous Support",
                description: "Ongoing maintenance and support to keep your software running smoothly.",
                color: "from-purple-500 to-pink-500"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                className="card-modern p-8 text-center card-hover group bg-white"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h4>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Process
