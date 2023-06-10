import { useState } from "react";
import ContentWrapper from "../../../components/content-wrapper/ContentWrapper";
import useFetch from "../../../hooks/useFetch";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import Carousel from "../../../components/carousel/Carousel";

function CarouselContainer(props) {
  const [endpoint, setEndpoint] = useState(props.endPoint1);
  const { data, loading } = useFetch(`${props.path}${endpoint}`);
  console.log(data);
  const onTabChange = (tab) => {
    setEndpoint(tab === props.tabval1 ? props.endPoint1 : props.endPoint2);
  };

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">{props.name}</span>
        <SwitchTabs
          data={[props.tabval1, props.tabval2]}
          onChange={onTabChange}
        />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
    </div>
  );
}

export default CarouselContainer;
