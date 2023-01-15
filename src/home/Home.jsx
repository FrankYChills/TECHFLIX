import "./Home.scss";
import Navbar from "../components/navbar/Navbar";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <img src="images/netflix-bg.jpg" className="bgimage" />
    </div>
  );
};

export default Home;
