import React, { useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import Stories from './components/Stories';
import Post from './components/Post';
import Suggestions from './components/Suggestions';
import type { Post as PostType } from './types';

const initialPosts: PostType[] = [
  {
    id: 1,
    username: "sarah_designs",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    image: "https://images.unsplash.com/photo-1707343843437-caacff5cfa74?w=800&h=800&fit=crop",
    caption: "Beautiful sunset at the beach 🌅 #photography #nature",
    likes: 1234,
    comments: [
      { id: 1, username: "alex.photo", text: "Amazing shot! 📸", timeAgo: "2h" },
      { id: 2, username: "travel_lover", text: "The colors are incredible!", timeAgo: "1h" }
    ],
    timeAgo: "2 hours ago"
  },
  {
    id: 2,
    username: "alex.photo",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    image: "https://images.unsplash.com/photo-1707345512638-997d31a10eaa?w=800&h=800&fit=crop",
    caption: "City lights never looked better ✨ #cityscape #nightphotography",
    likes: 892,
    comments: [
      { id: 3, username: "photo_enthusiast", text: "Love the composition!", timeAgo: "30m" }
    ],
    timeAgo: "5 hours ago"
  }
];

function App() {
  const [posts, setPosts] = useState<PostType[]>(initialPosts);

  const handleLike = useCallback((postId: number) => {
    setPosts(currentPosts => 
      currentPosts.map(post => 
        post.id === postId 
          ? { ...post, likes: post.isLiked ? post.likes - 1 : post.likes + 1, isLiked: !post.isLiked }
          : post
      )
    );
  }, []);

  const handleComment = useCallback((postId: number, text: string) => {
    setPosts(currentPosts =>
      currentPosts.map(post =>
        post.id === postId
          ? {
              ...post,
              comments: [
                ...post.comments,
                {
                  id: Date.now(),
                  username: 'johndoe',
                  text,
                  timeAgo: 'Just now'
                }
              ]
            }
          : post
      )
    );
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <Navbar />
      
      <div className="max-w-screen-xl mx-auto pt-20 px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Stories />
          
          {posts.map((post) => (
            <Post 
              key={post.id} 
              {...post} 
              onLike={() => handleLike(post.id)}
              onComment={(text) => handleComment(post.id, text)}
            />
          ))}
        </div>
        
        <div className="hidden lg:block">
          <div className="sticky top-24">
            <div className="flex items-center space-x-4 mb-6">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop"
                alt="Your profile"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h2 className="font-semibold">johndoe</h2>
                <p className="text-gray-500 text-sm">John Doe</p>
              </div>
            </div>
            
            <Suggestions />
          </div>
        </div>
      </div>
    </div>
  );
}