import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import { useState } from "react";

import "./ListItem.scss";

const ListItem = () => {
  const trailer = "videos/thumbnail.mp4";

  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="listItem"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src="images/list-image.jpg" alt="" />
      {isHovered ? (
        <video src={trailer} autoPlay={true} muted={true} loop />
      ) : (
        ""
      )}

      <div className="item-info">
        <div className="icons">
          <PlayCircleFilledWhiteOutlinedIcon className="icon" />
          <AddCircleOutlineOutlinedIcon className="icon" />
          <ThumbUpOutlinedIcon className="icon" />
          <ThumbDownOutlinedIcon className="icon" />
        </div>
        <div className="itemInfoTop">
          <span>1 hour 20 minutes</span>
          <span className="limit">+16</span>
          <span>1999</span>
        </div>
        <div className="desc">
          The film tells the story of Cassie and Marine Luke.Cassie, who is
          living with type I diabetes, marries Luke, a Marine, as a way to get
          access to Luke's health benefits.
        </div>
        <div className="genre">Romance</div>
      </div>
    </div>
  );
};

export default ListItem;
