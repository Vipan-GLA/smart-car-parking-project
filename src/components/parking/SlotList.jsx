import React, { useState, useEffect } from 'react';
import { ParkingSlot } from './ParkingSlot';
import { BookingModal } from './BookingModal';
import { saveToLocalStorage, getFromLocalStorage } from '../../utils/localStorage';

const initialSlots = Array.from({ length: 12 }, (_, i) => ({
  id: `slot-${i + 1}`,
  number: `A${i + 1}`,
  isOccupied: false,
  type: i % 6 === 0 ? 'handicap' : i % 5 === 0 ? 'electric' : 'standard',
  floor: Math.floor(i / 4) + 1,
}));

export const SlotList = () => {
  const [slots, setSlots] = useState(() => getFromLocalStorage('parkingSlots', initialSlots));
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [bookings, setBookings] = useState(() => getFromLocalStorage('parkingBookings', []));

  useEffect(() => {
    saveToLocalStorage('parkingSlots', slots);
  }, [slots]);

  useEffect(() => {
    saveToLocalStorage('parkingBookings', bookings);
  }, [bookings]);

  const handleBook = (slot) => {
    setSelectedSlot(slot);
  };

  const handleFree = (slotId) => {
    setSlots(slots.map(slot => 
      slot.id === slotId ? { ...slot, isOccupied: false } : slot
    ));
    setBookings(bookings.filter(booking => booking.slotId !== slotId));
  };

  const handleBookingSubmit = (bookingData) => {
    const newBooking = {
      ...bookingData,
      id: Date.now().toString(),
    };
    
    setBookings([...bookings, newBooking]);
    setSlots(slots.map(slot => 
      slot.id === bookingData.slotId ? { ...slot, isOccupied: true } : slot
    ));
    setSelectedSlot(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Available Parking Slots</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {slots.map((slot) => (
          <ParkingSlot
            key={slot.id}
            slot={slot}
            onBook={handleBook}
            onFree={handleFree}
          />
        ))}
      </div>

      {selectedSlot && (
        <BookingModal
          slot={selectedSlot}
          onClose={() => setSelectedSlot(null)}
          onSubmit={handleBookingSubmit}
        />
      )}
    </div>
  );
};