import React, { useEffect, useState } from "react";
import { fetchDataFromApi } from "../../utils/api";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import ContentWrapper from "../../components/content-wrapper/ContentWrapper";
import noResults from "../../assets/no-results.png";
import MovieCard from "../../components/mvoie-card/MovieCard";
import Spinner from "../../components/spinner/Spinner";
import "./SearchResultStyle.scss";

function SearchResult() {
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const { query } = useParams();

  const fetchInitialData = () => {
    setLoading(true);
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
      (response) => {
        console.log(response);
        setData(response);
        setPageNum((prev) => prev + 1);
        setLoading(false);
      }
    );
  };

  const fetchNextPageData = () => {
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
      (response) => {
        if (data?.results) {
          setData({
            ...data,
            results: [...data.results, ...response.results],
          });
        } else {
          setData(response);
        }
        setPageNum((prev) => prev + 1);
      }
    );
  };

  useEffect(() => {
    fetchInitialData();
  }, [query]);

  return (
    <div className="searchResultsPage">
      {loading && <Spinner initial={true} />}
      {!loading && (
        <ContentWrapper>
          {data?.results?.length > 0 ? (
            <>
              <div className="pageTitle">
                {`Search ${
                  data.total_results > 1 ? "Results" : "Result"
                } of ${query}`}
              </div>
              <InfiniteScroll
                className="content"
                dataLength={data?.results?.length || []} //This is important field to render the next data
                next={fetchNextPageData}
                hasMore={true}
                loader={<Spinner />}
              >
                {data.results.map((item, index) => {
                  if (item.media_type === "person") return;
                  return (
                    <MovieCard key={index} data={item} fromSearch={true} />
                  );
                })}
              </InfiniteScroll>
            </>
          ) : (
            <span className="resultNotFound">Sorry, Results Not Found</span>
          )}
        </ContentWrapper>
      )}
    </div>
  );
}

export default SearchResult;
