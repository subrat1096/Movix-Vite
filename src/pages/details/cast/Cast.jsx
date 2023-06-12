import React from "react";
import { useSelector } from "react-redux";
import avatar from "../../../assets/avatar.png";
import ContentWrapper from "../../../components/content-wrapper/ContentWrapper";
import Img from "../../../components/lazyLoadImage/Img";
import "./Cast.scss";

const Cast = ({ data, loading, title }) => {
  const { url } = useSelector((state) => state.Home);

  const skeleton = () => {
    return (
      <div className="skItem">
        <div className="circle skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };
  return (
    <div className="castSection">
      <ContentWrapper>
        <div className="sectionHeading">{title}</div>
        {!loading ? (
          <div className="listItems">
            {data?.map((item) => {
              return (
                <div className="listItem" key={item.id}>
                  <div className="profileImg">
                    <Img src={url.profile + item.profile_path} />
                  </div>
                  <div className="name">{item.name}</div>
                  <div className="character">{item.charcter}</div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="castSkeleton">
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
          </div>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Cast;
