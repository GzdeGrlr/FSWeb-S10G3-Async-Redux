import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJoke } from "../actions/jokesActions";

const JokeList = () => {
  const dispatch = useDispatch();
  const jokes = useSelector((state) => state.jokes);
  const favorites = useSelector((state) => state.favorites);

  useEffect(() => {
    dispatch(fetchJoke());
  }, []);

  return (
    <div>
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
          <button className="like">Like</button>
          <button className="next" onClick={() => dispatch(fetchJoke())}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default JokeList;
