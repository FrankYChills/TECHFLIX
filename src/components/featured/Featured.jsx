import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import "./Featured.scss";

const Featured = ({ type }) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="drama">Drama</option>
            <option value="crime">Crime</option>
            <option value="historical">Historical</option>
            <option value="scifi">Sci-Fi</option>
            <option value="thriller">Thriller</option>
            <option value="romance">Romance</option>
            <option value="documentry">Documentry</option>
            <option value="horror">Horror</option>
          </select>
        </div>
      )}
      <img src="images/featured2.jpg" className="fimage" />
      <div className="info">
        <img src="images/heading.png" />
        <span className="desc">
          Tommy Shelby, a dangerous man, leads the Peaky Blinders, a gang based
          in Birmingham. Soon, Chester Campbell, an inspector, decides to nab
          him and put an end to the criminal activities.
        </span>
        <div className="buttons">
          <button className="play">
            <PlayCircleFilledWhiteOutlinedIcon />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlinedIcon />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
