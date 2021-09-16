import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Preview from "../components/Preview";
import { IVideo } from "../type";

interface ILocation {
  keyword: string;
  videos: IVideo[];
}

const Search: React.FC = () => {
  const location = useLocation<ILocation>();
  const [keyword, setKeyword] = useState("");
  const [videos, setVideos] = useState<IVideo[]>([]);

  useEffect(() => {
    if (location.state) {
      const { keyword: lkeyword, videos: lvideo } = location.state;
      setKeyword(lkeyword);
      setVideos(lvideo);
    }
  }, [location]);

  return (
    <div>
      {videos.length > 0 ? (
        videos.map((video) => <Preview key={video._id} {...video} />)
      ) : (
        <div>{keyword} is not found</div>
      )}
    </div>
  );
};

export default Search;
