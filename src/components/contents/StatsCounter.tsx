import React from 'react'

export default function StatsCounter() {
    return (
        <section className="bg-white py-20 px-6">
            {/* <!-- Intro Text --> */}
            <div className="max-w-4xl mx-auto text-center">
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    A trusted blood donation platform connecting heroes with hope.
                    From emergency requests to scheduled donation drives —
                    <span className="text-red-700 font-semibold">
                        your blood saves lives.
                    </span>
                </p>

                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-16">
                    One Donation,
                    <span className="text-red-700">Unlimited Hope</span>
                </h1>
            </div>

            {/* <!-- Feature Grid --> */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center">

                {/* <!-- Item 1 --> */}
                <div>
                    <div className="text-5xl text-red-700 mb-4">🩸</div>
                    <h3 className="text-xl font-semibold text-gray-900">Safe Donation</h3>
                    <p className="text-gray-600 mt-2">Verified donors & hospitals</p>
                </div>

                {/* <!-- Item 2 --> */}
                <div>
                    <div className="text-5xl text-red-700 mb-4">🏥</div>
                    <h3 className="text-xl font-semibold text-gray-900">70+</h3>
                    <p className="text-gray-600 mt-2">Partner Hospitals</p>
                </div>

                {/* <!-- Item 3 --> */}
                <div>
                    <div className="text-5xl text-red-700 mb-4">♻️</div>
                    <h3 className="text-xl font-semibold text-gray-900">Lifetime</h3>
                    <p className="text-gray-600 mt-2">Impact & Support</p>
                </div>

                {/* <!-- Item 4 --> */}
                <div>
                    <div className="text-5xl text-red-700 mb-4">❤️</div>
                    <h3 className="text-xl font-semibold text-gray-900">300K+</h3>
                    <p className="text-gray-600 mt-2">Lives Saved</p>
                </div>

            </div>
        </section>

    )
}
