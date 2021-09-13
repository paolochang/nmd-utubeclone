import React from "react";
import { useHistory } from "react-router";
import { IVideo } from "../type";

const Preview: React.FC<IVideo> = ({
  _id,
  title,
  comments,
  createdAt,
  meta,
}) => {
  const history = useHistory();
  const titleClickHandler = () => {
    history.push(`/videos/${_id}`);
  };
  return (
    <div>
      <h4 onClick={titleClickHandler}>{title}</h4>
      <li>{meta.rating}/5</li>
      <li>{comments} comments</li>
      <li>Posted {createdAt}</li>
      <li>{meta.views > 1 ? `${meta.views} views` : `${meta.views} view`} </li>
    </div>
  );
};

export default Preview;
