"use client"

import React, { useState, useEffect } from 'react'
import "./animation.css"

export default function BoxSpinner({ position }: { position: string }) {
    const [dots, setDots] = useState<Array<{ size: number; left: number; top: number; color: string }>>([])

    useEffect(() => {
        // Generate random dots on mount
        const generateDots = () => {
            const numDots = 8 + Math.floor(Math.random() * 5) // 8-12 dots
            const bloodColors = [
                { r: 220, g: 20, b: 60 },   // Crimson
                { r: 178, g: 34, b: 34 },   // Firebrick
                { r: 139, g: 0, b: 0 },     // Dark red
                { r: 201, g: 77, b: 77 },   // Soft red (matches website)
                { r: 192, g: 57, b: 43 },   // Darker red
                { r: 231, g: 76, b: 60 },   // Bright red
            ]
            const newDots = Array.from({ length: numDots }, () => {
                const color = bloodColors[Math.floor(Math.random() * bloodColors.length)]
                const opacity = 0.7 + Math.random() * 0.3 // Random opacity between 0.7 and 1.0
                return {
                    size: 4 + Math.random() * 8, // Random size between 4px and 12px
                    left: Math.random() * 100, // Random position 0-100%
                    top: Math.random() * 100, // Random position 0-100%
                    color: `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity})`,
                }
            })
            setDots(newDots)
        }

        generateDots()
    }, [])

    return (
        <div className={`box-spinner ${position || ''}`}>
            {dots.map((dot, index) => (
                <div
                    key={index}
                    className="blood-dot"
                    style={{
                        width: `${dot.size}px`,
                        height: `${dot.size}px`,
                        left: `${dot.left}%`,
                        top: `${dot.top}%`,
                        backgroundColor: dot.color,
                    }}
                />
            ))}
        </div>
    )
}
