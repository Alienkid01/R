import React from 'react';
import { Home, Search, PlusSquare, Heart, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white border-b fixed w-full top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold">Social</h1>
          </div>
          
          <div className="hidden md:block flex-1 max-w-xs mx-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                placeholder="Search"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <button className="text-gray-700 hover:text-gray-900">
              <Home className="h-6 w-6" />
            </button>
            <button className="text-gray-700 hover:text-gray-900">
              <PlusSquare className="h-6 w-6" />
            </button>
            <button className="text-gray-700 hover:text-gray-900">
              <Heart className="h-6 w-6" />
            </button>
            <button className="text-gray-700 hover:text-gray-900">
              <User className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}