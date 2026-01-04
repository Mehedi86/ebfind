"use client"

import React from 'react'
import { Calendar, MapPin, Droplet, Clock, Phone, User, AlertCircle } from 'lucide-react'
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
    <div className="bg-white/40 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="bg-red-100 p-3 rounded-lg">
                <Droplet className="h-6 w-6 text-red-600" fill="currentColor" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">{request.bloodType}</h3>
                <p className="text-sm text-gray-500">Blood Type</p>
              </div>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getUrgencyColor(request.urgency)}`}>
              {getUrgencyLabel(request.urgency)}
            </span>
          </div>

          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-gray-700">
              <User className="h-4 w-4 text-gray-500" />
              <span className="font-medium">{request.patientName}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <MapPin className="h-4 w-4 text-gray-500" />
              <span>{request.location}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Droplet className="h-4 w-4 text-gray-500" />
              <span>{request.units} unit{request.units > 1 ? 's' : ''} needed</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Clock className="h-4 w-4 text-gray-500" />
              <span>{request.time}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 md:min-w-50">
          <div className="flex items-center gap-2 text-gray-700 mb-2">
            <Phone className="h-4 w-4 text-gray-500" />
            <span className="font-medium">{request.contact}</span>
          </div>
          <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
            <AlertCircle className="h-4 w-4 mr-2" />
            Respond to Request
          </Button>
        </div>
      </div>
    </div>
  )

  const DateSection = ({ 
    title, 
    date, 
    requests 
  }: { 
    title: string
    date: Date
    requests: typeof mockRequests 
  }) => {
    if (requests.length === 0) return null

    const formattedDate = date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })

    return (
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-red-600 p-2 rounded-lg">
            <Calendar className="h-5 w-5 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">{title}</h2>
            <p className="text-sm text-gray-200">{formattedDate}</p>
          </div>
          <span className="ml-auto px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold">
            {requests.length} request{requests.length > 1 ? 's' : ''}
          </span>
        </div>
        <div className="space-y-4">
          {requests.map((request) => (
            <RequestCard key={request.id} request={request} />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-2">
            Emergency Blood Requests
          </h1>
          <p className="text-lg text-gray-200">
            Recent requests for blood donations. Help save lives today.
          </p>
        </div>

        {/* Requests by Date */}
        <div>
          {todayRequests.length > 0 && (
            <DateSection 
              title="Today" 
              date={today} 
              requests={todayRequests} 
            />
          )}

          {yesterdayRequests.length > 0 && (
            <DateSection 
              title="Yesterday" 
              date={yesterday} 
              requests={yesterdayRequests} 
            />
          )}

          {todayRequests.length === 0 && yesterdayRequests.length === 0 && (
            <div className="bg-white rounded-lg shadow-md p-12 text-center">
              <Droplet className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No Recent Requests
              </h3>
              <p className="text-gray-500">
                There are no blood requests for today or yesterday.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
