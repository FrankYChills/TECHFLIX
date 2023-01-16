import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";

import "./ListItem.scss";

const ListItem = () => {
  return (
    <div className="listItem">
      <img src="images/list-image.jpg" alt="" />
      <div className="item-info">
        <div className="icons">
          <PlayCircleFilledWhiteOutlinedIcon />
          <AddCircleOutlineOutlinedIcon />
          <ThumbUpOutlinedIcon />
          <ThumbDownOutlinedIcon />
        </div>
        <div className="itemInfoTop">
          <span>1 hour 20 minutes</span>
          <span className="limit">+16</span>
          <div className="desc">
            The film tells the story of Cassie (Carson, 29) and Marine Luke
            (Galitzine, 27), who enter a "marriage of convenience" — with
            unexpected results. Cassie, who is living with type I diabetes,
            marries Luke, a Marine, as a way to get access to Luke's health
            benefits.
          </div>
          <div className="genre">Romance</div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
