import React from "react";
import "./DetailsStyle.scss";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import DetailsBanner from "./details-banner/DetailsBanner";
import Cast from "./cast/Cast";
import VideosSection from "../../components/videos-section/VideosSection";
import Carousel from "../../components/carousel/Carousel";

// import { carouselData } from "./DetailsData";

function Details() {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}`);
  console.log(data);
  const { data: videos, loading: videosloading } = useFetch(
    `/${mediaType}/${id}/videos`
  );
  const { data: credits, loading: creditsloading } = useFetch(
    `/${mediaType}/${id}/credits`
  );
  const { data: similar, loading: similarloading } = useFetch(
    `/${mediaType}/${id}/similar`
  );
  const { data: recommendations, loading: recommendationsloading } = useFetch(
    `/${mediaType}/${id}/recommendations`
  );

  const similartitle =
    mediaType === "movie" ? "Similar Movies" : "Similar Tv Shows";

  const recommendationstitle =
    mediaType === "movie" ? "Recommended Movies" : "Recommended Tv Shows";

  return (
    <div>
      <DetailsBanner video={videos?.results?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsloading} title={"Top Cast"} />
      <Cast
        data={credits?.crew}
        loading={creditsloading}
        title={"Crew Members"}
      />
      <VideosSection data={videos?.results} />

      <Carousel
        data={similar?.results}
        loading={similarloading}
        title={similartitle}
      />

      <Carousel
        data={recommendations?.results}
        loading={recommendationsloading}
        title={recommendationstitle}
      />
    </div>
  );
}

export default Details;
