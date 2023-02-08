import "./Home.scss";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import HashLoader from "react-spinners/HashLoader";
import { authContext } from "../../context/auth/authContext";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState("");
  const { user } = useContext(authContext);
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_API_URL +
            `/api/lists${
              type
                ? !genre
                  ? "?type=" + type
                  : "?type=" + type + "&genre=" + genre
                : ""
            }`,
          {
            headers: {
              authorization: `Bearer ${user.accessToken}`,
            },
          }
        );

        // set lists acc to server response

        setLists(res.data.data);
        setIsFetched(true);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <div className="home">
      {isFetched ? (
        <>
          <Navbar />

          <Featured type={type} setGenre={setGenre} />

          {lists.map((list, index) => (
            <List list={list} key={index} />
          ))}
        </>
      ) : (
        <div className="loader">
          <HashLoader color="#36d7b7" size={100} />
        </div>
      )}
    </div>
  );
};

export default Home;
