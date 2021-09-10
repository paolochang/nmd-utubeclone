import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import PageTitle from "../components/PageTitle";
import { IVideo } from "../type";

interface IParams {
  id: string;
}

const Watch: React.FC = () => {
  const { id } = useParams<IParams>();
  const [video, setVideo] = useState<IVideo>();

  useEffect(() => {
    const fetchVideo = async () => {
      const res = await axios.get(`/videos/${id}`);
      if (res.status) {
        setVideo(res.data[0]);
      }
    };
    fetchVideo();
  }, [id]);

  return (
    <div>
      <PageTitle title="Watch" />
      <h1>Watch Utube video: {video?.title}</h1>
      <li>Posted: {video?.createdAt}</li>
      <li>Comments: {video?.comments}</li>
    </div>
  );
};

export default Watch;
