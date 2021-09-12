import axios from "axios";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useHistory } from "react-router";

interface IUpload {
  title: string;
}

const Upload: React.FC = () => {
  const history = useHistory();
  const { register, handleSubmit } = useForm<IUpload>();

  const postVideo = async (title: string) => {
    const res = await axios.post(`/upload`, { title });
    if (res.status) {
      history.push("/");
    }
  };

  const onSubmitHandler: SubmitHandler<IUpload> = (data) => {
    postVideo(data.title);
  };

  return (
    <div>
      <h1>Upload Video</h1>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <label>Title</label>
        <input
          {...register("title", { required: true })}
          type="text"
          placeholder="Title"
        />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default Upload;
