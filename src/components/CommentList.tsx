import React from 'react';
import type { Comment } from '../types';

interface CommentListProps {
  comments: Comment[];
  showAll?: boolean;
}

export default function CommentList({ comments, showAll = false }: CommentListProps) {
  const displayComments = showAll ? comments : comments.slice(0, 2);

  return (
    <div className="space-y-2">
      {displayComments.map((comment) => (
        <div key={comment.id} className="text-sm">
          <span className="font-semibold mr-2">{comment.username}</span>
          <span className="text-gray-800">{comment.text}</span>
          <p className="text-gray-500 text-xs mt-1">{comment.timeAgo}</p>
        </div>
      ))}
    </div>
  );
}