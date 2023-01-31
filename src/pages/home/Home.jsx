import "./Home.scss";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { authContext } from "../../context/auth/authContext";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState("");
  const { user } = useContext(authContext);

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
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} setGenre={setGenre} />
      {lists.map((list, index) => (
        <List list={list} key={index} />
      ))}
    </div>
  );
};

export default Home;
