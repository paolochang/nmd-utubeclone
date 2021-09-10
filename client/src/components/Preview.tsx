import React from "react";
import { useHistory } from "react-router";
import { IVideo } from "../type";

const Preview: React.FC<IVideo> = ({
  id,
  title,
  rating,
  comments,
  createdAt,
  views,
}) => {
  const history = useHistory();
  const titleClickHandler = () => {
    history.push(`/videos/${id}`);
  };
  return (
    <div>
      <h4 onClick={titleClickHandler}>{title}</h4>
      <li>{rating}/5</li>
      <li>{comments} comments</li>
      <li>Posted {createdAt}</li>
      <li>{views} views</li>
    </div>
  );
};

export default Preview;
