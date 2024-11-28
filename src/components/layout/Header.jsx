import React from 'react';
import { Car, Menu, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="bg-indigo-600 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Car className="h-8 w-8" />
            <span className="text-xl font-bold">SmartPark</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/dashboard" className="hover:text-indigo-200">Dashboard</Link>
            <Link to="/slots" className="hover:text-indigo-200">List View</Link>
            <Link to="/theater-view" className="hover:text-indigo-200">Theater View</Link>
            <Link to="/bookings" className="hover:text-indigo-200">My Bookings</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="flex space-x-2">
              <Link
                to="/login"
                className="hover:text-indigo-200 px-3 py-2 rounded-md text-sm font-medium"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-indigo-500 hover:bg-indigo-400 px-3 py-2 rounded-md text-sm font-medium"
              >
                Register
              </Link>
            </div>
            <button className="md:hidden">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};