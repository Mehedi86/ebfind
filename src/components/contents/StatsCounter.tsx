"use client"

import React, { useEffect, useState, useRef } from 'react'

interface CounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
}

function AnimatedCounter({ end, duration = 3000, suffix = '', prefix = '' }: CounterProps) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const counterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            animateCounter()
          }
        })
      },
      { threshold: 0.3 }
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current)
      }
    }
  }, [hasAnimated])

  const animateCounter = () => {
    const startTime = Date.now()
    const startValue = 0

    const updateCounter = () => {
      const currentTime = Date.now()
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentValue = Math.floor(startValue + (end - startValue) * easeOutQuart)

      setCount(currentValue)

      if (progress < 1) {
        requestAnimationFrame(updateCounter)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(updateCounter)
  }

  const formatNumber = (num: number): string => {
    if (num >= 1000) {
      return (num / 1000).toFixed(num >= 100000 ? 0 : 1) + 'K'
    }
    return num.toString()
  }

  return (
    <div ref={counterRef}>
      <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-red-700">
        {prefix}{formatNumber(count)}{suffix}
      </h3>
    </div>
  )
}

export default function StatsCounter() {
  return (
    <section className="bg-red-100/30 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      {/* Intro Text */}
      <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-12 md:mb-16">
        <p className="text-neutral-950 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 px-2">
          A trusted blood donation platform connecting heroes with hope.
          From emergency requests to scheduled donation drives —
          <span className="text-red-700 font-semibold">
            {' '}your blood saves lives.
          </span>
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          One Donation,
          <span className="text-red-700"> Unlimited Hope</span>
        </h1>
      </div>

      {/* Feature Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 text-center">
        {/* Item 1 */}
        <div className="flex flex-col items-center justify-center p-4 sm:p-6 hover:scale-105 transition-transform duration-300">
          <div className="text-4xl sm:text-5xl md:text-6xl text-red-700 mb-3 sm:mb-4">🩸</div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Safe Donation</h3>
          <p className="text-sm sm:text-base text-gray-600">Verified donors & hospitals</p>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col items-center justify-center p-4 sm:p-6 hover:scale-105 transition-transform duration-300">
          <div className="text-4xl sm:text-5xl md:text-6xl text-red-700 mb-3 sm:mb-4">🏥</div>
          <AnimatedCounter end={70} duration={3200} suffix="+" />
          <p className="text-sm sm:text-base text-gray-600 mt-1 sm:mt-2">Partner Hospitals</p>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col items-center justify-center p-4 sm:p-6 hover:scale-105 transition-transform duration-300">
          <div className="text-4xl sm:text-5xl md:text-6xl text-red-700 mb-3 sm:mb-4">♻️</div>
           <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Lifetime</h3>
           <p className="text-sm sm:text-base text-gray-600">Impact and Support</p>
        </div>

        {/* Item 4 */}
        <div className="flex flex-col items-center justify-center p-4 sm:p-6 hover:scale-105 transition-transform duration-300">
          <div className="text-4xl sm:text-5xl md:text-6xl text-red-700 mb-3 sm:mb-4">❤️</div>
          <AnimatedCounter end={300} duration={3500} suffix="K+" />
          <p className="text-sm sm:text-base text-gray-600 mt-1 sm:mt-2">Lives Saved</p>
        </div>
      </div>
    </section>
  )
}