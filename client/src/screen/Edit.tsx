import React, { useEffect } from "react";
import { useLocation } from "react-router";

const Edit: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <div>
      <h1>Edit Video</h1>
    </div>
  );
};

export default Edit;
