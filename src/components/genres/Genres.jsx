import React from "react";
import { useSelector } from "react-redux";
import "./Genres.scss";

function Genres({ data }) {
  const { genres } = useSelector((state) => state.Home);
  return (
    <div className="genres">
      {data?.map((g, index) => {
        // console.log(data);
        if (!genres[g]?.name) return;
        return (
          <div key={index} className="genre">
            {genres[g]?.name}
          </div>
        );
      })}
    </div>
  );
}

export default Genres;
