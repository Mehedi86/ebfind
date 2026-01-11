"use client"

import React, { useEffect, useState } from 'react'
import { Heart, Users, Clock, Award, Shield, Droplet, ChevronUp, ChevronDown } from 'lucide-react'

export default function WhyDonate() {
  const reasons = [
    {
      icon: Heart,
      title: "Save Lives",
      description: "One donation can save up to three lives. Your blood can help accident victims, surgery patients, and those with medical conditions."
    },
    {
      icon: Clock,
      title: "Quick & Easy",
      description: "The entire donation process takes less than an hour. Most of your time is spent relaxing and helping others."
    },
    {
      icon: Shield,
      title: "Safe Process",
      description: "Blood donation is completely safe. We use sterile, single-use equipment and follow strict safety protocols."
    },
    {
      icon: Users,
      title: "Help Your Community",
      description: "Your donation directly helps people in your local community who are in urgent need of blood transfusions."
    },
    {
      icon: Award,
      title: "Health Benefits",
      description: "Regular blood donation can help reduce the risk of heart disease and stimulate the production of new blood cells."
    },
    {
      icon: Droplet,
      title: "Free Health Check",
      description: "Before donating, you receive a free mini health screening including blood pressure, pulse, and hemoglobin check."
    }
  ]

  const [isSmall, setIsSmall] = useState(false);
  const [isExpand, setIsExpand] = useState(false);
  const [data, setData] = useState([])


  useEffect(() => {
    const checkScreen = () => {
      if (typeof window !== "undefined") {
        setIsSmall(window.innerWidth <= 768)
      }
    }

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, [])

  const handleExpand = () => {

    setIsExpand(!isExpand)
  }

  return (
    <div className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 sm:mb-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
            Why Donate Blood?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto px-4">
            Blood donation is a simple act of kindness that can make a profound difference in someone's life. Here's why your donation matters.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-6 mb-12 sm:mb-16">
          {(isSmall ? isExpand ? reasons : reasons.slice(0, 3) : reasons).map((reason, index) => {
            const IconComponent = reason.icon
            return (
              <div
                key={index}
                className="bg-white/10 p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/30 hover:border-red-300/50 hover:-translate-y-2 overflow-hidden"
              >

                <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                  {/* Icon with animated background */}
                  <div className="mb-5 sm:mb-6">
                    <div className="bg-linear-to-br from-red-500 to-red-600 p-4 sm:p-5 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-red-600 transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-950 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            )
          })}
          {isSmall ? <div className='w-full flex justify-center -mt-10'>
            <button onClick={handleExpand} className='p-2 rounded-full border border-white/40 bg-white/20'>{isExpand ? <ChevronUp className='text-white text-2xl' /> : <ChevronDown className='text-white text-2xl' />}</button>
          </div> : ''}
        </div>

        {/* Call to Action */}
        <div className="mt-6 sm:mt-8 md:mt-10 text-center container mx-auto">
          <div className="relative bg-linear-to-br from-red-600 via-red-700 to-amber-900 rounded p-6 sm:p-8 md:p-12 shadow-2xl overflow-hidden border-2 border-red-500/30 group hover:border-red-400/50 transition-all duration-500">
            {/* Animated linear overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-red-600/50 via-amber-600/30 to-red-700/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Enhanced decorative background elements with animation */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-600/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-red-400/30 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDelay: '0.5s' }} />
            
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

            <div className="relative z-10">
              {/* Badge with enhanced styling */}
              <div className="inline-block mb-4 sm:mb-5">
                <div className="bg-linear-to-r from-white/30 to-white/20 backdrop-blur-lg px-4 py-2 rounded border-2 border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-white/70">
                  <span className="text-white text-xs sm:text-sm font-bold tracking-wide uppercase">Join Us Today</span>
                </div>
              </div>
              
              {/* Enhanced heading */}
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 sm:mb-5 drop-shadow-2xl leading-tight">
                <span className="bg-linear-to-r from-white via-amber-100 to-white bg-clip-text text-transparent">
                  Ready to Make a Difference?
                </span>
              </h3>
              
              {/* Enhanced description */}
              <p className="text-sm sm:text-base md:text-lg text-amber-50/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed font-medium">
                Join thousands of heroes who donate blood regularly. Your contribution can give someone a second chance at life.
              </p>
              
              {/* Enhanced buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="group relative w-full sm:w-auto bg-linear-to-r from-white to-amber-50 text-red-700 hover:text-red-800 font-bold px-8 sm:px-10 py-3.5 sm:py-4 rounded transition-all duration-300 text-sm sm:text-base shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] hover:scale-110 active:scale-105 overflow-hidden border-2 border-white/30">
                  {/* Button shimmer */}
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  
                  <span className="relative z-10 flex items-center justify-center gap-2.5">
                    Become a Donor
                    <Heart className="h-5 w-5 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 fill-current" />
                  </span>
                  
                  {/* Ripple effect on hover */}
                  <div className="absolute inset-0 rounded bg-white/20 opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
                </button>
                
                <button className="group relative w-full sm:w-auto bg-white/20 backdrop-blur-lg border-2 border-white/60 text-white hover:text-white hover:bg-white/30 hover:border-white font-bold px-8 sm:px-10 py-3.5 sm:py-4 rounded transition-all duration-300 text-sm sm:text-base shadow-xl hover:shadow-2xl hover:scale-110 active:scale-105 overflow-hidden">
                  {/* Button glow */}
                  <div className="absolute inset-0 bg-linear-to-r from-red-500/20 via-amber-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                  
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Learn More
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              </div>
              
              {/* Additional decorative elements */}
              <div className="mt-8 sm:mt-10 flex justify-center items-center gap-2">
                <div className="h-1 w-12 bg-linear-to-r from-transparent via-white/40 to-transparent rounded-full" />
                <Heart className="h-4 w-4 text-white/60 animate-pulse" />
                <div className="h-1 w-12 bg-linear-to-r from-transparent via-white/40 to-transparent rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
