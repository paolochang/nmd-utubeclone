export interface IVideo {
  _id: string;
  title: string;
  description: string;
  createdAt: string;
  hashtags: string[];
  comments: number;
  meta: {
    views: number;
    rating: number;
  };
}
