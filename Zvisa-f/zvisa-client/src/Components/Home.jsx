import Banner from "./Banner";
import ExtraSectionOne from "./ExtraSectionOne";
import ExtraSectionTwo from "./ExtraSectionTwo";
import LatestVisasSection from "./LatestVisasSection";

const Home = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Banner></Banner>
      <LatestVisasSection></LatestVisasSection>
      <ExtraSectionOne></ExtraSectionOne>
      <ExtraSectionTwo></ExtraSectionTwo>
    </div>
  );
};

export default Home;
