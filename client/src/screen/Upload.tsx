import axios from "axios";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useHistory } from "react-router";

interface IUpload {
  title: string;
  description: string;
  hashtags: string;
}

const Upload: React.FC = () => {
  const history = useHistory();
  const { register, handleSubmit } = useForm<IUpload>();
  const [error, setError] = useState("");

  const postVideo = async (video: IUpload) => {
    const res = await axios.post(`/upload`, video);
    if (res.data.success) {
      setError("");
      history.push("/");
    } else {
      setError(res.data.errorMessage);
    }
  };

  const onSubmitHandler: SubmitHandler<IUpload> = (video) => {
    postVideo(video);
  };

  return (
    <div>
      <h1>Upload Video</h1>
      {error && <span style={{ color: "red" }}>{error}</span>}
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <label>Title</label>
        <input
          {...register("title", { required: true, maxLength: 80 })}
          type="text"
          placeholder="Title"
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
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default Upload;
