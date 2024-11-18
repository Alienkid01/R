import React, { useState, memo } from 'react';
import { Heart, MessageCircle, Share2, MoreHorizontal, Bookmark } from 'lucide-react';
import type { Post as PostType } from '../types';
import CommentList from './CommentList';
import CommentInput from './CommentInput';

interface PostProps extends PostType {
  onLike: () => void;
  onComment: (text: string) => void;
}

const Post = memo(function Post({
  username,
  avatar,
  image,
  caption,
  likes,
  comments,
  timeAgo,
  isLiked = false,
  isBookmarked = false,
  onLike,
  onComment
}: PostProps) {
  const [isBookmarkedState, setIsBookmarked] = useState(isBookmarked);
  const [showComments, setShowComments] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src={avatar} 
            alt={username} 
            className="w-10 h-10 rounded-full object-cover"
            loading="lazy"
          />
          <div>
            <h3 className="font-semibold text-gray-800">{username}</h3>
            <p className="text-gray-500 text-sm">{timeAgo}</p>
          </div>
        </div>
        <button className="text-gray-500 hover:text-gray-700">
          <MoreHorizontal size={20} />
        </button>
      </div>
      
      <img 
        src={image} 
        alt="Post content" 
        className="w-full aspect-square object-cover"
        loading="lazy"
      />
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <button 
              className={`${isLiked ? 'text-red-500' : 'text-gray-500'} hover:text-red-500 transition`}
              onClick={onLike}
            >
              <Heart size={24} fill={isLiked ? 'currentColor' : 'none'} />
            </button>
            <button 
              className="text-gray-500 hover:text-blue-500 transition"
              onClick={() => setShowComments(!showComments)}
            >
              <MessageCircle size={24} />
            </button>
            <button className="text-gray-500 hover:text-green-500 transition">
              <Share2 size={24} />
            </button>
          </div>
          <button 
            className={`${isBookmarkedState ? 'text-yellow-500' : 'text-gray-500'} hover:text-yellow-500 transition`}
            onClick={() => setIsBookmarked(!isBookmarkedState)}
          >
            <Bookmark size={24} fill={isBookmarkedState ? 'currentColor' : 'none'} />
          </button>
        </div>
        
        <div className="mb-2">
          <span className="font-semibold">{likes.toLocaleString()} likes</span>
        </div>
        
        <div className="mb-2">
          <span className="font-semibold mr-2">{username}</span>
          <span className="text-gray-800">{caption}</span>
        </div>
        
        {comments.length > 0 && (
          <button 
            className="text-gray-500 text-sm mb-2"
            onClick={() => setShowComments(!showComments)}
          >
            {showComments ? 'Hide comments' : `View all ${comments.length} comments`}
          </button>
        )}
        
        {showComments && <CommentList comments={comments} showAll={true} />}
        <CommentInput onSubmit={onComment} />
      </div>
    </div>
  );
});

export default Post;