import "./Home.scss";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState("");

  useEffect(() => {
    const getRandomLists = async () => {
      console.log("sending request");
      try {
        const res = await axios.get(
          `http://localhost:3500` +
            `/api/lists${
              type
                ? !genre
                  ? "?type=" + type
                  : "?type=" + type + "&genre=" + genre
                : ""
            }`,
          {
            headers: {
              authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2E0MTBlYTViYjBlMTY2MjY3NTZjNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDk3MzM1MSwiZXhwIjoxNjc1NTc4MTUxfQ.WKlOb6hkiIQMY3tEvzh6WY-sT4Z4PsC8jarKABUFuRU",
            },
          }
        );

        // set lists acc to server response
        console.log(res);
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
