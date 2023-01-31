import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import { useRef, useState } from "react";

import ListItem from "../listitem/ListItem";
import "./List.scss";

const List = ({ list }) => {
  const [isMoved, setIsMoved] = useState(false);
  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x;
    // console.log(distance);
    if (direction === "left") {
      if (distance > 200) {
        return;
      }
      listRef.current.style.transform = `translateX(${distance + 235}px)`;
    }
    if (direction === "right") {
      if (distance < -1700) {
        return;
      }
      listRef.current.style.transform = `translateX(${distance - 235 - 250}px)`;
      // console.log(distance);
    }
  };
  return (
    <div className="list">
      <span className="listTitle">{list.title}</span>
      <div className="wrapper">
        <ArrowCircleLeftOutlinedIcon
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className="container" ref={listRef}>
          {list.content.map((itemId, index) => (
            <ListItem key={index} itemId={itemId} />
          ))}
        </div>
        <ArrowCircleRightOutlinedIcon
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default List;
