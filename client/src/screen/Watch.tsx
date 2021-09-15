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
        setVideo(res.data.video);
      }
    };
    fetchVideo();
  }, [id]);

  const EditHandler = () => {
    history.push(`/videos/${video?._id}/edit`, { video });
  };

  return (
    <div>
      {video !== null ? (
        <>
          <PageTitle title={`Watching "${video?.title}"`} />
          <h1>Watch Utube video: {video?.title}</h1>
          <li>Description: {video?.description}</li>
          <li>Hashtags: {video?.hashtags}</li>
          <li>Posted: {video?.createdAt}</li>
          <li>
            {video?.meta.views && video?.meta.views > 1
              ? `${video.meta.views} views`
              : `${video?.meta.views} view`}
          </li>
          <li>Comments: {video?.comments}</li>
          <button onClick={EditHandler}>Edit Video</button>{" "}
        </>
      ) : (
        <h1>Video is not found.</h1>
      )}
    </div>
  );
};

export default Watch;
