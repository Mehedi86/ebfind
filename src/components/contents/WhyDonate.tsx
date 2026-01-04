"use client"

import React from 'react'
import { Heart, Users, Clock, Award, Shield, Droplet } from 'lucide-react'

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
          {reasons.map((reason, index) => {
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
        </div>

        {/* Call to Action */}
        <div className="mt-6 sm:mt-8 md:mt-10 text-center">
          <div className="relative bg-linear-to-br from-amber-800 via-amber-900 to-amber-950 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-xl overflow-hidden border border-amber-700/50">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-amber-600/30 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-700/30 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10">
              <div className="inline-block mb-3">
                <div className="bg-white/25 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/40 shadow-md">
                  <span className="text-white text-xs font-semibold">Join Us Today</span>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 drop-shadow-lg">
                Ready to Make a Difference?
              </h3>
              <p className="text-sm sm:text-base text-amber-50 mb-5 sm:mb-6 max-w-2xl mx-auto leading-relaxed">
                Join thousands of heroes who donate blood regularly. Your contribution can give someone a second chance at life.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <button className="group relative w-full sm:w-auto bg-white text-amber-900 hover:bg-amber-50 font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg transition-all duration-300 text-sm sm:text-base shadow-lg hover:shadow-xl hover:scale-105 overflow-hidden border border-white/20">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Become a Donor
                    <Heart className="h-4 w-4 group-hover:scale-110 transition-transform fill-current" />
                  </span>
                  <div className="absolute inset-0 bg-linear-to-r from-amber-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
                <button className="w-full sm:w-auto bg-white/15 backdrop-blur-md border border-white/60 text-white hover:bg-white/25 hover:border-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg transition-all duration-300 text-sm sm:text-base shadow-md hover:shadow-lg hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
