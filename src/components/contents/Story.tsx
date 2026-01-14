import React from 'react'
import Image from 'next/image'

export default function Story() {
  return (
    <section className="w-full py-16 sm:py-20 md:py-24 bg-linear-to-b from-gray-950 via-red-950/40 to-gray-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
            Donor Story That Inspires
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            A single donation can rewrite someone&apos;s future. Here is one story that shows how powerful your decision to donate can be.
          </p>
        </div>

        {/* Single Story Card */}
        <div className="bg-white/10 backdrop-blur-md rounded border border-white/15 shadow-2xl p-6 sm:p-8 md:p-10 flex flex-col md:flex-row gap-6 sm:gap-8 items-start">
          {/* Avatar */}
          <div className="shrink-0 mx-auto md:mx-0">
            <div className="relative h-24 w-24 sm:h-28 sm:w-28 rounded-full overflow-hidden border-2 border-red-400 shadow-lg">
              <Image
                src="/image/happy/happy1.jpg"
                alt="Donor avatar"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Story Content */}
          <div className="flex-1">
            <div className="mb-4">
              <p className="text-sm font-semibold uppercase tracking-wider text-red-300 mb-1">
                Donor Story
              </p>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                &quot;The day I realized my blood could be someone&apos;s second chance&quot;
              </h3>
            </div>

            <p className="text-gray-200 text-sm sm:text-base leading-relaxed mb-4 sm:mb-5">
              I never imagined that a simple visit to a blood donation camp would change my life.
              A few weeks after donating, I received a message saying my blood helped a 6-year-old
              child survive a critical surgery. In that moment, I understood that my small act of
              kindness had given a family hope again.
            </p>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
              Now, I donate regularly. It takes less than an hour, but it creates an impact that
              lasts a lifetime. If my blood can help someone open their eyes to another morning,
              that&apos;s the greatest gift I can give.
            </p>

            {/* Donor Info */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h4 className="font-semibold text-white text-base sm:text-lg">
                  Ahmed Rahman
                </h4>
                <p className="text-sm text-gray-400">
                  Regular Blood Donor • Donated 12+ times
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-3">
                <button className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-red-500 hover:bg-red-600 text-white text-sm sm:text-base font-semibold transition-colors duration-300">
                  Become a Donor
                </button>
                <button className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-white/30 text-white text-sm sm:text-base font-semibold hover:bg-white/10 transition-colors duration-300">
                  See More Stories
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
