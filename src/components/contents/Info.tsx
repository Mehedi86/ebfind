"use client"

import React, { useState, useEffect } from 'react'
import { Droplet, Clock, CheckCircle, Heart, Shield } from 'lucide-react'

interface TabData {
  id: string
  label: string
  icon: React.ElementType
}

export default function Info() {
  const tabs: TabData[] = [
    { id: 'blood-types', label: 'Blood Types', icon: Droplet },
    { id: 'timeframe', label: 'Timeframe', icon: Clock },
    { id: 'prerequisites', label: 'Prerequisites', icon: CheckCircle },
    { id: 'benefits', label: 'Benefits', icon: Heart },
    { id: 'safety', label: 'Safety', icon: Shield }
  ]

  const [activeTab, setActiveTab] = useState('blood-types')
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const renderContent = () => {
    switch (activeTab) {
      case 'blood-types':
        return (
          <div className="space-y-6 text-gray-200 leading-relaxed">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Understanding Blood Types</h3>
            
            <p className="text-base sm:text-lg">
              Blood types are classified based on the presence or absence of certain antigens on red blood cells. The two main systems are ABO and Rh factor, which combine to create eight different blood types: A+, A-, B+, B-, AB+, AB-, O+, and O-.
            </p>

            <p className="text-base sm:text-lg">
              <strong className="text-white">Type O-</strong> is known as the universal donor because it can be given to people of any blood type. This makes it extremely valuable, especially in emergency situations where there's no time to determine a patient's blood type. Only about 7% of the population has O- blood type.
            </p>

            <p className="text-base sm:text-lg">
              <strong className="text-white">Type AB+</strong> is the universal recipient, meaning people with this blood type can receive blood from any other type. However, AB+ blood can only be donated to other AB+ recipients. This type is relatively rare, found in only about 3% of the population.
            </p>

            <p className="text-base sm:text-lg">
              <strong className="text-white">Type O+</strong> is the most common blood type, found in approximately 38% of the population. While O+ can donate to O+, A+, B+, and AB+ recipients, it can only receive from O+ and O- donors.
            </p>

            <p className="text-base sm:text-lg">
              <strong className="text-white">Type A+</strong> is the second most common, found in about 34% of people. A+ blood can be donated to A+ and AB+ recipients, and can receive from A+, A-, O+, and O- donors.
            </p>

            <p className="text-base sm:text-lg">
              Understanding blood type compatibility is crucial for safe blood transfusions. When incompatible blood types are mixed, the recipient's immune system will attack the donated blood cells, which can be life-threatening.
            </p>
          </div>
        )

      case 'timeframe':
        return (
          <div className="space-y-6 text-gray-200 leading-relaxed">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Blood Donation Timeframes</h3>
            
            <p className="text-base sm:text-lg">
              <strong className="text-white">Whole Blood Donation</strong> is the most common type of donation. The actual donation process takes about 10-15 minutes, during which approximately one pint of blood is collected. You can donate whole blood every 56 days (8 weeks), which allows your body enough time to replenish the red blood cells. Most people need about 24 hours to fully recover after a whole blood donation.
            </p>

            <p className="text-base sm:text-lg">
              <strong className="text-white">Platelet Donation</strong> takes longer, typically 1-2 hours, because platelets are separated from your blood and the remaining components are returned to your body. The good news is that you can donate platelets more frequently - every 7 days, up to 24 times per year. Your body replenishes platelets quickly, usually within 48 hours.
            </p>

            <p className="text-base sm:text-lg">
              <strong className="text-white">Plasma Donation</strong> takes about 1-1.5 hours. During this process, plasma is separated from your blood and the rest is returned to you. You can donate plasma every 28 days. Plasma is mostly water, so your body can replace it quickly, typically within 24 hours.
            </p>

            <p className="text-base sm:text-lg">
              <strong className="text-white">Double Red Cell Donation</strong> is a process where two units of red blood cells are collected. This takes about 30-45 minutes. Because more red blood cells are collected, you need to wait longer between donations - 112 days (16 weeks) - to allow your body to fully recover. Recovery time is typically 24-48 hours.
            </p>

            <p className="text-base sm:text-lg">
              It's important to follow these timeframes to ensure your health and safety. Donating too frequently can lead to iron deficiency and other health issues. Always consult with the donation center staff if you have questions about when you can donate again.
            </p>
          </div>
        )

      case 'prerequisites':
        return (
          <div className="space-y-6 text-gray-200 leading-relaxed">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Blood Donation Prerequisites</h3>
            
            <p className="text-base sm:text-lg">
              <strong className="text-white">Age Requirements:</strong> To donate blood, you must be at least 17 years old. In some states, 16-year-olds can donate with parental consent. There is no upper age limit for blood donation as long as you are in good health. Many regular donors continue donating well into their 70s and 80s.
            </p>

            <p className="text-base sm:text-lg">
              <strong className="text-white">Weight Requirements:</strong> You must weigh at least 110 pounds (50 kg) to donate blood. This requirement ensures that your body has enough blood volume to safely donate. For different types of donations, such as double red cell donation, weight requirements may be higher (typically 150 pounds or more).
            </p>

            <p className="text-base sm:text-lg">
              <strong className="text-white">Health Requirements:</strong> You must be in good general health and feel well on the day of donation. Your temperature should be normal, and your blood pressure must be within acceptable ranges. Your hemoglobin level must be at least 12.5 g/dL for women and 13.0 g/dL for men. This is checked with a quick finger prick test before donation.
            </p>

            <p className="text-base sm:text-lg">
              <strong className="text-white">Medical Conditions:</strong> You cannot donate if you have active infections or are currently ill. If you've had a recent tattoo or piercing, you'll need to wait 3-12 months depending on your location's regulations. Pregnant or breastfeeding women should wait until after delivery and weaning. Recent major surgery requires a waiting period of 6-12 months. Travel to certain countries may also require a deferral period.
            </p>

            <p className="text-base sm:text-lg">
              <strong className="text-white">Medications:</strong> Most medications are acceptable for blood donation. However, if you're taking antibiotics, you must wait until you've completed the full course. Blood thinners may require special consideration and consultation with the donation center. If you're unsure about your medications, it's best to call ahead and ask.
            </p>

            <p className="text-base sm:text-lg">
              <strong className="text-white">Lifestyle Factors:</strong> You cannot donate if you have used intravenous drugs (except as prescribed by a doctor), engaged in high-risk sexual behavior, or have had hepatitis or HIV. Certain types of cancer may also disqualify you from donating. The donation center will conduct a confidential health screening to determine your eligibility.
            </p>
          </div>
        )

      case 'benefits':
        return (
          <div className="space-y-6 text-gray-200 leading-relaxed">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Benefits of Blood Donation</h3>
            
            <p className="text-base sm:text-lg">
              <strong className="text-white">Health Benefits:</strong> Regular blood donation offers several health advantages. It can help reduce the risk of heart disease and stroke by lowering blood viscosity and reducing iron stores. Donating blood burns approximately 650 calories per donation. The process also stimulates your body to produce new blood cells, which can help maintain healthy blood cell production. Additionally, you receive a free mini health screening that includes checking your blood pressure, pulse, and hemoglobin levels.
            </p>

            <p className="text-base sm:text-lg">
              <strong className="text-white">Emotional Benefits:</strong> Donating blood provides a profound sense of fulfillment and purpose. Knowing that your donation can save up to three lives creates a positive emotional impact. Many donors report feeling less stressed and more connected to their community. The act of giving without expecting anything in return can significantly boost your mood and overall sense of well-being.
            </p>

            <p className="text-base sm:text-lg">
              <strong className="text-white">Medical Benefits:</strong> Regular blood donation allows for early detection of potential health issues. The health screening process can identify problems like high blood pressure or low hemoglobin before they become serious. You'll also learn your blood type, which can be useful information for medical purposes. Regular monitoring of your iron levels helps prevent iron overload, which can be harmful to your health.
            </p>

            <p className="text-base sm:text-lg">
              <strong className="text-white">Community Impact:</strong> Your donation directly helps people in your local community. Blood is needed for surgeries, cancer treatments, trauma care, and chronic illnesses. By donating regularly, you become part of a lifesaving network that ensures blood is available when and where it's needed most. Many blood banks maintain a registry of regular donors who can be called upon during emergencies.
            </p>

            <p className="text-base sm:text-lg">
              <strong className="text-white">Long-term Benefits:</strong> Studies have shown that regular blood donors tend to have lower rates of certain diseases, including heart disease and certain types of cancer. The regular health check-ups that come with donation help you stay aware of your health status. Many donors find that the routine of regular donation helps them maintain a healthier lifestyle overall.
            </p>
          </div>
        )

      case 'safety':
        return (
          <div className="space-y-6 text-gray-200 leading-relaxed">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Safety Measures in Blood Donation</h3>
            
            <p className="text-base sm:text-lg">
              <strong className="text-white">Sterile Equipment:</strong> All equipment used during blood donation is sterile, single-use, and disposed of immediately after each donation. The needles are never reused under any circumstances. Each donor receives a brand new, sealed collection kit that is opened in front of them. This ensures complete safety and eliminates any risk of cross-contamination between donors.
            </p>

            <p className="text-base sm:text-lg">
              <strong className="text-white">Trained Staff:</strong> All phlebotomists and medical staff at blood donation centers are highly trained and certified professionals. They follow strict safety protocols established by health organizations. Staff members undergo regular training and certification to ensure they stay current with the latest safety procedures and techniques. They are trained to recognize and respond to any adverse reactions immediately.
            </p>

            <p className="text-base sm:text-lg">
              <strong className="text-white">Health Screening:</strong> Every donor undergoes a thorough health screening before donation. This includes a confidential questionnaire about your medical history, travel history, and lifestyle factors. Your vital signs are checked, including temperature, blood pressure, pulse, and hemoglobin levels. This comprehensive screening ensures that donation is safe for both you and the recipient of your blood.
            </p>

            <p className="text-base sm:text-lg">
              <strong className="text-white">Post-Donation Care:</strong> After donation, you are monitored for a short period to ensure you're feeling well. You're provided with refreshments and snacks to help your body recover. Staff members are available to assist if you feel lightheaded or experience any discomfort. You're given clear instructions on what to do after leaving the donation center, including staying hydrated and avoiding strenuous activities for a few hours.
            </p>

            <p className="text-base sm:text-lg">
              <strong className="text-white">Blood Testing:</strong> All donated blood is tested for infectious diseases including HIV, hepatitis B and C, syphilis, and other pathogens. This testing is done using highly sensitive and accurate methods. If any issues are detected, the blood is discarded and the donor is notified confidentially. This multi-layered testing ensures the safety of the blood supply.
            </p>

            <p className="text-base sm:text-lg">
              <strong className="text-white">Regulatory Compliance:</strong> Blood donation centers operate under strict regulations set by health authorities. They are regularly inspected and must meet rigorous standards for safety, cleanliness, and quality control. All procedures are documented and traceable, ensuring accountability and continuous improvement in safety practices.
            </p>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <section className="w-full py-8 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3">
            Blood Donation <span className="text-red-400">Information</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Everything you need to know about blood donation
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 border-b border-white/20 pb-2">
            {tabs.map((tab) => {
              const IconComponent = tab.icon
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 sm:px-6 py-3 rounded-t-lg transition-all duration-300 ${
                    isActive
                      ? 'bg-white/10 backdrop-blur-md border-t-2 border-x-2 border-red-400/50 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-white/5 border-t-2 border-x-2 border-transparent'
                  }`}
                >
                  <IconComponent className={`h-5 w-5 ${isActive ? 'text-red-400' : ''}`} />
                  <span className="font-semibold text-sm sm:text-base">{tab.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Tab Content - Paragraph Style */}
        <div className="h-100 overflow-y-scroll custom-scrollbar">
          <div className="bg-white/5 backdrop-blur-md rounded p-4 border border-white/10">
            {renderContent()}
          </div>
        </div>
      </div>
    </section>
  )
}
