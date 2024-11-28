import React from 'react';
import { CarFront } from 'lucide-react';

export const ParkingSlot = ({ slot, onBook, onFree }) => {
  const getStatusColor = () => {
    if (slot.isOccupied) return 'bg-red-50 border-red-200';
    return 'bg-green-50 border-green-200 hover:border-green-300 hover:shadow-lg';
  };

  return (
    <div
      className={`p-6 rounded-lg shadow-md border-2 transition-all duration-300 ${getStatusColor()}`}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-xl font-semibold">Slot {slot.number}</span>
        <CarFront className={slot.isOccupied ? 'text-red-500' : 'text-green-500'} />
      </div>
      <div className="space-y-2">
        <p className="text-gray-600">Floor: {slot.floor}</p>
        <p className="text-gray-600">Type: {slot.type}</p>
        <p className={`font-medium ${slot.isOccupied ? 'text-red-600' : 'text-green-600'}`}>
          {slot.isOccupied ? 'Occupied' : 'Available'}
        </p>
        {slot.isOccupied ? (
          <button
            onClick={() => onFree(slot.id)}
            className="mt-4 w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors"
          >
            Free Slot
          </button>
        ) : (
          <button
            onClick={() => onBook(slot)}
            className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Book Now
          </button>
        )}
      </div>
    </div>
  );
};