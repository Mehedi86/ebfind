'use client';
import React from 'react';
import { IoPlayCircleOutline } from "react-icons/io5";

export default function Inspire() {
    const division = ['DHAKA', 'CHITTAGONG', 'KHULNA', 'RANGPUR', 'SHYLHET', 'BARISHAL']
    return (
        <div>
            <div className="h-100 bg-fixed bg-center bg-cover bg-no-repeat inspire">

                {/* Content */}
                <div className="flex flex-col items-center justify-center text-white text-center   bg-black/60 z-10 h-100 py-12">
                    <h2 className="text-4xl md:text-5xl font-bold">LIVE THERE</h2>
                    <p className="mt-4 max-w-xl text-lg">
                        Watch live blood donation events here whenever they are organized!!
                    </p>
                    <button className="font-bold my-6 text-gray-300">
                        <IoPlayCircleOutline size={60} />
                    </button>
                </div>
            </div>
            {/* Division Names */}
            <div className='bg-linear-to-br from-gray-900 via-red-950/50 to-gray-900 w-full py-4 flex flex-wrap justify-center items-center h-37.5'>
                <div className='flex flex-wrap justify-center gap-4 text-sm sm:text-base md:text-lg lg:text-xl font-bold text-neutral-400 px-4'>
                    {division.map((d, i) => (
                        <h1 className='text-center' key={i}>{d}</h1>
                    ))}
                </div>
            </div>
            {/* contact */}
            <div className="text-white w-full h-75 bg-orange-500/30 flex items-center justify-center">
                <div className="w-11/12 sm:w-10/12 md:w-8/12 lg:w-1/3 text-center space-y-3 px-4">
                    <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
                        Stay Up to date With Your Favorite Events!
                    </h1>
                    <p className="text-xs sm:text-sm md:text-base leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                        volutpat.
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-3 sm:gap-2">
                        <input
                            className="w-full sm:w-62.5 py-2 border border-white rounded-3xl text-white text-sm px-4 placeholder-white bg-transparent"
                            type="text"
                            placeholder="Your Email Address"
                        />
                        <button className="bg-white text-sm px-6 py-2 rounded-3xl font-bold text-orange-500 hover:bg-gray-100 transition">
                            SUBSCRIBE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}