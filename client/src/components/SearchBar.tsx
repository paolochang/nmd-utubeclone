import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";

interface ISearch {
  keyword: string;
}

const SearchBar: React.FC = () => {
  const history = useHistory();
  const { register, handleSubmit } = useForm<ISearch>();

  const getKeyword = async (keyword: string) => {
    try {
      const res = await axios.get(`/search`, { params: { keyword } });
      if (res.data.success) {
        history.push(`/search?keyword=${keyword}`, {
          keyword,
          videos: res.data.videos,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const keywordHandler = (data: ISearch) => {
    getKeyword(data.keyword);
  };

  return (
    <form onSubmit={handleSubmit(keywordHandler)}>
      <input
        {...register("keyword", { required: true })}
        type="text"
        placeholder="Search"
      />
    </form>
  );
};

export default SearchBar;
