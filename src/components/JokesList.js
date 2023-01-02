import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJoke, addFavorite } from "../actions/jokesActions";

const JokeList = () => {
  const dispatch = useDispatch();
  const jokes = useSelector((state) => state.jokes);
  const favorites = useSelector((state) => state.favorites);

  useEffect(() => {
    dispatch(fetchJoke());
  }, []);

  return (
    <div>
      <p className="paragraph">
        <i>A good laugh heals a lot of hurts.</i>
        <p>— Madeleine L’Engle</p>
      </p>
      {jokes && (
        <div className="jokes">
          <div className="photo-button">
            <img
              className="dog-photo"
              src="https://media.tenor.com/s2yrU5qoQTIAAAAd/grinning-dog.gifs"
            ></img>
          </div>

          <p className="question" key={jokes.id}>
            {jokes.setup}
          </p>

          <p>{jokes.punchline}</p>
          <button className="like" onClick={() => dispatch(addFavorite(jokes))}>
            Like
          </button>
          <button className="next" onClick={() => dispatch(fetchJoke())}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default JokeList;
