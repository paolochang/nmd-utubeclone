import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import { SubmitHandler, useForm } from "react-hook-form";
import { IVideo } from "../type";
import axios from "axios";

interface ILocation {
  video: IVideo;
}

interface IEditForm {
  title: string;
}

const Edit: React.FC = () => {
  const location = useLocation<ILocation>();
  const history = useHistory();
  const { register, handleSubmit } = useForm({
    defaultValues: { title: location.state.video.title },
  });

  useEffect(() => {
    console.log(location.state.video.title);
  }, [location]);

  const postVideoInfo = async (id: string, title: string) => {
    const res = await axios.post(`/videos/${id}/edit`, {
      id,
      title,
    });
    if (res.status) {
      history.push(`/videos/${id}`);
    }
  };

  const updateHandler: SubmitHandler<IEditForm> = (data) => {
    console.log(data);
    postVideoInfo(location.state.video._id, data.title);
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
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Edit;
