import React, { useState } from 'react';

interface CommentInputProps {
  onSubmit: (text: string) => void;
}

export default function CommentInput({ onSubmit }: CommentInputProps) {
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      onSubmit(comment);
      setComment('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center border-t mt-4 pt-4">
      <input
        type="text"
        placeholder="Add a comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="flex-1 outline-none text-sm"
      />
      <button
        type="submit"
        disabled={!comment.trim()}
        className="ml-2 text-blue-500 font-semibold text-sm disabled:opacity-50"
      >
        Post
      </button>
    </form>
  );
}