import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import PageTitle from "../components/PageTitle";
import { IVideo } from "../type";

interface IParams {
  id: string;
}

const Watch: React.FC = () => {
  const history = useHistory();
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

  const EditHandler = () => {
    history.push(`/videos/${video?.id}/edit`, { video });
  };

  return (
    <div>
      <PageTitle title={`Watching "${video?.title}"`} />
      <h1>Watch Utube video: {video?.title}</h1>
      <li>Posted: {video?.createdAt}</li>
      <li>
        {video?.views && video?.views > 1
          ? `${video.views} views`
          : `${video?.views} view`}
      </li>
      <li>Comments: {video?.comments}</li>
      <button onClick={EditHandler}>Edit Video</button>
    </div>
  );
};

export default Watch;
