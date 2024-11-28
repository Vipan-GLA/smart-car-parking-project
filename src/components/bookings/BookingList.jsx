import React from 'react';
import { getFromLocalStorage } from '../../utils/localStorage';
import { format } from 'date-fns';
import { Calendar, Clock, Car } from 'lucide-react';

export const BookingList = () => {
  const bookings = getFromLocalStorage('parkingBookings', []);

  if (bookings.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">My Bookings</h2>
        <div className="text-center py-12">
          <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500">No bookings found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">My Bookings</h2>
      <div className="grid gap-6">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg"
          >
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center">
                <Car className="h-5 w-5 text-indigo-600 mr-2" />
                <div>
                  <p className="text-sm text-gray-500">Vehicle</p>
                  <p className="font-semibold">{booking.vehicleNumber}</p>
                </div>
              </div>

              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-indigo-600 mr-2" />
                <div>
                  <p className="text-sm text-gray-500">Booked On</p>
                  <p className="font-semibold">
                    {format(new Date(booking.bookingTime), 'MMM dd, yyyy HH:mm')}
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <Clock className="h-5 w-5 text-indigo-600 mr-2" />
                <div>
                  <p className="text-sm text-gray-500">Duration</p>
                  <p className="font-semibold">{booking.duration} hours</p>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Name</p>
                  <p className="font-semibold">{booking.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-semibold">{booking.phoneNumber}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};