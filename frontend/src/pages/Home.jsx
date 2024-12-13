import Hero from "../components/Hero";
import NewCollections from "../components/NewCollections";
import Offer from "../components/Offer";
import Featured from "../components/Featured";

const Home = () => {
  return (
    <>
      <Hero />
      <Featured />
      <Offer />
      <NewCollections />
    </>
  );
};

export default Home;
