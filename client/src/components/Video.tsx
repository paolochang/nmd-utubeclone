import React from "react";
import { IVideo } from "../type";

const Video: React.FC<IVideo> = ({
  id,
  title,
  rating,
  comments,
  createdAt,
  views,
}) => {
  return (
    <div>
      <h4>{title}</h4>
      <li>{rating}/5</li>
      <li>{comments} comments</li>
      <li>Posted {createdAt}</li>
      <li>{views} views</li>
    </div>
  );
};

export default Video;
