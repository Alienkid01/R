import React, { useState } from 'react';
import type { Story } from '../types';

const stories: Story[] = [
  {
    id: 1,
    username: "sarah_designs",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
  },
  {
    id: 2,
    username: "alex.photo",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
  },
  {
    id: 3,
    username: "mike.trek",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop"
  },
  {
    id: 4,
    username: "emma.art",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
  },
  {
    id: 5,
    username: "tom.code",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
  }
];

export default function Stories() {
  const [viewedStories, setViewedStories] = useState<Set<number>>(new Set());

  const handleStoryClick = (id: number) => {
    setViewedStories(prev => new Set(prev).add(id));
    // In a real app, this would open a story viewer
    alert('Story viewer would open here');
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
        {stories.map((story) => (
          <button
            key={story.id}
            className="flex flex-col items-center space-y-1 flex-shrink-0"
            onClick={() => handleStoryClick(story.id)}
          >
            <div className={`w-16 h-16 rounded-full p-[2px] ${
              viewedStories.has(story.id)
                ? 'bg-gray-300'
                : 'bg-gradient-to-tr from-yellow-400 to-pink-600'
            }`}>
              <img
                src={story.avatar}
                alt={story.username}
                className="rounded-full border-2 border-white w-full h-full object-cover"
              />
            </div>
            <span className="text-xs text-gray-500">{story.username}</span>
          </button>
        ))}
      </div>
    </div>
  );
}