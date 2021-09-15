import React from "react";
import { useHistory, useLocation } from "react-router";
import { SubmitHandler, useForm } from "react-hook-form";
import { IVideo } from "../type";
import axios from "axios";

interface ILocation {
  video: IVideo;
}

interface IEditForm {
  title: string;
  description: string;
  hashtags: string;
}

const Edit: React.FC = () => {
  const location = useLocation<ILocation>();
  const history = useHistory();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: location.state.video.title,
      description: location.state.video.description,
      hashtags: location.state.video.hashtags,
    },
  });

  const postVideoInfo = async (id: string, video: IEditForm) => {
    const res = await axios.post(`/videos/${id}/edit`, {
      id,
      title: video.title,
      description: video.description,
      hashtags: video.hashtags.toString(),
    });
    if (res.status) {
      history.push(`/videos/${id}`);
    }
  };

  const updateHandler: SubmitHandler<IEditForm> = (data) => {
    postVideoInfo(location.state.video._id, data);
  };

  return (
    <div>
      <h1>Edit Video</h1>
      <form onSubmit={handleSubmit(updateHandler)}>
        <label>Title</label>
        <input
          {...register("title", { required: true, maxLength: 80 })}
          type="text"
          placeholder="New title"
        />
        <label>Description</label>
        <input
          {...register("description", { required: true })}
          type="text"
          placeholder="Description"
        />
        <label>Hashtags</label>
        <input
          {...register("hashtags", { required: true })}
          type="text"
          placeholder="Hashtags separated by comma"
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Edit;
