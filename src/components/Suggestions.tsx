import React, { useState } from 'react';
import type { Suggestion } from '../types';

const suggestions: Suggestion[] = [
  {
    id: 1,
    username: "photography_pro",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop",
    relation: "Followed by alex.photo"
  },
  {
    id: 2,
    username: "travel_junkie",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop",
    relation: "Followed by mike.trek"
  },
  {
    id: 3,
    username: "art_gallery",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop",
    relation: "Followed by emma.art"
  }
];

export default function Suggestions() {
  const [following, setFollowing] = useState<Set<number>>(new Set());

  const toggleFollow = (id: number) => {
    setFollowing(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-gray-500 font-semibold">Suggestions For You</h3>
        <button className="text-sm font-semibold text-gray-900">See All</button>
      </div>
      
      <div className="space-y-4">
        {suggestions.map((suggestion) => (
          <div key={suggestion.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src={suggestion.avatar}
                alt={suggestion.username}
                className="w-9 h-9 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-sm">{suggestion.username}</p>
                <p className="text-gray-500 text-xs">{suggestion.relation}</p>
              </div>
            </div>
            <button
              onClick={() => toggleFollow(suggestion.id)}
              className={`text-sm font-semibold ${
                following.has(suggestion.id)
                  ? 'text-gray-900'
                  : 'text-blue-500'
              }`}
            >
              {following.has(suggestion.id) ? 'Following' : 'Follow'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}