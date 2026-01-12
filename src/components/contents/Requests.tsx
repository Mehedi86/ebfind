"use client"

import React from 'react'
import Link from 'next/link'
import { Calendar, MapPin, Droplet, Clock, Phone, User, AlertCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Mock data - replace with actual data from your API
const mockRequests = [
    {
        id: 1,
        bloodType: 'O+',
        patientName: 'John Doe',
        location: 'City Hospital, Downtown',
        urgency: 'urgent',
        units: 2,
        contact: '+1234567890',
        date: new Date(), // Today
        time: '2 hours ago'
    },
    {
        id: 2,
        bloodType: 'A-',
        patientName: 'Sarah Smith',
        location: 'Medical Center, Uptown',
        urgency: 'high',
        units: 1,
        contact: '+1234567891',
        date: new Date(), // Today
        time: '5 hours ago'
    },
    {
        id: 3,
        bloodType: 'B+',
        patientName: 'Mike Johnson',
        location: 'General Hospital, Midtown',
        urgency: 'normal',
        units: 3,
        contact: '+1234567892',
        date: new Date(Date.now() - 86400000), // Yesterday
        time: 'Yesterday, 3:00 PM'
    },
    {
        id: 4,
        bloodType: 'AB-',
        patientName: 'Emily Brown',
        location: 'Emergency Care, Westside',
        urgency: 'urgent',
        units: 1,
        contact: '+1234567893',
        date: new Date(Date.now() - 86400000), // Yesterday
        time: 'Yesterday, 10:00 AM'
    },
    {
        id: 5,
        bloodType: 'AB-',
        patientName: 'Emily Brown',
        location: 'Emergency Care, Westside',
        urgency: 'urgent',
        units: 1,
        contact: '+1234567893',
        date: new Date(Date.now() - 86400000), // Yesterday
        time: 'Yesterday, 10:00 AM'
    },
]

export default function Requests() {
    // Filter requests for today and yesterday
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    const yesterday = new Date(today)
    yesterday.setDate(yesterday.getDate() - 1)

    const todayRequests = mockRequests.filter(req => {
        const reqDate = new Date(req.date)
        reqDate.setHours(0, 0, 0, 0)
        return reqDate.getTime() === today.getTime()
    })

    const yesterdayRequests = mockRequests.filter(req => {
        const reqDate = new Date(req.date)
        reqDate.setHours(0, 0, 0, 0)
        return reqDate.getTime() === yesterday.getTime()
    })

    const getUrgencyColor = (urgency: string) => {
        switch (urgency) {
            case 'urgent':
                return 'bg-red-600 text-white'
            case 'high':
                return 'bg-orange-500 text-white'
            case 'normal':
                return 'bg-blue-500 text-white'
            default:
                return 'bg-gray-500 text-white'
        }
    }

    const getUrgencyLabel = (urgency: string) => {
        switch (urgency) {
            case 'urgent':
                return 'Urgent'
            case 'high':
                return 'High Priority'
            case 'normal':
                return 'Normal'
            default:
                return urgency
        }
    }

    const RequestCard = ({ request }: { request: typeof mockRequests[0] }) => (
        <div className="bg-white/10 backdrop-blur-sm rounded shadow-md hover:shadow-lg transition-shadow p-3 sm:p-4 border border-white/30 ">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                    <div className="bg-red-100 p-1.5 sm:p-2 rounded-lg shrink-0">
                        <Droplet className="h-4 w-4 sm:h-5 sm:w-5 text-red-600" fill="currentColor" />
                    </div>
                    <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1">
                            <h3 className="text-base sm:text-lg font-bold text-gray-900">{request.bloodType}</h3>
                            <span className={`px-2 py-0.5 rounded-full text-sm font-semibold ${getUrgencyColor(request.urgency)}`}>
                                {getUrgencyLabel(request.urgency)}
                            </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-x-2 sm:gap-x-4 gap-y-1 text-sm text-gray-700 font-semibold">
                            <div className="flex items-center gap-1 text-neutral-900">
                                <User className="h-3 w-3 shrink-0" />
                                <span className="truncate max-w-30sm:max-w-none">{request.patientName}</span>
                            </div>
                            <div className="flex items-center gap-1 text-neutral-900">
                                <MapPin className="h-3 w-3 shrink-0" />
                                <span className="truncate max-w-30 sm:max-w-none">{request.location}</span>
                            </div>
                            <div className="flex items-center gap-1 text-neutral-900">
                                <Droplet className="h-3 w-3 shrink-0" />
                                <span>{request.units} unit{request.units > 1 ? 's' : ''}</span>
                            </div>
                            <div className="flex items-center gap-1 text-neutral-900">
                                <Clock className="h-3 w-3 shrink-0" />
                                <span className="hidden xs:inline">{request.time}</span>
                                <span className="xs:hidden text-sm">{request.time.split(',')[0]}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2 sm:gap-2 shrink-0 border-t sm:border-t-0 pt-2 sm:pt-0">
                    <div className="flex items-center gap-1 text-gray-800 text-sm sm:text-sm">
                        <Phone className="h-3 w-3 text-gray-600 shrink-0" />
                        <span className="font-medium hidden sm:inline">{request.contact}</span>
                        <span className="font-medium sm:hidden text-sm">{request.contact.slice(0, 8)}...</span>
                    </div>
                    <Button size="sm" className="bg-red-900 hover:bg-red-700 text-white whitespace-nowrap text-sm sm:text-sm px-3 sm:px-4 cursor-pointer">
                        <AlertCircle className="h-3 w-3 mr-1" />
                        <span className="hidden sm:inline">Respond</span>
                        <span className="sm:hidden">Help</span>
                    </Button>
                </div>
            </div>
        </div>
    )

    // Combine requests
    const allRequests = [...todayRequests, ...yesterdayRequests]
    const displayedRequests = allRequests.slice(0, 4)
    const hasMoreRequests = allRequests.length > 4

    return (
        <div className="w-full py-6 sm:py-8 md:py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-6 sm:mb-8 text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
                        Emergency Blood <span className="text-transparent bg-clip-text bg-linear-to-r from-red-400 via-red-500 to-red-400">Requests</span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto px-4">
                        Recent requests for blood donations. <br />Help save lives today.
                    </p>
                </div>

                {/* Requests Container */}
                {displayedRequests.length > 0 ? (
                    <div>
                        <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                            {displayedRequests.map((request) => (
                                <RequestCard key={request.id} request={request} />
                            ))}
                        </div>

                        {hasMoreRequests && (
                            <div className="text-center">
                                <Link href="/requests">
                                    <Button className="w-full sm:w-auto px-3 py-2 mt-4 md:text-lg font-semibold text-white cursor-pointer">
                                        View All Requests
                                        <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 ml-2" />
                                    </Button>
                                </Link>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="bg-white rounded-lg shadow-md p-8 sm:p-12 text-center">
                        <Droplet className="h-12 w-12 sm:h-16 sm:w-16 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">
                            No Recent Requests
                        </h3>
                        <p className="text-sm sm:text-base text-neutral-900">
                            There are no blood requests for today or yesterday.
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}
