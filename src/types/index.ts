export interface Post {
  id: number;
  username: string;
  avatar: string;
  image: string;
  caption: string;
  likes: number;
  comments: Comment[];
  timeAgo: string;
  isLiked?: boolean;
  isBookmarked?: boolean;
}

export interface Comment {
  id: number;
  username: string;
  text: string;
  timeAgo: string;
}

export interface Story {
  id: number;
  username: string;
  avatar: string;
}

export interface Suggestion {
  id: number;
  username: string;
  avatar: string;
  relation: string;
}