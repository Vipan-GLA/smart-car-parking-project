import React from 'react';
import { getFromLocalStorage } from '../../utils/localStorage';

export const TheaterView = () => {
  const slots = getFromLocalStorage('parkingSlots', []);
  const floors = [...new Set(slots.map(slot => slot.floor))].sort();

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Parking Layout</h2>
      
      <div className="mb-8">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
            <span>Available</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
            <span>Occupied</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
            <span>Handicap</span>
          </div>
        </div>
      </div>

      {floors.map(floor => (
        <div key={floor} className="mb-12">
          <h3 className="text-xl font-semibold mb-4">Floor {floor}</h3>
          <div className="bg-gray-100 p-8 rounded-lg">
            <div className="grid grid-cols-6 gap-4">
              {slots
                .filter(slot => slot.floor === floor)
                .map(slot => (
                  <button
                    key={slot.id}
                    disabled={slot.isOccupied}
                    className={`
                      aspect-square rounded-lg flex items-center justify-center
                      transition-all duration-300 relative
                      ${slot.isOccupied 
                        ? 'bg-red-500 cursor-not-allowed' 
                        : slot.type === 'handicap'
                          ? 'bg-blue-500 hover:bg-blue-600'
                          : 'bg-green-500 hover:bg-green-600'
                      }
                    `}
                  >
                    <span className="text-white font-medium">{slot.number}</span>
                    {slot.type === 'handicap' && (
                      <span className="absolute -top-2 -right-2 bg-white text-blue-500 rounded-full w-4 h-4 flex items-center justify-center text-xs">
                        ♿
                      </span>
                    )}
                  </button>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};