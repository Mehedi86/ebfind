"use client"

import React, { useState, useEffect } from 'react'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'

interface QuoteData {
    text: string
}

export default function Quotes() {
    const quotes: QuoteData[] = [
        {
            text: "The blood you donate gives someone another chance at life. One day that someone may be a close relative, a friend, a loved one—or even you."
        },
        {
            text: "Every drop of blood you donate is a lifeline for someone in need. Your selfless act can save up to three lives and bring hope to families."
        },
        {
            text: "Donating blood is not just a medical procedure—it's an act of humanity that connects us all. Together, we can make a difference."
        },
        {
            text: "The greatest gift you can give is the gift of life. Blood donation is simple, safe, and saves lives every single day."
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true)
                    }
                })
            },
            { threshold: 0.2 }
        )

        const element = document.getElementById('quotes-section')
        if (element) {
            observer.observe(element)
        }

        return () => {
            if (element) {
                observer.unobserve(element)
            }
        }
    }, [])

    useEffect(() => {
        if (isVisible) {
            const interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % quotes.length)
            }, 5000)

            return () => clearInterval(interval)
        }
    }, [isVisible, quotes.length])

    const nextQuote = () => {
        setCurrentIndex((prev) => (prev + 1) % quotes.length)
    }

    const prevQuote = () => {
        setCurrentIndex((prev) => (prev - 1 + quotes.length) % quotes.length)
    }

    const goToQuote = (index: number) => {
        setCurrentIndex(index)
    }

    return (
        <section
            id="quotes-section"
            className="w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 relative"
        >
            <div className="max-w-5xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
                        Inspiring <span className="text-transparent bg-clip-text bg-linear-to-r from-red-400 via-red-500 to-red-400">Testimonials</span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto px-4">
                        Support each other, make a storng community, because we need it very much.
                    </p>
                </div>

                {/* Slider Container with Fade Effect */}
                <div className="relative">
                    {/* Quote Display with Fade Transition */}
                    <div className="relative h-75 sm:h-87.5 md:h-100">
                        {quotes.map((quote, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentIndex
                                    ? 'opacity-100 z-10'
                                    : 'opacity-0 z-0'
                                    }`}
                            >
                                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-10 md:p-14 border border-white/20 h-full flex flex-col justify-center">
                                    {/* Quote Icon */}
                                    <div className="flex justify-center mb-6">
                                        <div className="bg-gradient-to-br from-red-500 to-red-600 p-4 rounded-2xl">
                                            <Quote className="h-8 w-8 text-white" fill="currentColor" />
                                        </div>
                                    </div>

                                    {/* Quote Text */}
                                    <blockquote className="text-center">
                                        <p className="text-xl sm:text-2xl md:text-3xl text-white leading-relaxed font-medium italic">
                                            "{quote.text}"
                                        </p>
                                    </blockquote>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Controls */}
                    <div className="flex items-center justify-between mt-8">
                        {/* Previous Button */}
                        <button
                            onClick={prevQuote}
                            className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 hover:border-red-400/50 rounded-full px-4 py-2 sm:px-6 sm:py-3 transition-all duration-300 hover:bg-white/20 group"
                            aria-label="Previous quote"
                        >
                            <ChevronLeft className="h-5 w-5 text-white group-hover:text-red-400" />
                            <span className="text-white text-sm hidden sm:inline">Previous</span>
                        </button>

                        {/* Dots Indicator */}
                        <div className="flex items-center gap-2">
                            {quotes.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToQuote(index)}
                                    className={`transition-all duration-300 rounded-full ${index === currentIndex
                                        ? 'w-10 h-2 bg-red-500'
                                        : 'w-2 h-2 bg-white/30 hover:bg-red-400/50'
                                        }`}
                                    aria-label={`Go to quote ${index + 1}`}
                                />
                            ))}
                        </div>

                        {/* Next Button */}
                        <button
                            onClick={nextQuote}
                            className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 hover:border-red-400/50 rounded-full px-4 py-2 sm:px-6 sm:py-3 transition-all duration-300 hover:bg-white/20 group"
                            aria-label="Next quote"
                        >
                            <span className="text-white text-sm hidden sm:inline">Next</span>
                            <ChevronRight className="h-5 w-5 text-white group-hover:text-red-400" />
                        </button>
                    </div>

                    {/* Quote Counter */}
                    <div className="text-center mt-6">
                        <span className="text-white/60 text-sm">
                            {currentIndex + 1} / {quotes.length}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}
