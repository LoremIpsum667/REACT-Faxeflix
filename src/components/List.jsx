import React from "react";
import { useEffect, useState } from "react";

import Axios from "axios";

import Card from "./Card";

import "../assets/css/AppStyle.css";

const List = () => {

  const [list, setList] = useState([]);

  const [blur, setBlur] = useState();

  const [hover, setHover] = useState();

  const URL =
    "https://api.themoviedb.org/4/list/7?page=1&api_key=00fea5657aa3cb22f4915ca3e8c7b486";

  const getMovies = () => {
    Axios.get(URL)
      .then((response) => setList(response.data.results))
      .catch((error) => console.log("err =>", error));
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <div className="H1Container">
        <h1>I'm a list</h1>
      </div>
      <div className="ListContainer">
        {list.length > 0 ? (
          <>
            {list.map((element, index) => (
              <Card
                key={index}
                id={element.id}
                title={element.title}
                rating={element.vote_average}
                poster={element.poster_path}
                date={element.release_date}
                overview={element.overview}
                blur={blur}
                setBlur={setBlur}
                hover={hover}
                setHover={setHover}
                index={index}
              />
            ))}
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default List;
