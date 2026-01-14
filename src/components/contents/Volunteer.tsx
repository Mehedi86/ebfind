'use client'

import React from 'react'
import Image from 'next/image'
import { HandHeart } from 'lucide-react'

interface VolunteerData {
    name: string
    role: string
    experience: string
    image: string
}

export default function Volunteer() {
    const volunteers: VolunteerData[] = [
        {
            name: 'Fatima Begum',
            role: 'Event Coordinator',
            experience: '3 years of service',
            image: '/image/happy/happy1.jpg'
        },
        {
            name: 'Karim Uddin',
            role: 'Blood Drive Organizer',
            experience: '5 years of service',
            image: '/image/happy/happy2.jpg'
        },
        {
            name: 'Rashida Akter',
            role: 'Community Outreach',
            experience: '2 years of service',
            image: '/image/happy/happy1.jpg'
        }
    ]

    return (
        <section className="w-full pt-4 pb-20 bg-linear-to-b from-gray-950 via-red-950/40 to-gray-950 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute top-20 left-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-125 h-125 bg-red-600/10 rounded-full blur-3xl" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Our Volunteers Section */}
                <div className="mb-12 sm:mb-16">
                    <div className="text-center mb-10 sm:mb-12">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
                            Our <span className="text-red-400">Volunteers</span>
                        </h3>
                        <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
                            Dedicated individuals making a difference in their communities
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {volunteers.map((volunteer, index) => (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-md rounded p-8 border border-white/20 hover:border-red-400/60 transition-all duration-300 hover:bg-white/15 hover:shadow-2xl hover:shadow-red-500/20 group"
                            >
                                {/* Avatar with enhanced design */}
                                <div className="flex justify-center mb-6">
                                    <div className="relative h-32 w-32 rounded-full overflow-hidden border-4 border-red-400/50 shadow-xl group-hover:border-red-400 transition-all duration-300 group-hover:scale-110">
                                        <div className="absolute inset-0 bg-linear-to-br from-red-500/20 to-transparent z-10" />
                                        <Image
                                            src={volunteer.image}
                                            alt={volunteer.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Volunteer Info with improved typography */}
                                <div className="text-center">
                                    <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                                        {volunteer.name}
                                    </h4>
                                    <div className="inline-block px-4 py-1.5 bg-red-500/20 rounded-full mb-3 border border-red-400/30">
                                        <p className="text-red-400 font-semibold text-sm sm:text-base">
                                            {volunteer.role}
                                        </p>
                                    </div>
                                    <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
                                        <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                                        {volunteer.experience}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Join as Volunteer Message - Now below cards */}
                <div className="text-center mt-12 sm:mt-16">
                    <h2 className="text-3xl font-extrabold text-white mb-4">
                        Become a <span className="text-red-400">Volunteer</span>
                    </h2>
                    <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto mb-8">
                        Join our passionate team of volunteers and help us organize blood donation drives,
                        raise awareness, and make a lasting impact in your community. Your time and dedication
                        can save lives.
                    </p>
                    <button className="px-4 py-2 rounded bg-neutral-800 text-white font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/50">
                        Let&apos;s Go
                    </button>
                </div>
            </div>
        </section>
    )
}
