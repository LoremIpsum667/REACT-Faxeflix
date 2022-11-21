import React from "react";
import "../assets/css/AppStyle.css";

function Card({
  title,
  poster,
  date,
  overview,
  blur,
  setBlur,
  hover,
  setHover,
  index,
}) {
  const BASE_IMG_URL = "https://image.tmdb.org/t/p/original";

  return (
    <div>
      <div className="hero-section">
        <div
          className={blur && index !== blur && "blurEffect"}
          onMouseOver={() => setBlur(index)}
          onMouseOut={() => setBlur(undefined)}
        >
          <a className="card" href="#">
            <img
              src={BASE_IMG_URL + poster}
              alt={"movie " + title}
              className="card__background"
            />
            {/* <div
              className={hover && index !== hover && "hoverEffect"}
              onMouseOver={() => setHover(index)}
              onMouseOut={() => setHover(undefined)}
            > */}
              <div className="card__content">
                <p className="card__category">{date}</p>
                <h3 className="card__heading">{title}</h3>
                <p className="card__overview">{overview}..</p>
              </div>
            {/* </div> */}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
