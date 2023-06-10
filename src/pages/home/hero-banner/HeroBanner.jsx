import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/content-wrapper/ContentWrapper";
import "./HeroBanner.scss";

function HeroBanner() {
  // need state for setting background image
  const [background, setBackground] = useState("");
  // another state for input
  const [query, setQuery] = useState("");
  // get the url from the redux store
  const { url } = useSelector((state) => state.Home);
  // calling api from useFetch component
  const { data, loading } = useFetch("/movie/upcoming");
  // random selection for background
  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);
  // function for input search query
  // when we search it should reflect on browser navigation url search
  const navigate = useNavigate();
  const searchQuery = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search?query=${query}`);
    }
  };
  return (
    <>
      <div className="heroBanner">
        {!loading && (
          <div className="backdrop-img">
            <Img src={background} />
          </div>
        )}

        <div className="opacity-layer"></div>

        <ContentWrapper>
          <div className="heroBannerContent">
            <span className="title">Welcome</span>
            <span className="subTitle">
              Millions of movies, TV shows and people to discover. Explore now.
            </span>
            <div className="searchInput">
              <input
                type="text"
                placeholder="Search for a movie or TV show..."
                onKeyUp={searchQuery}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button>Search</button>
            </div>
          </div>
        </ContentWrapper>
      </div>
    </>
  );
}

export default HeroBanner;
