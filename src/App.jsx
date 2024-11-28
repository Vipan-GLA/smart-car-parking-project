import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { LoginForm } from './components/auth/LoginForm';
import { RegisterForm } from './components/auth/RegisterForm';
import { ForgotPassword } from './components/auth/ForgotPassword';
import { SlotList } from './components/parking/SlotList';
import { TheaterView } from './components/parking/TheaterView';
import { DashboardStats } from './components/dashboard/DashboardStats';
import { BookingList } from './components/bookings/BookingList';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/slots" element={<SlotList />} />
          <Route path="/theater-view" element={<TheaterView />} />
          <Route path="/bookings" element={<BookingList />} />
          <Route path="/dashboard" element={<DashboardStats />} />
          <Route path="/" element={
            <div className="text-center py-20">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Welcome to SmartPark
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Find and book parking spots with ease
              </p>
              <div className="flex justify-center gap-4 mb-12">
                <Link
                  to="/slots"
                  className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  List View
                </Link>
                <Link
                  to="/theater-view"
                  className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Theater View
                </Link>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                  alt="Parking garage"
                  className="rounded-lg shadow-xl mx-auto max-w-4xl"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg flex items-center justify-center">
                  <div className="text-white">
                    <h2 className="text-3xl font-bold mb-4">Smart Parking Solution</h2>
                    <p className="text-lg mb-6">Book your parking spot in advance</p>
                  </div>
                </div>
              </div>
            </div>
          } />
        </Routes>
      </main>
    </div>
  );
}

export default App;